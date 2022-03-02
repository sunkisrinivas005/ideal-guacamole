"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Cached = _interopRequireDefault(require("@material-ui/icons/Cached"));

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    loginSection: {
      display: 'flex',
      alignItems: 'center',
      '& > .MuiDivider-root': {
        height: 14,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: theme.palette.text.secondary
      }
    }
  };
});

var HeaderLogin = function HeaderLogin() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    color: "warning.main"
  }, /*#__PURE__*/_react.default.createElement(_Cached.default, {
    fontSize: "small"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-3"
  }, "This is primary alert-check it out!")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.loginSection
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: "Cmt-btn",
    size: "small"
  }, "Login"), /*#__PURE__*/_react.default.createElement(_core.Divider, {
    className: "Cmt-divider",
    orientation: "vertical"
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: "Cmt-btn",
    size: "small"
  }, "Sign up")));
};

var _default = HeaderLogin;
exports.default = _default;