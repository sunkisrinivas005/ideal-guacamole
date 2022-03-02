"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _ArrowUpward = _interopRequireDefault(require("@material-ui/icons/ArrowUpward"));

var _ArrowDownward = _interopRequireDefault(require("@material-ui/icons/ArrowDownward"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var useStyles = (0, _makeStyles.default)(function () {
  return {
    headerRoot: {
      paddingBottom: 8
    }
  };
});

var GrowthCard = function GrowthCard(_ref) {
  var growth = _ref.growth,
      desc = _ref.desc,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, null, /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    className: classes.headerRoot,
    title: /*#__PURE__*/_react.default.createElement(_Box.default, {
      component: "h2",
      color: growth > 0 ? '#8DCD03' : '#E00930'
    }, growth, "% ", growth > 0 ? /*#__PURE__*/_react.default.createElement(_ArrowUpward.default, {
      fontSize: "small"
    }) : /*#__PURE__*/_react.default.createElement(_ArrowDownward.default, {
      fontSize: "small"
    })),
    subTitle: /*#__PURE__*/_react.default.createElement(_Box.default, {
      component: "p",
      mb: 0,
      color: "text.secondary",
      fontSize: 12
    }, desc)
  }), children);
};

var _default = GrowthCard;
exports.default = _default;