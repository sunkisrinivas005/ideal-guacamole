"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _NavSection = _interopRequireDefault(require("./NavSection"));

var _NavMenuItem = _interopRequireDefault(require("./NavMenuItem"));

var _SidebarThemeContext = _interopRequireDefault(require("../../CmtLayouts/SidebarThemeContext/SidebarThemeContext"));

var _JssHelper = require("../../CmtHelpers/JssHelper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    navCollapseBtn: {
      position: 'relative',
      padding: '0 16px 0 0',
      '& .MuiTouchRipple-root': {
        display: 'none'
      },
      '&:hover, &:focus': {
        backgroundColor: 'transparent'
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        paddingLeft: 16
      }
    },
    navCollapse: {
      position: 'relative',
      '&.open': {
        '& .Cmt-navCollapseBtn': {
          color: function color(props) {
            return props.sidebarTheme.textDarkColor;
          }
        },
        '& .Cmt-iconRoot': {
          color: theme.palette.primary.main
        }
      },
      '& .Cmt-navHeader': {
        paddingLeft: 36
      }
    },
    navCollapseBtnInner: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '9px 16px 9px 32px',
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      '&:hover, &:focus': {
        color: function color(props) {
          return props.sidebarTheme.textDarkColor;
        },
        backgroundColor: function backgroundColor(props) {
          return props.sidebarTheme.navHoverBgColor;
        },
        '& .Cmt-iconRoot': {
          color: function color(props) {
            return props.sidebarTheme.textDarkColor;
          }
        }
      },
      '.Cmt-miniLayout &': {
        paddingRight: 13,
        paddingLeft: 13
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
        paddingRight: 16,
        paddingLeft: 32
      }
    },
    navText: {
      flex: 1,
      fontSize: 14,
      letterSpacing: 0.25,
      whiteSpace: 'nowrap',
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        display: 'none'
      }
    },
    iconRoot: {
      marginRight: 16,
      fontSize: 20
    },
    navArrow: {
      position: 'absolute',
      left: 8,
      top: '50%',
      zIndex: 1,
      transform: 'translateY(-50%)',
      fontSize: 16,
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        display: 'none'
      }
    },
    navCollapseItem: {
      position: 'relative',
      '& .Cmt-icon-root': {
        transition: 'all 0.3s ease',
        transform: 'translateX(-100%)',
        opacity: 0,
        visibility: 'hidden',
        marginRight: 0
      },
      '& .Cmt-nav-text': {
        transition: 'all 0.35s ease',
        marginLeft: -20
      },
      '& .Cmt-nav-menu-link': {
        padding: '9px 16px 9px 70px',
        transition: 'all 0.3s ease',
        '&:hover, &:focus': {
          '& .Cmt-icon-root': {
            transform: 'translateX(0)',
            marginRight: 10,
            opacity: 1,
            visibility: 'visible'
          },
          '& .Cmt-nav-text': {
            marginLeft: 0
          }
        },
        '&.active': {
          '& .Cmt-icon-root': {
            transform: 'translateX(0)',
            marginRight: 10,
            opacity: 1,
            visibility: 'visible'
          },
          '& .Cmt-nav-text': {
            marginLeft: 0
          }
        },
        '.Cmt-miniLayout &': {
          paddingRight: 13,
          paddingLeft: 13
        },
        '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
          paddingRight: 16,
          paddingLeft: 70
        }
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        display: 'none'
      }
    }
  };
});

var NavCollapse = function NavCollapse(props) {
  var history = (0, _reactRouterDom.useHistory)();

  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext.sidebarTheme;

  var classes = useStyles({
    sidebarTheme: sidebarTheme
  });
  var name = props.name,
      icon = props.icon,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var isExpandable = children.length;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  (0, _react.useEffect)(function () {
    if ((0, _JssHelper.isUrlInChildren)(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  var handleClick = function handleClick() {
    setOpen(!open);
  };

  var renderIcon = (0, _react.useCallback)(function () {
    if (icon && /*#__PURE__*/(0, _react.isValidElement)(icon)) {
      return /*#__PURE__*/(0, _react.cloneElement)(icon, {
        className: classes.iconRoot
      });
    }

    return null;
  }, [icon, classes]);

  var MenuCollapse = /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    className: (0, _clsx.default)(classes.navCollapseBtn, 'Cmt-navCollapseBtn'),
    button: true,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.navCollapseBtnInner
  }, isExpandable && !open && /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    className: classes.navArrow
  }), isExpandable && open && /*#__PURE__*/_react.default.createElement(_ExpandLess.default, {
    className: classes.navArrow
  }), renderIcon(), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.navText
  }, name)));

  var MenuItemChildren = isExpandable ? /*#__PURE__*/_react.default.createElement(_core.Collapse, {
    className: classes.navCollapseItem,
    in: open,
    timeout: "auto"
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    disablePadding: true
  }, children.map(function (item, index) {
    switch (item.type) {
      case 'section':
        return /*#__PURE__*/_react.default.createElement(_NavSection.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      case 'collapse':
        return /*#__PURE__*/_react.default.createElement(NavCollapse, (0, _extends2.default)({}, item, {
          key: index
        }));

      case 'item':
        return /*#__PURE__*/_react.default.createElement(_NavMenuItem.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      default:
        return null;
    }
  }))) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.navCollapse, "".concat(open ? 'open' : ''))
  }, MenuCollapse, MenuItemChildren);
};

var _default = NavCollapse;
exports.default = _default;