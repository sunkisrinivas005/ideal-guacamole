"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _FooterLogo = _interopRequireDefault(require("./FooterLogo"));

var _core = require("@material-ui/core");

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _AppContext = _interopRequireDefault(require("../../contextProvider/AppContextProvider/AppContext"));

var _ThemeOptions = require("../../../constants/ThemeOptions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    btnRoot: (0, _defineProperty2.default)({}, theme.breakpoints.down('xs'), {
      padding: '6px 12px',
      fontSize: 11
    })
  };
});

var Footer = function Footer(props) {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_AppContext.default),
      themeType = _useContext.themeType;

  var date = new Date();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: classes.root
  }, props), /*#__PURE__*/_react.default.createElement(_core.Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Hidden.default, {
    xsDown: true
  }, /*#__PURE__*/_react.default.createElement(_FooterLogo.default, {
    mr: 5,
    color: themeType === _ThemeOptions.THEME_TYPES.DARK ? 'white' : ''
  })), /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: {
      xs: 12,
      sm: 14
    },
    component: "p",
    color: "text.disabled"
  }, "Copyright Company Name \xA9 ", date.getFullYear())));
};

var _default = Footer;
exports.default = _default;