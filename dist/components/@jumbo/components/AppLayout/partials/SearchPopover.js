"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _core = require("@material-ui/core");

var _CmtSearch = _interopRequireDefault(require("../../../../@coremat/CmtSearch"));

var SearchPopover = function SearchPopover(_ref) {
  var iconClassName = _ref.iconClassName,
      popoverClassName = _ref.popoverClassName;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleOpenSearchBar = function handleOpenSearchBar(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleCloseSearchBar = function handleCloseSearchBar() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: iconClassName,
    onClick: handleOpenSearchBar
  }, /*#__PURE__*/_react.default.createElement(_Search.default, null)), /*#__PURE__*/_react.default.createElement(_core.Popover, {
    className: popoverClassName,
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleCloseSearchBar,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_CmtSearch.default, null)));
};

var _default = SearchPopover;
exports.default = _default;