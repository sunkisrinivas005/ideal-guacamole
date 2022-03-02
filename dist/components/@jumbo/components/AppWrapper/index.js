"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _jss = require("jss");

var _jssRtl = _interopRequireDefault(require("jss-rtl"));

var _ThemeProvider = _interopRequireDefault(require("@material-ui/styles/ThemeProvider"));

var _pickers = require("@material-ui/pickers");

var _styles = require("@material-ui/core/styles");

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _AppContext = _interopRequireDefault(require("../contextProvider/AppContextProvider/AppContext"));

var _i18n = _interopRequireDefault(require("../../../i18n"));

var _AppLayout = _interopRequireDefault(require("../AppLayout"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Configure JSS
var jss = (0, _jss.create)({
  plugins: [].concat((0, _toConsumableArray2.default)((0, _styles.jssPreset)().plugins), [(0, _jssRtl.default)()])
});

var AppWrapper = function AppWrapper(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_AppContext.default),
      locale = _useContext.locale,
      theme = _useContext.theme;

  var muiTheme = (0, _react.useMemo)(function () {
    return (0, _styles.createTheme)(theme);
  }, [theme]);
  return /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, {
    locale: _i18n.default[locale.locale].locale,
    messages: _i18n.default[locale.locale].messages
  }, /*#__PURE__*/_react.default.createElement(_ThemeProvider.default, {
    theme: muiTheme
  }, /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment.default
  }, /*#__PURE__*/_react.default.createElement(_styles.StylesProvider, {
    jss: jss
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_AppLayout.default, null, children)))));
};

var _default = AppWrapper;
exports.default = _default;