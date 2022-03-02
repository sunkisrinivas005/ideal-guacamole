"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["alt"];

var CmtImage = function CmtImage(_ref) {
  var alt = _ref.alt,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var altValue = alt ? alt : '';
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: altValue
  }, restProps));
};

var _default = CmtImage;
exports.default = _default;