"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    cardHeaderRoot: {
      paddingTop: 16,
      paddingBottom: 16
    },
    titleRoot: {
      fontSize: 12,
      marginBottom: 2,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold
    },
    iconRoot: {
      fontSize: 14,
      display: 'block',
      marginTop: 4
    }
  };
});
var _default = useStyles;
exports.default = _default;