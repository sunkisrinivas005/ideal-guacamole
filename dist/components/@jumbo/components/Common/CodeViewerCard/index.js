"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _HighlightedCode = _interopRequireDefault(require("./HighlightedCode"));

var _CmtCardContent = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardContent"));

var _core = require("@material-ui/core");

var _CmtCardActions = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardActions"));

var _clipboardCopy = _interopRequireDefault(require("clipboard-copy"));

var _Code = _interopRequireDefault(require("@material-ui/icons/Code"));

var _FileCopyOutlined = _interopRequireDefault(require("@material-ui/icons/FileCopyOutlined"));

var _styles = require("@material-ui/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _excluded = ["code", "language", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      overflow: 'unset'
    },
    cardContent: {
      position: 'relative',
      paddingBottom: 0
    },
    cardContentInner: {
      position: 'relative',
      paddingBottom: 40
    },
    actionButtons: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    collapseStyle: {
      borderBottomRightRadius: theme.overrides.MuiCard.root.borderRadius,
      borderBottomLeftRadius: theme.overrides.MuiCard.root.borderRadius,
      borderBottom: "4px solid ".concat(theme.palette.primary.main),
      overflow: 'hidden'
    }
  };
});

var CodeViewerCard = function CodeViewerCard(_ref) {
  var code = _ref.code,
      language = _ref.language,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      snackbarOpen = _useState4[0],
      setSnackbarOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(undefined),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      snackbarMessage = _useState6[0],
      setSnackbarMessage = _useState6[1];

  var handleSnackbarClose = function handleSnackbarClose() {
    setSnackbarOpen(false);
  };

  var handleCopyClick = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _clipboardCopy.default)(code);

            case 2:
              setSnackbarMessage('The source code has been copied.');
              setSnackbarOpen(true);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCopyClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var showCodeLabel = collapsed ? 'Hide the source' : 'Show the source';
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, (0, _extends2.default)({}, rest, {
    className: classes.card
  }), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, {
    className: classes.cardContent
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: classes.cardContentInner
  }, children, code && /*#__PURE__*/_react.default.createElement(_CmtCardActions.default, {
    className: classes.actionButtons
  }, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    PopperProps: {
      disablePortal: true
    },
    title: showCodeLabel,
    placement: "top"
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    }
  }, /*#__PURE__*/_react.default.createElement(_Code.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    PopperProps: {
      disablePortal: true
    },
    title: 'Copy the source',
    placement: "top"
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: handleCopyClick
  }, /*#__PURE__*/_react.default.createElement(_FileCopyOutlined.default, {
    fontSize: "small"
  })))))), /*#__PURE__*/_react.default.createElement(_core.Collapse, {
    className: classes.collapseStyle,
    in: collapsed
  }, /*#__PURE__*/_react.default.createElement(_HighlightedCode.default, {
    code: code,
    language: language
  })), /*#__PURE__*/_react.default.createElement(_core.Snackbar, {
    open: snackbarOpen,
    autoHideDuration: 3000,
    onClose: handleSnackbarClose,
    message: snackbarMessage
  }));
};

var _default = CodeViewerCard;
exports.default = _default;