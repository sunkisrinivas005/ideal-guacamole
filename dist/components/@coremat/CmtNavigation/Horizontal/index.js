"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _NavMenuItem = _interopRequireDefault(require("./NavMenuItem"));

var _NavCollapse = _interopRequireDefault(require("./NavCollapse"));

var _NavMega = _interopRequireDefault(require("./NavMega"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _clsx = _interopRequireDefault(require("clsx"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    horizontalNavMenu: {
      position: 'relative',
      display: 'flex',
      marginLeft: -14,
      marginRight: -14
    }
  };
});

var CmtHorizontal = function CmtHorizontal(props) {
  var menuItems = props.menuItems;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "nav",
    disablePadding: true,
    className: (0, _clsx.default)(classes.horizontalNavMenu, 'Cmt-horizontalNavMenu')
  }, menuItems.map(function (item, index) {
    switch (item.type) {
      case 'collapse':
        return /*#__PURE__*/_react.default.createElement(_NavCollapse.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      case 'mega':
        return /*#__PURE__*/_react.default.createElement(_NavMega.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      case 'item':
        return /*#__PURE__*/_react.default.createElement(_NavMenuItem.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      default:
        return null;
    }
  }));
};

var _default = CmtHorizontal;
exports.default = _default;