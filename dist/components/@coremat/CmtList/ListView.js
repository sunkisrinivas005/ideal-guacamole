"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBottomScrollListener = require("react-bottom-scroll-listener");

var _core = require("@material-ui/core");

var _excluded = ["renderRow", "onEndReached", "data", "ListFooterComponent", "ListEmptyComponent"];

var getEmptyContainer = function getEmptyContainer(ListEmptyComponent) {
  if (ListEmptyComponent) return /*#__PURE__*/_react.default.isValidElement(ListEmptyComponent) ? ListEmptyComponent : /*#__PURE__*/_react.default.createElement(ListEmptyComponent, null);
  return null;
};

var getFooterContainer = function getFooterContainer(ListFooterComponent) {
  if (ListFooterComponent) return /*#__PURE__*/_react.default.isValidElement(ListFooterComponent) ? ListFooterComponent : /*#__PURE__*/_react.default.createElement(ListFooterComponent, null);
  return null;
};

var ListView = function ListView(_ref) {
  var renderRow = _ref.renderRow,
      onEndReached = _ref.onEndReached,
      data = _ref.data,
      ListFooterComponent = _ref.ListFooterComponent,
      ListEmptyComponent = _ref.ListEmptyComponent,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  (0, _reactBottomScrollListener.useBottomScrollListener)(onEndReached, 200);
  return /*#__PURE__*/_react.default.createElement(_core.Box, rest, data.length > 0 ? data.map(function (item, index) {
    return renderRow(item, index);
  }) : getEmptyContainer(ListEmptyComponent), getFooterContainer(ListFooterComponent));
};

var _default = ListView;
exports.default = _default;
ListView.propTypes = {
  ListEmptyComponent: _propTypes.default.element,
  ListFooterComponent: _propTypes.default.element,
  data: _propTypes.default.array.isRequired,
  onEndReached: _propTypes.default.func,
  renderRow: _propTypes.default.func
};
ListView.defaultProps = {
  data: [],
  onEndReached: function onEndReached() {}
};