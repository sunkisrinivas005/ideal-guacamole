"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _AppContext = _interopRequireDefault(require("./AppContext"));

var _defaultContext = _interopRequireDefault(require("./defaultContext"));

var _themeColors = require("../../../../theme/themeColors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialThemeValue = _defaultContext.default.theme;
var otherThemes = {
  light: _themeColors.lightTheme,
  'semi-dark': _themeColors.semiDarkTheme,
  dark: _themeColors.darkTheme
};

var AppContextProvider = function AppContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(_defaultContext.default.defaultLng),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      locale = _useState2[0],
      setLocale = _useState2[1];

  var _useState3 = (0, _react.useState)(initialThemeValue),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      theme = _useState4[0],
      setTheme = _useState4[1];

  var _useState5 = (0, _react.useState)(_defaultContext.default.themeType),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      themeType = _useState6[0],
      setThemeType = _useState6[1];

  var _useState7 = (0, _react.useState)(_defaultContext.default.layout),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      layout = _useState8[0],
      setLayout = _useState8[1];

  var _useState9 = (0, _react.useState)(_defaultContext.default.theme.overrides.MuiCard.root.borderRadius),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      cardRadius = _useState10[0],
      setCardRadius = _useState10[1];

  var _useState11 = (0, _react.useState)(initialThemeValue.direction || 'rtl'),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      direction = _useState12[0],
      setDirection = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      showTourGuide = _useState14[0],
      setTourGuideStatus = _useState14[1];

  var contextValue = _react.default.useMemo(function () {
    return {
      locale: locale,
      setLocale: setLocale,
      theme: theme,
      setTheme: setTheme,
      layout: layout,
      setLayout: setLayout,
      themeType: themeType,
      setThemeType: setThemeType,
      cardRadius: cardRadius,
      setCardRadius: setCardRadius,
      direction: direction,
      setDirection: setDirection,
      showTourGuide: showTourGuide,
      setTourGuideStatus: setTourGuideStatus
    };
  }, [locale, theme, themeType, layout, direction, showTourGuide, cardRadius]);

  (0, _react.useEffect)(function () {
    setTheme(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        palette: _objectSpread(_objectSpread({}, prevState.palette), otherThemes[themeType].palette),
        overrides: _objectSpread(_objectSpread({}, prevState.overrides), otherThemes[themeType].overrides)
      });
    });
  }, [themeType]);
  (0, _react.useEffect)(function () {
    setTheme(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        overrides: _objectSpread(_objectSpread({}, prevState.overrides), {}, {
          MuiCard: _objectSpread(_objectSpread({}, prevState.overrides.MuiCard), {}, {
            root: _objectSpread(_objectSpread({}, prevState.overrides.MuiCard.root), {}, {
              borderRadius: cardRadius
            })
          })
        })
      });
    });
  }, [cardRadius]);
  (0, _react.useEffect)(function () {
    setTheme(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        direction: direction
      });
    });
    document.body.setAttribute('dir', direction);
  }, [direction]);
  var location = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(function () {
    var params = new URLSearchParams(location.search);

    if (params.get('theme-type')) {
      setThemeType(params.get('theme-type'));
    }

    if (params.get('layout')) {
      setLayout(params.get('layout'));
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return /*#__PURE__*/_react.default.createElement(_AppContext.default.Provider, {
    value: contextValue
  }, children);
};

var _default = AppContextProvider;
exports.default = _default;