"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Vertical = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical"));

var _Sidebar = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Sidebar"));

var _Content = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Content"));

var _Header = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Header"));

var _SidebarToggleHandler = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler"));

var _SidebarHeader = _interopRequireDefault(require("../../partials/SidebarHeader"));

var _SideBar = _interopRequireDefault(require("../../partials/SideBar"));

var _ContentLoader = _interopRequireDefault(require("../../../ContentLoader"));

var _Alerts = _interopRequireDefault(require("./Alerts"));

var _ThemeOptions = require("../../../../constants/ThemeOptions");

var _defaultContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/defaultContext"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    minimalNoHeader: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '& .Cmt-toggle-menu': {
        color: theme.palette.text.primary,
        marginLeft: 15
      }
    }
  };
});
var layoutOptions = {
  headerType: _ThemeOptions.HEADER_TYPE.STATIC,
  sidebarType: _ThemeOptions.SIDEBAR_TYPE.MINI,
  isSidebarFixed: _defaultContext.default.isSidebarFixed,
  isSidebarOpen: false,
  miniSidebarWidth: 80,
  layoutStyle: _defaultContext.default.layoutType
};

var MinimalNoHeader = function MinimalNoHeader(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Vertical.default, {
    layoutOptions: layoutOptions,
    className: (0, _clsx.default)('verticalMinimalNoHeaderLayout', className),
    header: /*#__PURE__*/_react.default.createElement(_Header.default, {
      className: classes.minimalNoHeader
    }, /*#__PURE__*/_react.default.createElement(_core.Hidden, {
      lgUp: true
    }, /*#__PURE__*/_react.default.createElement(_SidebarToggleHandler.default, {
      edge: "start",
      color: "inherit",
      "aria-label": "menu"
    })), /*#__PURE__*/_react.default.createElement(_Alerts.default, null)),
    sidebar: /*#__PURE__*/_react.default.createElement(_Sidebar.default, null, /*#__PURE__*/_react.default.createElement(_SidebarHeader.default, null), /*#__PURE__*/_react.default.createElement(_SideBar.default, null))
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children, /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = MinimalNoHeader;
exports.default = _default;