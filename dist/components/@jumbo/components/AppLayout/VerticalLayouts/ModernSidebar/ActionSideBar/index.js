"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Message = _interopRequireDefault(require("@material-ui/icons/Message"));

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _Person = _interopRequireDefault(require("@material-ui/icons/Person"));

var _ExitToApp = _interopRequireDefault(require("@material-ui/icons/ExitToApp"));

var _styles = require("@material-ui/core/styles");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _CmtDropdownMenu = _interopRequireDefault(require("../../../../../../@coremat/CmtDropdownMenu"));

var _CmtAvatar = _interopRequireDefault(require("../../../../../../@coremat/CmtAvatar"));

var _SidebarToggleHandler = _interopRequireDefault(require("../../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler"));

var _LayoutContext = _interopRequireDefault(require("../../../../../../@coremat/CmtLayouts/LayoutContext"));

var _auth = require("../../../../../../services/auth");

var _AppConstants = require("../../../../../constants/AppConstants");

var _Logo = _interopRequireDefault(require("../../../partials/Logo"));

var _ActionBarDrawer = _interopRequireDefault(require("./ActionBarDrawer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root;

  return {
    root: (_root = {
      display: 'flex',
      padding: '10px 24px 10px 15px'
    }, (0, _defineProperty2.default)(_root, theme.breakpoints.up('lg'), {
      flexDirection: 'column',
      padding: '16px 5px'
    }), (0, _defineProperty2.default)(_root, "alignItems", 'center'), (0, _defineProperty2.default)(_root, "backgroundColor", theme.palette.primary.main), (0, _defineProperty2.default)(_root, "color", theme.palette.common.white), _root),
    iconBtn: {
      position: 'relative',
      color: (0, _styles.alpha)(theme.palette.common.white, 0.9),
      '&:hover, &:focus': {
        color: theme.palette.common.white
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
var actionsList = [{
  icon: /*#__PURE__*/_react.default.createElement(_Person.default, null),
  label: 'Account'
}, {
  icon: /*#__PURE__*/_react.default.createElement(_ExitToApp.default, null),
  label: 'Logout'
}];
var initSidebarWidth = 0;

var ActionSideBar = function ActionSideBar(_ref) {
  var width = _ref.width;
  var classes = useStyles();
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDrawerOpen = _useState2[0],
      setDrawerStatus = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      activeOption = _useState4[0],
      setActiveOption = _useState4[1];

  var _useContext = (0, _react.useContext)(_LayoutContext.default),
      isSidebarOpen = _useContext.isSidebarOpen,
      setSidebarOpen = _useContext.setSidebarOpen,
      sidebarWidth = _useContext.sidebarWidth,
      setSidebarWidth = _useContext.setSidebarWidth;

  (0, _react.useEffect)(function () {
    initSidebarWidth = sidebarWidth; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _react.useEffect)(function () {
    if (isSidebarOpen && (width === 'lg' || width === 'xl')) {
      setSidebarWidth(0);
    } else {
      setSidebarWidth(initSidebarWidth);
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isSidebarOpen, width]);
  (0, _react.useEffect)(function () {
    if (activeOption && !isDrawerOpen) {
      setDrawerStatus(true);
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [activeOption]);

  var onItemClick = function onItemClick(item) {
    if (item.label === 'Logout') {
      dispatch(_auth.AuhMethods[_AppConstants.CurrentAuthMethod].onLogout());
    }
  };

  var onIconClick = function onIconClick(option) {
    setActiveOption(option);
  };

  var onDrawerClose = function onDrawerClose() {
    setDrawerStatus(false);
    setActiveOption(null);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, 'actionSidebar')
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_SidebarToggleHandler.default, {
    className: classes.iconBtn
  }, isSidebarOpen && (width === 'lg' || width === 'xl') && /*#__PURE__*/_react.default.createElement(_Close.default, null)), /*#__PURE__*/_react.default.createElement(_core.Hidden, {
    lgUp: true
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    color: "white",
    ml: {
      xs: 3,
      sm: 6
    }
  }))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    flexDirection: {
      xs: 'row',
      lg: 'column'
    },
    ml: {
      xs: 'auto',
      lg: 'unset'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.iconBtn,
    onClick: function onClick() {
      return onIconClick('search');
    }
  }, /*#__PURE__*/_react.default.createElement(_Search.default, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.iconBtn,
    onClick: function onClick() {
      return onIconClick('messages');
    }
  }, /*#__PURE__*/_react.default.createElement(_Message.default, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.iconBtn,
    onClick: function onClick() {
      return onIconClick('notifications');
    }
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    badgeContent: 4,
    classes: {
      badge: classes.counterRoot
    }
  }, /*#__PURE__*/_react.default.createElement(_Notifications.default, null))), isSidebarOpen && (width === 'lg' || width === 'xl') && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.iconBtn,
    onClick: function onClick() {
      return setSidebarOpen(!isSidebarOpen);
    }
  }, /*#__PURE__*/_react.default.createElement(_MoreVert.default, null))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    flexDirection: {
      xs: 'row',
      lg: 'column'
    },
    mt: {
      xs: 'unset',
      lg: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.iconBtn,
    onClick: function onClick() {
      return onIconClick('settings');
    }
  }, /*#__PURE__*/_react.default.createElement(_Settings.default, null)), /*#__PURE__*/_react.default.createElement(_CmtDropdownMenu.default, {
    onItemClick: onItemClick,
    TriggerComponent: /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      src: 'https://via.placeholder.com/150'
    }),
    items: actionsList
  })), /*#__PURE__*/_react.default.createElement(_ActionBarDrawer.default, {
    activeOption: activeOption,
    open: isDrawerOpen,
    onDrawerClose: onDrawerClose,
    onIconClick: onIconClick
  }));
};

var _default = (0, _core.withWidth)()(ActionSideBar);

exports.default = _default;