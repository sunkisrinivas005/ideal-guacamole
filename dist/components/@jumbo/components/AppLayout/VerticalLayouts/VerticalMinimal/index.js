"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Footer = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Footer"));

var _Vertical = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical"));

var _Header = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Header"));

var _Sidebar = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Sidebar"));

var _Content = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Content"));

var _Header2 = _interopRequireDefault(require("../../partials/Header"));

var _SidebarHeader = _interopRequireDefault(require("../../partials/SidebarHeader"));

var _SideBar = _interopRequireDefault(require("../../partials/SideBar"));

var _ContentLoader = _interopRequireDefault(require("../../../ContentLoader"));

var _ThemeOptions = require("../../../../constants/ThemeOptions");

var _Footer2 = _interopRequireDefault(require("../../partials/Footer"));

var _defaultContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/defaultContext"));

var layoutOptions = {
  headerType: _defaultContext.default.headerType,
  footerType: 'fixed',
  sidebarType: _ThemeOptions.SIDEBAR_TYPE.MINI,
  isSidebarFixed: _defaultContext.default.isSidebarFixed,
  isSidebarOpen: false,
  miniSidebarWidth: 80,
  layoutStyle: _defaultContext.default.layoutType
};

var VerticalMinimal = function VerticalMinimal(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_Vertical.default, {
    layoutOptions: layoutOptions,
    className: (0, _clsx.default)('verticalMinimalLayout', className),
    header: /*#__PURE__*/_react.default.createElement(_Header.default, null, /*#__PURE__*/_react.default.createElement(_Header2.default, null)),
    sidebar: /*#__PURE__*/_react.default.createElement(_Sidebar.default, null, /*#__PURE__*/_react.default.createElement(_SidebarHeader.default, null), /*#__PURE__*/_react.default.createElement(_SideBar.default, null)),
    footer: /*#__PURE__*/_react.default.createElement(_Footer.default, {
      type: "static"
    }, /*#__PURE__*/_react.default.createElement(_Footer2.default, null))
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children, /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = VerticalMinimal;
exports.default = _default;