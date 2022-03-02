"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaultContext = _interopRequireDefault(require("./defaultContext"));

var AppContext = /*#__PURE__*/_react.default.createContext({
  locale: _defaultContext.default.defaultLng,
  setLocale: function setLocale() {}
});

var _default = AppContext;
exports.default = _default;