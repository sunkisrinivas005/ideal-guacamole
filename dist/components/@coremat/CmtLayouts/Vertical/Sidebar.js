"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _Sidebar = _interopRequireDefault(require("./Sidebar.style"));

var _LayoutContext = _interopRequireDefault(require("../LayoutContext"));

var _CmtDrawer = _interopRequireDefault(require("../../CmtDrawer"));

var _SidebarThemeContext = _interopRequireDefault(require("../SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CmtSidebarContent = function CmtSidebarContent(_ref) {
  var children = _ref.children,
      classes = _ref.classes;

  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      backgroundStyle = _useContext.backgroundStyle,
      overlayStyle = _useContext.overlayStyle;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.appSidebar, 'Cmt-sidebar')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.appSidebarContent, 'Cmt-sidebar-content'),
    style: backgroundStyle
  }, children, overlayStyle && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.overlayRoot, 'Cmt-Drawer-overlay'),
    style: overlayStyle
  })));
};

var CmtDrawerContent = function CmtDrawerContent(_ref2) {
  var children = _ref2.children,
      classes = _ref2.classes;

  var _useContext2 = (0, _react.useContext)(_LayoutContext.default),
      isSidebarOpen = _useContext2.isSidebarOpen,
      setSidebarOpen = _useContext2.setSidebarOpen;

  return /*#__PURE__*/_react.default.createElement(_CmtDrawer.default, {
    variant: "temporary",
    open: isSidebarOpen,
    onClose: function onClose() {
      return setSidebarOpen(false);
    },
    classes: {
      paper: 'Cmt-drawer-sidebar'
    }
  }, /*#__PURE__*/_react.default.createElement(CmtSidebarContent, {
    classes: classes
  }, children));
};

var CmtSidebar = function CmtSidebar(_ref3) {
  var children = _ref3.children,
      actionBar = _ref3.actionBar;

  var _useContext3 = (0, _react.useContext)(_LayoutContext.default),
      drawerBreakPoint = _useContext3.drawerBreakPoint,
      sidebarWidth = _useContext3.sidebarWidth,
      miniSidebarWidth = _useContext3.miniSidebarWidth,
      actionSidebarWidth = _useContext3.actionSidebarWidth,
      sidebarType = _useContext3.sidebarType;

  var _useContext4 = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext4.sidebarTheme;

  var theme = (0, _core.useTheme)();
  var matches = (0, _core.useMediaQuery)(theme.breakpoints.down(drawerBreakPoint));
  var hasDrawer = sidebarType === 'drawer' || matches;
  var classes = (0, _Sidebar.default)({
    sidebarWidth: sidebarWidth,
    miniSidebarWidth: miniSidebarWidth,
    actionSidebarWidth: actionSidebarWidth,
    sidebarTheme: sidebarTheme
  });

  if (hasDrawer) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, actionBar, /*#__PURE__*/_react.default.createElement(CmtDrawerContent, {
      classes: classes
    }, children));
  } else if (actionBar) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.actionSidebarWrapper, 'Cmt-actionSidebarWrapper')
    }, actionBar, /*#__PURE__*/_react.default.createElement(CmtSidebarContent, {
      classes: classes
    }, children));
  } else {
    return /*#__PURE__*/_react.default.createElement(CmtSidebarContent, {
      classes: classes
    }, children);
  }
};

var _default = CmtSidebar;
exports.default = _default;