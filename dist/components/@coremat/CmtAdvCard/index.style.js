"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _JssHelper = require("../CmtHelpers/JssHelper");

var _colors = require("@material-ui/core/colors");

var useStyles = (0, _core.makeStyles)({
  advCardRoot: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    height: '100%'
  },
  cardOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%'
  },
  actionMenu: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 4,
    '& button': {
      backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.deepPurple[500]) + ', 0.5)',
      padding: 0,
      height: 40,
      width: 40,
      minWidth: 'auto',
      fontSize: 10,
      '&:hover': {
        backgroundColor: 'rgba(' + (0, _JssHelper.hexToRgba)(_colors.deepPurple[500]) + ', 0.7)'
      }
    }
  }
});
var _default = useStyles;
exports.default = _default;