"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CryptoCard = _interopRequireDefault(require("./CryptoCard.style"));

var CryptoCard = function CryptoCard(_ref) {
  var title = _ref.title,
      amount = _ref.amount,
      progress = _ref.progress,
      children = _ref.children;
  var classes = (0, _CryptoCard.default)();

  var headerSubTitle = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontWeight: 'fontWeightBold',
      fontSize: 20
    }
  }, amount), /*#__PURE__*/_react.default.createElement(_Box.default, {
    ml: 2,
    fontSize: 16,
    color: progress.color,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-1"
  }, progress.value), parseFloat(progress.value) > 0 ? /*#__PURE__*/_react.default.createElement(_ExpandLess.default, {
    className: classes.iconRoot
  }) : /*#__PURE__*/_react.default.createElement(_ExpandMore.default, {
    className: classes.iconRoot
  })));

  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, null, /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    className: classes.cardHeaderRoot,
    titleProps: {
      variant: 'h6',
      component: 'div',
      className: classes.titleRoot
    },
    title: title,
    subTitle: headerSubTitle
  }), children);
};

var _default = CryptoCard;
exports.default = _default;