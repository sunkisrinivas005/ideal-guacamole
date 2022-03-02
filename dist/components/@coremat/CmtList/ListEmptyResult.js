"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    emptyListContainer: {
      flexDirection: 'column',
      minHeight: 250,
      height: '100%',
      display: 'flex',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.background.paper,
      border: "1px solid ".concat((0, _styles.alpha)(theme.palette.common.black, 0.12)),
      borderRadius: 4,
      textAlign: 'center'
    },
    flexRow: {
      flexDirection: 'row'
    }
  };
});

var ListEmptyResult = function ListEmptyResult(_ref) {
  var loader = _ref.loader,
      placeholder = _ref.placeholder,
      loading = _ref.loading,
      title = _ref.title,
      actionTitle = _ref.actionTitle,
      content = _ref.content,
      onClick = _ref.onClick,
      children = _ref.children;
  var classes = useStyles();

  if (loading || loader) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, placeholder ? placeholder : /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.emptyListContainer, classes.flexRow, 'CmtList-EmptyResult')
    }, /*#__PURE__*/_react.default.createElement(_core.CircularProgress, {
      size: 16
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "ml-2"
    }, "Loading...")));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.emptyListContainer, 'CmtList-EmptyResult')
    }, children ? children : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && /*#__PURE__*/_react.default.createElement(_core.Box, {
      component: "h4",
      fontSize: 28,
      color: "text.primary",
      mb: 3
    }, title), /*#__PURE__*/_react.default.createElement(_core.Box, {
      fontSize: 18,
      component: "p",
      color: "text.secondary"
    }, content), actionTitle && /*#__PURE__*/_react.default.createElement(_core.Button, {
      color: "primary",
      variant: "contained",
      style: {
        marginTop: 30,
        height: 45,
        minWidth: 150
      },
      onClick: onClick
    }, actionTitle)));
  }
};

var _default = ListEmptyResult;
exports.default = _default;