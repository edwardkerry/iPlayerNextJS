'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/edwardk/personal/iPlayer-next/components/ProgrammeLink.js';

exports.default = function (props) {
  return _react2.default.createElement('li', { className: 'letterButton', 'data-jsx': 1184208755,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { as: '/' + props.letter.toLowerCase() + '/1', href: '/programme?letter=' + props.letter + '&page=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 1184208755,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.letter)), _react2.default.createElement(_style2.default, {
    styleId: 1184208755,
    css: '.letterButton[data-jsx="1184208755"]{margin:0 auto;padding:10px;text-decoration:none;color:white;display:inline-block}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZ3JhbW1lTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IsQUFJeUIsY0FDRCxhQUNRLHFCQUNULFlBRWYscUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9ncmFtbWVMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZHdhcmRrL3BlcnNvbmFsL2lQbGF5ZXItbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImxldHRlckJ1dHRvblwiPlxuICAgICAgPExpbmsgYXM9eycvJyArIHByb3BzLmxldHRlci50b0xvd2VyQ2FzZSgpICsgJy8xJ30gaHJlZj17YC9wcm9ncmFtbWU/bGV0dGVyPSR7cHJvcHMubGV0dGVyfSZwYWdlPTFgfSA+XG4gICAgICAgIDxhPntwcm9wcy5sZXR0ZXJ9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5sZXR0ZXJCdXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbilcbiJdfQ== */\n/*@ sourceURL=components/ProgrammeLink.js */'
  }));
};