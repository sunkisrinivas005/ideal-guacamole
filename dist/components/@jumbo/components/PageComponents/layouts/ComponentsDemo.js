"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _PageContainer = _interopRequireDefault(require("./PageContainer"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _contentArea;

  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    contentArea: (_contentArea = {
      width: '100%'
    }, (0, _defineProperty2.default)(_contentArea, theme.breakpoints.up('sm'), {
      paddingRight: theme.typography.pxToRem(30),
      width: "calc(100% - ".concat(theme.typography.pxToRem(175), ")")
    }), (0, _defineProperty2.default)(_contentArea, theme.breakpoints.up('lg'), {
      paddingRight: theme.typography.pxToRem(54)
    }), _contentArea),
    contentSidebar: {
      width: theme.typography.pxToRem(175),
      height: "calc(100vh - ".concat(theme.typography.pxToRem(102), ")"),
      position: 'sticky',
      top: 30,
      overflowY: 'auto',
      flexShrink: 0
    }
  };
});

var ComponentsDemo = function ComponentsDemo(_ref) {
  var pageTitle = _ref.pageTitle,
      menus = _ref.menus,
      breadcrumbs = _ref.breadcrumbs,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_PageContainer.default, {
    heading: pageTitle,
    breadcrumbs: breadcrumbs
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.contentArea
  }, children), /*#__PURE__*/_react.default.createElement(_core.Hidden, {
    xsDown: true
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.contentSidebar
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "h4",
    variant: "h4"
  }, "Contents"), /*#__PURE__*/_react.default.createElement(_core.List, null, menus.map(function (menu, index) {
    return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
      key: index,
      dense: true,
      button: true,
      component: "a",
      href: "#".concat(menu.link)
    }, /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
      primary: menu.label
    }));
  }))))));
};

var _default = ComponentsDemo;
exports.default = _default;