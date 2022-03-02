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

var _NavSection = _interopRequireDefault(require("./NavSection"));

var _NavCollapse = _interopRequireDefault(require("./NavCollapse"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    sideNavMenu: {
      position: 'relative'
    }
  };
});

var CmtVertical = function CmtVertical(props) {
  var menuItems = props.menuItems;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "nav",
    disablePadding: true,
    className: classes.sideNavMenu
  }, menuItems.map(function (item, index) {
    switch (item.type) {
      case 'section':
        return /*#__PURE__*/_react.default.createElement(_NavSection.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      case 'collapse':
        return /*#__PURE__*/_react.default.createElement(_NavCollapse.default, (0, _extends2.default)({}, item, {
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

var _default = CmtVertical;
exports.default = _default;