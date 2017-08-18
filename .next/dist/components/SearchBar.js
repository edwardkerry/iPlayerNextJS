'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProgrammeLink = require('./ProgrammeLink');

var _ProgrammeLink2 = _interopRequireDefault(_ProgrammeLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edwardk/personal/iPlayer-next/components/SearchBar.js';


var alphabet = ['a', 'b'];

exports.default = function (props) {
  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, alphabet.map(function (letter) {
    return _react2.default.createElement(_ProgrammeLink2.default, { key: letter, letter: letter, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  }));
};