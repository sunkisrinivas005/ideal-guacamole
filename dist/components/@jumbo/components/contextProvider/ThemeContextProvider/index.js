"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

var defaultValue = {};

var ThemeContextProvider = function ThemeContextProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.default.Provider, {
    value: defaultValue
  }, children);
};

var _default = ThemeContextProvider;
exports.default = _default;