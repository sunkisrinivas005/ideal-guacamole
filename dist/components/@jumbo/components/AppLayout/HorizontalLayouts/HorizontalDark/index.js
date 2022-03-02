"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SideBar = _interopRequireDefault(require("../../partials/SideBar"));

var _Horizontal = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal"));

var _HeaderNav = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav"));

var _HeaderTop = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderTop"));

var _HeaderMain = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain"));

var _HeaderLogin = _interopRequireDefault(require("../../partials/Header/HeaderLogin"));

var _ContentLoader = _interopRequireDefault(require("../../../ContentLoader"));

var _Header = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header"));

var _Sidebar = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Sidebar"));

var _Content = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Content"));

var _index = _interopRequireDefault(require("./index.style"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _HeaderMain2 = _interopRequireDefault(require("./HeaderMain"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Footer = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Footer"));

var _Footer2 = _interopRequireDefault(require("../../partials/Footer"));

var _ThemeOptions = require("../../../../constants/ThemeOptions");

var _defaultContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/defaultContext"));

var _menus = require("../../partials/menus");

var _Horizontal2 = _interopRequireDefault(require("../../../../../@coremat/CmtNavigation/Horizontal"));

var layoutOptions = {
  showFooter: true,
  headerType: _ThemeOptions.HEADER_TYPE.STATIC,
  layoutStyle: _defaultContext.default.layoutType
};

var HorizontalDark = function HorizontalDark(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = (0, _index.default)();
  return /*#__PURE__*/_react.default.createElement(_Horizontal.default, {
    className: (0, _clsx.default)('Cmt-horizontalDarkLayout', className),
    layoutOptions: layoutOptions,
    header: /*#__PURE__*/_react.default.createElement(_Header.default, {
      className: classes.appHeaderDark
    }, /*#__PURE__*/_react.default.createElement(_HeaderNav.default, null, /*#__PURE__*/_react.default.createElement(_HeaderLogin.default, null)), /*#__PURE__*/_react.default.createElement(_HeaderTop.default, null, /*#__PURE__*/_react.default.createElement(_HeaderMain2.default, null)), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
      mdDown: true
    }, /*#__PURE__*/_react.default.createElement(_HeaderMain.default, null, /*#__PURE__*/_react.default.createElement(_Horizontal2.default, {
      menuItems: _menus.horizontalDefaultNavs
    })))),
    sidebar: /*#__PURE__*/_react.default.createElement(_Sidebar.default, null, /*#__PURE__*/_react.default.createElement(_SideBar.default, null)),
    footer: /*#__PURE__*/_react.default.createElement(_Footer.default, {
      type: "static"
    }, /*#__PURE__*/_react.default.createElement(_Footer2.default, null))
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children, /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = HorizontalDark;
exports.default = _default;