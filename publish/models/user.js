'use strict'
module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true }
    },
    password: DataTypes.STRING,
    verified: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    email_token: DataTypes.STRING,
    level: { type: DataTypes.INTEGER, defaultValue: 1, allowNull: false },
    experience: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    admin: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    last_login: DataTypes.DATE
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return User
}
