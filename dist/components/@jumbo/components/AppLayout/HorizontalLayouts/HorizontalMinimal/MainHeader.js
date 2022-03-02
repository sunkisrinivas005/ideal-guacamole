"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Logo = _interopRequireDefault(require("../../partials/Logo"));

var _SidebarToggleHandler = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Horizontal/SidebarToggleHandler"));

var _AppsMenu = _interopRequireDefault(require("../../partials/Header/AppsMenu"));

var _HeaderMessages = _interopRequireDefault(require("../../partials/Header/HeaderMessages"));

var _HeaderNotifications = _interopRequireDefault(require("../../partials/Header/HeaderNotifications"));

var _LanguageSwitcher = _interopRequireDefault(require("../../partials/LanguageSwitcher"));

var _SearchPopover = _interopRequireDefault(require("../../partials/SearchPopover"));

var _UserDropDown = _interopRequireDefault(require("../../partials/UserDropDown"));

var _Horizontal = _interopRequireDefault(require("../../../../../@coremat/CmtNavigation/Horizontal"));

var _menus = require("../../partials/menus");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root, _langRoot;

  return {
    root: (_root = {
      display: 'flex',
      padding: 0,
      minHeight: 10
    }, (0, _defineProperty2.default)(_root, theme.breakpoints.down('md'), {
      paddingTop: 12,
      paddingBottom: 12
    }), (0, _defineProperty2.default)(_root, '& .Cmt-appIcon', (0, _defineProperty2.default)({
      color: theme.palette.text.secondary,
      '&:hover, &:focus': {
        color: (0, _core.darken)(theme.palette.text.secondary, 0.2)
      }
    }, theme.breakpoints.down('xs'), {
      padding: 7
    })), (0, _defineProperty2.default)(_root, '& .Cmt-horizontalNavMenu', {
      position: 'static',
      '& .Cmt-navMegaBtn, & > .Cmt-navCollapse > .Cmt-navCollapseBtn': {
        minHeight: 64
      }
    }), _root),
    langRoot: (_langRoot = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 5,
      paddingRight: 5,
      position: 'relative'
    }, (0, _defineProperty2.default)(_langRoot, theme.breakpoints.up('md'), {
      paddingLeft: 15,
      paddingRight: 15
    }), (0, _defineProperty2.default)(_langRoot, '&:before', {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      backgroundColor: (0, _styles.alpha)(theme.palette.common.dark, 0.15)
    }), _langRoot),
    searchIcon: (0, _defineProperty2.default)({}, theme.breakpoints.down('xs'), {
      padding: 9
    })
  };
});

var MainHeader = function MainHeader() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Toolbar, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_SidebarToggleHandler.default, {
    edge: "start",
    color: "inherit",
    "aria-label": "menu"
  }), /*#__PURE__*/_react.default.createElement(_Logo.default, {
    mr: {
      xs: 2,
      sm: 4,
      lg: 6,
      xl: 8
    },
    color: "white"
  }), /*#__PURE__*/_react.default.createElement(_core.Hidden, {
    mdDown: true
  }, /*#__PURE__*/_react.default.createElement(_Horizontal.default, {
    menuItems: _menus.minimalHorizontalMenus
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    ml: "auto"
  }, /*#__PURE__*/_react.default.createElement(_SearchPopover.default, {
    iconClassName: (0, _clsx.default)(classes.searchIcon, 'Cmt-searchIcon')
  }), /*#__PURE__*/_react.default.createElement(_AppsMenu.default, null), /*#__PURE__*/_react.default.createElement(_HeaderMessages.default, null), /*#__PURE__*/_react.default.createElement(_HeaderNotifications.default, null), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: (0, _clsx.default)(classes.langRoot, 'Cmt-i18n-switch')
  }, /*#__PURE__*/_react.default.createElement(_LanguageSwitcher.default, null)), /*#__PURE__*/_react.default.createElement(_UserDropDown.default, null)));
};

var _default = MainHeader;
exports.default = _default;