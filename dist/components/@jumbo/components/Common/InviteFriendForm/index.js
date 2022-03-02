"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _FileCopy = _interopRequireDefault(require("@material-ui/icons/FileCopy"));

var _PersonOutlined = _interopRequireDefault(require("@material-ui/icons/PersonOutlined"));

var _styles = require("@material-ui/styles");

var _AppTextInput = _interopRequireDefault(require("../formElements/AppTextInput"));

var _CmtCardContent = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardContent"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    divider: {
      flex: 1
    },
    noBorder: {
      '& fieldset': {
        border: 0
      }
    },
    inputGroup: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: '100%'
    },
    textField: {
      position: 'relative',
      flex: '1 1 auto',
      width: '1%',
      minWidth: 0,
      '&:not(:last-child) .MuiOutlinedInput-root': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },
    chip: {
      margin: theme.spacing(0.5)
    },
    inputGroupAppend: {
      marginRight: '-1px'
    },
    button: function button(props) {
      return {
        backgroundColor: props.linkCopy ? '#8DCD03' : '#6200EE',
        color: '#fff',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: '100%',
        '&:hover': {
          backgroundColor: props.linkCopy ? '#8DCD03' : '#6200EE'
        }
      };
    },
    successMsg: {
      color: '#8DCD03'
    },
    userIcon: {
      marginBottom: 2,
      '& > svg': {
        color: '#8DCD03',
        height: 55,
        width: 55
      }
    },
    iconBlock: {
      display: 'block'
    }
  };
});
var linkStr = 'https://www.example.com/home/';

var CopyShareLink = function CopyShareLink() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      linkCopy = _useState2[0],
      setLinkCopy = _useState2[1];

  var classes = useStyles({
    linkCopy: linkCopy
  });
  var linkRef = (0, _react.useRef)(null);

  var copyToClipboard = function copyToClipboard() {
    linkRef.current.select();
    document.execCommand('copy');
    setLinkCopy(true);
    setTimeout(function () {
      setLinkCopy(false);
    }, 5000);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    gutterBottom: true,
    component: "h6",
    variant: "h6"
  }, "Get link to share"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.inputGroup
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    className: classes.textField,
    size: "small",
    variant: "outlined",
    value: linkStr,
    placeholder: "Type name or email address...",
    inputProps: {
      ref: linkRef
    },
    onFocus: copyToClipboard,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.inputGroupAppend
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    className: classes.button,
    onClick: copyToClipboard
  }, linkCopy ? /*#__PURE__*/_react.default.createElement(_CheckCircle.default, null) : /*#__PURE__*/_react.default.createElement(_FileCopy.default, null)))), linkCopy && /*#__PURE__*/_react.default.createElement(_core.Fade, {
    in: linkCopy
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    className: (0, _clsx.default)(classes.successMsg, 'mt-2')
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: 'mr-2'
  }, /*#__PURE__*/_react.default.createElement(_CheckCircle.default, {
    className: classes.iconBlock
  })), /*#__PURE__*/_react.default.createElement(_core.Typography, null, "Link copied!"))));
};

var InvitationSuccessMessage = function InvitationSuccessMessage(_ref) {
  var setInviteMore = _ref.setInviteMore;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'mb-4',
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.userIcon
  }, /*#__PURE__*/_react.default.createElement(_PersonOutlined.default, null)), /*#__PURE__*/_react.default.createElement("h4", {
    className: 'mb-4'
  }, "Invitations Sent"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return setInviteMore(false);
    }
  }, "Invite More"));
};

var InviteFriendForm = function InviteFriendForm() {
  var _useState3 = (0, _react.useState)(['Chris Harris', 'Rob Williams']),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      invitations = _useState4[0],
      setInvitations = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      hasInvitationSent = _useState6[0],
      setHasInvitationSent = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      username = _useState8[0],
      setUsername = _useState8[1];

  var classes = useStyles();

  var handleChipDelete = function handleChipDelete(item) {
    setInvitations(invitations.filter(function (chip) {
      return chip !== item;
    }));
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (event.key === 'Enter' && event.target.value) {
      event.target.value.split(',').map(function (value) {
        if (!invitations.some(function (item) {
          return item === value.trim();
        }) && value.trim() !== '') {
          invitations.push(value.trim());
        }

        return value;
      });
      setInvitations((0, _toConsumableArray2.default)(invitations));
      setUsername('');
    }
  };

  var sendInvitation = function sendInvitation() {
    setHasInvitationSent(true);
  };

  (0, _react.useEffect)(function () {
    if (hasInvitationSent) {}

    setInvitations([]);
    setUsername('');
  }, [hasInvitationSent]);
  return /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, hasInvitationSent ? /*#__PURE__*/_react.default.createElement(_core.Fade, {
    in: hasInvitationSent
  }, /*#__PURE__*/_react.default.createElement(InvitationSuccessMessage, {
    setInviteMore: setHasInvitationSent
  })) : /*#__PURE__*/_react.default.createElement(_core.Fade, {
    in: !hasInvitationSent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'mb-4'
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    flexWrap: "wrap",
    border: 1,
    borderColor: "borderColor.main",
    borderRadius: "borderRadius"
  }, invitations.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_core.Chip, {
      key: index,
      label: item,
      className: classes.chip,
      onDelete: function onDelete() {
        return handleChipDelete(item);
      }
    });
  }), /*#__PURE__*/_react.default.createElement(_AppTextInput.default, {
    fullWidth: false,
    variant: "outlined",
    placeholder: "Type name or email...",
    value: username,
    onChange: function onChange(event) {
      return setUsername(event.target.value);
    },
    onKeyDown: handleOnKeyDown,
    className: classes.noBorder
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    my: 4
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    color: "primary",
    variant: "contained",
    disabled: !invitations.length,
    onClick: sendInvitation
  }, "Invite")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: 'mr-2'
  }, "Or"), /*#__PURE__*/_react.default.createElement(_core.Divider, {
    className: classes.divider
  })))), /*#__PURE__*/_react.default.createElement(CopyShareLink, null));
};

var _default = InviteFriendForm;
exports.default = _default;