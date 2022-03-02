"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _AppSwitch = _interopRequireDefault(require("../../../../Common/formElements/AppSwitch"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    sectionRoot: {
      '&:not(:last-child)': {
        marginBottom: 28
      }
    },
    sectionHeading: {
      fontSize: 10,
      color: theme.palette.text.secondary,
      marginBottom: 20,
      textTransform: 'uppercase'
    },
    labelProps: {
      color: theme.palette.text.primary,
      cursor: 'pointer'
    }
  };
});

var Settings = function Settings() {
  var classes = useStyles();

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      emailNotification = _useState2[0],
      setEmailNotification = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      smsNotification = _useState4[0],
      setSMSNotification = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      logEveryday = _useState6[0],
      setLogEveryday = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      cloudStorage = _useState8[0],
      setCloudStorage = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      doubleFactorAuth = _useState10[0],
      setEDoubleFactorAuth = _useState10[1];

  return /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: 22,
    fontWeight: 700,
    mb: 9
  }, "Settings"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionRoot
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionHeading
  }, "Notification Settings"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    pb: 6
  }, /*#__PURE__*/_react.default.createElement(_AppSwitch.default, {
    label: "Email Notification",
    labelProps: {
      className: classes.labelProps
    },
    helperText: "help@g-axon.com",
    checked: emailNotification,
    onChange: function onChange(event) {
      return setEmailNotification(event.target.checked);
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Divider, null), /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: 3,
    pb: 6
  }, /*#__PURE__*/_react.default.createElement(_AppSwitch.default, {
    label: "SMS Notifications",
    labelProps: {
      className: classes.labelProps
    },
    helperText: "+91 957 858 9855, +91 358 788 596",
    checked: smsNotification,
    onChange: function onChange(event) {
      return setSMSNotification(event.target.checked);
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Divider, null)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionRoot
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionHeading
  }, "System Settings"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    pb: 6
  }, /*#__PURE__*/_react.default.createElement(_AppSwitch.default, {
    label: "Upload log everyday",
    labelProps: {
      className: classes.labelProps
    },
    helperText: "This will upload activity log to server everyday",
    checked: logEveryday,
    onChange: function onChange(event) {
      return setLogEveryday(event.target.checked);
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Divider, null), /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: 3,
    pb: 6
  }, /*#__PURE__*/_react.default.createElement(_AppSwitch.default, {
    label: "Cloud Storage",
    labelProps: {
      className: classes.labelProps
    },
    helperText: "25gb / 1tb is used ",
    checked: cloudStorage,
    onChange: function onChange(event) {
      return setCloudStorage(event.target.checked);
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Divider, null), /*#__PURE__*/_react.default.createElement(_core.Box, {
    pt: 3,
    pb: 6
  }, /*#__PURE__*/_react.default.createElement(_AppSwitch.default, {
    label: "2 Factor Authentication",
    labelProps: {
      className: classes.labelProps
    },
    helperText: "Set-up your 2 factor authentication now.",
    checked: doubleFactorAuth,
    onChange: function onChange(event) {
      return setEDoubleFactorAuth(event.target.checked);
    }
  })), /*#__PURE__*/_react.default.createElement(_core.Divider, null)));
};

var _default = Settings;
exports.default = _default;