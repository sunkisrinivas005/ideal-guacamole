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

var _SidebarThemeContext = _interopRequireDefault(require("./SidebarThemeContext"));

var _JssHelper = require("../../CmtHelpers/JssHelper");

var _AppContext = _interopRequireDefault(require("../../../@jumbo/components/contextProvider/AppContextProvider/AppContext"));

var _sidebarThemeColors = _interopRequireDefault(require("./sidebarThemeColors"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var darkThemeSetting = {
  textColor: 'rgba(255, 255, 255, 0.7)',
  textDarkColor: '#fff',
  textActiveColor: '#fff',
  navHoverBgColor: 'rgba(187, 134, 252, 0.3)',
  navActiveBgColor: 'green',
  borderColor: 'rgba(255, 255, 255, 0.2)'
};

var SidebarThemeProvider = function SidebarThemeProvider(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_AppContext.default),
      themeType = _useContext.themeType;

  var _useState = (0, _react.useState)(_objectSpread(_objectSpread({}, _sidebarThemeColors.default[themeType]), {}, {
    backgroundColor: '',
    backgroundImage: '',
    gradientDirection: ''
  })),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeTheme = _useState2[0],
      setActiveTheme = _useState2[1];

  (0, _react.useEffect)(function () {
    if (activeTheme.backgroundImage) {
      if (!activeTheme.backgroundColor) {
        setActiveTheme(_objectSpread(_objectSpread(_objectSpread({}, activeTheme), darkThemeSetting), {}, {
          backgroundColor: '#000'
        }));
      }
    } else {
      //this means no flat and gradient style and no background image
      if (activeTheme.backgroundColor === '#000') {
        setActiveTheme(_objectSpread(_objectSpread(_objectSpread({}, activeTheme), _sidebarThemeColors.default[themeType]), {}, {
          backgroundColor: ''
        }));
      }
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [activeTheme.backgroundImage]);
  (0, _react.useEffect)(function () {
    if (!activeTheme.backgroundColor && !activeTheme.backgroundImage) {
      setActiveTheme(_objectSpread({}, _sidebarThemeColors.default[themeType]));
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [themeType]);
  var sidebarContextValue = (0, _react.useMemo)(function () {
    var backgroundStyle = (0, _JssHelper.getBackgroundStyle)(activeTheme.backgroundColor, activeTheme.backgroundImage, activeTheme.gradientDirection);
    var overlayStyle = (0, _JssHelper.getOverLayStyle)({
      colors: activeTheme.backgroundColor,
      opacity: 0.6,
      direction: '180deg'
    });
    return {
      sidebarTheme: activeTheme,
      backgroundStyle: backgroundStyle,
      overlayStyle: overlayStyle,
      setSidebarTheme: setActiveTheme
    };
  }, [activeTheme]);
  return /*#__PURE__*/_react.default.createElement(_SidebarThemeContext.default.Provider, {
    value: sidebarContextValue
  }, children);
};

var _default = SidebarThemeProvider;
exports.default = _default;