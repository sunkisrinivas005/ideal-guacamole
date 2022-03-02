"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _CmtAdvCard = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard"));

var _CmtAdvCardContent = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard/CmtAdvCardContent"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _TrendingUp = _interopRequireDefault(require("@material-ui/icons/TrendingUp"));

var _TrendingDown = _interopRequireDefault(require("@material-ui/icons/TrendingDown"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _core = require("@material-ui/core");

var _excluded = ["title", "subTitle", "growth", "color", "labels", "children"];
var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    advCard: {
      borderTop: function borderTop(props) {
        return "solid 4px ".concat(props.color);
      }
    },
    titleRoot: (0, _defineProperty2.default)({
      marginBottom: 10
    }, theme.breakpoints.up('lg'), {
      fontSize: 24
    }),
    subTitleRoot: {
      fontSize: 16,
      color: theme.palette.common.black,
      letterSpacing: 0.15
    },
    dots: {
      height: 8,
      width: 8,
      borderRadius: '50%',
      boxShadow: '0px 2px 4px rgba(68, 68, 79, 0.15)'
    },
    iconSm: {
      fontSize: 18
    }
  };
});

var StatisticsClassicCard = function StatisticsClassicCard(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      growth = _ref.growth,
      color = _ref.color,
      labels = _ref.labels,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles({
    color: color
  });
  return /*#__PURE__*/_react.default.createElement(_CmtAdvCard.default, (0, _extends2.default)({
    className: classes.advCard
  }, rest), /*#__PURE__*/_react.default.createElement(_CmtAdvCardContent.default, {
    alignCenter: true
  }, children, /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    mt: 2
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "div",
    variant: "h1",
    className: classes.titleRoot,
    style: {
      color: color
    }
  }, title), /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.subTitleRoot
  }, subTitle)), /*#__PURE__*/_react.default.createElement(_Box.default, {
    ml: "auto"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: growth > 0 ? 'green' : 'red'
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, Math.abs(growth), "%"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    ml: 1
  }, growth > 0 ? /*#__PURE__*/_react.default.createElement(_TrendingUp.default, {
    className: classes.iconSm
  }) : /*#__PURE__*/_react.default.createElement(_TrendingDown.default, {
    className: classes.iconSm
  }))), labels && labels.length > 0 && /*#__PURE__*/_react.default.createElement(_Box.default, {
    mt: 1,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center"
  }, labels.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      key: index,
      ml: 2,
      mb: 1,
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_Box.default, {
      mr: 2,
      component: "span",
      className: classes.dots,
      style: {
        backgroundColor: item.color
      }
    }), /*#__PURE__*/_react.default.createElement(_Box.default, {
      component: "span",
      fontSize: 12,
      color: "common.dark"
    }, item.name));
  }))))));
};

var _default = StatisticsClassicCard;
exports.default = _default;