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

var _LayoutContext = _interopRequireDefault(require("../LayoutContext"));

var _CmtDrawer = _interopRequireDefault(require("../../CmtDrawer"));

var _SidebarThemeContext = _interopRequireDefault(require("../SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function () {
  return {
    appSidebar: {
      display: 'flex',
      flexDirection: 'column',
      width: function width(props) {
        return props.sidebarWidth;
      },
      height: '100%',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 999,
      '.Cmt-drawer-sidebar &': {
        position: 'relative'
      },
      '& .scrollbar-container': {
        height: '100vh',
        width: '100%'
      }
    },
    appSidebarContent: {
      height: '100%',
      position: 'relative',
      transition: 'all 0.3s ease',
      backgroundColor: function backgroundColor(props) {
        return props.sidebarTheme.bgColor;
      },
      color: function color(props) {
        return props.sidebarTheme.textColor;
      },
      overflow: 'hidden',
      boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)',
      '& > *': {
        position: 'relative',
        zIndex: 3
      }
    },
    overlayRoot: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%'
    }
  };
});

var CmtSidebarContent = function CmtSidebarContent(_ref) {
  var classes = _ref.classes,
      children = _ref.children;

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

var CmtSidebar = function CmtSidebar(props) {
  var children = props.children;

  var _useContext2 = (0, _react.useContext)(_LayoutContext.default),
      isSidebarOpen = _useContext2.isSidebarOpen,
      setSidebarOpen = _useContext2.setSidebarOpen,
      drawerBreakPoint = _useContext2.drawerBreakPoint,
      sidebarWidth = _useContext2.sidebarWidth;

  var _useContext3 = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext3.sidebarTheme;

  var theme = (0, _core.useTheme)();
  var matches = (0, _core.useMediaQuery)(theme.breakpoints.down(drawerBreakPoint));
  var classes = useStyles({
    sidebarWidth: sidebarWidth,
    sidebarTheme: sidebarTheme
  });

  if (matches) {
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
  } else {
    return null;
  }
};

var _default = CmtSidebar;
exports.default = _default;