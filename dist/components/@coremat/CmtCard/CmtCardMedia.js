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

var _core = require("@material-ui/core");

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _excluded = ["icon", "size"],
    _excluded2 = ["cardTitle", "cardTitleProps", "fabButton", "className", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    media: {
      position: 'relative',
      zIndex: 2,
      height: 0,
      paddingTop: '56.25%',
      // 16:9
      '&.Cmt-media-children': {
        height: 'auto',
        minHeight: 150,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& $mediaTitle': {
          position: 'relative',
          bottom: 'auto',
          left: 'auto'
        }
      }
    },
    mediaTitle: {
      fontSize: 24,
      fontWeight: 300,
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: 16,
      maxWidth: '100%'
    },
    fabButton: {
      cursor: 'pointer',
      position: 'absolute',
      right: theme.spacing(4),
      zIndex: 1
    },
    smallSizeFabButton: {
      height: 40,
      width: 40,
      bottom: -20
    },
    mediumSizeFabButton: {
      height: 48,
      width: 48,
      bottom: -24
    },
    largeSizeFabButton: {
      height: 56,
      width: 56,
      bottom: -28
    }
  };
});

var RenderFabButton = function RenderFabButton(_ref) {
  var fabButton = _ref.fabButton;
  var classes = useStyles();
  if (!fabButton) return null;
  if ( /*#__PURE__*/(0, _react.isValidElement)(fabButton)) return fabButton;
  var icon = fabButton.icon,
      size = fabButton.size,
      rest = (0, _objectWithoutProperties2.default)(fabButton, _excluded);
  var btnSize = size ? size : 'small';
  return icon ? /*#__PURE__*/_react.default.createElement(_core.Fab, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.fabButton, 'fab-button', classes["".concat(btnSize, "SizeFabButton")]),
    color: "secondary"
  }, rest), icon) : null;
};

var CmtCardMedia = function CmtCardMedia(_ref2) {
  var cardTitle = _ref2.cardTitle,
      cardTitleProps = _ref2.cardTitleProps,
      fabButton = _ref2.fabButton,
      className = _ref2.className,
      children = _ref2.children,
      rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CardMedia.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.media, children ? 'Cmt-media-children' : '', className, 'Cmt-card-media'),
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cardTitle && /*#__PURE__*/_react.default.createElement(_core.Typography, (0, _extends2.default)({
      component: "h3",
      className: (0, _clsx.default)(classes.mediaTitle),
      color: "primary"
    }, cardTitleProps), cardTitle), /*#__PURE__*/_react.default.createElement(RenderFabButton, {
      fabButton: fabButton
    }), children)
  }, rest));
};

CmtCardMedia.propTypes = {
  cardTitle: _propTypes.default.string,
  cardTitleProps: _propTypes.default.object,
  fabButton: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.node]),
  className: _propTypes.default.string
};
CmtCardMedia.defaultProps = {
  cardTitleProps: {},
  fabButton: null
};
var _default = CmtCardMedia;
exports.default = _default;