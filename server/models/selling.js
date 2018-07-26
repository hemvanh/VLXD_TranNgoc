'use strict'
module.exports = (sequelize, DataTypes) => {
  var Selling = sequelize.define(
    'Selling',
    {
      unit: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  )
  Selling.associate = function(models) {
    // associations can be defined here
  }
  return Selling
}
