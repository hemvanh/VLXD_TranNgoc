"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var StockOut = "\n  type StockOut {\n    id: Int\n    productId: Int\n    productName: String\n    quantity: Float\n  }\n  input StockOutInput {\n    id: Int\n    productId: Int\n    quantity: Float\n  }\n";
exports.default = StockOut;