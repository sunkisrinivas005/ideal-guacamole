"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _CmtDropdownMenu = _interopRequireDefault(require("../../../../@coremat/CmtDropdownMenu"));

var _CmtAvatar = _interopRequireDefault(require("../../../../@coremat/CmtAvatar"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Person = _interopRequireDefault(require("@material-ui/icons/Person"));

var _ExitToApp = _interopRequireDefault(require("@material-ui/icons/ExitToApp"));

var _reactRedux = require("react-redux");

var _auth = require("../../../../services/auth");

var _AppConstants = require("../../../constants/AppConstants");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _profileRoot;

  return {
    profileRoot: (_profileRoot = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      position: 'relative'
    }, (0, _defineProperty2.default)(_profileRoot, theme.breakpoints.up('md'), {
      paddingLeft: 20
    }), (0, _defineProperty2.default)(_profileRoot, '&:before', {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      backgroundColor: (0, _styles.alpha)(theme.palette.common.dark, 0.15)
    }), _profileRoot)
  };
});
var actionsList = [{
  icon: /*#__PURE__*/_react.default.createElement(_Person.default, null),
  label: 'Account'
}, {
  icon: /*#__PURE__*/_react.default.createElement(_ExitToApp.default, null),
  label: 'Logout'
}];

var UserDropDown = function UserDropDown() {
  var classes = useStyles();
  var dispatch = (0, _reactRedux.useDispatch)();

  var onItemClick = function onItemClick(item) {
    if (item.label === 'Logout') {
      dispatch(_auth.AuhMethods[_AppConstants.CurrentAuthMethod].onLogout());
    }
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: (0, _clsx.default)(classes.profileRoot, 'Cmt-profile-pic')
  }, /*#__PURE__*/_react.default.createElement(_CmtDropdownMenu.default, {
    onItemClick: onItemClick,
    TriggerComponent: /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      size: "small",
      src: 'https://via.placeholder.com/150'
    }),
    items: actionsList
  }));
};

var _default = UserDropDown;
exports.default = _default;