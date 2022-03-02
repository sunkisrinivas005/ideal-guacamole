"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _SidebarThemeContext = _interopRequireDefault(require("../CmtLayouts/SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    listFooterRoot: {
      padding: 10,
      color: theme.palette.text.secondary,
      display: 'flex',
      justifyContent: 'center'
    },
    listFooterLoaderRoot: {
      width: '100%',
      display: 'flex',
      color: theme.palette.text.secondary,
      justifyContent: 'center',
      padding: 8,
      borderTop: function borderTop(props) {
        return "1px solid ".concat(props.sidebarTheme.borderColor);
      },
      boxSizing: 'border-box'
    }
  };
});

var ListFooter = function ListFooter(_ref) {
  var loading = _ref.loading,
      footerText = _ref.footerText;

  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext.sidebarTheme;

  var classes = useStyles({
    sidebarTheme: sidebarTheme
  });
  return loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: classes.listFooterLoaderRoot
  }, /*#__PURE__*/_react.default.createElement(_core.CircularProgress, {
    size: 16
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2"
  }, "Loading...")) : /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.listFooterRoot, 'Cmt-list-footer')
  }, /*#__PURE__*/_react.default.createElement("p", null, footerText));
};

ListFooter.prototype = {
  loading: _propTypes.default.bool,
  footerText: _propTypes.default.string
};
ListFooter.defaultProps = {
  loading: false
};
var _default = ListFooter;
exports.default = _default;