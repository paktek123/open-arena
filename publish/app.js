const express = require('express')
const app = express()
const api = require('./api')
const models = require('./models')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use('/api', api)
app.use(express.static('static'))
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
})

models.sequelize.sync().then(function () {
  // Example of how to user the models
  models.User.findById(1).then(user => {
    console.log('User is ' + user.username)
  })

  app.listen(3000, function () {
    console.log('Listening on port 3000!')
  })
})
