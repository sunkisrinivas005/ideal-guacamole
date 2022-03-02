"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Image = _interopRequireDefault(require("@material-ui/icons/Image"));

var DummyItem = function DummyItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    key: item,
    style: {
      backgroundColor: 'red'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, null, /*#__PURE__*/_react.default.createElement(_Image.default, null))), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    primary: 'Photos - ' + item,
    secondary: "Jan 9, 2014"
  }));
};

var _default = DummyItem;
exports.default = _default;