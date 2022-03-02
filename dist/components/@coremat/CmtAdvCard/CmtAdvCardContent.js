"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _CmtContentHead = _interopRequireDefault(require("../CmtTypography/CmtContentHead"));

var _CmtAdvCardContent = _interopRequireDefault(require("./CmtAdvCardContent.style"));

var _clsx = _interopRequireDefault(require("clsx"));

var _JssHelper = require("../CmtHelpers/JssHelper");

var _excluded = ["icon", "avatar", "title", "titleProps", "subTitle", "subTitleProps", "extraContent", "backgroundColor", "backgroundImage", "gradientDirection", "overlay", "columnSizes", "alignCenter", "reverseDir", "children", "className"];

var CmtAdvCardContent = function CmtAdvCardContent(_ref) {
  var icon = _ref.icon,
      avatar = _ref.avatar,
      title = _ref.title,
      titleProps = _ref.titleProps,
      subTitle = _ref.subTitle,
      subTitleProps = _ref.subTitleProps,
      extraContent = _ref.extraContent,
      backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      gradientDirection = _ref.gradientDirection,
      overlay = _ref.overlay,
      columnSizes = _ref.columnSizes,
      alignCenter = _ref.alignCenter,
      reverseDir = _ref.reverseDir,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var backgroundStyles = (0, _JssHelper.getBackgroundStyle)(backgroundColor, backgroundImage, gradientDirection);
  var overlayStyles = (0, _JssHelper.getOverLayStyle)(overlay);
  var classes = (0, _CmtAdvCardContent.default)({
    overlayStyles: overlayStyles,
    backgroundStyles: backgroundStyles,
    alignCenter: alignCenter
  });
  var alignCenterClass = alignCenter ? classes.alignCenter : {};
  var blockClasses = reverseDir ? [classes.gridOrder1, classes.gridOrder2] : [classes.gridOrder2, classes.gridOrder1];
  var blockFirst = blockClasses[0],
      blockSecond = blockClasses[1];
  var extraContentRender = null;

  if (extraContent) {
    extraContentRender = typeof extraContent === 'function' ? extraContent() : extraContent;
  }

  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.advCardContent, 'Cmt-card-content', 'CmtAdvCard-Content', className)
  }, rest), extraContentRender || icon || avatar || title || subTitle ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 6
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: alignCenter ? 12 : 12,
    sm: alignCenter ? 12 : columnSizes[0] === 12 ? 12 : 6,
    md: alignCenter ? 12 : columnSizes[0],
    className: (0, _clsx.default)(blockFirst, alignCenterClass)
  }, /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_CmtContentHead.default, {
    icon: icon,
    avatar: avatar,
    title: title,
    titleProps: titleProps,
    subTitle: subTitle,
    subTitleProps: subTitleProps
  })), extraContentRender && /*#__PURE__*/_react.default.createElement(_core.Box, null, extraContentRender)), children && /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: alignCenter ? 12 : columnSizes[1] === 0 ? 0 : 12,
    sm: alignCenter ? 12 : columnSizes[1] === 0 ? 0 : 6,
    md: alignCenter ? 12 : columnSizes[1],
    className: blockSecond
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    width: 1
  }, children))) : /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    spacing: 6
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    width: 1
  }, children))));
};

CmtAdvCardContent.propTypes = {
  icon: _propTypes.default.element,
  avatar: _propTypes.default.element,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleProps: _propTypes.default.object,
  subTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  subTitleProps: _propTypes.default.object,
  extraContent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.func]),
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  backgroundImage: _propTypes.default.string,
  gradientDirection: _propTypes.default.string,
  overlay: _propTypes.default.object,
  reverseDir: _propTypes.default.bool,
  columnSizes: _propTypes.default.array,
  alignCenter: _propTypes.default.bool,
  className: _propTypes.default.string
};
CmtAdvCardContent.defaultProps = {
  title: '',
  subTitle: '',
  overlay: {
    colors: '',
    opacity: 0,
    direction: ''
  },
  reverseDir: false,
  columnSizes: [6, 6],
  alignCenter: false,
  className: ''
};
var _default = CmtAdvCardContent;
exports.default = _default;