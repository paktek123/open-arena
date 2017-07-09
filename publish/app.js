const express = require('express')
const app = express()
const api = require('./api')
const models = require('./models')

app.use('/api', api)
app.use(express.static('static'))

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

models.sequelize.sync().then(function () {
  app.listen(3000, function () {
    console.log('Listening on port 3000!')
  })
})
