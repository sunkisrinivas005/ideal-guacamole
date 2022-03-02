"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarNavs = exports.minimalHorizontalMenus = exports.horizontalDefaultNavs = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@material-ui/icons");

var _IntlMessages = _interopRequireDefault(require("../../../utils/IntlMessages"));

var sidebarNavs = [{
  name: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: 'sidebar.main'
  }),
  type: 'section',
  children: [{
    name: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
      id: 'pages.samplePage'
    }),
    type: 'item',
    icon: /*#__PURE__*/_react.default.createElement(_icons.PostAdd, null),
    link: '/sample-page'
  }]
}];
exports.sidebarNavs = sidebarNavs;
var horizontalDefaultNavs = [{
  name: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: 'sidebar.main'
  }),
  type: 'collapse',
  children: [{
    name: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
      id: 'pages.samplePage'
    }),
    type: 'item',
    icon: /*#__PURE__*/_react.default.createElement(_icons.PostAdd, null),
    link: '/sample-page'
  }]
}];
exports.horizontalDefaultNavs = horizontalDefaultNavs;
var minimalHorizontalMenus = [{
  name: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: 'sidebar.main'
  }),
  type: 'collapse',
  children: [{
    name: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
      id: 'pages.samplePage'
    }),
    type: 'item',
    icon: /*#__PURE__*/_react.default.createElement(_icons.PostAdd, null),
    link: '/sample-page'
  }]
}];
exports.minimalHorizontalMenus = minimalHorizontalMenus;