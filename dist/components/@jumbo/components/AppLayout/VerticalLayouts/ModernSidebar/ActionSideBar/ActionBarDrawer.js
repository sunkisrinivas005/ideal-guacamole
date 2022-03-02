"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Notifications = _interopRequireDefault(require("./Notifications"));

var _Messages = _interopRequireDefault(require("./Messages"));

var _Search = _interopRequireDefault(require("./Search"));

var _Settings = _interopRequireDefault(require("./Settings"));

var _CmtDrawer = _interopRequireDefault(require("../../../../../../@coremat/CmtDrawer"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Search2 = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Message = _interopRequireDefault(require("@material-ui/icons/Message"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Notifications2 = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _Settings2 = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _clsx = _interopRequireDefault(require("clsx"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _excluded = ["activeOption", "onIconClick", "onDrawerClose"];
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    actionSidebar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 5px',
      width: 65,
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    contentArea: (0, _defineProperty2.default)({
      width: 300
    }, theme.breakpoints.up('sm'), {
      width: 557
    }),
    scrollbarRoot: {
      height: '100vh',
      padding: 30
    },
    iconBtn: {
      position: 'relative',
      color: (0, _styles.alpha)(theme.palette.common.dark, 0.38),
      '&:hover, &:focus, &.active': {
        color: theme.palette.primary.main,
        backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, 0.08)
      }
    },
    counterRoot: {
      color: theme.palette.common.white,
      border: "solid 1px ".concat(theme.palette.common.white),
      backgroundColor: theme.palette.warning.main,
      width: 20
    }
  };
});

var ActionBarDrawer = function ActionBarDrawer(_ref) {
  var activeOption = _ref.activeOption,
      onIconClick = _ref.onIconClick,
      onDrawerClose = _ref.onDrawerClose,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtDrawer.default, (0, _extends2.default)({
    variant: "temporary",
    anchor: "left",
    onClose: onDrawerClose
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: (0, _clsx.default)(classes.root)
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.actionSidebar
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.iconBtn,
    onClick: onDrawerClose
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: (0, _clsx.default)(classes.iconBtn, {
      active: activeOption === 'search'
    }),
    onClick: function onClick() {
      return onIconClick('search');
    }
  }, /*#__PURE__*/_react.default.createElement(_Search2.default, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: (0, _clsx.default)(classes.iconBtn, {
      active: activeOption === 'messages'
    }),
    onClick: function onClick() {
      return onIconClick('messages');
    }
  }, /*#__PURE__*/_react.default.createElement(_Message.default, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: (0, _clsx.default)(classes.iconBtn, {
      active: activeOption === 'notifications'
    }),
    onClick: function onClick() {
      return onIconClick('notifications');
    }
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    badgeContent: 4,
    classes: {
      badge: classes.counterRoot
    }
  }, /*#__PURE__*/_react.default.createElement(_Notifications2.default, null))), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: (0, _clsx.default)(classes.iconBtn, {
      active: activeOption === 'settings'
    }),
    onClick: function onClick() {
      return onIconClick('settings');
    }
  }, /*#__PURE__*/_react.default.createElement(_Settings2.default, null))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.contentArea
  }, /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    className: classes.scrollbarRoot
  }, activeOption === 'notifications' && /*#__PURE__*/_react.default.createElement(_Notifications.default, null), activeOption === 'messages' && /*#__PURE__*/_react.default.createElement(_Messages.default, null), activeOption === 'search' && /*#__PURE__*/_react.default.createElement(_Search.default, null), activeOption === 'settings' && /*#__PURE__*/_react.default.createElement(_Settings.default, null)))));
};

var _default = ActionBarDrawer;
exports.default = _default;