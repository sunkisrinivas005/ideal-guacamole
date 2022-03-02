"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _ArrowDropUp = _interopRequireDefault(require("@material-ui/icons/ArrowDropUp"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _reactRouterDom = require("react-router-dom");

var _NavMenuItem = _interopRequireDefault(require("./NavMenuItem"));

var _NavCollapse = _interopRequireDefault(require("./NavCollapse.style"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _JssHelper = require("../../CmtHelpers/JssHelper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NavCollapse = function NavCollapse(props) {
  var history = (0, _reactRouterDom.useHistory)();
  var classes = (0, _NavCollapse.default)();
  var name = props.name,
      icon = props.icon,
      className = props.className,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var isExpandable = (0, _react.useMemo)(function () {
    return children.length;
  }, [children]);

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

  var renderIcon = function renderIcon() {
    if (icon && /*#__PURE__*/(0, _react.isValidElement)(icon)) {
      return /*#__PURE__*/(0, _react.cloneElement)(icon, {
        className: (0, _clsx.default)(classes.iconRoot, 'Cmt-icon-root')
      });
    }

    return null;
  };

  var MenuItemChildren = isExpandable ? /*#__PURE__*/_react.default.createElement(_core.List, {
    component: "div",
    disablePadding: true,
    className: classes.navCollapseItem
  }, children.map(function (item, index) {
    switch (item.type) {
      case 'collapse':
        return /*#__PURE__*/_react.default.createElement(NavCollapse, (0, _extends2.default)({}, item, {
          key: index,
          className: classes.subCollapse
        }));

      case 'item':
        return /*#__PURE__*/_react.default.createElement(_NavMenuItem.default, (0, _extends2.default)({}, item, {
          key: index
        }));

      default:
        return null;
    }
  })) : null;

  var MenuCollapse = /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    component: "div",
    disableGutters: true,
    className: (0, _clsx.default)(classes.navCollapseBtn, "".concat(open ? 'active' : ''), 'Cmt-navCollapseBtn')
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    className: classes.navCollapseBtnInner
  }, renderIcon(), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    className: classes.navText
  }, name), isExpandable && !open && /*#__PURE__*/_react.default.createElement(_ArrowDropDown.default, {
    className: classes.navArrow
  }), isExpandable && open && /*#__PURE__*/_react.default.createElement(_ArrowDropUp.default, {
    className: classes.navArrow
  })), MenuItemChildren);

  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: (0, _clsx.default)(classes.navCollapse, 'Cmt-navCollapse', className, "".concat(open ? 'active' : ''))
  }, MenuCollapse);
};

var _default = NavCollapse;
exports.default = _default;