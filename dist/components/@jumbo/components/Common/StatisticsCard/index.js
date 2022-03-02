"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtAdvCard = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard"));

var _CmtAdvCardContent = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard/CmtAdvCardContent"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _excluded = ["backgroundColor", "title", "titleProps", "amount", "description", "children"];
var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    cardHeader: {
      padding: 16
    },
    cardBody: {
      position: 'relative'
    },
    cardContent: {
      padding: 16,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      zIndex: 1
    },
    chartTitle: {
      marginBottom: 6
    },
    chartSubTitle: {
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'capitalize'
    }
  };
});

var StatisticsCard = function StatisticsCard(_ref) {
  var backgroundColor = _ref.backgroundColor,
      title = _ref.title,
      titleProps = _ref.titleProps,
      amount = _ref.amount,
      description = _ref.description,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtAdvCard.default, (0, _extends2.default)({
    backgroundColor: backgroundColor
  }, rest), /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    className: classes.cardHeader,
    title: title,
    titleProps: titleProps
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.cardBody
  }, /*#__PURE__*/_react.default.createElement(_CmtAdvCardContent.default, {
    className: classes.cardContent,
    title: amount,
    titleProps: {
      variant: 'h1',
      component: 'div',
      className: classes.chartTitle
    },
    subTitle: description,
    subTitleProps: {
      className: classes.chartSubTitle
    },
    columnSizes: [12, 0]
  }), children));
};

var _default = StatisticsCard;
exports.default = _default;