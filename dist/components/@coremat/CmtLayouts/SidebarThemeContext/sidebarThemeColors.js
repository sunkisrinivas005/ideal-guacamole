"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarSemiDarkTheme = exports.sidebarLightTheme = exports.sidebarDarkTheme = exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var sidebarLightTheme = _objectSpread({
  bgColor: '#fff',
  textColor: 'rgba(0, 0, 0, 0.6)',
  textDarkColor: 'rgba(0, 0, 0, 0.87)',
  textActiveColor: '#3f51b5',
  navHoverBgColor: 'rgb(229, 229, 229)',
  navActiveBgColor: 'rgb(239, 229, 253)',
  borderColor: 'rgba(33, 33, 33, 0.08)'
}, JSON.parse(localStorage.getItem('sidebar-colors')));

exports.sidebarLightTheme = sidebarLightTheme;

var sidebarSemiDarkTheme = _objectSpread({
  bgColor: '#363636',
  textColor: 'rgba(255, 255, 255, 0.3)',
  textDarkColor: '#fff',
  textActiveColor: '#fff',
  navHoverBgColor: 'rgba(187, 134, 252, 0.08)',
  navActiveBgColor: '#3f51b5',
  borderColor: 'rgba(255, 255, 255, 0.08)'
}, JSON.parse(localStorage.getItem('sidebar-colors')));

exports.sidebarSemiDarkTheme = sidebarSemiDarkTheme;

var sidebarDarkTheme = _objectSpread({
  bgColor: '#363636',
  textColor: 'rgba(255, 255, 255, 0.3)',
  textDarkColor: '#fff',
  textActiveColor: '#fff',
  navHoverBgColor: 'rgba(187, 134, 252, 0.08)',
  navActiveBgColor: '#3f51b5',
  borderColor: 'rgba(255, 255, 255, 0.08)'
}, JSON.parse(localStorage.getItem('sidebar-colors')));

exports.sidebarDarkTheme = sidebarDarkTheme;
var themeSidebarColor = {
  light: sidebarLightTheme,
  'semi-dark': sidebarSemiDarkTheme,
  dark: sidebarDarkTheme
};
var _default = themeSidebarColor;
exports.default = _default;