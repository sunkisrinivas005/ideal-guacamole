"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _commonHelper = require("../../../utils/commonHelper");

var _excluded = ["content"];

var TextToHtml = function TextToHtml(_ref) {
  var content = _ref.content,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    component: "p"
  }, restProps, {
    dangerouslySetInnerHTML: {
      __html: (0, _commonHelper.linkify)(content.replace(/(?:\r\n|\r|\n)/g, '<br />'))
    }
  }));
};

var _default = /*#__PURE__*/_react.default.memo(TextToHtml);

exports.default = _default;