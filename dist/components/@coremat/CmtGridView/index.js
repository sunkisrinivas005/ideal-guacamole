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

var _GridView = _interopRequireDefault(require("./GridView"));

var _GridFooter = _interopRequireDefault(require("./GridFooter"));

var _excluded = ["column", "itemPadding", "ListEmptyComponent", "data", "onEndReached", "renderRow", "footerProps"];

var CmtGridView = function CmtGridView(_ref) {
  var column = _ref.column,
      itemPadding = _ref.itemPadding,
      ListEmptyComponent = _ref.ListEmptyComponent,
      data = _ref.data,
      onEndReached = _ref.onEndReached,
      renderRow = _ref.renderRow,
      footerProps = _ref.footerProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_GridView.default, (0, _extends2.default)({
    column: column,
    itemPadding: itemPadding,
    ListEmptyComponent: ListEmptyComponent,
    data: data,
    onEndReached: onEndReached,
    renderRow: renderRow
  }, rest, {
    ListFooterComponent: footerProps && /*#__PURE__*/_react.default.createElement(_GridFooter.default, {
      loading: footerProps.loading,
      footerText: footerProps.footerText
    })
  }));
};

CmtGridView.propTypes = {
  column: _propTypes.default.number,
  itemPadding: _propTypes.default.number,
  ListEmptyComponent: _propTypes.default.element,
  ListFooterComponent: _propTypes.default.element,
  data: _propTypes.default.array.isRequired,
  onEndReached: _propTypes.default.func,
  renderRow: _propTypes.default.func,
  footerProps: _propTypes.default.object
};
CmtGridView.defaultProps = {
  itemPadding: 0,
  column: 3,
  data: []
};
var _default = CmtGridView;
exports.default = _default;