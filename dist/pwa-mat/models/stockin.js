'use strict';

module.exports = function (sequelize, DataTypes) {
  var StockIn = sequelize.define('StockIn', {
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate: function afterCreate(_ref, options) {
        var dataValues = _ref.dataValues;

        return sequelize.models.Stock.findOrCreate({
          where: {
            productId: dataValues.productId,
            price: dataValues.price
          },
          defaults: dataValues
        }).spread(function (stockin, created) {
          if (!created) {
            return sequelize.models.Stock.update({ quantity: parseInt(stockin.get('quantity')) + parseInt(dataValues.quantity) }, {
              where: {
                id: stockin.get('id')
              }
            });
          }
        }, {
          transaction: options.transaction
        });
      },
      afterUpdate: function afterUpdate(_ref2, options) {
        var dataValues = _ref2.dataValues,
            _previousDataValues = _ref2._previousDataValues,
            _changed = _ref2._changed;

        var changedQuantity = parseInt(dataValues.quantity) - parseInt(_previousDataValues.quantity);
        if (_changed.quantity) {
          return sequelize.models.Stock.findOne({
            where: {
              productId: _previousDataValues.productId,
              price: _previousDataValues.price
            }
          }, {
            transaction: options.transaction
          }).then(function (stockin) {
            return sequelize.models.Stock.update({ quantity: parseInt(stockin.get('quantity')) + changedQuantity }, {
              where: {
                id: stockin.get('id')
              }
            });
          });
        }
      },
      afterDestroy: function afterDestroy(_ref3, options) {
        var dataValues = _ref3.dataValues;

        return sequelize.models.Stock.findOne({
          where: {
            productId: dataValues.productId,
            price: dataValues.price
          }
        }, {
          transaction: options.transaction
        }).then(function (stockin) {
          console.log(stockin);
          return sequelize.models.Stock.decrement('quantity', {
            where: {
              id: stockin.get('id')
            },
            by: parseInt(dataValues.quantity)
          });
        });
      }
    }
  });
  StockIn.associate = function (models) {
    // associations can be defined here
    StockIn.belongsTo(models.Product, {
      foreignKey: 'productId'
    });
    StockIn.belongsTo(models.Supplier, {
      foreignKey: 'supplierId'
    });
  };
  return StockIn;
};