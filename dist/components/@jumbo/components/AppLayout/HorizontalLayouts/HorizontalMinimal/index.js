"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _SideBar = _interopRequireDefault(require("../../partials/SideBar"));

var _HeaderLogin = _interopRequireDefault(require("../../partials/Header/HeaderLogin"));

var _ContentLoader = _interopRequireDefault(require("../../../ContentLoader"));

var _MainHeader = _interopRequireDefault(require("./MainHeader"));

var _index = _interopRequireDefault(require("./index.style"));

var _Footer = _interopRequireDefault(require("../../partials/Footer"));

var _ThemeOptions = require("../../../../constants/ThemeOptions");

var _Horizontal = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal"));

var _HeaderNav = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav"));

var _HeaderMain = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain"));

var _Header = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Header"));

var _Sidebar = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Sidebar"));

var _Content = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Content"));

var _Footer2 = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/Footer"));

var _defaultContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/defaultContext"));

var layoutOptions = {
  showFooter: true,
  headerType: _ThemeOptions.HEADER_TYPE.STATIC,
  layoutStyle: _defaultContext.default.layoutType
};

var HorizontalMinimal = function HorizontalMinimal(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = (0, _index.default)();
  return /*#__PURE__*/_react.default.createElement(_Horizontal.default, {
    layoutOptions: layoutOptions,
    className: (0, _clsx.default)('Cmt-horizontalMinimalLayout', className),
    header: /*#__PURE__*/_react.default.createElement(_Header.default, {
      className: classes.appHeaderDark
    }, /*#__PURE__*/_react.default.createElement(_HeaderNav.default, null, /*#__PURE__*/_react.default.createElement(_HeaderLogin.default, null)), /*#__PURE__*/_react.default.createElement(_HeaderMain.default, null, /*#__PURE__*/_react.default.createElement(_MainHeader.default, null))),
    footer: /*#__PURE__*/_react.default.createElement(_Footer2.default, {
      type: "static"
    }, /*#__PURE__*/_react.default.createElement(_Footer.default, null)),
    sidebar: /*#__PURE__*/_react.default.createElement(_Sidebar.default, null, /*#__PURE__*/_react.default.createElement(_SideBar.default, null))
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children, /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = HorizontalMinimal;
exports.default = _default;