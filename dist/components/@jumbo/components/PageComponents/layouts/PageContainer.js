"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _index = require("../index");

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _clsx = _interopRequireDefault(require("clsx"));

var useStyles = (0, _makeStyles.default)(function () {
  return {
    pageFull: {
      width: '100%'
    }
  };
});

var PageContainer = function PageContainer(_ref) {
  var heading = _ref.heading,
      breadcrumbs = _ref.breadcrumbs,
      children = _ref.children,
      className = _ref.className,
      restProps = _ref.restProps;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Slide.default, {
    in: true,
    direction: "up",
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_Box.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.pageFull, className)
  }, restProps), (heading || breadcrumbs) && /*#__PURE__*/_react.default.createElement(_index.PageHeader, {
    heading: heading,
    breadcrumbComponent: breadcrumbs && /*#__PURE__*/_react.default.createElement(_index.PageBreadcrumbs, {
      items: breadcrumbs
    })
  }), children));
};

var _default = PageContainer;
exports.default = _default;