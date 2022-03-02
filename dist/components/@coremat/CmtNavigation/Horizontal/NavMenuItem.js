"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _reactRouterDom = require("react-router-dom");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    navMenuLink: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 10px 10px 20px',
      color: theme.palette.horizontalNav.textColor,
      '&:hover, &:focus': {
        color: theme.palette.horizontalNav.textDarkColor,
        backgroundColor: theme.palette.horizontalNav.menuHoverBgColor,
        '& .Cmt-icon-root': {
          color: theme.palette.horizontalNav.textDarkColor
        }
      },
      '&.active': {
        color: theme.palette.horizontalNav.textActiveColor,
        backgroundColor: theme.palette.horizontalNav.menuActiveBgColor,
        '& .Cmt-icon-root': {
          color: theme.palette.horizontalNav.textActiveColor
        },
        '&:hover, &:focus': {
          '& .Cmt-icon-root': {
            color: theme.palette.horizontalNav.textActiveColor
          }
        }
      }
    },
    iconRoot: {
      marginRight: 16,
      fontSize: 20
    }
  };
});

var NavMenuItem = function NavMenuItem(props) {
  var name = props.name,
      icon = props.icon,
      link = props.link,
      handleClick = props.handleClick;
  var classes = useStyles();

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
    disablePadding: true,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: (0, _clsx.default)(classes.navMenuLink, 'Cmt-nav-menu-link'),
    to: link
  }, renderIcon(), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    className: (0, _clsx.default)(classes.navText, 'Cmt-nav-text')
  }, name)));
};

var _default = NavMenuItem;
exports.default = _default;