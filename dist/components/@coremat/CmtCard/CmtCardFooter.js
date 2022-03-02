"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _JssHelper = require("../CmtHelpers/JssHelper");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _core.makeStyles)(function () {
  return {
    footerRoot: function footerRoot(props) {
      return _objectSpread(_objectSpread({}, props.separatorStyles), {}, {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 24
      });
    }
  };
});

var CmtCardFooter = function CmtCardFooter(_ref) {
  var backgroundColor = _ref.backgroundColor,
      gradientDirection = _ref.gradientDirection,
      separator = _ref.separator,
      children = _ref.children;
  var backgroundStyles = (0, _JssHelper.getBackgroundStyle)(backgroundColor, null, gradientDirection);
  var separatorStyles = (0, _JssHelper.getSeparatorStyle)(separator, true);
  var classes = useStyles({
    separatorStyles: separatorStyles
  });
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: (0, _clsx.default)(classes.footerRoot, 'Cmtfooter-root'),
    style: backgroundStyles
  }, children);
};

CmtCardFooter.propTypes = {
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  gradientDirection: _propTypes.default.string,
  separator: _propTypes.default.object
};
CmtCardFooter.defaultProps = {
  separator: {
    color: '',
    borderWidth: 0,
    borderStyle: 'solid'
  }
};
var _default = CmtCardFooter;
exports.default = _default;