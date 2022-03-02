"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _index = _interopRequireDefault(require("./index.style"));

var _excluded = ["label", "labelPos", "valuePos", "value", "total", "renderValue", "containedColor", "hideValue", "gradientDirection", "onlyContained", "emptyColor", "thickness", "pointer", "pointerSize"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getFillBarStyleAndPointerColors = function getFillBarStyleAndPointerColors(containedColor, gradientDirection) {
  var fillBarStyleValue, pointerColorValue;
  var totalColors = containedColor.length;

  if (Array.isArray(containedColor) && totalColors > 0) {
    if (gradientDirection && totalColors === 1) {
      var _containedColor$0$spl = containedColor[0].split(' '),
          _containedColor$0$spl2 = (0, _slicedToArray2.default)(_containedColor$0$spl, 1),
          firstColor = _containedColor$0$spl2[0];

      fillBarStyleValue = {
        backgroundColor: firstColor
      };
      pointerColorValue = firstColor;
    } else {
      var _containedColor$0$spl3 = containedColor[0].split(' '),
          _containedColor$0$spl4 = (0, _slicedToArray2.default)(_containedColor$0$spl3, 1),
          _firstColor = _containedColor$0$spl4[0];

      var _containedColor$split = containedColor[containedColor.length - 1].split(' '),
          _containedColor$split2 = (0, _slicedToArray2.default)(_containedColor$split, 1),
          lastColor = _containedColor$split2[0];

      fillBarStyleValue = {
        backgroundColor: _firstColor,
        backgroundImage: "linear-gradient(".concat(gradientDirection, ", ").concat(containedColor.join(', '), ")")
      };
      pointerColorValue = lastColor;
    }
  } else {
    fillBarStyleValue = {
      backgroundColor: containedColor
    };
    pointerColorValue = containedColor;
  }

  return [fillBarStyleValue, pointerColorValue];
};

var topPositions = ['top-left', 'top-right', 'top-center'];
var bottomPositions = ['bottom-left', 'bottom-right', 'bottom-center'];
var positions = [].concat(topPositions, bottomPositions, ['right', 'left']);

var CmtProgressBar = function CmtProgressBar(_ref) {
  var label = _ref.label,
      labelPos = _ref.labelPos,
      valuePos = _ref.valuePos,
      value = _ref.value,
      total = _ref.total,
      renderValue = _ref.renderValue,
      containedColor = _ref.containedColor,
      hideValue = _ref.hideValue,
      gradientDirection = _ref.gradientDirection,
      onlyContained = _ref.onlyContained,
      emptyColor = _ref.emptyColor,
      thickness = _ref.thickness,
      pointer = _ref.pointer,
      pointerSize = _ref.pointerSize,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var barWidth = value * 100 / total;

  var _useState = (0, _react.useState)(containedColor.toString()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      pointerColor = _useState2[0],
      setPointerColor = _useState2[1];

  var _useState3 = (0, _react.useState)({
    width: "".concat(Math.round(barWidth), "%"),
    backgroundColor: containedColor.toString()
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      fillBarStyle = _useState4[0],
      setFillBarStyle = _useState4[1];

  (0, _react.useEffect)(function () {
    var _getFillBarStyleAndPo = getFillBarStyleAndPointerColors(containedColor, gradientDirection),
        _getFillBarStyleAndPo2 = (0, _slicedToArray2.default)(_getFillBarStyleAndPo, 2),
        newFillBarStyleValue = _getFillBarStyleAndPo2[0],
        pointerColorValue = _getFillBarStyleAndPo2[1];

    setFillBarStyle(_objectSpread(_objectSpread({}, fillBarStyle), newFillBarStyleValue));
    setPointerColor(pointerColorValue); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containedColor, gradientDirection]);
  var classes = (0, _index.default)({
    thickness: thickness,
    pointer: pointer,
    pointerColor: pointerColor,
    pointerSize: pointerSize,
    valuePos: valuePos
  });

  var renderContent = function renderContent() {
    var _clsx;

    var component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'span';
    return hideValue ? null : /*#__PURE__*/_react.default.createElement(_core.Box, {
      component: component,
      ml: valuePos === 'right' ? 2 : 0,
      mr: valuePos === 'left' ? 2 : 0,
      className: (0, _clsx3.default)(classes.textContainer, 'Cmt-text-container', (_clsx = {}, (0, _defineProperty2.default)(_clsx, classes.textContainerRight, valuePos === 'top-right' || valuePos === 'bottom-right'), (0, _defineProperty2.default)(_clsx, classes.textContainerCenter, valuePos === 'top-center' || valuePos === 'bottom-center'), _clsx))
    }, renderValue && renderValue(value, total) || value);
  };

  var renderLabel = function renderLabel() {
    var _clsx2;

    return label ? /*#__PURE__*/_react.default.createElement(_core.Box, {
      ml: labelPos === 'right' ? 2 : 0,
      mr: labelPos === 'left' ? 2 : 0,
      className: (0, _clsx3.default)(classes.labelContainer, 'Cmt-label-container', (_clsx2 = {}, (0, _defineProperty2.default)(_clsx2, classes.labelContainerRight, labelPos === 'top-right' || labelPos === 'bottom-right'), (0, _defineProperty2.default)(_clsx2, classes.labelContainerCenter, labelPos === 'top-center' || labelPos === 'bottom-center'), _clsx2))
    }, label) : null;
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx3.default)(classes.root, 'CmtProgressBar-root')
  }, restProps), topPositions.includes(labelPos) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 2
  }, renderLabel()), topPositions.includes(valuePos) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 2
  }, renderContent('div')), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.flexRoot
  }, labelPos === 'left' && renderLabel(), valuePos === 'left' && renderContent(), onlyContained ? /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx3.default)(classes.fillStyle, 'Cmt-fill-progress'),
    style: fillBarStyle
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: classes.barContainer,
    style: {
      backgroundColor: emptyColor,
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx3.default)(classes.fillStyle, 'Cmt-fill-progress'),
    style: fillBarStyle
  })), valuePos === 'right' && renderContent(), labelPos === 'right' && renderLabel()), bottomPositions.includes(valuePos) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 2
  }, renderContent('div')), bottomPositions.includes(labelPos) && /*#__PURE__*/_react.default.createElement(_core.Box, {
    mt: 2
  }, renderLabel()));
};

CmtProgressBar.propTypes = {
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  labelPos: _propTypes.default.oneOf(positions),
  total: _propTypes.default.number,
  value: _propTypes.default.number.isRequired,
  valuePos: _propTypes.default.oneOf(positions),
  renderValue: _propTypes.default.func,
  containedColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  emptyColor: _propTypes.default.string,
  thickness: _propTypes.default.number,
  pointer: _propTypes.default.bool,
  pointerSize: _propTypes.default.number,
  onlyContained: _propTypes.default.bool,
  hideValue: _propTypes.default.bool,
  gradientDirection: _propTypes.default.string
};
CmtProgressBar.defaultProps = {
  labelPos: 'top-left',
  total: 100,
  valuePos: 'right',
  containedColor: '#1a90ff',
  gradientDirection: 'to right',
  emptyColor: '#e9ecef',
  thickness: 4,
  pointer: false,
  pointerSize: 8,
  onlyContained: false,
  hideValue: false
};

var _default = /*#__PURE__*/_react.default.memo(CmtProgressBar);

exports.default = _default;