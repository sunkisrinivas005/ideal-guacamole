"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _AppContext = _interopRequireDefault(require("../contextProvider/AppContextProvider/AppContext"));

var _GlobalCss = _interopRequireDefault(require("../../../theme/GlobalCss"));

var _reactRedux = require("react-redux");

var _auth = require("../../../services/auth");

var _AppConstants = require("../../constants/AppConstants");

var _ThemeOptions = require("../../constants/ThemeOptions");

var _VerticalDefault = _interopRequireDefault(require("./VerticalLayouts/VerticalDefault"));

var _VerticalMinimal = _interopRequireDefault(require("./VerticalLayouts/VerticalMinimal"));

var _MinimalNoHeader = _interopRequireDefault(require("./VerticalLayouts/MinimalNoHeader"));

var _ModernSidebar = _interopRequireDefault(require("./VerticalLayouts/ModernSidebar"));

var _HorizontalDefault = _interopRequireDefault(require("./HorizontalLayouts/HorizontalDefault"));

var _HorizontalDark = _interopRequireDefault(require("./HorizontalLayouts/HorizontalDark"));

var _HorizontalMinimal = _interopRequireDefault(require("./HorizontalLayouts/HorizontalMinimal"));

var _HorizontalTopMenu = _interopRequireDefault(require("./HorizontalLayouts/HorizontalTopMenu"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function () {
  return {
    circularProgressRoot: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showLayoutLoader = _useState2[0],
      setLayoutLoader = _useState2[1];

  var _useContext = (0, _react.useContext)(_AppContext.default),
      layout = _useContext.layout;

  var _useSelector = (0, _reactRedux.useSelector)(function (_ref2) {
    var auth = _ref2.auth;
    return auth;
  }),
      loadUser = _useSelector.loadUser;

  var dispatch = (0, _reactRedux.useDispatch)();
  var classes = useStyles();
  var location = (0, _reactRouterDom.useLocation)();
  (0, _GlobalCss.default)();
  (0, _react.useEffect)(function () {
    dispatch(_auth.AuhMethods[_AppConstants.CurrentAuthMethod].getAuthUser());
    setLayoutLoader(false);
  }, [dispatch]);

  if (showLayoutLoader || !loadUser) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.circularProgressRoot
    }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, null));
  }

  if (['/signin', '/signup', '/forgot-password'].includes(location.pathname)) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex'
      }
    }, children);
  }

  switch (layout) {
    case _ThemeOptions.LAYOUT_TYPES.VERTICAL_DEFAULT:
      {
        return /*#__PURE__*/_react.default.createElement(_VerticalDefault.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.VERTICAL_MINIMAL:
      {
        return /*#__PURE__*/_react.default.createElement(_VerticalMinimal.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.VERTICAL_MINIMAL_NO_HEADER:
      {
        return /*#__PURE__*/_react.default.createElement(_MinimalNoHeader.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.VERTICAL_MODERN_SIDEBAR:
      {
        return /*#__PURE__*/_react.default.createElement(_ModernSidebar.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.HORIZONTAL_DEFAULT:
      {
        return /*#__PURE__*/_react.default.createElement(_HorizontalDefault.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.HORIZONTAL_DARK:
      {
        return /*#__PURE__*/_react.default.createElement(_HorizontalDark.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.HORIZONTAL_MINIMAL:
      {
        return /*#__PURE__*/_react.default.createElement(_HorizontalMinimal.default, {
          children: children
        });
      }

    case _ThemeOptions.LAYOUT_TYPES.HORIZONTAL_TOP_MENU:
      {
        return /*#__PURE__*/_react.default.createElement(_HorizontalTopMenu.default, {
          children: children
        });
      }

    default:
      return /*#__PURE__*/_react.default.createElement(_VerticalDefault.default, {
        children: children
      });
  }
};

var _default = AppLayout;
exports.default = _default;