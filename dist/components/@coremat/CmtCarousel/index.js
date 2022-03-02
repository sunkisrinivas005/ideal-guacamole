"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("slick-carousel/slick/slick.css");

require("slick-carousel/slick/slick-theme.css");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _index = _interopRequireDefault(require("./index.style"));

var _excluded = ["data", "dotSize", "outline", "color", "activeColor", "dotPosition", "renderRow", "settings"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getCarouselSetting = function getCarouselSetting(settings) {
  return _objectSpread({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }, settings);
};

var CmtCarousel = function CmtCarousel(_ref) {
  var data = _ref.data,
      dotSize = _ref.dotSize,
      outline = _ref.outline,
      color = _ref.color,
      activeColor = _ref.activeColor,
      dotPosition = _ref.dotPosition,
      renderRow = _ref.renderRow,
      settings = _ref.settings,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var carouselSettings = getCarouselSetting(settings);
  var classes = (0, _index.default)({
    dotSize: dotSize,
    outline: outline,
    color: color,
    activeColor: activeColor
  });
  return /*#__PURE__*/_react.default.createElement(_core.Box, rest, /*#__PURE__*/_react.default.createElement(_reactSlick.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.sliderRoot, dotPosition, {
      outline: outline
    })
  }, carouselSettings), data.map(function (item, index) {
    return renderRow(item, index);
  })));
};

var _default = /*#__PURE__*/_react.default.memo(CmtCarousel);

exports.default = _default;
CmtCarousel.propTypes = {
  data: _propTypes.default.array.isRequired,
  outline: _propTypes.default.bool,
  color: _propTypes.default.string,
  activeColor: _propTypes.default.string,
  dotSize: _propTypes.default.number,
  dotPosition: _propTypes.default.oneOf(['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right']),
  renderRow: _propTypes.default.func,
  settings: _propTypes.default.object
};
CmtCarousel.defaultProps = {
  dotPosition: 'bottom',
  dotSize: 10,
  color: '#7c7c7c',
  activeColor: '#333333'
};