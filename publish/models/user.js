'use strict'
module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return User
}