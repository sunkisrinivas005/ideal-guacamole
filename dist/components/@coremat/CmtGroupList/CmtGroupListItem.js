"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _styles = require("@material-ui/core/styles");

var _CmtList = _interopRequireDefault(require("../CmtList"));

var _CmtGridView = _interopRequireDefault(require("../CmtGridView"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    collapseHeader: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.background.paper,
      border: "1px solid ".concat((0, _styles.alpha)(theme.palette.common.black, 0.12)),
      borderRadius: 4,
      padding: '8px 24px',
      marginTop: 10,
      marginBottom: 10
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  };
});

var CmtGroupItem = function CmtGroupItem(_ref) {
  var isGrid = _ref.isGrid,
      items = _ref.items,
      itemPadding = _ref.itemPadding,
      column = _ref.column,
      renderItem = _ref.renderItem;

  if (isGrid) {
    return /*#__PURE__*/_react.default.createElement(_CmtGridView.default, {
      data: items,
      itemPadding: itemPadding,
      column: column,
      renderRow: renderItem
    });
  }

  return /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: items,
    renderRow: renderItem
  });
};

var CmtGroupListItem = function CmtGroupListItem(_ref2) {
  var isGrid = _ref2.isGrid,
      itemPadding = _ref2.itemPadding,
      column = _ref2.column,
      isExpandable = _ref2.isExpandable,
      group = _ref2.group,
      items = _ref2.items,
      renderHeader = _ref2.renderHeader,
      renderItem = _ref2.renderItem;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  if (isExpandable) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _clsx2.default)(classes.collapseHeader, 'CmtGroupListItem-collapseHeader'),
      onClick: handleExpandClick
    }, /*#__PURE__*/_react.default.createElement("div", null, renderHeader(group)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      className: (0, _clsx2.default)(classes.expand, (0, _defineProperty2.default)({}, classes.expandOpen, expanded)),
      edge: "end",
      onClick: handleExpandClick,
      "aria-expanded": expanded,
      "aria-label": "show more"
    }, /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null))), /*#__PURE__*/_react.default.createElement(_core.Collapse, {
      in: expanded,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/_react.default.createElement(CmtGroupItem, {
      isGrid: isGrid,
      items: items[group.id],
      itemPadding: itemPadding,
      column: column,
      renderItem: renderItem
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderHeader(group), /*#__PURE__*/_react.default.createElement(CmtGroupItem, {
    isGrid: isGrid,
    items: items[group.id],
    itemPadding: itemPadding,
    column: column,
    renderItem: renderItem
  }));
};

var _default = CmtGroupListItem;
exports.default = _default;