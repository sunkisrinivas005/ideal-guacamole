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

var _ListFooter = _interopRequireDefault(require("./ListFooter"));

var _ListView = _interopRequireDefault(require("./ListView"));

var _excluded = ["footerProps"];

var CmtList = function CmtList(_ref) {
  var footerProps = _ref.footerProps,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_ListView.default, (0, _extends2.default)({}, props, {
    ListFooterComponent: footerProps && /*#__PURE__*/_react.default.createElement(_ListFooter.default, {
      loading: footerProps.loading,
      footerText: footerProps.footerText
    })
  }));
};

var _default = CmtList;
exports.default = _default;
CmtList.propTypes = {
  ListEmptyComponent: _propTypes.default.element,
  ListFooterComponent: _propTypes.default.element,
  data: _propTypes.default.array.isRequired,
  onEndReached: _propTypes.default.func,
  footerProps: _propTypes.default.object
};
CmtList.defaultProps = {
  data: []
};