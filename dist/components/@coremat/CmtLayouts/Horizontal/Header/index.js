"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    appHeader: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      boxShadow: '0 1px 8px -1px rgba(0,0,0,.2)',
      position: 'relative',
      zIndex: 99
    }
  };
});

var CmtHeader = function CmtHeader(props) {
  var children = props.children,
      className = props.className;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.appHeader, className, 'Cmt-header')
  }, children);
};

var _default = CmtHeader;
exports.default = _default;
CmtHeader.defaultProps = {
  name: 'Header'
};