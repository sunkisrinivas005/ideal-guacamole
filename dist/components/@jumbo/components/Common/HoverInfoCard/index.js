"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _reactCountup = _interopRequireDefault(require("react-countup"));

var _ArrowForward = _interopRequireDefault(require("@material-ui/icons/ArrowForward"));

var _reactRouterDom = require("react-router-dom");

var _excluded = ["backgroundColor", "icon", "title", "titleProps", "subTitle", "subTitleProps", "counterProps", "linkOnArrow"];
var useStyles = (0, _makeStyles.default)(function () {
  return {
    cardRoot: {
      position: 'relative',
      paddingLeft: 95,
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&:hover': {
        boxShadow: '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
        '& $iconThumb': {
          width: 95,
          height: '100%',
          borderRadius: 0
        },
        '& $hoverContent': {
          transform: 'translate(-10px, -50%)'
        }
      }
    },
    cardContent: {
      padding: 20
    },
    iconWrapper: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: 95,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconThumb: {
      width: 56,
      height: 56,
      transition: 'all 0.3s ease',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    hoverContent: {
      position: 'absolute',
      top: '50%',
      right: 0,
      zIndex: 1,
      padding: 10,
      transform: 'translate(100%, -50%)',
      transition: 'all 0.3s ease'
    }
  };
});

var HoverInfoCard = function HoverInfoCard(_ref) {
  var backgroundColor = _ref.backgroundColor,
      icon = _ref.icon,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subTitle = _ref.subTitle,
      subTitleProps = _ref.subTitleProps,
      counterProps = _ref.counterProps,
      linkOnArrow = _ref.linkOnArrow,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, (0, _extends2.default)({}, rest, {
    className: classes.cardRoot
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.iconWrapper
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.iconThumb,
    style: {
      backgroundColor: backgroundColor
    }
  }, icon)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.cardContent
  }, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "h2",
    fontSize: {
      xs: 18,
      md: 20,
      xl: 22
    },
    fontWeight: "fontWeightBold"
  }, titleProps), typeof title === 'number' ? /*#__PURE__*/_react.default.createElement(_reactCountup.default, (0, _extends2.default)({
    start: 0,
    end: title,
    useEasing: false
  }, counterProps)) : title), /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "span",
    fontSize: 16,
    fontWeight: "fontWeightBold",
    color: "text.secondary"
  }, subTitleProps), subTitle)), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.hoverContent
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: linkOnArrow || ''
  }, /*#__PURE__*/_react.default.createElement(_ArrowForward.default, null))));
};

var _default = HoverInfoCard;
exports.default = _default;