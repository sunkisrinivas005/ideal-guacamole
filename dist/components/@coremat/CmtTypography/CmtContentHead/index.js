"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _index = require("../index");

var _styles = require("@material-ui/core/styles");

var _excluded = ["icon", "avatar", "title", "titleProps", "subTitle", "subTitleProps", "titleStyle", "subTitleStyle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    headRoot: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    avatar: {
      marginRight: 15
    },
    headerContent: {
      flex: 1
    }
  };
});
/**
 * @return {null} or CmtContentHead Component
 */

function CmtContentHead(_ref) {
  var icon = _ref.icon,
      avatar = _ref.avatar,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subTitle = _ref.subTitle,
      subTitleProps = _ref.subTitleProps,
      titleStyle = _ref.titleStyle,
      subTitleStyle = _ref.subTitleStyle,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.headRoot, 'Cmt-content-head')
  }, restProps), avatar && /*#__PURE__*/(0, _react.isValidElement)(avatar) ? /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.avatar, 'Cmt-avatar')
  }, avatar) : icon && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.avatar, 'Cmt-avatar')
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.headerContent, 'Cmt-header-content')
  }, title && /*#__PURE__*/_react.default.createElement(_index.CmtTitle, (0, _extends2.default)({
    className: (0, _clsx.default)(titleStyle, 'Cmt-title'),
    content: title
  }, titleProps)), subTitle && /*#__PURE__*/_react.default.createElement(_index.CmtSubTitle, (0, _extends2.default)({
    className: (0, _clsx.default)(subTitleStyle, 'Cmt-sub-title'),
    content: subTitle
  }, subTitleProps))));
}

CmtContentHead.propTypes = {
  icon: _propTypes.default.element,
  avatar: _propTypes.default.element,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  subTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleProps: _propTypes.default.object,
  subTitleProps: _propTypes.default.object,
  titleStyle: _propTypes.default.string,
  subTitleStyle: _propTypes.default.string
};
CmtContentHead.defaultProps = {
  icon: null,
  avatar: null,
  title: null,
  subTitle: null,
  titleStyle: null,
  subTitleStyle: null,
  titleProps: {
    variant: 'h4',
    component: 'div'
  },
  subTitleProps: {
    variant: 'subtitle2',
    component: 'p',
    gutterBottom: false
  }
};

var _default = /*#__PURE__*/_react.default.memo(CmtContentHead);

exports.default = _default;