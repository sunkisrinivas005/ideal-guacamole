"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    appHeader: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      backgroundColor: theme.palette.primary.main
    }
  };
});

var CmtHeader = function CmtHeader(props) {
  var className = props.className,
      children = props.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "static",
    className: (0, _clsx.default)(classes.appHeader, className, 'Cmt-header')
  }, children);
};

CmtHeader.defaultProps = {
  name: 'LayoutHeader'
};
CmtHeader.propTypes = {
  type: _propTypes.default.oneOf(['fixed', 'static']),
  fullHeader: _propTypes.default.bool
};
var _default = CmtHeader;
exports.default = _default;