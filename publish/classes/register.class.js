const models = require('../models')
import bcrypt from 'bcrypt'

let env = {
  VerificationEmail: false
}

export class Register {

  constructor () {
    this.saltRounds = 10
    this.success = []
  }

  create (username, password, email) {
    const _this = this
    return new Promise(function () {
      _this.username = username
      _this.password = password
      _this.email = email

      _this.isUsernameTaken()
        .then(() => { return _this.isEmailUsed() })
        .then(() => { return _this.isReservedUsername() })
        .then(() => { return _this.hashPassword() })
        .then((hashedPassword) => { return _this.createUser(hashedPassword) })
        .catch((error) => {
          console.log(error)
          return error
        })
    })
  }

  isUsernameTaken () {
    return models.User.findOne({ where: { username: this.username } }).then((user) => {
      if (user) {
        return Promise.reject('Username Taken.')
      }
    }).catch((error) => {
      return Promise.reject(error)
    })
  }

  isEmailUsed () {
    return models.User.findOne({ where: { email: this.email } }).then((user) => {
      if (user) {
        return Promise.reject('Email Already has an account attached.')
      }
    }).catch((error) => {
      return Promise.reject(error)
    })
  }

  isReservedUsername () {
    return models.reserved_usernames.findOne({ where: { username: this.username } })
  }

  createUser (hashedPassword) {
    return models.User.create({ username: this.username, password: hashedPassword, email: this.email }).then(() => {
      if (env.VerificationEmail) {
        this.sendVerificationEmail()
      } else {
        this.success.push('Account successfully made.')
      }

      return Promise.resolve(this.getSuccess())
    }).catch((error) => {
      return Promise.reject(error)
    })
  }

  hashPassword () {
    return bcrypt.hash(this.password, this.saltRounds)
  }

  getSuccess () {
    return this.success
  }

  sendVerificationEmail () {
    this.success.push('Account successfully made, please click the verification link in the email that has been sent to you.')
  }

  verifyEmail (email, emailToken) {
    models.User.findOne({ where: { email: email } }).then((user) => {
      if (user.email_token === emailToken) {
        models.User.update({ verified: 1 }, { where: { email: user.email } })
        return 'Account activated.'
      }
      return 'Invalid Email token.'
    }).catch(() => {
      return 'Invalid Email token.'
    })
  }
}
