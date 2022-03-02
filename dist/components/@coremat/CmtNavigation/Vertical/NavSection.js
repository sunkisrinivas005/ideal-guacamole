"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _NavMenuItem = _interopRequireDefault(require("./NavMenuItem"));

var _NavCollapse = _interopRequireDefault(require("./NavCollapse"));

var _SidebarThemeContext = _interopRequireDefault(require("../../CmtLayouts/SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    navHeader: {
      position: 'relative',
      padding: '24px 16px 20px 16px',
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 10,
      letterSpacing: 1.5,
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        display: 'none'
      }
    },
    navSection: {
      position: 'relative',
      fontWeight: theme.typography.fontWeightRegular,
      '&:not(:first-child) .Cmt-navHeader': {
        borderTop: function borderTop(props) {
          return "solid 1px ".concat(props.sidebarTheme.borderColor);
        },
        marginTop: 10
      },
      '&:not(:last-child)': {
        '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
          borderBottom: function borderBottom(props) {
            return "solid 1px ".concat(props.sidebarTheme.borderColor);
          },
          paddingTop: 10,
          paddingBottom: 10
        }
      }
    }
  };
});

var NavSection = function NavSection(props) {
  var name = props.name,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var isExpandable = children && children.length > 0;

  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext.sidebarTheme;

  var classes = useStyles({
    sidebarTheme: sidebarTheme
  });

  var MenuCollapse = /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    className: (0, _clsx.default)(classes.navHeader, 'Cmt-navHeader')
  }, name);

  var MenuItemChildren = isExpandable ? /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    disablePadding: true
  }, children.map(function (item, index) {
    switch (item.type) {
      case 'section':
        return /*#__PURE__*/_react.default.createElement(NavSection, (0, _extends2.default)({}, item, {
          key: index
        }));

      case 'collapse':
        return /*#__PURE__*/_react.default.createElement(_NavCollapse.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      default:
        return /*#__PURE__*/_react.default.createElement(_NavMenuItem.default, (0, _extends2.default)({}, item, {
          key: index
        }));
    }
  })) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.navSection
  }, MenuCollapse, MenuItemChildren);
};

var _default = NavSection;
exports.default = _default;