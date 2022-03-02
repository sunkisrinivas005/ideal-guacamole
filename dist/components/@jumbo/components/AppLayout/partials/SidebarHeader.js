"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _CmtAvatar = _interopRequireDefault(require("../../../../@coremat/CmtAvatar"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _reactRedux = require("react-redux");

var _auth = require("../../../../services/auth");

var _AppConstants = require("../../../constants/AppConstants");

var _ExitToApp = _interopRequireDefault(require("@material-ui/icons/ExitToApp"));

var _Person = _interopRequireDefault(require("@material-ui/icons/Person"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _SidebarThemeContext = _interopRequireDefault(require("../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    root: {
      padding: '30px 16px 12px 16px',
      borderBottom: function borderBottom(props) {
        return "solid 1px ".concat(props.sidebarTheme.borderColor);
      }
    },
    userInfo: {
      paddingTop: 24,
      transition: 'all 0.1s ease',
      height: 75,
      opacity: 1,
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        height: 0,
        paddingTop: 0,
        opacity: 0,
        transition: 'all 0.3s ease'
      }
    },
    userTitle: {
      color: function color(props) {
        return props.sidebarTheme.textDarkColor;
      },
      marginBottom: 8
    },
    userSubTitle: {
      fontSize: 14,
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: 0.25
    }
  };
});

var SidebarHeader = function SidebarHeader() {
  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext.sidebarTheme;

  var classes = useStyles({
    sidebarTheme: sidebarTheme
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handlePopoverOpen = function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handlePopoverClose = function handlePopoverClose() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);

  var onLogoutClick = function onLogoutClick() {
    handlePopoverClose();
    dispatch(_auth.AuhMethods[_AppConstants.CurrentAuthMethod].onLogout());
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
    src: 'https://via.placeholder.com/150',
    alt: "User Avatar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.userInfo,
    onClick: handlePopoverOpen
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pointer",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mr-2"
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.userTitle,
    component: "h3",
    variant: "h6"
  }, "Robert Johnson"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.userSubTitle
  }, "robert.johnson@gmail.com")), /*#__PURE__*/_react.default.createElement(_ArrowDropDown.default, null))), open && /*#__PURE__*/_react.default.createElement(_core.Popover, {
    open: open,
    anchorEl: anchorEl,
    container: anchorEl,
    onClose: handlePopoverClose,
    anchorOrigin: {
      vertical: 'center',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'center',
      horizontal: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
    elevation: 8
  }, /*#__PURE__*/_react.default.createElement(_core.MenuList, null, /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    onClick: handlePopoverClose
  }, /*#__PURE__*/_react.default.createElement(_Person.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-2"
  }, "Profile")), /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    onClick: handlePopoverClose
  }, /*#__PURE__*/_react.default.createElement(_Settings.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-2"
  }, "Settings")), /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    onClick: onLogoutClick
  }, /*#__PURE__*/_react.default.createElement(_ExitToApp.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-2"
  }, "Logout"))))));
};

var _default = SidebarHeader;
exports.default = _default;