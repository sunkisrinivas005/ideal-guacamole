"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

var _AllInclusive = _interopRequireDefault(require("@material-ui/icons/AllInclusive"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _CmtNotificationItem = _interopRequireDefault(require("./CmtNotificationItem"));

var _CmtList = _interopRequireDefault(require("../CmtList"));

var _CmtMediaObject = _interopRequireDefault(require("../CmtMediaObject"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    headingRoot: {
      padding: 8,
      display: 'flex',
      alignItems: 'center',
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
});
var avatarPropsStyle = {
  style: {
    height: 48,
    width: 48
  }
};

var RenderRow = function RenderRow(_ref) {
  var notification = _ref.notification,
      onReadUnread = _ref.onReadUnread;
  var name = notification.name,
      avatar = notification.avatar,
      content = notification.content,
      icon = notification.icon,
      time = notification.time,
      media = notification.media,
      status = notification.status;

  var handleReadUnread = _react.default.useCallback(function () {
    onReadUnread(notification);
  }, [onReadUnread]);

  return /*#__PURE__*/_react.default.createElement(_CmtNotificationItem.default, {
    content: /*#__PURE__*/_react.default.createElement(_CmtMediaObject.default, {
      style: {
        alignItems: 'center'
      },
      avatar: avatar,
      avatarPos: "center",
      avatarProps: avatarPropsStyle,
      title: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", null, content), /*#__PURE__*/_react.default.createElement(_core.Typography, {
        component: "span",
        color: "primary"
      }, name)),
      subTitle: /*#__PURE__*/_react.default.createElement(_core.Box, {
        display: "flex",
        alignItems: "center"
      }, icon, /*#__PURE__*/_react.default.createElement("span", {
        style: {
          marginLeft: 4
        }
      }, time)),
      footerComponent: media && /*#__PURE__*/_react.default.createElement(_core.Avatar, {
        src: media,
        variant: "square",
        style: {
          height: 48,
          width: 48
        }
      })
    }),
    readState: status === 'read',
    onReadUnread: handleReadUnread,
    actionMenu: /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      size: "small"
    }, /*#__PURE__*/_react.default.createElement(_MoreHoriz.default, null))
  });
};

var CmtNotifications = function CmtNotifications(_ref2) {
  var title = _ref2.title,
      controlOption = _ref2.controlOption;
  var classes = useStyles();

  var _useState = (0, _react.useState)(notifications),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var handleReadUnread = function handleReadUnread(notification) {
    notification.status = notification.status === 'read' ? 'unread' : 'read';
    setData(data.map(function (item) {
      if (item.id === notification.id) {
        return notification;
      }

      return item;
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.headingRoot
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "h3",
    color: "text.primary",
    my: 0
  }, title), /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: "auto"
  }, controlOption)), /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: data,
    renderRow: function renderRow(item, index) {
      return /*#__PURE__*/_react.default.createElement(RenderRow, {
        notification: item,
        key: index,
        onReadUnread: handleReadUnread
      });
    },
    onEndReached: function onEndReached() {},
    footerProps: {
      loading: true,
      footerText: 'No More Notifications'
    }
  }));
};

CmtNotifications.prototype = {
  title: _propTypes.default.string
};
CmtNotifications.defaultProps = {
  title: 'Notifications'
};
var _default = CmtNotifications;
exports.default = _default;
var notifications = [{
  id: 1,
  name: 'Remy Sharp',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_AllInclusive.default, null),
  time: '5h',
  media: 'https://material-ui.com/static/images/grid-list/camera.jpg',
  status: 'unread'
}, {
  id: 2,
  name: 'Travis Howard',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_Info.default, null),
  time: '10h',
  media: '',
  status: 'unread'
}, {
  id: 3,
  name: 'Sumitra Choudhary',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_AllInclusive.default, null),
  time: '1d',
  media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
  status: 'unread'
}, {
  id: 4,
  name: 'Cindy Baker',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
  icon: 'favorite',
  time: '2d',
  media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
  status: 'unread'
}, {
  id: 5,
  name: 'Agnes Walker',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_AllInclusive.default, null),
  time: '5d',
  media: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
  status: 'unread'
}, {
  id: 6,
  name: 'Trevor Henderson',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/6.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_Info.default, null),
  time: '1w',
  media: '',
  status: 'unread'
}, {
  id: 7,
  name: 'Sumitra Choudhary',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_AllInclusive.default, null),
  time: '4w',
  media: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
  status: 'unread'
}, {
  id: 8,
  name: 'Sumitra Choudhary',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
  icon: 'favorite',
  time: '1m',
  media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
  status: 'unread'
}, {
  id: 9,
  name: 'Trevor Henderson',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_Info.default, null),
  time: '2m',
  media: '',
  status: 'unread'
}, {
  id: 10,
  name: 'Sharp Henderson',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/7.jpg',
  icon: 'favorite',
  time: '5m',
  media: '',
  status: 'unread'
}, {
  id: 11,
  name: 'Travis  Baker',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_AllInclusive.default, null),
  time: '6m',
  media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
  status: 'unread'
}, {
  id: 12,
  name: 'Agnes  Baker',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_Info.default, null),
  time: '6m',
  media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
  status: 'unread'
}, {
  id: 13,
  name: 'Sumitra Henderson',
  content: 'You have a new friend suggestion: ',
  avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
  icon: /*#__PURE__*/_react.default.createElement(_AllInclusive.default, null),
  time: '7m',
  media: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
  status: 'read'
}];