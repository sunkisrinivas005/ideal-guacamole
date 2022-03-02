"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _SidebarToggleHandler = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _LanguageSwitcher = _interopRequireDefault(require("../LanguageSwitcher"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _AppsMenu = _interopRequireDefault(require("./AppsMenu"));

var _HeaderNotifications = _interopRequireDefault(require("./HeaderNotifications"));

var _HeaderMessages = _interopRequireDefault(require("./HeaderMessages"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Logo = _interopRequireDefault(require("../Logo"));

var _SearchPopover = _interopRequireDefault(require("../SearchPopover"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  var _root, _searchRoot;

  return {
    root: (_root = {
      width: '100%',
      paddingLeft: 16,
      paddingRight: 16,
      minHeight: 64
    }, (0, _defineProperty2.default)(_root, theme.breakpoints.up('md'), {
      minHeight: 72
    }), (0, _defineProperty2.default)(_root, theme.breakpoints.up('md'), {
      paddingLeft: 24,
      paddingRight: 24
    }), _root),
    searchRoot: (_searchRoot = {
      position: 'relative',
      width: 260
    }, (0, _defineProperty2.default)(_searchRoot, theme.breakpoints.up('md'), {
      width: 350
    }), (0, _defineProperty2.default)(_searchRoot, '& .MuiSvgIcon-root', {
      position: 'absolute',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1
    }), (0, _defineProperty2.default)(_searchRoot, '& .MuiInputBase-root', {
      width: '100%'
    }), (0, _defineProperty2.default)(_searchRoot, '& .MuiInputBase-input', {
      height: 48,
      borderRadius: 30,
      backgroundColor: (0, _styles.alpha)(theme.palette.common.dark, 0.38),
      color: (0, _styles.alpha)(theme.palette.common.white, 0.7),
      boxSizing: 'border-box',
      padding: '5px 15px 5px 50px',
      transition: 'all 0.3s ease',
      '&:focus': {
        backgroundColor: (0, _styles.alpha)(theme.palette.common.dark, 0.58),
        color: (0, _styles.alpha)(theme.palette.common.white, 0.7)
      }
    }), _searchRoot),
    langRoot: (0, _defineProperty2.default)({
      borderLeft: "solid 1px ".concat((0, _styles.alpha)(theme.palette.common.dark, 0.15)),
      minHeight: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 8,
      paddingRight: 8,
      position: 'relative'
    }, theme.breakpoints.down('sm'), {
      minHeight: 64
    }),
    iconBtn: {
      color: (0, _styles.alpha)(theme.palette.common.white, 0.38),
      '&:hover, &:focus': {
        color: theme.palette.common.white
      }
    }
  };
});

var Header = function Header() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_SidebarToggleHandler.default, {
    edge: "start",
    color: "inherit",
    "aria-label": "menu"
  }), /*#__PURE__*/_react.default.createElement(_Logo.default, {
    ml: 2,
    color: "white"
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    flex: 1
  }), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    smDown: true
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    pr: 3,
    className: classes.searchRoot
  }, /*#__PURE__*/_react.default.createElement(_core.InputBase, {
    placeholder: 'Search here...',
    inputProps: {
      'aria-label': 'search'
    }
  }), /*#__PURE__*/_react.default.createElement(_Search.default, null))), /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    mdUp: true
  }, /*#__PURE__*/_react.default.createElement(_SearchPopover.default, {
    iconClassName: classes.iconBtn
  })), /*#__PURE__*/_react.default.createElement(_AppsMenu.default, null), /*#__PURE__*/_react.default.createElement(_HeaderMessages.default, null), /*#__PURE__*/_react.default.createElement(_HeaderNotifications.default, null), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.langRoot
  }, /*#__PURE__*/_react.default.createElement(_LanguageSwitcher.default, null)));
};

var _default = Header;
exports.default = _default;