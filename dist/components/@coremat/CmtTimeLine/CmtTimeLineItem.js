"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CmtTimeLineItem = _interopRequireDefault(require("./CmtTimeLineItem.style"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CmtTimeLineItem = function CmtTimeLineItem(_ref) {
  var point = _ref.point,
      pointColor = _ref.pointColor,
      head = _ref.head,
      content = _ref.content;
  var classes = (0, _CmtTimeLineItem.default)();
  var pointColorStyle = pointColor ? {
    backgroundColor: pointColor
  } : {};
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: (0, _clsx.default)(classes.timelineItem, 'Cmt-timeline-item')
  }, point ? /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: (0, _clsx.default)(classes.timelineBadge, 'Cmt-timeline-badge'),
    style: pointColorStyle
  }, point) : /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    className: (0, _clsx.default)(classes.makeDot, 'CmtTimeline-dot'),
    style: {
      backgroundColor: pointColor
    }
  }), content, head ? /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: (0, _clsx.default)(classes.timelineTime, 'Cmt-timeline-time')
  }, head) : null);
};

CmtTimeLineItem.propTypes = {
  point: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  pointColor: _propTypes.default.string,
  head: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
var _default = CmtTimeLineItem;
exports.default = _default;