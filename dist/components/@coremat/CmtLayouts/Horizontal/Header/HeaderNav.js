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

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["children"];
var useStyles = (0, _core.makeStyles)(function () {
  return {
    headerNav: {
      width: '100%',
      minHeight: 46,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  };
});

var CmtHeaderNav = function CmtHeaderNav(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.headerNav, 'Cmt-header-nav')
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "Cmt-container"
  }, children));
};

var _default = CmtHeaderNav;
exports.default = _default;