"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CmtGroupListItem = _interopRequireDefault(require("./CmtGroupListItem"));

var _CmtList = _interopRequireDefault(require("../CmtList"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CmtGroupList = function CmtGroupList(_ref) {
  var isExpandable = _ref.isExpandable,
      isGrid = _ref.isGrid,
      itemPadding = _ref.itemPadding,
      column = _ref.column,
      data = _ref.data,
      renderHeader = _ref.renderHeader,
      renderItem = _ref.renderItem,
      groupIdentifier = _ref.groupIdentifier;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      groups = _useState2[0],
      setGroups = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      groupItems = _useState4[0],
      setGroupItems = _useState4[1];

  (0, _react.useEffect)(function () {
    var groupList = [];
    var groupListItems = data.reduce(function (groupItems, dataItem) {
      var groupDetail = null;
      groupDetail = groupIdentifier(dataItem);

      if (groupDetail && groupDetail.id) {
        if (!groupList.some(function (item) {
          return item.id === groupDetail.id;
        })) {
          groupList.push(groupDetail);
        }

        if (!groupItems[groupDetail.id]) {
          groupItems[groupDetail.id] = [];
        }

        groupItems[groupDetail.id].push(dataItem);
      }

      return groupItems;
    }, {});
    setGroups(groupList);
    setGroupItems(groupListItems);
  }, [data, groupIdentifier]);

  var renderRow = function renderRow(group) {
    return /*#__PURE__*/_react.default.createElement(_CmtGroupListItem.default, {
      key: group.id,
      isExpandable: isExpandable,
      isGrid: isGrid,
      itemPadding: itemPadding,
      column: column,
      group: group,
      items: groupItems,
      renderHeader: renderHeader,
      renderItem: renderItem
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, groups.length > 0 && /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: groups,
    renderRow: renderRow
  }));
};

var _default = CmtGroupList;
exports.default = _default;
CmtGroupList.defaultProps = {
  isExpandable: false,
  isGrid: false,
  data: []
};
CmtGroupList.prototype = {
  isExpandable: _propTypes.default.bool,
  isGrid: _propTypes.default.bool,
  itemPadding: _propTypes.default.number,
  column: _propTypes.default.number,
  data: _propTypes.default.array,
  renderHeader: _propTypes.default.func,
  renderItem: _propTypes.default.func,
  groupIdentifier: _propTypes.default.func
};