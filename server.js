'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _connectHistoryApiFallback = require('connect-history-api-fallback');

var _connectHistoryApiFallback2 = _interopRequireDefault(_connectHistoryApiFallback);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_PORT = 8888;
var app = (0, _express2.default)();
app.use((0, _serveStatic2.default)(__dirname));
app.use('/api', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  graphiql: true
}));
app.use((0, _connectHistoryApiFallback2.default)({
  index: '/'
}));

app.listen(process.env.PORT || APP_PORT, function () {
  console.log('VLXD_API listening on port ' + APP_PORT + ' ...');
});