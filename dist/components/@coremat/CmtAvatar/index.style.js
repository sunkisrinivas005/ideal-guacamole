"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _colors = require("@material-ui/core/colors");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      cursor: 'pointer'
    },
    primary: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main
    },
    secondary: {
      color: theme.palette.getContrastText(theme.palette.secondary.main),
      backgroundColor: theme.palette.secondary.main
    },
    amber: {
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: _colors.amber[500]
    },
    brown: {
      color: '#ffffff',
      backgroundColor: _colors.brown[500]
    },
    red: {
      color: '#ffffff',
      backgroundColor: _colors.red[500]
    },
    green: {
      color: '#ffffff',
      backgroundColor: _colors.green[500]
    },
    blue: {
      color: '#ffffff',
      backgroundColor: _colors.blue[500]
    },
    yellow: {
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: _colors.yellow[500]
    },
    grey: {
      color: '#ffffff',
      backgroundColor: _colors.grey[400]
    },
    orange: {
      color: theme.palette.getContrastText(_colors.deepOrange[500]),
      backgroundColor: _colors.deepOrange[500]
    },
    purple: {
      color: theme.palette.getContrastText(_colors.purple[500]),
      backgroundColor: _colors.purple[500]
    },
    customSize: function customSize(props) {
      return {
        height: props.size,
        width: props.size
      };
    },
    small: {
      height: 40,
      width: 40
    },
    medium: {
      height: 48,
      width: 48
    },
    large: {
      height: 56,
      width: 56
    }
  };
});
var _default = useStyles;
exports.default = _default;