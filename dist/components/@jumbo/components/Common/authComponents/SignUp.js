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

var _core = require("@material-ui/core");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _IntlMessages = _interopRequireDefault(require("../../../utils/IntlMessages"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _auth = require("../../../../services/auth");

var _ContentLoader = _interopRequireDefault(require("../../ContentLoader"));

var _styles = require("@material-ui/core/styles");

var _CmtImage = _interopRequireDefault(require("../../../../@coremat/CmtImage"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _AppConstants = require("../../../constants/AppConstants");

var _AuthWrapper = _interopRequireDefault(require("./AuthWrapper"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
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
      width: function width(props) {
        return props.variant === 'default' ? '50%' : '100%';
      },
      order: 1
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
    textCapital: {
      textTransform: 'capitalize'
    },
    textAcc: {
      textAlign: 'center',
      '& a': {
        marginLeft: 4
      }
    },
    alrTextRoot: (0, _defineProperty2.default)({
      textAlign: 'center'
    }, theme.breakpoints.up('sm'), {
      textAlign: 'right'
    })
  };
}); //variant = 'default', 'standard', 'bgColor'

var SignUp = function SignUp(_ref) {
  var _ref$method = _ref.method,
      method = _ref$method === void 0 ? _AppConstants.CurrentAuthMethod : _ref$method,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$wrapperVariant = _ref.wrapperVariant,
      wrapperVariant = _ref$wrapperVariant === void 0 ? 'default' : _ref$wrapperVariant;

  var _useState = (0, _react.useState)('Demo User'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)('demo@example.com'),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = (0, _react.useState)('demo#123'),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var dispatch = (0, _reactRedux.useDispatch)();
  var classes = useStyles({
    variant: variant
  });

  var onSubmit = function onSubmit() {
    dispatch(_auth.AuhMethods[method].onRegister({
      name: name,
      email: email,
      password: password
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_AuthWrapper.default, {
    variant: wrapperVariant
  }, variant === 'default' ? /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.authThumb
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: '/images/auth/sign-up-img.png'
  })) : null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.authContent
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 7
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: '/images/logo.png'
  })), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h1",
    className: classes.titleRoot
  }, "Create an account"), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 2
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    label: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
      id: "appModule.name"
    }),
    fullWidth: true,
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    defaultValue: name,
    margin: "normal",
    variant: "outlined",
    className: classes.textFieldRoot
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 2
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
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 2
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    type: "password",
    label: /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
      id: "appModule.password"
    }),
    fullWidth: true,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    defaultValue: password,
    margin: "normal",
    variant: "outlined",
    className: classes.textFieldRoot
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    alignItems: {
      sm: 'center'
    },
    justifyContent: {
      sm: 'space-between'
    },
    mb: 3
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: {
      xs: 2,
      sm: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: onSubmit,
    variant: "contained",
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: "appModule.regsiter"
  }))), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.alrTextRoot
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/signin"
  }, /*#__PURE__*/_react.default.createElement(_IntlMessages.default, {
    id: "signUp.alreadyMember"
  }))))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 3
  }, dispatch(_auth.AuhMethods[method].getSocialMediaIcons())), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.textAcc
  }, "Have an account?", /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/signin"
  }, "Sign In")), /*#__PURE__*/_react.default.createElement(_ContentLoader.default, null)));
};

var _default = SignUp;
exports.default = _default;