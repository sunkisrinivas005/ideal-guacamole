"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pickers = require("@material-ui/pickers");

var _excluded = ["name", "id", "fullWidth", "size", "value", "onChange", "helperText", "variant", "format", "inputVariant", "error"];

var AppDatePicker = function AppDatePicker(_ref) {
  var name = _ref.name,
      id = _ref.id,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      value = _ref.value,
      onChange = _ref.onChange,
      helperText = _ref.helperText,
      variant = _ref.variant,
      format = _ref.format,
      inputVariant = _ref.inputVariant,
      error = _ref.error,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_pickers.KeyboardDatePicker, (0, _extends2.default)({
    variant: variant,
    inputVariant: inputVariant,
    format: format,
    name: name,
    id: id || name,
    fullWidth: fullWidth,
    size: size,
    value: value,
    onChange: onChange,
    helperText: helperText,
    error: error || helperText !== '',
    KeyboardButtonProps: {
      'aria-label': 'change date'
    }
  }, rest, {
    className: "form-control"
  }));
};

AppDatePicker.prototype = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  value: _propTypes.default.string,
  variant: _propTypes.default.string,
  format: _propTypes.default.string,
  inputVariant: _propTypes.default.string,
  size: _propTypes.default.string,
  onChange: _propTypes.default.func,
  error: _propTypes.default.bool,
  helperText: _propTypes.default.bool
};
AppDatePicker.defaultProps = {
  fullWidth: true,
  variant: 'dialog',
  inputVariant: 'standard',
  format: 'YYYY-MM-DD',
  size: 'small',
  error: false,
  helperText: ''
};
var _default = AppDatePicker;
exports.default = _default;