"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactColor = require("react-color");

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)({
  root: {
    '& .sketch-picker': {
      boxShadow: 'none !important'
    }
  },
  actionRoot: {
    padding: 10,
    '& .MuiButton-root:not(:last-child)': {
      marginRight: 8
    }
  }
});

var ColorPickerPopup = function ColorPickerPopup(_ref) {
  var color = _ref.color,
      setColor = _ref.setColor;
  var classes = useStyles();

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _useState = (0, _react.useState)(color ? color : '#333333'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tempColor = _useState2[0],
      setTempColor = _useState2[1];

  var openPicker = function openPicker(event) {
    setAnchorEl(event.currentTarget);
  };

  var onCancel = function onCancel() {
    setAnchorEl(null);
  };

  var onColorSelect = function onColorSelect(color) {
    setTempColor(color.hex);
  };

  var onUpdate = function onUpdate() {
    setColor(tempColor);
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "inline-block",
    p: "3px",
    border: 1,
    onClick: openPicker
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    height: 27,
    width: 27,
    style: {
      backgroundColor: color
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Popover, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    className: classes.root,
    onClose: onCancel,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactColor.SketchPicker, {
    color: tempColor,
    onChange: onColorSelect
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.actionRoot
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: onUpdate
  }, "Done"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    size: "small",
    onClick: onCancel
  }, "Cancel"))));
};

var _default = ColorPickerPopup;
exports.default = _default;