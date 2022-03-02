"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _JssHelper = require("../CmtHelpers/JssHelper");

var _excluded = ["backgroundColor", "backgroundImage", "gradientDirection", "overlay", "className", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      position: 'relative',
      '& .Cmt-card-content': {
        position: 'relative',
        zIndex: 1
      }
    },
    cardOverlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%'
    }
  };
});

var CmtCard = function CmtCard(_ref) {
  var backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      gradientDirection = _ref.gradientDirection,
      overlay = _ref.overlay,
      className = _ref.className,
      children = _ref.children,
      cardProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var backgroundStyles = (0, _JssHelper.getBackgroundStyle)(backgroundColor, backgroundImage, gradientDirection);
  var overlayStyles = (0, _JssHelper.getOverLayStyle)(overlay);
  var classes = useStyles();
  var headerRef = (0, _react.useRef)(null);

  var handleMouseEnter = function handleMouseEnter() {
    if (headerRef.current) headerRef.current.onHeaderMouseEntered();
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (headerRef.current) headerRef.current.onHeaderMouseLeft();
  };

  var childrenWithProps = _react.Children.map(children, function (child) {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if ( /*#__PURE__*/(0, _react.isValidElement)(child)) {
      if (child.type.render && child.type.render.name) {
        if (child.type.render.name === 'CmtCardHeader') {
          return /*#__PURE__*/(0, _react.cloneElement)(child, {
            ref: headerRef
          });
        }
      } else {
        return /*#__PURE__*/(0, _react.cloneElement)(child);
      }
    }

    return child;
  });

  return /*#__PURE__*/_react.default.createElement(_core.Card, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: backgroundStyles
  }, cardProps), childrenWithProps, overlay.colors && /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.cardOverlay,
    style: overlayStyles
  }));
};

CmtCard.propTypes = {
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  backgroundImage: _propTypes.default.string,
  gradientDirection: _propTypes.default.string,
  overlay: _propTypes.default.object
};
CmtCard.defaultProps = {
  overlay: {
    colors: '',
    opacity: 0,
    direction: ''
  }
};
var _default = CmtCard;
exports.default = _default;