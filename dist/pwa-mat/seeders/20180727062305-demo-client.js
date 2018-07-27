'use strict';

var _d = require('lodash');
var Faker = require('faker');

var data = [];
_d.times(10, function () {
  data.push({
    taxCode: Faker.random.number(),
    name: Faker.commerce.productName(),
    address: Faker.commerce.productMaterial(),
    phone: Faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
});
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clients', data, {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('clients', null, {});
  }
};