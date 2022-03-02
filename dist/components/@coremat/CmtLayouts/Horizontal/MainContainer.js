"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _MainContainer = _interopRequireDefault(require("./MainContainer.style"));

var _LayoutContext = _interopRequireDefault(require("../LayoutContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MainContainer = function MainContainer(_ref) {
  var header = _ref.header,
      footer = _ref.footer,
      sidebar = _ref.sidebar,
      className = _ref.className,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_LayoutContext.default),
      drawerBreakPoint = _useContext.drawerBreakPoint,
      showFooter = _useContext.showFooter,
      showHeader = _useContext.showHeader;

  var classes = (0, _MainContainer.default)({
    drawerBreakPoint: drawerBreakPoint
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.appRoot, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appInnerRoot
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appMainContainer
  }, sidebar, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appMain
  }, showHeader && header, children, showFooter && footer))));
};

var _default = MainContainer;
exports.default = _default;