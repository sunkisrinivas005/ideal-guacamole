"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _CmtAdvCard = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtAdvCardContent = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard/CmtAdvCardContent"));

var _excluded = ["titleIcon", "title", "subTitle", "children"];
var useStyles = (0, _makeStyles.default)(function (theme) {
  var _titleRoot;

  return {
    cardContentRoot: {
      '& .MuiGrid-container': {
        alignItems: 'center'
      }
    },
    titleRoot: (_titleRoot = {
      fontSize: 24,
      marginBottom: 3
    }, (0, _defineProperty2.default)(_titleRoot, theme.breakpoints.up('sm'), {
      fontSize: 28
    }), (0, _defineProperty2.default)(_titleRoot, theme.breakpoints.up('lg'), {
      fontSize: 32
    }), _titleRoot),
    subTitleRoot: {
      fontSize: 16
    }
  };
});

var StatisticsModernCard = function StatisticsModernCard(_ref) {
  var titleIcon = _ref.titleIcon,
      title = _ref.title,
      subTitle = _ref.subTitle,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtAdvCard.default, rest, /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    title: titleIcon
  }), /*#__PURE__*/_react.default.createElement(_CmtAdvCardContent.default, {
    className: classes.cardContentRoot,
    title: title,
    titleProps: {
      variant: 'h1',
      component: 'div',
      style: {
        color: '#fff'
      },
      className: classes.titleRoot
    },
    subTitle: subTitle,
    subTitleProps: {
      variant: 'body2',
      component: 'p',
      style: {
        color: '#fff'
      },
      className: classes.subTitleRoot
    },
    columnSizes: [7, 5],
    reverseDir: true
  }, children));
};

var _default = StatisticsModernCard;
exports.default = _default;