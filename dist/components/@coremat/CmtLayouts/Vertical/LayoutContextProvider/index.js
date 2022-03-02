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

var _LayoutContext = _interopRequireDefault(require("../../LayoutContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LAYOUT_STYLES = ['full-width', 'boxed', 'framed'];
var SIDEBAR_TYPES = ['full', 'drawer', 'mini'];
var HEADER_TYPES = ['fixed', 'static'];
var sidebarFixed = true;
var headerFixed = true;

var LayoutContextProvider = function LayoutContextProvider(props) {
  var location = (0, _reactRouterDom.useLocation)();

  var _useState = (0, _react.useState)(props.layoutStyle ? props.layoutStyle : LAYOUT_STYLES[0]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      layoutStyle = _useState2[0],
      setLayoutStyle = _useState2[1];

  var _useState3 = (0, _react.useState)(props.sidebarType ? props.sidebarType : SIDEBAR_TYPES[0]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sidebarType = _useState4[0],
      setSidebarType = _useState4[1];

  var _useState5 = (0, _react.useState)(props.isSidebarOpen ? props.isSidebarOpen : false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isSidebarOpen = _useState6[0],
      setSidebarOpen = _useState6[1]; //for both drawer and mini-sidebar


  var _useState7 = (0, _react.useState)(props.headerType ? props.headerType : HEADER_TYPES[0]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      headerType = _useState8[0],
      setHeaderType = _useState8[1];

  var _useState9 = (0, _react.useState)(props.showHeader ? props.showHeader : true),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      showHeader = _useState10[0],
      setShowHeader = _useState10[1];

  var _useState11 = (0, _react.useState)(props.showFooter ? props.showFooter : true),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      showFooter = _useState12[0],
      setShowFooter = _useState12[1];

  var _useState13 = (0, _react.useState)(props.sidebarWidth ? props.sidebarWidth : 304),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      sidebarWidth = _useState14[0],
      setSidebarWidth = _useState14[1];

  var _useState15 = (0, _react.useState)(props.isSidebarFixed ? props.isSidebarFixed : true),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      isSidebarFixed = _useState16[0],
      setSidebarFixed = _useState16[1];

  var _useState17 = (0, _react.useState)(props.miniSidebarWidth ? props.miniSidebarWidth : 0),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      miniSidebarWidth = _useState18[0],
      setMiniSidebarWidth = _useState18[1];

  var _useState19 = (0, _react.useState)(props.actionSidebarWidth ? props.actionSidebarWidth : 0),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      actionSidebarWidth = _useState20[0],
      setActionSidebarWidth = _useState20[1];

  (0, _react.useEffect)(function () {
    sidebarFixed = props.isSidebarFixed ? props.isSidebarFixed : true;
    headerFixed = props.headerType ? props.headerType : HEADER_TYPES[0];
    var params = new URLSearchParams(location.search);

    if (params.get('theme-type')) {
      setLayoutStyle(params.get('layout-style'));
    }
  }, [location.search, props.headerType, props.isSidebarFixed]);
  var layoutContextValue = (0, _react.useMemo)(function () {
    return {
      layoutStyle: layoutStyle,
      setLayoutStyle: setLayoutStyle,
      sidebarType: sidebarType,
      setSidebarType: setSidebarType,
      headerType: headerType,
      setHeaderType: setHeaderType,
      showHeader: showHeader,
      setShowHeader: setShowHeader,
      showFooter: showFooter,
      setShowFooter: setShowFooter,
      isSidebarOpen: isSidebarOpen,
      setSidebarOpen: setSidebarOpen,
      sidebarWidth: sidebarWidth,
      setSidebarWidth: setSidebarWidth,
      isSidebarFixed: isSidebarFixed,
      setSidebarFixed: setSidebarFixed,
      headerFixed: headerFixed,
      sidebarFixed: sidebarFixed,
      drawerBreakPoint: props.drawerBreakPoint ? props.drawerBreakPoint : 'md',
      miniSidebarWidth: miniSidebarWidth,
      showTourOpt: props.showTourOpt ? props.showTourOpt : false,
      setMiniSidebarWidth: setMiniSidebarWidth,
      actionSidebarWidth: actionSidebarWidth,
      setActionSidebarWidth: setActionSidebarWidth
    };
  }, [layoutStyle, sidebarType, headerType, showHeader, showFooter, isSidebarOpen, sidebarWidth, isSidebarFixed, miniSidebarWidth, actionSidebarWidth, props.drawerBreakPoint, props.showTourOpt]);
  (0, _react.useEffect)(function () {
    if (layoutStyle === LAYOUT_STYLES[0]) {
      document.body.classList.remove('layout-type-boxed', 'layout-type-framed');
      document.body.classList.add('layout-type-fullwidth');
    } else if (layoutStyle === LAYOUT_STYLES[1]) {
      document.body.classList.remove('layout-type-fullwidth', 'layout-type-framed');
      document.body.classList.add('layout-type-boxed');
    } else if (layoutStyle === LAYOUT_STYLES[2]) {
      document.body.classList.remove('layout-type-boxed', 'layout-type-fullwidth');
      document.body.classList.add('layout-type-framed');
    }
  }, [layoutStyle]);
  return /*#__PURE__*/_react.default.createElement(_LayoutContext.default.Provider, {
    value: layoutContextValue
  }, props.children);
};

var _default = LayoutContextProvider;
exports.default = _default;