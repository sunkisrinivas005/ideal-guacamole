"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      marginBottom: 8
    },
    flexRoot: {
      display: 'flex',
      alignItems: 'center'
    },
    barContainer: function barContainer(props) {
      return {
        borderRadius: props.thickness,
        height: props.thickness
      };
    },
    fillStyle: function fillStyle(props) {
      return {
        position: 'relative',
        borderRadius: props.thickness,
        height: props.thickness,
        transition: 'width 1s ease-in-out',
        '&:after': props.pointer ? {
          content: '""',
          height: props.pointerSize ? props.pointerSize : props.thickness + 4,
          width: props.pointerSize ? props.pointerSize : props.thickness + 4,
          position: 'absolute',
          right: 0,
          left: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: props.pointerColor,
          borderRadius: '50%'
        } : {
          height: 0,
          width: 0
        }
      };
    },
    textContainer: {
      textAlign: 'left',
      fontSize: 12,
      color: theme.palette.text.secondary
    },
    textContainerCenter: {
      textAlign: 'center'
    },
    textContainerRight: {
      textAlign: 'right'
    },
    labelContainer: {
      textAlign: 'left'
    },
    labelContainerCenter: {
      textAlign: 'center'
    },
    labelContainerRight: {
      textAlign: 'right'
    }
  };
});
var _default = useStyles;
exports.default = _default;