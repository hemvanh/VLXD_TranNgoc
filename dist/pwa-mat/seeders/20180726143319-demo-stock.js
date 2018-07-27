'use strict';

var _d = require('lodash');
var Faker = require('faker');

var data = [];
_d.times(10, function () {
  data.push({
    price: Faker.commerce.price(),
    quantity: Faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
});
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('stocks', data, {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stocks', null, {});
  }
};