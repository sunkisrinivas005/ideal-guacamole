"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _CmtMediaObject = _interopRequireDefault(require("../../../../../../@coremat/CmtMediaObject"));

var _CmtAvatar = _interopRequireDefault(require("../../../../../../@coremat/CmtAvatar"));

var _dateHelper = require("../../../../../utils/dateHelper");

var _Reply = _interopRequireDefault(require("@material-ui/icons/Reply"));

var _CheckCircleOutline = _interopRequireDefault(require("@material-ui/icons/CheckCircleOutline"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

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
      },
      '& .Cmt-media-header-content': {
        width: 'calc(100% - 75px)',
        flex: 'inherit'
      },
      '& .Cmt-media-actions': {
        textAlign: 'right'
      }
    },
    titleRoot: {
      letterSpacing: 0.25,
      fontSize: 14,
      color: theme.palette.primary.main,
      cursor: 'pointer'
    },
    subTitleRoot: {
      letterSpacing: 0.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: 12,
      color: theme.palette.text.secondary,
      marginBottom: 0
    }
  };
});

var MessageItem = function MessageItem(_ref) {
  var item = _ref.item;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.feedItemRoot
  }, /*#__PURE__*/_react.default.createElement(_CmtMediaObject.default, {
    avatarPos: "center",
    avatar: /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      size: 40,
      src: item.user.profile_pic,
      alt: item.user.name
    }),
    title: item.user.name,
    titleProps: {
      className: classes.titleRoot
    },
    subTitle: item.message,
    subTitleProps: {
      className: classes.subTitleRoot
    },
    actionsComponent: /*#__PURE__*/_react.default.createElement(_core.Box, {
      fontSize: 12,
      color: "text.disabled"
    }, (0, _dateHelper.getDateElements)(item.date).time)
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    mt: 2,
    fontSize: 12,
    color: "text.secondary"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    className: "pointer"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: 16,
    clone: true
  }, /*#__PURE__*/_react.default.createElement(_Reply.default, null)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: 2
  }, "Reply")), /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: 4,
    display: "flex",
    alignItems: "center",
    className: "pointer"
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: 16,
    clone: true
  }, /*#__PURE__*/_react.default.createElement(_CheckCircleOutline.default, null)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: 2
  }, "Read")))));
};

var _default = MessageItem;
exports.default = _default;