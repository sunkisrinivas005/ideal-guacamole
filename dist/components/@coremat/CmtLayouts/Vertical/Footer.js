"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  var _appFooterWrapper;

  return {
    appFooter: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)'
    },
    appFooterWrapper: (_appFooterWrapper = {
      padding: '12px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 64
    }, (0, _defineProperty2.default)(_appFooterWrapper, theme.breakpoints.up('md'), {
      paddingLeft: 50,
      paddingRight: 50
    }), (0, _defineProperty2.default)(_appFooterWrapper, theme.breakpoints.up('lg'), {
      paddingLeft: 65,
      paddingRight: 65
    }), (0, _defineProperty2.default)(_appFooterWrapper, theme.breakpoints.up('xl'), {
      paddingLeft: 88,
      paddingRight: 88
    }), _appFooterWrapper)
  };
});

var CmtFooter = /*#__PURE__*/_react.default.forwardRef(function LayoutFooter(props, ref) {
  var type = props.type,
      children = props.children;
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      headerType: type
    };
  });

  var contentRef = /*#__PURE__*/_react.default.createRef();

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    ref: contentRef,
    className: (0, _clsx.default)(classes.appFooter, 'Cmt-footer')
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    ref: contentRef,
    className: (0, _clsx.default)(classes.appFooterWrapper, 'Cmt-footer-wrapper')
  }, children));
});

var _default = CmtFooter;
exports.default = _default;
CmtFooter.defaultProps = {
  type: 'fixed',
  name: 'LayoutFooter'
};
CmtFooter.propTypes = {
  type: _propTypes.default.oneOf(['fixed', 'static'])
};