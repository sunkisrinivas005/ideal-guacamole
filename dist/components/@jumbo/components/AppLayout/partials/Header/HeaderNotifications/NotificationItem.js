"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Message = _interopRequireDefault(require("@material-ui/icons/Message"));

var _Share = _interopRequireDefault(require("@material-ui/icons/Share"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Cake = _interopRequireDefault(require("@material-ui/icons/Cake"));

var _CmtMediaObject = _interopRequireDefault(require("../../../../../../@coremat/CmtMediaObject"));

var _CmtAvatar = _interopRequireDefault(require("../../../../../../@coremat/CmtAvatar"));

var _dateHelper = require("../../../../../utils/dateHelper");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _core = require("@material-ui/core");

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    feedItemRoot: {
      padding: '10px 0',
      position: 'relative',
      borderBottom: "1px solid ".concat((0, _core.fade)(theme.palette.common.dark, 0.035)),
      '& .Cmt-media-object': {
        alignItems: 'center'
      },
      '& .Cmt-media-image': {
        alignSelf: 'flex-start',
        width: 56
      },
      '& .Cmt-media-body': {
        width: 'calc(100% - 56px)',
        flex: 'inherit'
      }
    },
    titleRoot: {
      letterSpacing: 0.25,
      marginBottom: 6,
      cursor: 'pointer'
    }
  };
});
var icons = {
  POSTING: /*#__PURE__*/_react.default.createElement(_Message.default, {
    style: {
      color: '#836AFF'
    }
  }),
  SHARED_POST: /*#__PURE__*/_react.default.createElement(_Share.default, {
    style: {
      color: '#0795F4'
    }
  }),
  INVITATION: /*#__PURE__*/_react.default.createElement(_Email.default, {
    style: {
      color: '#00C4B4'
    }
  }),
  BIRTHDAY: /*#__PURE__*/_react.default.createElement(_Cake.default, {
    style: {
      color: '#EF933C'
    }
  })
};

var getPostContent = function getPostContent(item, classes) {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h5",
    className: classes.titleRoot
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    color: "primary.main"
  }, item.user.name), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1
  }, "has recently posted an"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1
  }, item.metaData.post.type));
};

var getSharedContent = function getSharedContent(item, classes) {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h5",
    className: classes.titleRoot
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    color: "primary.main"
  }, item.user.name), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1
  }, "has shared"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1,
    color: "primary.main"
  }, "".concat(item.metaData.post.owner.name, "'s")), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1
  }, "post."));
};

var getBirthdayContent = function getBirthdayContent(item, classes) {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h5",
    className: classes.titleRoot
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    color: "blue"
  }, item.user.name), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1
  }, "has birthday today."));
};

var getInvitationContent = function getInvitationContent(item, classes) {
  return /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h5",
    className: classes.titleRoot
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    color: "blue"
  }, item.metaData.user.name), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    ml: 1
  }, "has sent you a group invitation for"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    color: "blue",
    ml: 1
  }, item.metaData.group.name));
};

var NotificationItem = function NotificationItem(_ref) {
  var item = _ref.item;
  var classes = useStyles();

  var getTitle = function getTitle(item, classes) {
    switch (item.type) {
      case 'POSTING':
        return getPostContent(item, classes);

      case 'SHARED_POST':
        return getSharedContent(item, classes);

      case 'INVITATION':
        return getInvitationContent(item, classes);

      case 'BIRTHDAY':
        return getBirthdayContent(item, classes);

      default:
        return '';
    }
  };

  var getSubTitle = function getSubTitle() {
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      display: "flex",
      alignItems: "center",
      fontSize: 12,
      color: "text.disabled"
    }, /*#__PURE__*/_react.default.createElement(_Box.default, {
      fontSize: 16,
      clone: true
    }, icons[item.type]), /*#__PURE__*/_react.default.createElement(_Box.default, {
      ml: 2
    }, (0, _dateHelper.getDateElements)(item.date).time));
  };

  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.feedItemRoot
  }, /*#__PURE__*/_react.default.createElement(_CmtMediaObject.default, {
    avatarPos: "center",
    avatar: /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      size: 40,
      src: item.user.profile_pic,
      alt: item.user.name
    }),
    title: getTitle(item, classes),
    subTitle: getSubTitle()
  }));
};

var _default = NotificationItem;
exports.default = _default;