"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultTheme = _interopRequireDefault(require("../../../../theme/defaultTheme"));

var _ThemeOptions = require("../../../constants/ThemeOptions");

var _default = {
  theme: _defaultTheme.default,
  defaultLng: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  },
  layout: _ThemeOptions.LAYOUT_TYPES.VERTICAL_DEFAULT,
  layoutType: _ThemeOptions.LAYOUT_STYLES.FULL_WIDTH,
  themeType: _ThemeOptions.THEME_TYPES.LIGHT,
  drawerBreakPoint: _ThemeOptions.DRAWER_BREAK_POINT.MD,
  headerType: _ThemeOptions.HEADER_TYPE.FIXED,
  sidebarType: _ThemeOptions.SIDEBAR_TYPE.FULL,
  isSidebarFixed: true,
  sidebarWidth: _ThemeOptions.SIDEBAR_WIDTH.DEFAULT,
  showFooter: false
};
exports.default = _default;