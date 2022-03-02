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

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _excluded = ["title", "subTitle", "children", "icon"];
var useStyles = (0, _makeStyles.default)(function (theme) {
  var _titleRoot;

  return {
    cardRoot: {
      '& .Cmt-action-menu': {
        alignItems: 'flex-start'
      }
    },
    cardHeaderRoot: {
      paddingTop: 16,
      paddingBottom: 16,
      '& .Cmt-action-default-menu': {
        alignItems: 'flex-start',
        marginTop: 5
      }
    },
    titleRoot: (_titleRoot = {
      fontSize: 24,
      marginBottom: 2,
      color: theme.palette.common.white
    }, (0, _defineProperty2.default)(_titleRoot, theme.breakpoints.up('sm'), {
      fontSize: 28
    }), (0, _defineProperty2.default)(_titleRoot, theme.breakpoints.up('lg'), {
      fontSize: 32
    }), _titleRoot)
  };
});

var StatisticsCardWithBg = function StatisticsCardWithBg(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      children = _ref.children,
      icon = _ref.icon,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, (0, _extends2.default)({}, rest, {
    className: classes.cardRoot
  }), /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    className: classes.cardHeaderRoot,
    titleProps: {
      variant: 'h1',
      component: 'div',
      className: classes.titleRoot
    },
    title: title,
    subTitle: subTitle,
    subTitleProps: {
      style: {
        color: '#fff',
        fontSize: 16,
        marginTop: 0
      }
    }
  }, icon), children);
};

var _default = StatisticsCardWithBg;
exports.default = _default;