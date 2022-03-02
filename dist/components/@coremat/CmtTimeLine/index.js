"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _CmtTimeLine = _interopRequireDefault(require("./CmtTimeLine.style"));

var _clsx = _interopRequireDefault(require("clsx"));

var CmtTimeLine = function CmtTimeLine(_ref) {
  var children = _ref.children,
      align = _ref.align;
  var classes = (0, _CmtTimeLine.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: (0, _clsx.default)(classes.timelineRoot, 'Cmt-timeline-root', align)
  }, children);
};

var _default = CmtTimeLine;
exports.default = _default;
CmtTimeLine.defaultProps = {
  align: 'center' //left, right, center, zigzag

};