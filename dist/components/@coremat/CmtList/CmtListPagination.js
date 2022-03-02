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

var _clsx = _interopRequireDefault(require("clsx"));

var _Pagination = _interopRequireDefault(require("@material-ui/lab/Pagination"));

var _core = require("@material-ui/core");

var _ListView = _interopRequireDefault(require("./ListView"));

var _excluded = ["data", "paginationProps", "position", "onPageChange", "pageItemCounts"];
var useStyles = (0, _core.makeStyles)(function () {
  return {
    navPagination: {
      display: 'flex',
      padding: 10,
      '&.left': {
        justifyContent: 'flex-start'
      },
      '&.right': {
        justifyContent: 'flex-end'
      },
      '&.center': {
        justifyContent: 'center'
      }
    }
  };
});

var CmtListPagination = function CmtListPagination(_ref) {
  var data = _ref.data,
      paginationProps = _ref.paginationProps,
      position = _ref.position,
      onPageChange = _ref.onPageChange,
      pageItemCounts = _ref.pageItemCounts,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  var page = paginationProps.page,
      count = paginationProps.count;
  var updatedData = data;

  if (count > 0) {
    updatedData = data.slice((page - 1) * pageItemCounts, page * pageItemCounts);
  }

  return /*#__PURE__*/_react.default.createElement(_ListView.default, (0, _extends2.default)({}, rest, {
    data: updatedData,
    ListFooterComponent: count > 0 ? /*#__PURE__*/_react.default.createElement(_Pagination.default, (0, _extends2.default)({
      className: (0, _clsx.default)(classes.navPagination, position)
    }, paginationProps, {
      count: count,
      page: page,
      onChange: onPageChange
    })) : null
  }));
};

var _default = CmtListPagination;
exports.default = _default;
CmtListPagination.propTypes = {
  paginationProps: _propTypes.default.object,
  // @pageItemCounts display item at a time in list
  pageItemCounts: _propTypes.default.number,
  position: _propTypes.default.oneOf(['left', 'center', 'right']),
  ListEmptyComponent: _propTypes.default.element,
  ListFooterComponent: _propTypes.default.element,
  data: _propTypes.default.array.isRequired,
  onEndReached: _propTypes.default.func.isRequired,
  onPageChange: _propTypes.default.func
};
CmtListPagination.defaultProps = {
  pageItemCounts: 10,
  paginationProps: {
    // @page is current active page in pagination
    page: 1,
    // @page total count of pages shown in pagination
    count: 5
  },
  position: 'center',
  data: []
};