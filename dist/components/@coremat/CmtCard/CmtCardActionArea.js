"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _excluded = ["className", "children"];
var useStyles = (0, _core.makeStyles)(function () {
  return {
    root: {
      position: 'relative',
      zIndex: 1
    }
  };
});

var CmtCardActionArea = function CmtCardActionArea(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.CardActionArea, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, 'CmtCard-ActionArea')
  }, rest), children);
};

CmtCardActionArea.propTypes = {
  className: _propTypes.default.string
};
var _default = CmtCardActionArea;
exports.default = _default;