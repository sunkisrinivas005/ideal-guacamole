"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    circularProgressRoot: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 999999,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

var PageLoader = function PageLoader() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.circularProgressRoot
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, null));
};

var _default = PageLoader;
exports.default = _default;