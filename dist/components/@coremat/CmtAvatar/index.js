"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _JssHelper = require("../CmtHelpers/JssHelper");

var _index = _interopRequireDefault(require("./index.style"));

var _excluded = ["src", "alt", "className", "color", "size", "phCharLength", "children"];
var colorOptions = [].concat((0, _toConsumableArray2.default)(_JssHelper.componentColors), ['random']);

var getRandomColor = function getRandomColor() {
  return colorOptions[Math.floor(Math.random() * 11)];
};

var CmtAvatar = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      phCharLength = _ref.phCharLength,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = (0, _index.default)({
    size: typeof size === 'number' ? size : 0
  });
  var colorClass = color === 'random' ? classes[getRandomColor()] : classes[color];
  var sizeClass = typeof size === 'number' ? classes.customSize : classes[size];
  var classNames = (0, _clsx.default)(classes.root, colorClass, 'Cmt-avatar-size', sizeClass, className && className);
  var placeHolderChar = alt && phCharLength > 0 ? alt.substr(0, phCharLength).toUpperCase() : null;
  return /*#__PURE__*/_react.default.createElement(_core.Avatar, (0, _extends2.default)({
    ref: ref,
    className: classNames,
    src: src,
    alt: alt
  }, rest), !src && !children && alt ? placeHolderChar : children);
});

CmtAvatar.propTypes = {
  color: _propTypes.default.oneOf(colorOptions),
  phCharLength: _propTypes.default.number,
  size: _propTypes.default.oneOfType([_propTypes.default.oneOf(['small', 'medium', 'large']), _propTypes.default.number])
};
CmtAvatar.defaultProps = {
  color: 'grey',
  phCharLength: 1,
  size: 'medium'
};
var _default = CmtAvatar;
exports.default = _default;