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

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CmtCard = _interopRequireDefault(require("../CmtCard"));

require("react-perfect-scrollbar/dist/css/styles.css");

var _CmtBackDrop = _interopRequireDefault(require("./CmtBackDrop.style"));

var _SlideHeight = _interopRequireDefault(require("../CmtTransitions/SlideHeight"));

var _excluded = ["concealedIcon", "backLayerConcealed", "backLayerRevealed", "extrasContainer", "headerSize", "subHeader", "onRevealed", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CmtBackDrop = function CmtBackDrop(_ref) {
  var concealedIcon = _ref.concealedIcon,
      backLayerConcealed = _ref.backLayerConcealed,
      backLayerRevealed = _ref.backLayerRevealed,
      extrasContainer = _ref.extrasContainer,
      headerSize = _ref.headerSize,
      subHeader = _ref.subHeader,
      onRevealed = _ref.onRevealed,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = (0, _CmtBackDrop.default)({
    headerSize: headerSize
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      revealed = _useState2[0],
      setRevealed = _useState2[1];

  var backLayerContentRef = /*#__PURE__*/(0, _react.createRef)();
  var frontLayerRef = /*#__PURE__*/(0, _react.createRef)();

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      backLayerContentHeight = _useState4[0],
      getBackLayerContentHeight = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      frontLayerHeight = _useState6[0],
      getFrontLayerHeight = _useState6[1];

  var _useState7 = (0, _react.useState)(headerSize),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      expandableValue = _useState8[0],
      setExpandableValue = _useState8[1];

  var setHeight = function setHeight() {
    if (backLayerContentRef.current) getBackLayerContentHeight(backLayerContentRef.current.clientHeight);
    if (frontLayerRef.current) getFrontLayerHeight(frontLayerRef.current.clientHeight);
    if (onRevealed) onRevealed(revealed);
  };

  (0, _react.useEffect)(function () {
    if (revealed && backLayerContentHeight > 0) {
      if (backLayerContentHeight + headerSize > frontLayerHeight) {
        setExpandableValue(frontLayerHeight);
      } else {
        setExpandableValue(backLayerContentHeight + headerSize);
      }
    } else {
      setExpandableValue(headerSize);
    }
  }, [revealed, backLayerContentHeight, frontLayerHeight, headerSize]);

  var onConcealedClick = function onConcealedClick() {
    setRevealed(!revealed);
    setHeight();
  };

  var onRevealClose = function onRevealClose() {
    setRevealed(false);
    setHeight();
  };

  var renderConcealedIcon = function renderConcealedIcon() {
    if (concealedIcon && /*#__PURE__*/(0, _react.isValidElement)(concealedIcon)) {
      return /*#__PURE__*/(0, _react.cloneElement)(concealedIcon, {
        className: classes.iconBlock
      });
    }

    return null;
  };

  var backLayerComponent = function backLayerComponent() {
    return /*#__PURE__*/_react.default.createElement(_core.Box, {
      className: (0, _clsx.default)(classes.backLayer, 'Cmt-BackDrop-backLayer')
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      className: (0, _clsx.default)(classes.backLayerHeader, 'Cmt-BackDrop-backLayerHeader')
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      flex: 1,
      display: "flex",
      alignItems: "center",
      className: "pointer",
      onClick: onConcealedClick
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      mr: 4,
      className: classes.iconView
    }, concealedIcon && !revealed && renderConcealedIcon(), revealed && /*#__PURE__*/_react.default.createElement(_Close.default, {
      className: classes.iconBlock
    })), typeof backLayerConcealed === 'string' ? /*#__PURE__*/_react.default.createElement(_Typography.default, {
      component: "div",
      variant: "h4"
    }, backLayerConcealed) : backLayerConcealed), /*#__PURE__*/_react.default.createElement(_core.Box, {
      ml: 3
    }, extrasContainer)), /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
      style: {
        height: frontLayerHeight - headerSize - 20
      }
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      ref: backLayerContentRef
    }, backLayerRevealed)));
  };

  var frontLayerComponent = function frontLayerComponent() {
    return /*#__PURE__*/_react.default.createElement(_SlideHeight.default, {
      in: revealed,
      slidableHeight: expandableValue
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      ref: frontLayerRef,
      className: (0, _clsx.default)(classes.frontLayer, 'Cmt-BackDrop-frontLayer')
    }, subHeader && /*#__PURE__*/_react.default.createElement(_core.Box, {
      className: (0, _clsx.default)(classes.frontLayerSubHeader, 'Cmt-BackDrop-frontLayerSubHeader', {
        pointer: revealed
      }),
      onClick: onRevealClose
    }, /*#__PURE__*/_react.default.createElement(_core.Box, {
      flex: 1,
      mr: 3
    }, typeof subHeader === 'string' ? /*#__PURE__*/_react.default.createElement(_Typography.default, null, subHeader) : subHeader), revealed && /*#__PURE__*/_react.default.createElement(_ExpandLess.default, {
      className: classes.iconBlock
    })), /*#__PURE__*/_react.default.createElement(_core.Box, null, children)));
  };

  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.revealArea, 'Cmt-BackDrop')
  }, rest), backLayerComponent(), frontLayerComponent());
};

CmtBackDrop.propTypes = {
  concealedIcon: _propTypes.default.element,
  backLayerConcealed: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  backLayerRevealed: _propTypes.default.element,
  extrasContainer: _propTypes.default.element,
  headerSize: _propTypes.default.number,
  subHeader: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  onRevealed: _propTypes.default.func
};
CmtBackDrop.defaultProps = {
  concealedIcon: '',
  headerSize: 60,
  subHeader: ''
};
var _default = CmtBackDrop;
exports.default = _default;