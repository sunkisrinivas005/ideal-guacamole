"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Vertical = _interopRequireDefault(require("../../../../../@coremat/CmtNavigation/Vertical"));

var _menus = require("../menus");

var useStyles = (0, _makeStyles.default)(function () {
  return {
    perfectScrollbarSidebar: {
      height: '100%',
      transition: 'all 0.3s ease',
      '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {
        height: 'calc(100% - 167px)'
      },
      '.Cmt-modernLayout &': {
        height: 'calc(100% - 72px)'
      },
      '.Cmt-miniLayout &': {
        height: 'calc(100% - 91px)'
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
        height: 'calc(100% - 167px)'
      }
    }
  };
});

var SideBar = function SideBar() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    className: classes.perfectScrollbarSidebar
  }, /*#__PURE__*/_react.default.createElement(_Vertical.default, {
    menuItems: _menus.sidebarNavs
  }));
};

var _default = SideBar;
exports.default = _default;