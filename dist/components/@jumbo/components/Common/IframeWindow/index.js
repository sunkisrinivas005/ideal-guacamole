"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jss = require("jss");

var _styles = require("@material-ui/core/styles");

var _jssRtl = _interopRequireDefault(require("jss-rtl"));

var _excluded = ["children", "title"];

function FramedWindow(props) {
  var children = props.children,
      document = props.document;

  var _useTheme = (0, _styles.useTheme)(),
      direction = _useTheme.direction;

  _react.default.useEffect(function () {
    document.body.dir = direction;
  }, [document, direction]);

  var _React$useMemo = _react.default.useMemo(function () {
    return {
      jss: (0, _jss.create)({
        plugins: [].concat((0, _toConsumableArray2.default)((0, _styles.jssPreset)().plugins), [(0, _jssRtl.default)()]),
        insertionPoint: document.head
      }),
      sheetsManager: new Map()
    };
  }, [document]),
      jss = _React$useMemo.jss,
      sheetsManager = _React$useMemo.sheetsManager;

  var getWindow = _react.default.useCallback(function () {
    return document.defaultView;
  }, [document]);

  return /*#__PURE__*/_react.default.createElement(_styles.StylesProvider, {
    jss: jss,
    sheetsManager: sheetsManager
  }, /*#__PURE__*/_react.default.cloneElement(children, {
    window: getWindow
  }));
}

FramedWindow.propTypes = {
  children: _propTypes.default.node,
  document: _propTypes.default.object.isRequired
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    frame: {
      backgroundColor: theme.palette.background.default,
      height: 300,
      width: '100%',
      border: 'none',
      boxShadow: theme.shadows[1]
    }
  };
});

var IframeWindow = function IframeWindow(props) {
  var children = props.children,
      title = props.title,
      other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var classes = useStyles();
  /**
   * @type {import('react').Ref<HTMLIFrameElement>}
   */

  var frameRef = _react.default.useRef(null); // If we portal content into the iframe before the load event then that content
  // is dropped in firefox.


  var _React$useReducer = _react.default.useReducer(function () {
    return true;
  }, false),
      _React$useReducer2 = (0, _slicedToArray2.default)(_React$useReducer, 2),
      iframeLoaded = _React$useReducer2[0],
      onLoad = _React$useReducer2[1];

  _react.default.useEffect(function () {
    var document = frameRef.current.contentDocument;

    if (document != null && document.readyState === 'complete' && !iframeLoaded) {
      onLoad();
    }
  }, [iframeLoaded]);

  var document = frameRef.current ? frameRef.current.contentDocument : null;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("iframe", (0, _extends2.default)({
    className: classes.frame,
    onLoad: onLoad,
    ref: frameRef,
    title: title
  }, other)), iframeLoaded !== false ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(FramedWindow, {
    document: document
  }, children), document.body) : null);
};

var _default = IframeWindow;
exports.default = _default;