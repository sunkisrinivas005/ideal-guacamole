"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _excluded = ["children"];
var useStyles = (0, _core.makeStyles)(function (theme) {
  var _CmtContainer;

  return {
    headerTop: {
      width: '100%',
      paddingTop: 12,
      paddingBottom: 12,
      fontSize: 14,
      boxSizing: 'border-box'
    },
    '@global': {
      '.Cmt-container': (_CmtContainer = {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        boxSizing: 'border-box'
      }, (0, _defineProperty2.default)(_CmtContainer, theme.breakpoints.up('md'), {
        width: 900
      }), (0, _defineProperty2.default)(_CmtContainer, theme.breakpoints.up('lg'), {
        width: 1100
      }), (0, _defineProperty2.default)(_CmtContainer, theme.breakpoints.up('xl'), {
        width: 1400
      }), _CmtContainer)
    }
  };
});

var CmtHeaderTop = function CmtHeaderTop(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: classes.headerTop
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "Cmt-container"
  }, children));
};

var _default = CmtHeaderTop;
exports.default = _default;