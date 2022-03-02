"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtCardContent = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardContent"));

var _excluded = ["title", "hoverAction", "isHovered", "toggleAction", "isToggled", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ToggleHoverCard = function ToggleHoverCard(_ref) {
  var title = _ref.title,
      hoverAction = _ref.hoverAction,
      isHovered = _ref.isHovered,
      toggleAction = _ref.toggleAction,
      isToggled = _ref.isToggled,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      actionToggled = _useState2[0],
      setActionToggled = _useState2[1];

  var theme = (0, _core.useTheme)();

  var handleMouseEnter = function handleMouseEnter() {
    if (isHovered) isHovered(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (isHovered) isHovered(false);
  };

  var handleToggleClick = function handleToggleClick() {
    if (isToggled) isToggled(!actionToggled);
    setActionToggled(!actionToggled);
  };

  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, rest, /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    title: title,
    separator: {
      color: theme.palette.borderColor.main
    }
  }, hoverAction && /*#__PURE__*/_react.default.createElement("div", {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, typeof hoverAction === 'string' ? /*#__PURE__*/_react.default.createElement(_core.Typography, null, hoverAction) : hoverAction), toggleAction && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('pointer', 'ml-2'),
    onClick: handleToggleClick
  }, typeof toggleAction === 'string' ? /*#__PURE__*/_react.default.createElement(_core.Typography, null, toggleAction) : toggleAction)), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, children));
};

var _default = ToggleHoverCard;
exports.default = _default;