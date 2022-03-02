"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _CmtDropdownMenu = _interopRequireDefault(require("../CmtDropdownMenu"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _index = _interopRequireDefault(require("./index.style"));

var _JssHelper = require("../CmtHelpers/JssHelper");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CmtAdvCard = function CmtAdvCard(_ref) {
  var className = _ref.className,
      actions = _ref.actions,
      actionHandleIcon = _ref.actionHandleIcon,
      actionHandler = _ref.actionHandler,
      actionMenuClassName = _ref.actionMenuClassName,
      backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      gradientDirection = _ref.gradientDirection,
      overlay = _ref.overlay,
      children = _ref.children;
  var backgroundStyles = (0, _JssHelper.getBackgroundStyle)(backgroundColor, backgroundImage, gradientDirection);
  var overlayStyles = (0, _JssHelper.getOverLayStyle)(overlay);
  var classes = (0, _index.default)();
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

  return /*#__PURE__*/_react.default.createElement(_core.Card, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: (0, _clsx.default)(classes.advCardRoot, className),
    style: backgroundStyles
  }, actions.length > 0 && /*#__PURE__*/_react.default.createElement(_core.Box, {
    ml: 2,
    className: (0, _clsx.default)(classes.actionMenu, actionMenuClassName)
  }, /*#__PURE__*/_react.default.createElement(_CmtDropdownMenu.default, {
    TriggerComponent: /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      size: "small"
    }, actionHandleIcon || /*#__PURE__*/_react.default.createElement(_MoreVert.default, {
      fontSize: "small"
    })),
    items: actions,
    onItemClick: actionHandler
  })), childrenWithProps, overlay.colors && /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.cardOverlay,
    style: overlayStyles
  }));
};

CmtAdvCard.propTypes = {
  actions: _propTypes.default.array,
  actionHandleIcon: _propTypes.default.element,
  actionHandler: _propTypes.default.func,
  actionMenuClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  backgroundImage: _propTypes.default.string,
  gradientDirection: _propTypes.default.string,
  overlay: _propTypes.default.object
};
CmtAdvCard.defaultProps = {
  overlay: {
    colors: '',
    opacity: 0,
    direction: ''
  },
  actions: [],
  actionMenuClassName: '',
  actionHandler: null
};
var _default = CmtAdvCard;
exports.default = _default;