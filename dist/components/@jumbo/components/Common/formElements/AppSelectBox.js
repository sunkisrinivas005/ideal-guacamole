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

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["data", "renderRow", "placeholder", "name", "id", "fullWidth", "displayEmpty", "size", "value", "required", "onChange", "helperText", "variant", "error", "valueKey", "labelKey", "backgroundColor", "label"];
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    formControlRoot: {
      '& .MuiOutlinedInput-input': {
        paddingTop: 10.5,
        paddingBottom: 10.5,
        backgroundColor: 'transparent',
        borderRadius: 4
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grey[400]
      }
    }
  };
});

var AppSelectBox = function AppSelectBox(props) {
  var classes = useStyles(props);
  var data = props.data,
      renderRow = props.renderRow,
      placeholder = props.placeholder,
      name = props.name,
      id = props.id,
      fullWidth = props.fullWidth,
      displayEmpty = props.displayEmpty,
      size = props.size,
      value = props.value,
      required = props.required,
      onChange = props.onChange,
      helperText = props.helperText,
      variant = props.variant,
      error = props.error,
      valueKey = props.valueKey,
      labelKey = props.labelKey,
      backgroundColor = props.backgroundColor,
      label = props.label,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    variant: variant,
    size: size,
    fullWidth: fullWidth,
    required: required,
    className: (0, _clsx.default)(classes.formControlRoot, 'form-control')
  }, label && /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    id: 'label-' + id || name
  }, label), /*#__PURE__*/_react.default.createElement(_core.Select, (0, _extends2.default)({}, rest, {
    name: name,
    labelId: 'label-' + id || name,
    id: id || name,
    value: value,
    onChange: onChange,
    label: label ? required ? label + ' *' : label : null,
    error: error || helperText !== '',
    displayEmpty: displayEmpty
  }), placeholder && displayEmpty && /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    value: ""
  }, placeholder), data.map(function (item, index) {
    return renderRow ? renderRow(item, index) : /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: index,
      value: valueKey ? item[valueKey] : item
    }, item[labelKey]);
  })), helperText && /*#__PURE__*/_react.default.createElement(_FormHelperText.default, {
    error: error || helperText !== ''
  }, helperText));
};

AppSelectBox.prototype = {
  data: _propTypes.default.array.isRequired,
  renderRow: _propTypes.default.node,
  placeholder: _propTypes.default.string,
  valueKey: _propTypes.default.string,
  labelKey: _propTypes.default.string,
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  displayEmpty: _propTypes.default.bool,
  required: _propTypes.default.bool,
  value: _propTypes.default.string,
  variant: _propTypes.default.string,
  size: _propTypes.default.string,
  onChange: _propTypes.default.func,
  error: _propTypes.default.bool,
  helperText: _propTypes.default.bool,
  backgroundColor: _propTypes.default.string
};
AppSelectBox.defaultProps = {
  data: [],
  fullWidth: true,
  displayEmpty: true,
  required: false,
  size: 'small',
  error: false,
  helperText: '',
  valueKey: 'id',
  labelKey: 'title',
  backgroundColor: 'transparent'
};
var _default = AppSelectBox;
exports.default = _default;