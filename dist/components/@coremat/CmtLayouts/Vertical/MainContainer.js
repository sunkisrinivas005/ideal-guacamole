"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _LayoutContext = _interopRequireDefault(require("../LayoutContext"));

var _MainContainer = _interopRequireDefault(require("./MainContainer.style"));

var _ThemeOptions = require("../../../@jumbo/constants/ThemeOptions");

var _excluded = ["header", "sidebar", "footer", "children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MainContainer = function MainContainer(_ref) {
  var header = _ref.header,
      sidebar = _ref.sidebar,
      footer = _ref.footer,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_LayoutContext.default),
      headerType = _useContext.headerType,
      footerType = _useContext.footerType,
      sidebarType = _useContext.sidebarType,
      isSidebarOpen = _useContext.isSidebarOpen,
      isSidebarFixed = _useContext.isSidebarFixed,
      miniSidebarWidth = _useContext.miniSidebarWidth,
      sidebarWidth = _useContext.sidebarWidth,
      actionSidebarWidth = _useContext.actionSidebarWidth,
      drawerBreakPoint = _useContext.drawerBreakPoint;

  var theme = (0, _styles.useTheme)();
  var isDrawer = (0, _core.useMediaQuery)(theme.breakpoints.down(drawerBreakPoint));

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      headerClasses = _useState2[0],
      setHeaderClasses = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      footerClasses = _useState4[0],
      setFooterClasses = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      sidebarClasses = _useState6[0],
      setSidebarClasses = _useState6[1];

  var classes = (0, _MainContainer.default)({
    miniSidebarWidth: miniSidebarWidth,
    sidebarWidth: sidebarWidth,
    actionSidebarWidth: actionSidebarWidth,
    drawerBreakPoint: drawerBreakPoint
  });
  (0, _react.useEffect)(function () {
    if (!header) setHeaderClasses('');else if (headerType === _ThemeOptions.HEADER_TYPE.FIXED) setHeaderClasses('Cmt-fixedHeaderLayout');else setHeaderClasses('');
  }, [header, headerType]);
  (0, _react.useEffect)(function () {
    if (!footer) setFooterClasses('');else if (footerType === 'fixed') setFooterClasses('Cmt-FixedFooterLayout');else setFooterClasses('');
  }, [footer, footerType]);
  (0, _react.useEffect)(function () {
    var newClasses = [];
    if (!sidebar) newClasses.push('');else if (sidebarType === 'drawer' || isDrawer) newClasses.push('Cmt-drawerLayout');else if (sidebarType === 'mini') newClasses.push(isSidebarOpen ? 'Cmt-fullMiniLayout' : 'Cmt-miniLayout');
    if (isSidebarFixed) newClasses.push('Cmt-sidebar-fixed');
    setSidebarClasses((0, _clsx.default)(newClasses));
  }, [sidebarType, isSidebarOpen, isDrawer, isSidebarFixed, sidebar]);
  return /*#__PURE__*/_react.default.createElement(_Box.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.appRoot, headerClasses, sidebarClasses, footerClasses, className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appInnerRoot
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appMainContainer
  }, sidebar, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.appMain
  }, header && /*#__PURE__*/(0, _react.cloneElement)(header, {
    type: headerType
  }), children, footer && /*#__PURE__*/(0, _react.cloneElement)(footer, {
    type: footerType
  })))));
};

var _default = MainContainer;
exports.default = _default;