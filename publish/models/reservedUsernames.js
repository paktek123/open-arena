'use strict'
module.exports = function (sequelize, DataTypes) {
  let reservedUsernames = sequelize.define('reserved_usernames', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return reservedUsernames
}
