"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _JssHelper = require("../CmtHelpers/JssHelper");

var _colors = require("@material-ui/core/colors");

var hoverOpacity = 0.7;
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    buttonRoot: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    labelRoot: {
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center'
    },
    primary: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(theme.palette.primary.main) + ', ' + hoverOpacity + ')'
      }
    },
    secondary: {
      color: theme.palette.getContrastText(theme.palette.secondary.main),
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(theme.palette.secondary.main) + ', ' + hoverOpacity + ')'
      }
    },
    amber: {
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: _colors.amber[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.amber[500]) + ', ' + hoverOpacity + ')'
      }
    },
    brown: {
      color: '#ffffff',
      backgroundColor: _colors.brown[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.brown[500]) + ', ' + hoverOpacity + ')'
      }
    },
    red: {
      color: '#ffffff',
      backgroundColor: _colors.red[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.red[500]) + ', ' + hoverOpacity + ')'
      }
    },
    green: {
      color: '#ffffff',
      backgroundColor: _colors.green[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.green[500]) + ', ' + hoverOpacity + ')'
      }
    },
    blue: {
      color: '#ffffff',
      backgroundColor: _colors.blue[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.blue[500]) + ', ' + hoverOpacity + ')'
      }
    },
    yellow: {
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: _colors.yellow[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.yellow[500]) + ', ' + hoverOpacity + ')'
      }
    },
    grey: {
      color: '#ffffff',
      backgroundColor: _colors.grey[400],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.grey[400]) + ', ' + hoverOpacity + ')'
      }
    },
    orange: {
      color: theme.palette.getContrastText(_colors.deepOrange[500]),
      backgroundColor: _colors.deepOrange[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.deepOrange[500]) + ', ' + hoverOpacity + ')'
      }
    },
    purple: {
      color: theme.palette.getContrastText(_colors.purple[500]),
      backgroundColor: _colors.purple[500],
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.purple[500]) + ', ' + hoverOpacity + ')'
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;