"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _reactRedux = require("react-redux");

var _ErrorMessages = require("../../../constants/ErrorMessages");

var _AppTextInput = _interopRequireDefault(require("../formElements/AppTextInput"));

var _ColorPickerPopup = _interopRequireDefault(require("../ColorPickerPopup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    inputBoxRoot: {
      '& .MuiInputBase-input': {
        paddingBottom: 12,
        fontSize: 14,
        letterSpacing: 0.25,
        color: theme.palette.common.dark
      }
    }
  };
});

var LabelForm = function LabelForm(_ref) {
  var title = _ref.title,
      anchorEl = _ref.anchorEl,
      onClose = _ref.onClose,
      label = _ref.label,
      saveLabel = _ref.saveLabel;
  var classes = useStyles();

  var _useState = (0, _react.useState)(label ? label.color : '#333333'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = (0, _react.useState)(label ? label.name : ''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      nameError = _useState6[0],
      setNameError = _useState6[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    if (label) {
      setName(label.name);
      setColor(label.color);
    }
  }, [label]);

  var validateForm = function validateForm(labelName) {
    if (!labelName) {
      setNameError(_ErrorMessages.requiredMessage);
    } else {
      setNameError('');
    }
  };

  var onLabelChange = function onLabelChange(event) {
    var label = event.target.value;
    setName(label);
    validateForm(label);
  };

  var submitForm = function submitForm() {
    validateForm(name);

    if (name) {
      handleSubmitLabel();
    }
  };

  var closeFormPopup = function closeFormPopup() {
    setColor('#333333');
    setName('');
    if (onClose) onClose();
  };

  var handleSubmitLabel = function handleSubmitLabel() {
    dispatch(saveLabel(_objectSpread(_objectSpread({}, label), {}, {
      name: name,
      color: color
    })));
    closeFormPopup();
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/_react.default.createElement(_core.Popover, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: onClose,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    p: 4
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: 12,
    color: "text.secondary",
    mb: 2,
    clone: true
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: "my-input"
  }, title || 'Label Name')), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    mb: 5
  }, /*#__PURE__*/_react.default.createElement(_AppTextInput.default, {
    className: classes.inputBoxRoot,
    value: name,
    onChange: onLabelChange,
    required: true,
    helperText: nameError
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: 4,
    pb: nameError ? '23px' : ''
  }, /*#__PURE__*/_react.default.createElement(_ColorPickerPopup.default, {
    color: color,
    setColor: setColor
  }))), /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mr: 3,
    clone: true
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: submitForm
  }, "Apply")), /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    onClick: closeFormPopup
  }, "Cancel"))));
};

var _default = LabelForm;
exports.default = _default;