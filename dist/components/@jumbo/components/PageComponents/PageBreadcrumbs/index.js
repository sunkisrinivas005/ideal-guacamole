"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactRouterDom = require("react-router-dom");

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["items"];
var useStyles = (0, _core.makeStyles)(function () {
  return {
    textSm: {
      fontSize: 12
    },
    linkBlock: {
      display: 'block',
      color: 'inherit'
    }
  };
});

var PageBreadcrumbs = function PageBreadcrumbs(_ref) {
  var items = _ref.items,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Breadcrumbs, {
    className: "bread-crumbs",
    "aria-label": "breadcrumb {...rest}"
  }, items.map(function (item, index) {
    return item.isActive ? /*#__PURE__*/_react.default.createElement(_Typography.default, {
      key: index,
      className: classes.textSm,
      color: "textPrimary"
    }, item.label) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      key: index,
      className: (0, _clsx.default)(classes.textSm, classes.linkBlock),
      color: "inherit",
      to: item.link || '/'
    }, item.label);
  }));
};

var _default = PageBreadcrumbs;
exports.default = _default;