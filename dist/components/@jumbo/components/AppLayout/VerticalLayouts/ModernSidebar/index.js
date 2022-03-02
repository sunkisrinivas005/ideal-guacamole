"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Vertical = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical"));

var _Sidebar = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Sidebar"));

var _Content = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/Content"));

var _SideBar = _interopRequireDefault(require("../../partials/SideBar"));

var _ContentLoader = _interopRequireDefault(require("../../../ContentLoader"));

var _ActionSideBar = _interopRequireDefault(require("./ActionSideBar"));

var _Logo = _interopRequireDefault(require("../../partials/Logo"));

var _ThemeOptions = require("../../../../constants/ThemeOptions");

var _AppContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/AppContext"));

var _defaultContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/defaultContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    sidebarHeader: (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      height: 72
    })
  };
});
var layoutOptions = {
  sidebarType: _defaultContext.default.sidebarType,
  isSidebarFixed: _defaultContext.default.isSidebarFixed,
  actionSidebarWidth: 80,
  layoutStyle: _defaultContext.default.layoutType
};

var ModernSideBar = function ModernSideBar(_ref) {
  var children = _ref.children,
      className = _ref.className;
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_AppContext.default),
      themeType = _useContext.themeType;

  return /*#__PURE__*/_react.default.createElement(_Vertical.default, {
    className: (0, _clsx.default)('Cmt-modernLayout', className),
    layoutOptions: layoutOptions,
    sidebar: /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
      actionBar: /*#__PURE__*/_react.default.createElement(_ActionSideBar.default, null)
    }, /*#__PURE__*/_react.default.createElement(_Hidden.default, {
      mdDown: true
    }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
      color: themeType !== _ThemeOptions.THEME_TYPES.LIGHT ? 'white' : 'dark',
      className: classes.sidebarHeader
    })), /*#__PURE__*/_react.default.createElement(_SideBar.default, null))
  }, /*#__PURE__*/_react.default.createElement(_Content.default, null, children, /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = ModernSideBar;
exports.default = _default;