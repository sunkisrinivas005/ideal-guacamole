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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _CmtTypography = require("../CmtTypography");

var _index = _interopRequireDefault(require("./index.style"));

var _CmtAvatar = _interopRequireDefault(require("../CmtAvatar"));

var _excluded = ["avatar", "avatarPos", "avatarProps", "onBodyClick", "title", "titleProps", "subTitle", "subTitleProps", "actionsComponent", "content", "contentProps", "footerComponent", "footerComponentProps", "children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CmtMediaObject = function CmtMediaObject(_ref) {
  var _clsx;

  var avatar = _ref.avatar,
      avatarPos = _ref.avatarPos,
      avatarProps = _ref.avatarProps,
      onBodyClick = _ref.onBodyClick,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subTitle = _ref.subTitle,
      subTitleProps = _ref.subTitleProps,
      actionsComponent = _ref.actionsComponent,
      content = _ref.content,
      contentProps = _ref.contentProps,
      footerComponent = _ref.footerComponent,
      footerComponentProps = _ref.footerComponentProps,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = (0, _index.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx2.default)(classes.mediaObject, className, 'Cmt-media-object')
  }, rest), avatar && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)((_clsx = {}, (0, _defineProperty2.default)(_clsx, classes.mediaImageTop, avatarPos === 'top'), (0, _defineProperty2.default)(_clsx, classes.mediaImageCenter, avatarPos === 'center'), (0, _defineProperty2.default)(_clsx, classes.mediaImageBottom, avatarPos === 'bottom'), _clsx), 'Cmt-media-image')
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    mr: 3,
    clone: true
  }, /*#__PURE__*/(0, _react.isValidElement)(avatar) ? avatar : /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, (0, _extends2.default)({
    className: (0, _clsx2.default)(classes.rootAvatar, 'Cmt-avatar'),
    src: avatar
  }, avatarProps)))), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)(classes.mediaBody, 'Cmt-media-body'),
    onClick: onBodyClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)(classes.mediaHeader, 'Cmt-media-header')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)(classes.mediaHeaderContent, 'Cmt-media-header-content')
  }, title && /*#__PURE__*/_react.default.createElement(_CmtTypography.CmtTitle, (0, _extends2.default)({
    content: title
  }, titleProps)), subTitle && /*#__PURE__*/_react.default.createElement(_CmtTypography.CmtSubTitle, (0, _extends2.default)({
    content: subTitle
  }, subTitleProps))), actionsComponent && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx2.default)(classes.mediaActions, 'Cmt-media-actions', 'ml-3')
  }, actionsComponent)), content && /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, typeof content === 'string' ? /*#__PURE__*/_react.default.createElement(_core.Typography, contentProps, content) : content), children), footerComponent && /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    ml: 3,
    className: (0, _clsx2.default)(classes.mediaFooter, 'Cmt-media-footer')
  }, footerComponentProps), footerComponent));
};

CmtMediaObject.prototype = {
  avatar: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  avatarPos: _propTypes.default.oneOf(['top', 'center', 'bottom']),
  avatarProps: _propTypes.default.object,
  onBodyClick: _propTypes.default.func,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleProps: _propTypes.default.object,
  subTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  subTitleProps: _propTypes.default.object,
  actionsComponent: _propTypes.default.element,
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  contentProps: _propTypes.default.object,
  footerComponent: _propTypes.default.element,
  footerComponentProps: _propTypes.default.object,
  className: _propTypes.default.func
};
CmtMediaObject.defaultProps = {
  avatar: '',
  avatarPos: 'top',
  title: '',
  titleProps: {
    variant: 'h3',
    component: 'div'
  },
  subTitle: '',
  subTitleProps: {
    component: 'span'
  },
  content: '',
  contentProps: {
    component: 'div',
    variant: 'body2'
  }
};

var _default = /*#__PURE__*/_react.default.memo(CmtMediaObject);

exports.default = _default;