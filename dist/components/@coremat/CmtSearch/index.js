"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _index = _interopRequireDefault(require("./index.style"));

var _excluded = ["border", "placeholder", "iconPosition", "align", "onlyIcon", "containerStyle", "inputStyle", "iconStyle", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var CmtSearch = function CmtSearch(_ref) {
  var border = _ref.border,
      placeholder = _ref.placeholder,
      iconPosition = _ref.iconPosition,
      align = _ref.align,
      onlyIcon = _ref.onlyIcon,
      containerStyle = _ref.containerStyle,
      inputStyle = _ref.inputStyle,
      iconStyle = _ref.iconStyle,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = (0, _index.default)({
    align: align
  });

  var inputBaseStyle = _objectSpread({
    border: border ? '1px solid' : '0 none'
  }, inputStyle);

  var inputBaseClasses = {
    root: (0, _clsx.default)(classes.inputRoot, 'CmtSearch-input-root'),
    input: (0, _clsx.default)(classes.inputInput, 'CmtSearch-input')
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.root, 'CmtSearch-root', className),
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.search, onlyIcon ? classes.searchIconBox : null)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.searchIcon, 'CmtSearch-icon-wrapper', {
      right: iconPosition === 'right'
    }),
    style: iconStyle
  }, /*#__PURE__*/_react.default.createElement(_Search.default, {
    style: iconStyle
  })), /*#__PURE__*/_react.default.createElement(_InputBase.default, (0, _extends2.default)({
    placeholder: placeholder || 'Search…',
    style: inputBaseStyle,
    classes: inputBaseClasses,
    inputProps: {
      'aria-label': 'search'
    }
  }, rest))));
};

var _default = CmtSearch;
exports.default = _default;
CmtSearch.prototype = {
  border: _propTypes.default.bool,
  iconPosition: _propTypes.default.string,
  align: _propTypes.default.string,
  onlyIcon: _propTypes.default.bool,
  containerStyle: _propTypes.default.object,
  inputStyle: _propTypes.default.object,
  iconStyle: _propTypes.default.object,
  className: _propTypes.default.string
};
CmtSearch.defaultProps = {
  border: true,
  containerStyle: {},
  inputStyle: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    color: 'grey',
    borderRadius: 4
  },
  iconPosition: 'left',
  onlyIcon: false,
  align: 'left',
  iconStyle: {
    color: 'grey'
  }
};