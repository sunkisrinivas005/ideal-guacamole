"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutContextProvider = _interopRequireDefault(require("./LayoutContextProvider"));

var _MainContainer = _interopRequireDefault(require("./MainContainer"));

var _SidebarThemeContext = _interopRequireDefault(require("../SidebarThemeContext"));

var _excluded = ["layoutOptions", "children", "header", "sidebar", "footer"];

var CmtVerticalLayout = function CmtVerticalLayout(_ref) {
  var layoutOptions = _ref.layoutOptions,
      children = _ref.children,
      header = _ref.header,
      sidebar = _ref.sidebar,
      footer = _ref.footer,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_LayoutContextProvider.default, layoutOptions, /*#__PURE__*/_react.default.createElement(_SidebarThemeContext.default, null, /*#__PURE__*/_react.default.createElement(_MainContainer.default, (0, _extends2.default)({
    header: header,
    sidebar: sidebar,
    footer: footer
  }, rest), children)));
};

CmtVerticalLayout.prototype = {
  layoutOptions: _propTypes.default.object
};
CmtVerticalLayout.defaultProps = {
  layoutOptions: {}
};
var _default = CmtVerticalLayout;
exports.default = _default;