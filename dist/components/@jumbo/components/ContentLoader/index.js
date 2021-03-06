"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _reactRedux = require("react-redux");

var _PageLoader = _interopRequireDefault(require("../PageComponents/PageLoader"));

var _actions = require("../../../redux/actions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SlideTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_core.Slide, (0, _extends2.default)({}, props, {
    direction: "left"
  }));
}

var ContentLoader = function ContentLoader() {
  var _useSelector = (0, _reactRedux.useSelector)(function (_ref) {
    var common = _ref.common;
    return common;
  }),
      error = _useSelector.error,
      loading = _useSelector.loading,
      message = _useSelector.message;

  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      dispatch((0, _actions.fetchError)(''));
    }, 3000);
  }, [dispatch, error, message]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement(_PageLoader.default, null), /*#__PURE__*/_react.default.createElement(_core.Snackbar, {
    open: Boolean(error),
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    TransitionComponent: SlideTransition
  }, /*#__PURE__*/_react.default.createElement(_lab.Alert, {
    variant: "filled",
    severity: "error"
  }, error)), /*#__PURE__*/_react.default.createElement(_core.Snackbar, {
    open: Boolean(message),
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    TransitionComponent: SlideTransition
  }, /*#__PURE__*/_react.default.createElement(_lab.Alert, {
    variant: "filled",
    severity: "success"
  }, message)));
};

var _default = ContentLoader;
exports.default = _default;