"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultStyle = {
  transition: "all 0.3s ease"
};
var transitionStyles = {
  entering: {
    opacity: 1,
    transform: 'translateY(-100%)'
  },
  entered: {
    opacity: 1,
    transform: 'translateY(-100%)'
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(0%)'
  },
  exited: {
    opacity: 0,
    transform: 'translateY(0%)'
  }
};

var RevealEffect = function RevealEffect(_ref) {
  var inProp = _ref.in,
      styleProp = _ref.style,
      timeout = _ref.timeout,
      children = _ref.children;

  var style = _objectSpread(_objectSpread({}, styleProp), /*#__PURE__*/_react.default.isValidElement(children) ? children.props.style : {});

  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.Transition, {
    in: inProp,
    timeout: timeout || 300
  }, function (state, childProps) {
    return /*#__PURE__*/(0, _react.cloneElement)(children, _objectSpread({
      style: _objectSpread(_objectSpread(_objectSpread({}, defaultStyle), style), transitionStyles[state])
    }, childProps));
  });
};

var _default = RevealEffect;
exports.default = _default;