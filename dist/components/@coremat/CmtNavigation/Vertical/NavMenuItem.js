"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _SidebarThemeContext = _interopRequireDefault(require("../../CmtLayouts/SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    navMenuItem: {
      padding: '0 16px 0 0',
      position: 'relative',
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        paddingLeft: 16
      }
    },
    navMenuLink: {
      display: 'flex',
      alignItems: 'center',
      padding: '9px 16px 9px 32px',
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      color: function color(props) {
        return props.sidebarTheme.textColor;
      },
      '&:hover, &:focus': {
        color: function color(props) {
          return props.sidebarTheme.textDarkColor;
        },
        backgroundColor: function backgroundColor(props) {
          return props.sidebarTheme.navHoverBgColor;
        },
        '& .Cmt-icon-root, & .Cmt-nav-text': {
          color: function color(props) {
            return props.sidebarTheme.textDarkColor;
          }
        }
      },
      '&.active': {
        color: function color(props) {
          return props.sidebarTheme.textActiveColor;
        },
        backgroundColor: function backgroundColor(props) {
          return props.sidebarTheme.navActiveBgColor;
        },
        '& .Cmt-icon-root, & .Cmt-nav-text': {
          color: function color(props) {
            return props.sidebarTheme.textActiveColor;
          }
        },
        '&:hover, &:focus': {
          '& .Cmt-nav-text, & .Cmt-icon-root': {
            color: function color(props) {
              return props.sidebarTheme.textActiveColor;
            }
          }
        }
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        justifyContent: 'center',
        padding: 0,
        height: 40,
        width: 40,
        borderRadius: '50%',
        marginLeft: 4,
        marginRight: 4
      }
    },
    navText: {
      flex: 1,
      fontSize: 14,
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        display: 'none'
      }
    },
    iconRoot: {
      marginRight: 16,
      fontSize: 20,
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        marginRight: 0
      }
    }
  };
});

var NavMenuItem = function NavMenuItem(props) {
  var name = props.name,
      icon = props.icon,
      link = props.link;

  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext.sidebarTheme;

  var classes = useStyles({
    sidebarTheme: sidebarTheme
  });

  var renderIcon = function renderIcon() {
    if (icon && /*#__PURE__*/(0, _react.isValidElement)(icon)) {
      return /*#__PURE__*/(0, _react.cloneElement)(icon, {
        className: (0, _clsx.default)(classes.iconRoot, 'Cmt-icon-root')
      });
    }

    return null;
  };

  return /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    className: (0, _clsx.default)(classes.navMenuItem, 'Cmt-nav-menu-item')
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: (0, _clsx.default)(classes.navMenuLink, 'Cmt-nav-menu-link'),
    to: link
  }, renderIcon(), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _clsx.default)(classes.navText, 'Cmt-nav-text')
  }, name)));
};

var _default = NavMenuItem;
exports.default = _default;