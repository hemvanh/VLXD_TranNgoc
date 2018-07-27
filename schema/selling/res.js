'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _util = require('../../util');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  RootQuery: {
    listSelling: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, __, _ref) {
        var authUser = _ref.authUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context.next = 3;
                return _models.Selling.all();

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listSelling(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return listSelling;
    }()
  },
  RootMutation: {
    deleteSelling: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref3, _ref4) {
        var input = _ref3.input;
        var authUser = _ref4.authUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context2.next = 3;
                return _models.Selling.destroy({
                  where: {
                    id: {
                      $in: input
                    }
                  }
                });

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteSelling(_x4, _x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return deleteSelling;
    }(),
    updateSelling: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref6, _ref7) {
        var input = _ref6.input;
        var authUser = _ref7.authUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context3.next = 3;
                return _models.Selling.upsert(input).then(function () {
                  return input;
                });

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateSelling(_x7, _x8, _x9) {
        return _ref8.apply(this, arguments);
      }

      return updateSelling;
    }()
  },
  Selling: {
    // async product(selling, _, {authUser}) {
    //   _auth(authUser)
    //   return await Product.findById(selling.productId)
    // },
    productName: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(selling, _, _ref9) {
        var authUser = _ref9.authUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context4.next = 3;
                return selling.getProduct().get('name');

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function productName(_x10, _x11, _x12) {
        return _ref10.apply(this, arguments);
      }

      return productName;
    }()
  }
};

exports.default = resolvers;