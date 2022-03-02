"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtCardContent = _interopRequireDefault(require("../../../../../../@coremat/CmtCard/CmtCardContent"));

var _CmtList = _interopRequireDefault(require("../../../../../../@coremat/CmtList"));

var _CmtCard = _interopRequireDefault(require("../../../../../../@coremat/CmtCard"));

var _NotificationItem = _interopRequireDefault(require("./NotificationItem"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    cardRoot: {
      '& .Cmt-header-root': {
        paddingTop: 4,
        paddingBottom: 4
      },
      '& .Cmt-card-content': {
        padding: '0 0 16px !important'
      }
    },
    typography: {
      padding: theme.spacing(2)
    },
    iconRoot: {
      position: 'relative',
      color: (0, _styles.alpha)(theme.palette.common.white, 0.38),
      '&:hover, &.active': {
        color: theme.palette.common.white
      }
    },
    counterRoot: {
      color: theme.palette.common.white,
      border: "solid 1px ".concat(theme.palette.common.white),
      backgroundColor: theme.palette.warning.main,
      width: 20
    },
    scrollbarRoot: {
      height: 300,
      padding: 16
    },
    popoverRoot: {
      '& .MuiPopover-paper': {
        width: 375
      }
    }
  };
});
var actions = [{
  label: 'More Detail'
}, {
  label: 'Close'
}];
var headerNotifications = [];

var HeaderNotifications = function HeaderNotifications() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = _react.default.useState(5),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      counter = _React$useState4[0],
      setCounter = _React$useState4[1];

  var theme = (0, _core.useTheme)();

  var onOpenPopOver = function onOpenPopOver(event) {
    setAnchorEl(event.currentTarget);
    setCounter(0);
  };

  var onClosePopOver = function onClosePopOver() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pr: 2
  }, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "Notifications"
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    onClick: onOpenPopOver,
    className: (0, _clsx.default)(classes.iconRoot, 'Cmt-appIcon', {
      active: counter > 0
    })
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    badgeContent: counter,
    classes: {
      badge: classes.counterRoot
    }
  }, /*#__PURE__*/_react.default.createElement(_Notifications.default, null)))), /*#__PURE__*/_react.default.createElement(_core.Popover, {
    className: classes.popoverRoot,
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: onClosePopOver,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_CmtCard.default, {
    className: classes.cardRoot
  }, /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    title: "Notifications",
    actionsPos: "top-corner",
    actions: actions,
    separator: {
      color: theme.palette.borderColor.dark,
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, headerNotifications.length > 0 ? /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    className: classes.scrollbarRoot
  }, /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: headerNotifications,
    renderRow: function renderRow(item, index) {
      return /*#__PURE__*/_react.default.createElement(_NotificationItem.default, {
        key: index,
        item: item
      });
    }
  })) : /*#__PURE__*/_react.default.createElement(_core.Box, {
    p: 6
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2"
  }, "No notifications found"))))));
};

var _default = HeaderNotifications;
exports.default = _default;