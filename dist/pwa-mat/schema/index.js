'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _def = require('./user/def');

var _def2 = _interopRequireDefault(_def);

var _res = require('./user/res');

var _res2 = _interopRequireDefault(_res);

var _def3 = require('./product/def');

var _def4 = _interopRequireDefault(_def3);

var _res3 = require('./product/res');

var _res4 = _interopRequireDefault(_res3);

var _def5 = require('./supplier/def');

var _def6 = _interopRequireDefault(_def5);

var _res5 = require('./supplier/res');

var _res6 = _interopRequireDefault(_res5);

var _def7 = require('./selling/def');

var _def8 = _interopRequireDefault(_def7);

var _res7 = require('./selling/res');

var _res8 = _interopRequireDefault(_res7);

var _def9 = require('./stockin/def');

var _def10 = _interopRequireDefault(_def9);

var _res9 = require('./stockin/res');

var _res10 = _interopRequireDefault(_res9);

var _def11 = require('./stock/def');

var _def12 = _interopRequireDefault(_def11);

var _res11 = require('./stock/res');

var _res12 = _interopRequireDefault(_res11);

var _def13 = require('./client/def');

var _def14 = _interopRequireDefault(_def13);

var _res13 = require('./client/res');

var _res14 = _interopRequireDefault(_res13);

var _def15 = require('./stockout/def');

var _def16 = _interopRequireDefault(_def15);

var _res15 = require('./stockout/res');

var _res16 = _interopRequireDefault(_res15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchemaDefinition = '\n  schema {\n    query: RootQuery,\n    mutation: RootMutation\n  }\n';

var RootQuery = '\n  type RootQuery {\n    listUser: [User]\n    listProduct: [Product]\n    listSupplier: [Supplier]\n    listSelling: [Selling]\n    listStockIn:[StockIn]\n    listStock:[Stock]\n    listClient: [Client]\n    listStockOut: [StockOut]\n  }\n';

var RootMutation = '\n  type RootMutation {\n    login(input:LoginInput): String\n    deleteUser(input:[Int]): Int\n    createUser(input:UserInput): User\n    updateUser(input:UserInput): User\n\n    deleteProduct(input:[Int]): Int\n    updateProduct(input:ProductInput): Product\n\n    deleteSupplier(input:[Int]): Int\n    updateSupplier(input:SupplierInput): Supplier\n\n    deleteSelling(input:[Int]): Int\n    updateSelling(input:SellingInput): Selling\n    deleteStockIn(input:[Int]): Int\n    updateStockIn(input:StockinInput): StockIn\n\n    deleteClient(input:[Int]): Int\n    updateClient(input:ClientInput): Client\n\n    deleteStockOut(input:[Int]): Int\n  }\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, _def2.default, _def4.default, _def6.default, _def10.default, _def12.default, _def14.default, _def8.default, _def16.default],
  resolvers: [_res2.default, _res4.default, _res6.default, _res10.default, _res12.default, _res14.default, _res8.default, _res16.default]
});