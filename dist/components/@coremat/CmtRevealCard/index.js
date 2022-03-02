"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _core = require("@material-ui/core");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _CmtTypography = require("../CmtTypography");

var _RevealEffect = _interopRequireDefault(require("../CmtTransitions/RevealEffect"));

var _CmtCard = _interopRequireDefault(require("../CmtCard"));

var _excluded = ["revealed", "onClose", "revealComponentTitle", "titleProps", "revealComponent", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    revealHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 24,
      '& + .Cmt-card-content': {
        paddingTop: 0
      }
    },
    revealArea: {
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      overflowY: 'auto',
      left: 0,
      top: '100%',
      width: '100%',
      height: '100%',
      zIndex: 3,
      boxSizing: 'border-box'
    }
  };
});
var contentRef = /*#__PURE__*/(0, _react.createRef)();

var CmtRevealCard = function CmtRevealCard(_ref) {
  var revealed = _ref.revealed,
      onClose = _ref.onClose,
      revealComponentTitle = _ref.revealComponentTitle,
      titleProps = _ref.titleProps,
      revealComponent = _ref.revealComponent,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      contentHeight = _useState2[0],
      setContentHeight = _useState2[1];

  var windowReSized = function windowReSized() {
    if (contentRef.current) setContentHeight(contentRef.current.clientHeight);
  };

  (0, _react.useEffect)(function () {
    windowReSized();
  }, [revealed]);
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, rest, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    },
    ref: contentRef
  }, children), /*#__PURE__*/_react.default.createElement(_RevealEffect.default, {
    in: revealed
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.revealArea)
  }, /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    style: {
      height: contentHeight
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.revealHeader
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    flex: 1
  }, revealComponentTitle && /*#__PURE__*/_react.default.createElement(_CmtTypography.CmtTitle, (0, _extends2.default)({
    content: revealComponentTitle
  }, titleProps))), /*#__PURE__*/_react.default.createElement(_core.Box, {
    my: -3
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null)))), revealComponent))));
};

CmtRevealCard.propTypes = {
  revealed: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  revealComponentTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleProps: _propTypes.default.object,
  revealComponent: _propTypes.default.element
};
CmtRevealCard.defaultProps = {
  revealed: false,
  revealComponentTitle: '',
  titleProps: {
    variant: 'h2',
    component: 'div'
  }
};
var _default = CmtRevealCard;
exports.default = _default;