"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _CmtAvatar = _interopRequireDefault(require("../CmtAvatar"));

var _CmtObjectSummary = _interopRequireDefault(require("./CmtObjectSummary.style"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var CmtObjectSummary = function CmtObjectSummary(_ref) {
  var align = _ref.align,
      anchorOrigin = _ref.anchorOrigin,
      showItemBadge = _ref.showItemBadge,
      avatar = _ref.avatar,
      avatarProps = _ref.avatarProps,
      badge = _ref.badge,
      badgeProps = _ref.badgeProps,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subTitle = _ref.subTitle,
      subTitleProps = _ref.subTitleProps;
  var classes = (0, _CmtObjectSummary.default)({
    align: align,
    anchorOrigin: anchorOrigin
  });

  var badgeContent = _objectSpread({
    badgeContent: badge,
    color: 'secondary'
  }, badgeProps);

  if (typeof badge !== 'string') {
    var node = /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.badgeRoot, 'Cmt-badge')
    }, badge);

    badgeContent = _objectSpread({
      badgeContent: node
    }, badgeProps);
  }

  var getAvatarComponent = function getAvatarComponent() {
    if (showItemBadge) {
      if (typeof avatar === 'string') {
        return /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, (0, _extends2.default)({
          src: avatar,
          alt: title
        }, avatarProps));
      }

      return avatar;
    }

    return /*#__PURE__*/_react.default.createElement(RenderBadge, {
      badge: badge,
      anchorOrigin: anchorOrigin,
      badgeContent: badgeContent,
      classes: classes
    }, typeof avatar === 'string' ? /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, (0, _extends2.default)({
      src: avatar,
      alt: title
    }, avatarProps)) : avatar);
  };

  var componentContent = function componentContent() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.root, align)
    }, getAvatarComponent(), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx.default)(classes.userInfo, 'Cmt-user-info')
    }, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
      component: "p",
      className: (0, _clsx.default)(classes.title, 'Cmt-title')
    }, titleProps), title), /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
      component: "p",
      className: (0, _clsx.default)(classes.subTitle, 'Cmt-sub-title')
    }, subTitleProps), subTitle)));
  };

  var getComponent = function getComponent() {
    if (showItemBadge) {
      return /*#__PURE__*/_react.default.createElement(RenderBadge, {
        badge: badge,
        anchorOrigin: anchorOrigin,
        badgeContent: badgeContent,
        classes: classes
      }, componentContent());
    }

    return componentContent();
  };

  return getComponent();
};

var RenderBadge = function RenderBadge(_ref2) {
  var badge = _ref2.badge,
      badgeContent = _ref2.badgeContent,
      anchorOrigin = _ref2.anchorOrigin,
      classes = _ref2.classes,
      children = _ref2.children;
  return badge ? /*#__PURE__*/_react.default.createElement(_core.Badge, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.badgeAvatarRoot, 'Cmt-badge-avatar', anchorOrigin.vertical, anchorOrigin.horizontal)
  }, badgeContent, {
    anchorOrigin: anchorOrigin
  }), children) : children;
};

CmtObjectSummary.prototype = {
  avatar: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  badge: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  subTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  avatarProps: _propTypes.default.object,
  badgeProps: _propTypes.default.object,
  showItemBadge: _propTypes.default.bool,
  align: _propTypes.default.string,
  anchorOrigin: _propTypes.default.object,
  titleProps: _propTypes.default.object,
  subTitleProps: _propTypes.default.object
};
CmtObjectSummary.defaultProps = {
  align: 'horizontal',
  showItemBadge: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};

var _default = /*#__PURE__*/_react.default.memo(CmtObjectSummary);

exports.default = _default;