"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("@material-ui/core/Slider"));

var _styles = require("@material-ui/core/styles");

var boxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      height: 8
    },
    thumb: {
      height: 18,
      width: 18,
      backgroundColor: '#fff',
      boxShadow: boxShadow,
      marginTop: -9,
      marginLeft: -9,
      '&:focus, &:hover, &$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: boxShadow
        }
      }
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)'
    },
    track: {
      height: 3,
      borderRadius: 7
    },
    rail: {
      height: 3,
      borderRadius: 7,
      marginLeft: 4
    }
  };
});

var AppSlider = function AppSlider(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Slider.default, (0, _extends2.default)({
    classes: {
      root: classes.root,
      thumb: classes.thumb,
      valueLabel: classes.valueLabel,
      track: classes.track,
      rail: classes.rail
    }
  }, props));
};

var _default = AppSlider;
exports.default = _default;