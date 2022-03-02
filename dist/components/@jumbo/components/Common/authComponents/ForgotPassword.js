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

var _reactRouterDom = require("react-router-dom");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _lab = require("@material-ui/lab");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _CmtImage = _interopRequireDefault(require("../../../../@coremat/CmtImage"));

var _IntlMessages = _interopRequireDefault(require("../../../utils/IntlMessages"));

var _auth = require("../../../../services/auth");

var _ContentLoader = _interopRequireDefault(require("../../ContentLoader"));

var _AppConstants = require("../../../constants/AppConstants");

var _AuthWrapper = _interopRequireDefault(require("./AuthWrapper"));

var _Auth = require("../../../../redux/actions/Auth");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  var _authContent;

  return {
    authThumb: (0, _defineProperty2.default)({
      backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, 0.12),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }, theme.breakpoints.up('md'), {
      width: '50%',
      order: 2
    }),
    authContent: (_authContent = {
      padding: 30
    }, (0, _defineProperty2.default)(_authContent, theme.breakpoints.up('md'), {
      order: 1,
      width: function width(props) {
        return props.variant === 'default' ? '50%' : '100%';
      }
    }), (0, _defineProperty2.default)(_authContent, theme.breakpoints.up('xl'), {
      padding: 50
    }), _authContent),
    titleRoot: {
      marginBottom: 14,
      color: theme.palette.text.primary
    },
    textFieldRoot: {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: (0, _styles.alpha)(theme.palette.common.dark, 0.12)
      }
    },
    alertRoot: {
      marginBottom: 10
    }
  };
}); //variant = 'default', 'standard', 'bgColor'

var ForgotPassword = function ForgotPassword(_ref) {
  var _ref$method = _ref.method,
      method = _ref$method === void 0 ? _AppConstants.CurrentAuthMethod : _ref$method,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$wrapperVariant = _ref.wrapperVariant,
      wrapperVariant = _ref$wrapperVariant === void 0 ? 'default' : _ref$wrapperVariant;

  var _useSelector = (0, _reactRedux.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth;
  }),
      send_forget_password_email = _useSelector.send_forget_password_email;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useState = (0, _react.useState)('demo@example.com'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var classes = useStyles({
    variant: variant
  });
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    var timeOutStopper = null;

    if (send_forget_password_email) {
      setOpen(true);
      timeOutStopper = setTimeout(function () {
        dispatch((0, _Auth.setForgetPassMailSent)(false));
        history.push('/');
      }, 1500);
    }

    return function () {
      if (timeOutStopper) clearTimeout(timeOutStopper);
    }; //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send_forget_password_email]);

  var onSubmit = function onSubmit() {
    dispatch(_auth.AuhMethods[method].onForgotPassword({
      email: email
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_AuthWrapper.default, {
    variant: wrapperVariant
  }, variant === 'default' ? /*#__PURE__*/_react.default.createElement("div", {
    className: classes.authThumb
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: '/images/auth/forgot-img.png'
  })) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.authContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'mb-7'
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: '/images/logo.png'
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h1",
    className: classes.titleRoot
  }, "ForgotPassword"), /*#__PURE__*/_react.default.createElement(_core.Collapse, {
    in: open
  }, /*#__PURE__*/_react.default.createElement(_lab.Alert, {
    variant: "outlined",
    severity: "success",
    className: classes.alertRoot,
    action: /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        setOpen(false);
      }
    }, /*#__PURE__*/_react.default.createElement(_Close.default, {
      fontSize: "inherit"
    }))
  }, "A mail has been sent on your email address with reset password link.")), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: 'mb-5'
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    label: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
      id: "appModule.email"
    }),
    fullWidth: true,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    defaultValue: email,
    margin: "normal",
    variant: "outlined",
    className: classes.textFieldRoot
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: 'mb-5'
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onSubmit,
    variant: "contained",
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: "appModule.resetPassword"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "Don't remember your email?", /*#__PURE__*/_react.default.createElement("span", {
    className: 'ml-2'
  }, /*#__PURE__*/_react.default.createElement(_core.Link, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: "appModule.contactSupport"
  })))))), /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = ForgotPassword;
exports.default = _default;