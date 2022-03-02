"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _AppsMenu = _interopRequireDefault(require("../../partials/Header/AppsMenu"));

var _HeaderMessages = _interopRequireDefault(require("../../partials/Header/HeaderMessages"));

var _HeaderNotifications = _interopRequireDefault(require("../../partials/Header/HeaderNotifications"));

var _styles = require("@material-ui/styles");

var _menus = require("../../partials/menus");

var _Horizontal = _interopRequireDefault(require("../../../../../@coremat/CmtNavigation/Horizontal"));

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});

var HeaderTopMenus = function HeaderTopMenus() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Horizontal.default, {
    menuItems: _menus.horizontalDefaultNavs
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    ml: "auto"
  }, /*#__PURE__*/_react.default.createElement(_AppsMenu.default, null), /*#__PURE__*/_react.default.createElement(_HeaderMessages.default, null), /*#__PURE__*/_react.default.createElement(_HeaderNotifications.default, null)));
};

var _default = HeaderTopMenus;
exports.default = _default;