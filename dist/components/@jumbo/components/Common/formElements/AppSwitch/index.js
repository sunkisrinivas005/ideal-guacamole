"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _core = require("@material-ui/core");

var _excluded = ["name", "id", "value", "label", "labelPlacement", "labelProps", "helperText", "helperTextProps", "checked", "onChange", "color", "switchProps"];
var useStyles = (0, _makeStyles.default)(function () {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    helperText: {
      marginTop: 0
    }
  };
});

var AppSwitch = function AppSwitch(_ref) {
  var name = _ref.name,
      id = _ref.id,
      value = _ref.value,
      label = _ref.label,
      labelPlacement = _ref.labelPlacement,
      labelProps = _ref.labelProps,
      helperText = _ref.helperText,
      helperTextProps = _ref.helperTextProps,
      checked = _ref.checked,
      onChange = _ref.onChange,
      color = _ref.color,
      switchProps = _ref.switchProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  var unique = Math.random().toString(36).slice(2);
  return /*#__PURE__*/_react.default.createElement(_Box.default, (0, _extends2.default)({
    className: classes.root
  }, rest), /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.container
  }, labelPlacement === 'start' && /*#__PURE__*/_react.default.createElement(_FormLabel.default, (0, _extends2.default)({
    className: "pointer",
    htmlFor: id || name || unique
  }, labelProps), label), /*#__PURE__*/_react.default.createElement(_Switch.default, (0, _extends2.default)({
    name: name,
    id: id || name || unique,
    color: color,
    value: value,
    checked: checked,
    onChange: onChange
  }, switchProps)), labelPlacement !== 'start' && /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    for: "1"
  }, label)), helperText && /*#__PURE__*/_react.default.createElement(_core.FormHelperText, (0, _extends2.default)({
    className: classes.helperText
  }, helperTextProps), helperText));
};

AppSwitch.prototype = {
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  checked: _propTypes.default.bool,
  value: _propTypes.default.string,
  label: _propTypes.default.string,
  color: _propTypes.default.string,
  labelPlacement: _propTypes.default.string,
  onChange: _propTypes.default.func
};
AppSwitch.defaultProps = {
  checked: false,
  color: 'primary',
  labelPlacement: 'start'
};
var _default = AppSwitch;
exports.default = _default;