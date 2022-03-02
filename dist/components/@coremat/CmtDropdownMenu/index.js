"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var CmtDropdownMenu = function CmtDropdownMenu(_ref) {
  var TriggerComponent = _ref.TriggerComponent,
      items = _ref.items,
      onItemClick = _ref.onItemClick;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      menuItems = _useState4[0],
      setMenuItems = _useState4[1];

  var open = Boolean(anchorEl);
  (0, _react.useEffect)(function () {
    setMenuItems(items);
  }, [items]);

  var openMenu = function openMenu(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  var closeMenu = function closeMenu() {
    setAnchorEl(null);
  };

  var handleMenuItemClick = function handleMenuItemClick(item, selectedIndex, event) {
    event.stopPropagation();

    var updatedItem = _objectSpread({}, item);

    if (item.onClick && typeof item.onClick === 'function') {
      updatedItem = item.onClick(item);
    } else if (onItemClick && typeof onItemClick === 'function') {
      updatedItem = onItemClick(item);
    }

    if (updatedItem) {
      var hasChange = false;
      var newMenuItems = menuItems.map(function (item, index) {
        if (selectedIndex === index) {
          hasChange = true;
          item = updatedItem;
        }

        return item;
      });
      if (hasChange) setMenuItems(newMenuItems);
    }

    closeMenu();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "pointer"
  }, /*#__PURE__*/_react.default.createElement(TriggerComponent.type, (0, _extends2.default)({}, TriggerComponent.props, {
    onClick: openMenu
  }))), /*#__PURE__*/_react.default.createElement(_core.Menu, {
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: closeMenu,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, menuItems.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: index,
      disabled: item.disabled,
      onClick: function onClick(event) {
        return handleMenuItemClick(_objectSpread({}, item), index, event);
      }
    }, item.icon, /*#__PURE__*/_react.default.createElement("div", {
      className: "ml-2"
    }, item.label));
  })));
};

CmtDropdownMenu.propTypes = {
  items: _propTypes.default.array.isRequired,
  TriggerComponent: _propTypes.default.element.isRequired,
  onItemClick: _propTypes.default.func
};
var _default = CmtDropdownMenu;
exports.default = _default;