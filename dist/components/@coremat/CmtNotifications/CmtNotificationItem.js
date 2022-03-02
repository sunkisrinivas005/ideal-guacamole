"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Brightness = _interopRequireDefault(require("@material-ui/icons/Brightness1"));

var _RadioButtonUnchecked = _interopRequireDefault(require("@material-ui/icons/RadioButtonUnchecked"));

var _excluded = ["content", "readIcon", "unReadIcon", "readState", "className", "onReadUnread", "actionMenu"];
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: 5,
      '&:not(:first-child)': {
        borderTop: "1px solid ".concat((0, _styles.alpha)(theme.palette.divider, 0.035))
      }
    },
    dotBtn: {
      position: 'relative',
      '& .MuiSvgIcon-root': {
        fontSize: 10,
        width: 10,
        height: 10
      }
    }
  };
});

var CmtNotificationItem = function CmtNotificationItem(_ref) {
  var content = _ref.content,
      readIcon = _ref.readIcon,
      unReadIcon = _ref.unReadIcon,
      readState = _ref.readState,
      className = _ref.className,
      onReadUnread = _ref.onReadUnread,
      actionMenu = _ref.actionMenu,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, 'CmtNotificationItem-root', className)
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Box, {
    flex: 1
  }, content), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ml: 3
  }, actionMenu, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: readState ? 'Mark as unread' : 'Mark as read'
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: (0, _clsx.default)(classes.dotBtn, 'Cmt-dot-btn'),
    size: "small",
    onClick: onReadUnread
  }, readState ? readIcon || /*#__PURE__*/_react.default.createElement(_Brightness.default, null) : unReadIcon || /*#__PURE__*/_react.default.createElement(_RadioButtonUnchecked.default, null)))));
};

CmtNotificationItem.prototype = {
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  readIcon: _propTypes.default.element,
  unReadIcon: _propTypes.default.element,
  readState: _propTypes.default.bool,
  onReadUnread: _propTypes.default.func,
  actionMenu: _propTypes.default.element
};
CmtNotificationItem.defaultProps = {
  readState: false,
  readIcon: '',
  unReadIcon: ''
};
var _default = CmtNotificationItem;
exports.default = _default;