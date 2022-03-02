"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _LayoutContext = _interopRequireDefault(require("../LayoutContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var contentRef = /*#__PURE__*/_react.default.createRef();

var SidebarToggleHandler = /*#__PURE__*/_react.default.forwardRef(function SidebarToggleHandler(props, ref) {
  var _useContext = (0, _react.useContext)(_LayoutContext.default),
      isSidebarOpen = _useContext.isSidebarOpen,
      setSidebarOpen = _useContext.setSidebarOpen;

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      isOpen: isSidebarOpen
    };
  });
  return /*#__PURE__*/_react.default.createElement(_IconButton.default, (0, _extends2.default)({
    className: "Cmt-toggle-menu",
    ref: contentRef,
    onClick: function onClick() {
      return setSidebarOpen(!isSidebarOpen);
    }
  }, props), /*#__PURE__*/_react.default.createElement(_Menu.default, null));
});

var _default = SidebarToggleHandler;
exports.default = _default;