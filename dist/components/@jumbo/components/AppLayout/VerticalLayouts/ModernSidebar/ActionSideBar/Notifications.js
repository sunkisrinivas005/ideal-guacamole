"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _CmtList = _interopRequireDefault(require("../../../../../../@coremat/CmtList"));

var _NotificationItem = _interopRequireDefault(require("../../../partials/Header/HeaderNotifications/NotificationItem"));

var _EmptyResult = _interopRequireDefault(require("./EmptyResult"));

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    },
    sectionHeading: {
      fontSize: 10,
      color: theme.palette.text.secondary,
      marginBottom: 20,
      textTransform: 'uppercase'
    }
  };
});
var headerNotifications = [];

var Notifications = function Notifications() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: 22,
    fontWeight: 700
  }, "Notifications"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    color: "primary"
  }, "Dismiss")), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionHeading
  }, "Latest Notifications"), headerNotifications.length > 0 ? /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: headerNotifications,
    renderRow: function renderRow(item, index) {
      return /*#__PURE__*/_react.default.createElement(_NotificationItem.default, {
        key: index,
        item: item
      });
    }
  }) : /*#__PURE__*/_react.default.createElement(_EmptyResult.default, {
    content: "No record found"
  }));
};

var _default = Notifications;
exports.default = _default;