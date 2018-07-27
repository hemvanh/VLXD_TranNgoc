'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _util = require('../../util');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  RootQuery: {
    listStock: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, __, _ref) {
        var authUser = _ref.authUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context.next = 3;
                return _models.Stock.findAll({
                  include: [{
                    model: _models.Product,
                    required: true
                  }]
                }).then(function (stock) {
                  return stock.map(function (listStock) {
                    var productName = listStock.get('Product').get('name');
                    return Object.assign(listStock.get(), {
                      productName: productName
                    });
                  });
                });

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listStock(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return listStock;
    }()
  },
  RootMutation: {}
};

exports.default = resolvers;