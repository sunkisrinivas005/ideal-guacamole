"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["type", "name", "id", "fullWidth", "size", "value", "onChange", "helperText", "variant", "error"];

var AppTextInput = function AppTextInput(_ref) {
  var type = _ref.type,
      name = _ref.name,
      id = _ref.id,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      value = _ref.value,
      onChange = _ref.onChange,
      helperText = _ref.helperText,
      variant = _ref.variant,
      error = _ref.error,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_core.TextField, (0, _extends2.default)({}, rest, {
    type: type,
    name: name,
    id: id || name,
    size: size,
    fullWidth: fullWidth,
    value: value,
    variant: variant,
    onChange: onChange,
    error: error || helperText !== '',
    helperText: helperText
  }));
};

AppTextInput.prototype = {
  type: _propTypes.default.string,
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  value: _propTypes.default.string,
  variant: _propTypes.default.string,
  size: _propTypes.default.string,
  onChange: _propTypes.default.func,
  error: _propTypes.default.bool,
  helperText: _propTypes.default.bool
};
AppTextInput.defaultProps = {
  type: 'text',
  fullWidth: true,
  size: 'small',
  error: false,
  helperText: ''
};
var _default = AppTextInput;
exports.default = _default;