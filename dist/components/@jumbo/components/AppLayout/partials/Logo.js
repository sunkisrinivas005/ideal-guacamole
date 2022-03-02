"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _core = require("@material-ui/core");

var _reactRouterDom = require("react-router-dom");

var _CmtImage = _interopRequireDefault(require("../../../../@coremat/CmtImage"));

var _excluded = ["color"];

var Logo = function Logo(_ref) {
  var color = _ref.color,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var logoUrl = color === 'white' ? '/images/logo-white.png' : '/images/logo.png';
  var logoSymbolUrl = color === 'white' ? '/images/logo-white-symbol.png' : '/images/logo-symbol.png';
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: "pointer"
  }, props), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    xsDown: true
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: logoUrl,
    alt: "logo"
  }))), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smUp: true
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: logoSymbolUrl,
    alt: "logo"
  }))));
};

var _default = Logo;
exports.default = _default;