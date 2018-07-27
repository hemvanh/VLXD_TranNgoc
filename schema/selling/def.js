"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Selling = "\n  type Selling {\n    id: Int\n    price: Int\n    quantity: Int\n    unit: String\n    productName: String\n  }\n  input SellingInput {\n    id: Int\n    invoiceId: Int!\n    productId: Int!\n    price: Int!\n    quantity: Int!\n    unit: String\n  }\n";
exports.default = Selling;