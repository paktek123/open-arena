const express = require('express')
const router = express.Router()
const models = require('../models')
import { Register } from '../classes/register.class'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

router.post('/login', function (req, res) {
  models.User.findOne({ where: { username: req.body.username } }).then(user => {
    if (user) {
      return bcrypt.compare(req.body.password, user.password).then((response) => {
        if (response) {
          let token = jwt.sign({ data: user }, 'replaceThisWithAnEnvSettingCalledSuperSecret', { expiresIn: '12h' })
          return res.status(200).json({
            token: token
          })
        } else {
          return res.status(400).json({
            error: 'Incorrect Password!'
          })
        }
      })
    } else {
      return res.status(400).json({
        error: 'Username doesn\'t exist!'
      })
    }
  })
})

router.post('/register', function (req, res) {
  const register = new Register()

  register.create(req.body.username, req.body.password, req.body.email).then((success) => {
    res.status(200).json({
      success
    })
  }).catch((error) => {
    res.status(400).json({
      error
    })
  })
})

module.exports = router
