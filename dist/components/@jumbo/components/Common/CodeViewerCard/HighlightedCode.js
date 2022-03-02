"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _MarkdownElement = _interopRequireDefault(require("./MarkdownElement"));

var _prism = _interopRequireDefault(require("../../../utils/prism"));

var _excluded = ["code", "language"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HighlightedCode = /*#__PURE__*/React.forwardRef(function HighlightedCode(props, ref) {
  var code = props.code,
      language = props.language,
      other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var renderedCode = React.useMemo(function () {
    return (0, _prism.default)(code.trim(), language);
  }, [code, language]);
  return /*#__PURE__*/React.createElement(_MarkdownElement.default, (0, _extends2.default)({
    ref: ref
  }, other), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    className: "language-".concat(language) // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: renderedCode
    }
  })));
});
HighlightedCode.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};
var _default = HighlightedCode;
exports.default = _default;