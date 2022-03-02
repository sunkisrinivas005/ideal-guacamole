"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _ArrowDropUp = _interopRequireDefault(require("@material-ui/icons/ArrowDropUp"));

var _NavMenuItem = _interopRequireDefault(require("./NavMenuItem"));

var _NavMega = _interopRequireDefault(require("./NavMega.style"));

var _JssHelper = require("../../CmtHelpers/JssHelper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RenderIcon = function RenderIcon(_ref) {
  var icon = _ref.icon;
  var classes = (0, _NavMega.default)();

  if (icon && /*#__PURE__*/(0, _react.isValidElement)(icon)) {
    return /*#__PURE__*/(0, _react.cloneElement)(icon, {
      className: (0, _clsx.default)(classes.iconRoot, '.Cmt-iconRoot', '.Cmt-icon-root')
    });
  }

  return null;
};

var NavMegaColumn = function NavMegaColumn(props) {
  var classes = (0, _NavMega.default)();
  var name = props.name,
      icon = props.icon,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var totalItems = (0, _react.useMemo)(function () {
    return children.length;
  }, [children]);
  var MenuItemChildren = totalItems ? /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    disablePadding: true,
    className: classes.navMegaColumnItems
  }, children.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_NavMenuItem.default, (0, _extends2.default)({}, item, {
      key: index
    }));
  })) : null;

  var MenuCollapse = /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    component: "div",
    disableGutters: true,
    className: (0, _clsx.default)(classes.navMegaColumnInner, 'Cmt-navMegaColumnInner')
  }, name && /*#__PURE__*/_react.default.createElement("span", {
    className: classes.navMegaColumnLabel
  }, /*#__PURE__*/_react.default.createElement(RenderIcon, {
    icon: icon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.navText
  }, name)), MenuItemChildren);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.navMegaColumn, 'Cmt-navMega-column')
  }, MenuCollapse);
};

var NavMega = function NavMega(props) {
  var classes = (0, _NavMega.default)();
  var history = (0, _reactRouterDom.useHistory)();
  var name = props.name,
      icon = props.icon,
      _props$children2 = props.children,
      children = _props$children2 === void 0 ? [] : _props$children2;
  var totalItems = children.length;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  (0, _react.useEffect)(function () {
    if ((0, _JssHelper.isUrlInChildren)(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    var removeHistoryListening = history.listen(function (location) {
      if ((0, _JssHelper.isUrlInChildren)(props, location.pathname)) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
    return function () {
      removeHistoryListening();
    };
  }, [props, history]);
  var MenuItemColumns = totalItems ? /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    disablePadding: true,
    className: (0, _clsx.default)(classes.navMegaColumnsWrapper, 'Cmt-navMegaColumnsWrapper')
  }, children.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(NavMegaColumn, (0, _extends2.default)({}, item, {
      key: index
    }));
  })) : null;

  var MenuCollapse = /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    component: "div",
    disableGutters: true,
    className: (0, _clsx.default)(classes.navMegaBtn, 'Cmt-navMegaBtn', "".concat(open ? 'active' : ''))
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: classes.navMegaBtnInner
  }, /*#__PURE__*/_react.default.createElement(RenderIcon, {
    icon: icon
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: classes.navText
  }, name), totalItems > 0 && !open && /*#__PURE__*/_react.default.createElement(_ArrowDropDown.default, {
    className: classes.navArrow
  }), totalItems > 0 && open && /*#__PURE__*/_react.default.createElement(_ArrowDropUp.default, {
    className: classes.navArrow
  })), MenuItemColumns);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.navMega, 'Cmt-navMega', "Cmt-navMega-".concat(totalItems), "".concat(open ? 'active' : ''))
  }, MenuCollapse);
};

var _default = NavMega;
exports.default = _default;