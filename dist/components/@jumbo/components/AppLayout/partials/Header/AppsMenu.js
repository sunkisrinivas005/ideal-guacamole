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

var _Apps = _interopRequireDefault(require("@material-ui/icons/Apps"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _CmtCard = _interopRequireDefault(require("../../../../../@coremat/CmtCard"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtCardContent = _interopRequireDefault(require("../../../../../@coremat/CmtCard/CmtCardContent"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _ContactMail = _interopRequireDefault(require("@material-ui/icons/ContactMail"));

var _Chat = _interopRequireDefault(require("@material-ui/icons/Chat"));

var _CmtGridView = _interopRequireDefault(require("../../../../../@coremat/CmtGridView"));

var _CmtAvatar = _interopRequireDefault(require("../../../../../@coremat/CmtAvatar"));

var _reactRouterDom = require("react-router-dom");

var _clsx = _interopRequireDefault(require("clsx"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    cardRoot: {
      '& .Cmt-header-root': {
        paddingTop: 4,
        paddingBottom: 4
      }
    },
    typography: {
      padding: theme.spacing(2)
    },
    iconRoot: {
      color: (0, _styles.alpha)(theme.palette.common.white, 0.38),
      '&:hover, &:focus': {
        color: theme.palette.common.white
      }
    }
  };
});
var actions = [{
  label: 'More Detail'
}, {
  label: 'Close'
}];
var applications = [{
  name: 'Email',
  icon: /*#__PURE__*/_react.default.createElement(_Email.default, {
    style: {
      color: '#0795F4'
    }
  }),
  bgColor: '#CDEAFD',
  path: '/apps/mail'
}, {
  name: 'Task',
  icon: /*#__PURE__*/_react.default.createElement(_CheckCircle.default, {
    style: {
      color: '#FF8C00'
    }
  }),
  bgColor: '#FFE8CC',
  path: '/apps/to-do'
}, {
  name: 'Contacts',
  icon: /*#__PURE__*/_react.default.createElement(_ContactMail.default, {
    style: {
      color: '#8DCD03'
    }
  }),
  bgColor: '#E8F5CD',
  path: '/apps/contact'
}, {
  name: 'Chating',
  icon: /*#__PURE__*/_react.default.createElement(_Chat.default, {
    style: {
      color: '#6200EE'
    }
  }),
  bgColor: '#E0CCFC',
  path: '/apps/chat'
}];

var appItem = function appItem(item, index, _onClick) {
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    key: index,
    py: 2,
    className: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    onClick: function onClick() {
      return _onClick(item.path);
    }
  }, /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
    style: {
      backgroundColor: item.bgColor
    },
    size: 62
  }, item.icon), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#666666"
  }, item.name));
};

var AppsMenu = function AppsMenu() {
  var classes = useStyles();
  var history = (0, _reactRouterDom.useHistory)();

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var theme = (0, _core.useTheme)();

  var onOpenPopOver = function onOpenPopOver(event) {
    setAnchorEl(event.currentTarget);
  };

  var onClosePopOver = function onClosePopOver() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;

  var onClickApp = function onClickApp(path) {
    history.push(path);
    onClosePopOver();
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: "Applications"
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    onClick: onOpenPopOver,
    className: (0, _clsx.default)(classes.iconRoot, 'Cmt-appIcon')
  }, /*#__PURE__*/_react.default.createElement(_Apps.default, null))), /*#__PURE__*/_react.default.createElement(_core.Popover, {
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
    title: "Applications",
    actionsPos: "top-corner",
    actions: actions,
    separator: {
      color: theme.palette.borderColor.dark,
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, applications.length > 0 ? /*#__PURE__*/_react.default.createElement(_CmtGridView.default, {
    itemPadding: 24,
    column: 2,
    data: applications,
    renderRow: function renderRow(item, index) {
      return appItem(item, index, onClickApp);
    }
  }) : /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2"
  }, "No applications found")))));
};

var _default = AppsMenu;
exports.default = _default;