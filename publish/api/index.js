const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', function (req, res) {
  res.json({
    data: {
      fake: 'foo',
      mock: 'bar'
    }
  })
})

router.post('/login', function (req, res) {
  console.log(req.body)

  models.User.findOne({ where: { username: req.body.username } }).then(user => {
    if (user) {
      res.status(200).json({
        user: user
      })
    } else {
      res.status(400).json({
        error: 'Unable to login'
      })
    }
  })
})

module.exports = router
