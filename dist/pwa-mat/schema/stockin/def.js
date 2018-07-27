"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var StockIn = "\n  type StockIn {\n    id: Int\n    productId: Int\n    supplierId: Int\n    price: Int\n    quantity: Int\n    productName:String\n    supplierName:String\n  }\n  input StockinInput {\n    id: Int\n    productId: Int\n    supplierId: Int\n    price: Int\n    quantity: Int\n    productName:String\n    supplierName:String\n  }\n";
exports.default = StockIn;