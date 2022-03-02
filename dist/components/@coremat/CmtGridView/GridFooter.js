"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    listFooterRoot: {
      padding: 10,
      color: theme.palette.text.secondary,
      display: 'flex',
      justifyContent: 'center'
    },
    footerWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '8px',
      color: theme.palette.text.secondary
    }
  };
});

var GridFooter = function GridFooter(_ref) {
  var loading = _ref.loading,
      footerText = _ref.footerText;
  var classes = useStyles();

  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.footerWrapper
    }, /*#__PURE__*/_react.default.createElement(_core.CircularProgress, {
      size: 16
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "ml-2"
    }, "Loading..."));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.listFooterRoot, 'Cmt-list-footer')
    }, /*#__PURE__*/_react.default.createElement("p", null, footerText));
  }
};

GridFooter.propTypes = {
  loading: _propTypes.default.bool,
  footerText: _propTypes.default.string
};
GridFooter.defaultProps = {
  loading: false,
  footerText: ''
};
var _default = GridFooter;
exports.default = _default;