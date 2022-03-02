"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _CmtContentHead = _interopRequireDefault(require("../CmtTypography/CmtContentHead"));

var _CmtAvatar = _interopRequireDefault(require("../CmtAvatar"));

var _excluded = ["avatar", "title", "subTitle", "titleProps", "subTitleProps"];

var CmtUserSummary = function CmtUserSummary(_ref) {
  var avatar = _ref.avatar,
      title = _ref.title,
      subTitle = _ref.subTitle,
      titleProps = _ref.titleProps,
      subTitleProps = _ref.subTitleProps,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_core.Box, restProps, avatar && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, avatar)), title && /*#__PURE__*/_react.default.createElement(_CmtContentHead.default, {
    title: title,
    subTitle: subTitle,
    titleProps: titleProps,
    subTitleProps: subTitleProps
  }));
};

CmtUserSummary.propTypes = {
  avatar: _propTypes.default.string,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  subTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleProps: _propTypes.default.object,
  subTitleProps: _propTypes.default.object
};
CmtUserSummary.defaultProps = {
  titleProps: {},
  subTitleProps: {}
};

var _default = /*#__PURE__*/_react.default.memo(CmtUserSummary);

exports.default = _default;