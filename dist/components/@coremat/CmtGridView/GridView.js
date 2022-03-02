"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactBottomScrollListener = require("react-bottom-scroll-listener");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _excluded = ["width", "column", "responsive", "itemPadding", "renderRow", "onEndReached", "data", "ListFooterComponent", "ListEmptyComponent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function () {
  return {
    gridContainer: {
      width: '100%',
      overflow: 'hidden'
    },
    columnRow: function columnRow(props) {
      return {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: "-".concat(props.itemPadding / 2, "px")
      };
    },
    columnCount: function columnCount(props) {
      return {
        flexGrow: 0,
        maxWidth: "".concat(100 / props.displayColumn, "%"),
        flexBasis: "".concat(100 / props.displayColumn, "%"),
        padding: "".concat(props.itemPadding / 2, "px"),
        boxSizing: 'border-box'
      };
    }
  };
});

var getColumnCount = function getColumnCount(responsive, width, column) {
  if (responsive) {
    if (width === 'xs') {
      return responsive.xs || column;
    } else if (width === 'sm') {
      return responsive.sm || responsive.xs || column;
    } else if (width === 'md') {
      return responsive.md || responsive.sm || responsive.xs || column;
    } else if (width === 'lg') {
      return responsive.lg || responsive.md || responsive.sm || responsive.xs || column;
    } else if (width === 'xl') {
      return responsive.xl || responsive.lg || responsive.md || responsive.sm || responsive.xs || column;
    }
  } else {
    return column;
  }
};

var getEmptyContainer = function getEmptyContainer(ListEmptyComponent) {
  if (ListEmptyComponent) {
    return /*#__PURE__*/_react.default.isValidElement(ListEmptyComponent) ? ListEmptyComponent : /*#__PURE__*/_react.default.createElement(ListEmptyComponent, null);
  }

  return null;
};

var getFooterContainer = function getFooterContainer(ListFooterComponent) {
  if (ListFooterComponent) {
    return /*#__PURE__*/_react.default.isValidElement(ListFooterComponent) ? ListFooterComponent : /*#__PURE__*/_react.default.createElement(ListFooterComponent, null);
  }

  return null;
};

var GridView = function GridView(_ref) {
  var width = _ref.width,
      column = _ref.column,
      responsive = _ref.responsive,
      itemPadding = _ref.itemPadding,
      renderRow = _ref.renderRow,
      onEndReached = _ref.onEndReached,
      data = _ref.data,
      ListFooterComponent = _ref.ListFooterComponent,
      ListEmptyComponent = _ref.ListEmptyComponent,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(column),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayColumn = _useState2[0],
      setDisplayColumn = _useState2[1];

  var classes = useStyles({
    displayColumn: displayColumn,
    itemPadding: itemPadding
  });

  if (!onEndReached) {
    onEndReached = function onEndReached() {};
  }

  (0, _react.useEffect)(function () {
    setDisplayColumn(getColumnCount(responsive, width, column));
  }, [width, column, responsive]);
  (0, _reactBottomScrollListener.useBottomScrollListener)(onEndReached, 200);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.gridContainer
  }, /*#__PURE__*/_react.default.createElement(_core.Box, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.columnRow, 'Cmt-column-row')
  }, rest), data.length > 0 ? data.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: (0, _clsx.default)(classes.columnCount, 'Cmt-column-count')
    }, renderRow(item, index));
  }) : null), data.length === 0 ? getEmptyContainer(ListEmptyComponent) : null, getFooterContainer(ListFooterComponent));
};

var _default = (0, _core.withWidth)()(GridView);

exports.default = _default;
GridView.propTypes = {
  column: _propTypes.default.number,
  responsive: _propTypes.default.object,
  itemPadding: _propTypes.default.number,
  ListEmptyComponent: _propTypes.default.element,
  ListFooterComponent: _propTypes.default.element,
  data: _propTypes.default.array.isRequired,
  onEndReached: _propTypes.default.func,
  renderRow: _propTypes.default.func
};
GridView.defaultProps = {
  data: [],
  itemPadding: 0,
  column: 3
};