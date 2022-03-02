"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["children", "className"];
var useStyles = (0, _core.makeStyles)(function () {
  return {
    root: function root() {
      return {
        padding: 24
      };
    }
  };
});

var CmtCardContent = function CmtCardContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.CardContent, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, 'Cmt-card-content', className)
  }, rest), children);
};

var _default = CmtCardContent;
exports.default = _default;