"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCountup = _interopRequireDefault(require("react-countup"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _CmtCardContent = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardContent"));

var _CmtImage = _interopRequireDefault(require("../../../../@coremat/CmtImage"));

var _excluded = ["icon", "number", "numberProps", "label", "labelProps", "counterProps", "color", "gradientDirection", "alignCenter"];
var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    containerRoot: {
      display: 'flex',
      alignItems: 'center'
    },
    containerRootCenter: {
      justifyContent: 'center',
      flexDirection: 'column',
      paddingTop: 16,
      paddingBottom: 16
    },
    contentRoot: {
      position: 'relative'
    },
    contentRootCenter: {
      marginLeft: 0,
      marginTop: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    },
    titleRoot: {
      marginBottom: 2
    }
  };
});

var CounterCard = function CounterCard(_ref) {
  var icon = _ref.icon,
      number = _ref.number,
      numberProps = _ref.numberProps,
      label = _ref.label,
      labelProps = _ref.labelProps,
      counterProps = _ref.counterProps,
      color = _ref.color,
      gradientDirection = _ref.gradientDirection,
      alignCenter = _ref.alignCenter,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, (0, _extends2.default)({
    gradientDirection: gradientDirection
  }, rest), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: (0, _clsx3.default)(classes.containerRoot, 'container', (0, _defineProperty2.default)({}, classes.containerRootCenter, alignCenter)),
    color: color
  }, typeof icon === 'string' ? /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: icon,
    alt: label
  }) : icon, /*#__PURE__*/_react.default.createElement(_Box.default, {
    ml: {
      xs: 3,
      xl: 5
    },
    className: (0, _clsx3.default)(classes.contentRoot, 'content-wrapper', (0, _defineProperty2.default)({}, classes.contentRootCenter, alignCenter))
  }, /*#__PURE__*/_react.default.createElement(_Box.default, (0, _extends2.default)({
    component: "h3",
    fontSize: {
      xs: 20,
      xl: 24
    },
    className: (0, _clsx3.default)(classes.titleRoot, 'title')
  }, numberProps), typeof number === 'string' ? number : /*#__PURE__*/_react.default.createElement(_reactCountup.default, (0, _extends2.default)({
    start: 0,
    end: number,
    useEasing: false,
    separator: ','
  }, counterProps))), /*#__PURE__*/_react.default.createElement(_Box.default, (0, _extends2.default)({
    component: "p"
  }, labelProps), label)))));
};

CounterCard.prototype = {
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  number: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  numberProps: _propTypes.default.object,
  label: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  counterProps: _propTypes.default.object,
  color: _propTypes.default.string,
  gradientDirection: _propTypes.default.string,
  alignCenter: _propTypes.default.bool
};
CounterCard.defaultProps = {
  color: 'common.white',
  gradientDirection: '180deg',
  alignCenter: false
};
var _default = CounterCard;
exports.default = _default;