"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _JssHelper = require("../CmtHelpers/JssHelper");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _index = _interopRequireDefault(require("./index.style"));

var _excluded = ["items", "type", "size", "color", "variant", "onItemClick", "itemProps", "enableTooltip", "tooltipProps", "className"];

var RenderTooltip = function RenderTooltip(_ref) {
  var enableTooltip = _ref.enableTooltip,
      tooltipProps = _ref.tooltipProps,
      item = _ref.item,
      children = _ref.children;
  var tooltipShow = item.tooltip ? true : enableTooltip;
  var tooltipText = item.tooltip ? item.tooltip : item.label;
  return tooltipShow && tooltipText ? /*#__PURE__*/_react.default.createElement(_core.Tooltip, (0, _extends2.default)({
    title: tooltipText,
    "aria-label": tooltipText,
    arrow: true
  }, item.tooltipProps ? item.tooltipProps : tooltipProps), children) : children;
};

var RenderDefaultButton = function RenderDefaultButton(_ref2) {
  var size = _ref2.size,
      colorClass = _ref2.colorClass,
      variant = _ref2.variant,
      itemProps = _ref2.itemProps,
      enableTooltip = _ref2.enableTooltip,
      tooltipProps = _ref2.tooltipProps,
      item = _ref2.item,
      handleOnButtonClick = _ref2.handleOnButtonClick;
  return /*#__PURE__*/_react.default.createElement(RenderTooltip, {
    item: item,
    enableTooltip: enableTooltip,
    tooltipProps: tooltipProps
  }, /*#__PURE__*/_react.default.createElement(_core.Button, (0, _extends2.default)({
    className: colorClass,
    onClick: handleOnButtonClick,
    variant: item.variant ? item.variant : variant,
    size: item.size ? item.size : size
  }, item.itemProps ? item.itemProps : itemProps), item.label));
};

var RenderIconButton = function RenderIconButton(_ref3) {
  var size = _ref3.size,
      colorClass = _ref3.colorClass,
      itemProps = _ref3.itemProps,
      enableTooltip = _ref3.enableTooltip,
      tooltipProps = _ref3.tooltipProps,
      item = _ref3.item,
      handleOnButtonClick = _ref3.handleOnButtonClick;
  var classes = (0, _index.default)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(RenderTooltip, {
    item: item,
    enableTooltip: enableTooltip,
    tooltipProps: tooltipProps
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, (0, _extends2.default)({
    className: colorClass,
    "aria-label": item.label,
    onClick: handleOnButtonClick,
    size: item.size ? item.size : size
  }, item.itemProps ? item.itemProps : itemProps), item.icon)), item.label && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 2,
    className: (0, _clsx.default)(classes.labelRoot, 'Cmt-Buttons-label')
  }, item.label));
};

var buttonTypes = {
  default: RenderDefaultButton,
  'icon-button': RenderIconButton
};

var getWrapperProps = function getWrapperProps(buttonType, size) {
  if (buttonType === 'icon-button') {
    return {
      minWidth: size === 'small' ? 40 : 60,
      width: size === 'small' ? 40 : 60
    };
  }
};

var RenderButton = function RenderButton(_ref4) {
  var type = _ref4.type,
      size = _ref4.size,
      color = _ref4.color,
      variant = _ref4.variant,
      onItemClick = _ref4.onItemClick,
      itemProps = _ref4.itemProps,
      enableTooltip = _ref4.enableTooltip,
      tooltipProps = _ref4.tooltipProps,
      item = _ref4.item;
  var classes = (0, _index.default)();
  var buttonColor = item.color ? item.color : color;
  var colorClass = buttonColor && classes[buttonColor] ? classes[buttonColor] : '';
  var buttonType = item.type ? item.type : type;

  var handleOnButtonClick = function handleOnButtonClick() {
    if (item.onClick) {
      item.onClick(item);
    } else if (onItemClick) {
      onItemClick(item);
    }
  };

  var wrapperProps = getWrapperProps(buttonType, size);
  var RequestedButton = buttonTypes[buttonType];
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    mr: 2,
    mb: 2
  }, wrapperProps, {
    className: (0, _clsx.default)(classes.buttonRoot, 'CmtButtons-wrapper')
  }), /*#__PURE__*/_react.default.createElement(RequestedButton, {
    size: size,
    colorClass: colorClass,
    variant: variant,
    handleOnButtonClick: handleOnButtonClick,
    itemProps: itemProps,
    enableTooltip: enableTooltip,
    tooltipProps: tooltipProps,
    item: item
  }));
};

var CmtButtons = function CmtButtons(_ref5) {
  var items = _ref5.items,
      type = _ref5.type,
      size = _ref5.size,
      color = _ref5.color,
      variant = _ref5.variant,
      onItemClick = _ref5.onItemClick,
      itemProps = _ref5.itemProps,
      enableTooltip = _ref5.enableTooltip,
      tooltipProps = _ref5.tooltipProps,
      className = _ref5.className,
      rest = (0, _objectWithoutProperties2.default)(_ref5, _excluded);
  var classes = (0, _index.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className)
  }, rest), items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(RenderButton, {
      key: index,
      index: index,
      item: item,
      type: type,
      size: size,
      color: color,
      variant: variant,
      onItemClick: onItemClick,
      itemProps: itemProps,
      enableTooltip: enableTooltip,
      tooltipProps: tooltipProps
    });
  }));
};

CmtButtons.prototype = {
  items: _propTypes.default.array.isRequired,
  type: _propTypes.default.oneOf(['default', 'icon-button']),
  itemProps: _propTypes.default.object,
  onItemClick: _propTypes.default.func,
  variant: _propTypes.default.oneOf(['text', 'outlined', 'contained']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  color: _propTypes.default.oneOf(_JssHelper.componentColors),
  enableTooltip: _propTypes.default.bool,
  tooltipProps: _propTypes.default.object
};
CmtButtons.defaultProps = {
  items: [],
  // format: [{icon: "text or node", label: "button name", onClick: functionHandler, tooltip, ...}]
  type: 'default',
  variant: 'text',
  size: 'medium',
  color: '',
  enableTooltip: false
};
var _default = CmtButtons;
exports.default = _default;