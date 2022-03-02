"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

var _Cached = _interopRequireDefault(require("@material-ui/icons/Cached"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      padding: '32px 10px 5px',
      width: '100%',
      '& .MuiAlert-root': {
        padding: '0 20px 0 0',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '& .MuiAlert-icon': {
          padding: '16px 12px',
          borderTopLeftRadius: theme.shape.borderRadius,
          borderBottomLeftRadius: theme.shape.borderRadius,
          backgroundColor: (0, _styles.darken)(theme.palette.primary.main, 0.38)
        }
      }
    }
  };
});

var Alerts = function Alerts() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(true),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: open
  }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
    variant: "filled",
    iconMapping: {
      success: /*#__PURE__*/_react.default.createElement(_Cached.default, {
        fontSize: "inherit"
      })
    },
    action: /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        setOpen(false);
      }
    }, /*#__PURE__*/_react.default.createElement(_Close.default, {
      fontSize: "inherit"
    }))
  }, "A new version has been arrived, Click here to update jumbo 5.0")));
};

var _default = Alerts;
exports.default = _default;