"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _JssHelper = require("../CmtHelpers/JssHelper");

var _excluded = ["backgroundColor", "backgroundImage", "gradientDirection", "children", "overlay"];
var useStyles = (0, _core.makeStyles)(function () {
  return {
    drawerContainer: {
      width: '100%',
      height: '100%'
    },
    drawerContent: {
      position: 'relative',
      width: '100%',
      height: '100%',
      zIndex: 1
    },
    overlayRoot: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%'
    }
  };
});

var CmtDrawer = function CmtDrawer(_ref) {
  var backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      gradientDirection = _ref.gradientDirection,
      children = _ref.children,
      overlay = _ref.overlay,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var backgroundStyles = (0, _JssHelper.getBackgroundStyle)(backgroundColor, backgroundImage, gradientDirection);
  var overlayStyles = (0, _JssHelper.getOverLayStyle)(overlay);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Drawer, rest, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.drawerContainer, 'Cmt-Drawer-container'),
    style: backgroundStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.drawerContent, 'Cmt-Drawer-content')
  }, children), overlay.colors && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.overlayRoot, 'Cmt-Drawer-overlay'),
    style: overlayStyles
  })));
};

CmtDrawer.propTypes = {
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  backgroundImage: _propTypes.default.string,
  gradientDirection: _propTypes.default.string,
  overlay: _propTypes.default.object
};
CmtDrawer.defaultProps = {
  overlay: {
    colors: '',
    opacity: 0,
    direction: ''
  }
};

var _default = /*#__PURE__*/_react.default.memo(CmtDrawer);

exports.default = _default;