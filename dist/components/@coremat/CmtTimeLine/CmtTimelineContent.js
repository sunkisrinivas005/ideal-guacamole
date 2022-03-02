"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CmtTimelineContent = _interopRequireDefault(require("./CmtTimelineContent.style"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CmtTimelineContent = function CmtTimelineContent(_ref) {
  var children = _ref.children,
      isWrapper = _ref.isWrapper;
  var classes = (0, _CmtTimelineContent.default)();
  return isWrapper ? /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.timelineCard, 'Cmt-timeline-root')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Cmt-timeline-root-inner"
  }, children)) : /*#__PURE__*/_react.default.createElement("div", {
    className: "Cmt-timeline-root-inner"
  }, children);
};

CmtTimelineContent.propTypes = {
  isWrapper: _propTypes.default.bool
};
CmtTimelineContent.defaultProps = {
  isWrapper: false
};
var _default = CmtTimelineContent;
exports.default = _default;