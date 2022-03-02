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

var _excluded = ["name", "id", "value", "label", "labelPlacement", "checked", "onChange", "color", "required", "error", "helperText", "icon", "checkedIcon"];

var AppCheckbox = function AppCheckbox(_ref) {
  var name = _ref.name,
      id = _ref.id,
      value = _ref.value,
      label = _ref.label,
      labelPlacement = _ref.labelPlacement,
      checked = _ref.checked,
      onChange = _ref.onChange,
      color = _ref.color,
      required = _ref.required,
      error = _ref.error,
      helperText = _ref.helperText,
      icon = _ref.icon,
      checkedIcon = _ref.checkedIcon,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_core.FormControl, (0, _extends2.default)({
    required: required,
    error: error,
    component: "fieldset"
  }, rest), /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
    value: value,
    control: /*#__PURE__*/_react.default.createElement(_core.Checkbox, {
      checked: checked,
      name: name,
      id: id || name,
      onChange: onChange,
      color: color,
      icon: icon,
      checkedIcon: checkedIcon
    }),
    label: label,
    labelPlacement: labelPlacement
  }), helperText && /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
    error: error || helperText !== ''
  }, helperText));
};

AppCheckbox.prototype = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  checked: _propTypes.default.bool,
  value: _propTypes.default.string,
  label: _propTypes.default.string,
  color: _propTypes.default.string,
  labelPlacement: _propTypes.default.string,
  onChange: _propTypes.default.func,
  error: _propTypes.default.bool,
  helperText: _propTypes.default.bool,
  icon: _propTypes.default.element,
  checkedIcon: _propTypes.default.element
};
AppCheckbox.defaultProps = {
  checked: false,
  color: 'primary',
  labelPlacement: 'end',
  error: false,
  helperText: ''
};
var _default = AppCheckbox;
exports.default = _default;