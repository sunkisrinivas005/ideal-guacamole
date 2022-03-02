"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _CmtImage = _interopRequireDefault(require("../../../../@coremat/CmtImage"));

var _excluded = ["options", "renderOption", "getOptionLabel", "name", "id", "backgroundColor", "fullWidth", "size", "placeholder", "variant", "value", "avatar", "onChange", "helperText", "error", "multiple", "textValue", "onChangeText", "label", "required"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    option: {
      borderTop: "1px solid ".concat(theme.palette.borderColor.main),
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      fontWeight: '300',
      '& > span': {
        marginRight: 10,
        fontSize: 18
      },
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent'
      },
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.action.hover
      }
    },
    AutocompleteRoot: {
      backgroundColor: theme.palette.background.paper,
      '& .MuiFormControl-root > label': {
        paddingLeft: 28
      },
      '& .MuiFormControl-root > label.MuiInputLabel-shrink': {
        paddingLeft: 0
      }
    },
    inputRoot: {
      paddingLeft: '35px !important'
    },
    avatar: {
      position: 'absolute',
      margin: 5,
      width: 30,
      height: 30,
      borderRadius: '50%'
    },
    textFieldRoot: {
      backgroundColor: function backgroundColor(props) {
        return props.backgroundColor;
      }
    }
  };
});

var AppAutocomplete = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var classes = useStyles(props);
  var options = props.options,
      renderOption = props.renderOption,
      getOptionLabel = props.getOptionLabel,
      name = props.name,
      id = props.id,
      backgroundColor = props.backgroundColor,
      fullWidth = props.fullWidth,
      size = props.size,
      placeholder = props.placeholder,
      variant = props.variant,
      value = props.value,
      avatar = props.avatar,
      onChange = props.onChange,
      helperText = props.helperText,
      error = props.error,
      multiple = props.multiple,
      textValue = props.textValue,
      onChangeText = props.onChangeText,
      label = props.label,
      required = props.required,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_Autocomplete.default, (0, _extends2.default)({
    id: id || name,
    options: options,
    multiple: multiple,
    style: {
      width: '100%'
    },
    classes: {
      option: classes.option,
      root: avatar ? classes.AutocompleteRoot : null,
      inputRoot: avatar ? classes.inputRoot : null
    },
    value: value,
    onChange: onChange,
    getOptionLabel: getOptionLabel,
    renderOption: renderOption,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, avatar && typeof avatar === 'string' ? /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
        className: classes.avatar,
        src: avatar,
        alt: "Avatar"
      }) : avatar, /*#__PURE__*/_react.default.createElement(_core.TextField, (0, _extends2.default)({}, params, {
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          autoComplete: 'disabled'
        }),
        name: name,
        value: textValue,
        onChange: function onChange(e) {
          return onChangeText ? onChangeText(e.target.value) : {};
        },
        className: classes.textFieldRoot,
        label: label,
        placeholder: placeholder,
        id: 'input-' + (id || name),
        size: size,
        fullWidth: fullWidth,
        variant: variant,
        error: error || helperText !== '',
        helperText: helperText,
        required: required
      })));
    }
  }, rest)));
});

AppAutocomplete.prototype = {
  options: _propTypes.default.array,
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  variant: _propTypes.default.string,
  size: _propTypes.default.string,
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  renderOption: _propTypes.default.func,
  getOptionLabel: _propTypes.default.func,
  fullWidth: _propTypes.default.bool,
  error: _propTypes.default.bool,
  helperText: _propTypes.default.string,
  avatar: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  backgroundColor: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  required: _propTypes.default.bool
};
AppAutocomplete.defaultProps = {
  options: [],
  fullWidth: true,
  size: 'small',
  error: false,
  placeholder: '',
  helperText: '',
  avatar: '',
  backgroundColor: 'transparent',
  multiple: false,
  label: '',
  required: false
};
var _default = AppAutocomplete;
exports.default = _default;