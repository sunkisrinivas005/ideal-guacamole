"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pxToRem = exports.isUrlInChildren = exports.hexToRgba = exports.getSeparatorStyle = exports.getOverLayStyle = exports.getBackgroundStyle = exports.componentColors = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var pxToRem = function pxToRem(target) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '10px';
  return target / context * '1rem';
};

exports.pxToRem = pxToRem;
var componentColors = ['amber', 'brown', 'orange', 'purple', 'primary', 'red', 'green', 'blue', 'grey', 'yellow', 'secondary'];
exports.componentColors = componentColors;

var getBackgroundStyle = function getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection) {
  if (backgroundImage) return {
    backgroundImage: "url(".concat(backgroundImage, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: 'cover'
  };

  if (typeof backgroundColor === 'string' || Array.isArray(backgroundColor) && backgroundColor.length === 1) {
    return {
      backgroundColor: backgroundColor.toString()
    };
  }

  if (Array.isArray(backgroundColor) && backgroundColor.length > 1) {
    var _backgroundColor$0$sp = backgroundColor[0].split(' '),
        _backgroundColor$0$sp2 = (0, _slicedToArray2.default)(_backgroundColor$0$sp, 1),
        firstColor = _backgroundColor$0$sp2[0];

    return {
      backgroundColor: firstColor,
      backgroundImage: gradientDirection ? "linear-gradient(".concat(gradientDirection, ", ").concat(backgroundColor.join(', '), ")") : "linear-gradient(".concat(backgroundColor.join(', '), ")")
    };
  }

  return null;
};

exports.getBackgroundStyle = getBackgroundStyle;

var getOverLayStyle = function getOverLayStyle(overlay) {
  if (overlay.colors) {
    if (typeof overlay.colors === 'string' || Array.isArray(overlay.colors) && overlay.colors.length === 1) {
      return {
        backgroundColor: overlay.colors.toString(),
        opacity: overlay.opacity
      };
    } else if (Array.isArray(overlay.colors) && overlay.colors.length > 1) {
      var _overlay$colors$0$spl = overlay.colors[0].split(' '),
          _overlay$colors$0$spl2 = (0, _slicedToArray2.default)(_overlay$colors$0$spl, 1),
          firstColor = _overlay$colors$0$spl2[0];

      return {
        backgroundColor: firstColor,
        backgroundImage: overlay.direction ? "linear-gradient(".concat(overlay.direction, ", ").concat(overlay.colors.join(', '), ")") : "linear-gradient(".concat(overlay.colors.join(', '), ")"),
        opacity: overlay.opacity
      };
    }
  }

  return null;
};

exports.getOverLayStyle = getOverLayStyle;

var getSeparatorStyle = function getSeparatorStyle(separator) {
  var topBorder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (separator.color) {
    var borderWidth = separator.borderWidth ? separator.borderWidth : 1;
    var borderStyle = separator.borderStyle ? separator.borderStyle : 'solid';

    if (topBorder) {
      return {
        borderTop: "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(separator.color)
      };
    }

    return {
      borderBottom: "".concat(borderWidth, "px ").concat(borderStyle, " ").concat(separator.color)
    };
  }

  return null;
};

exports.getSeparatorStyle = getSeparatorStyle;

var hexToRgba = function hexToRgba(input) {
  input = input + '';
  input = input.replace('#', '');
  var hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error('input is not a valid hex color.');
  }

  if (input.length === 3) {
    var _first = input[0];
    var _second = input[1];
    var _last = input[2];
    input = _first + _first + _second + _second + _last + _last;
  }

  input = input.toUpperCase();
  var first = input[0] + input[1];
  var second = input[2] + input[3];
  var last = input[4] + input[5];
  return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16);
};
/**
 * Check if the given url can be found
 * in one of the given parent's children
 *
 * @param parent
 * @param url
 * @returns {boolean}
 */


exports.hexToRgba = hexToRgba;

var isUrlInChildren = function isUrlInChildren(parent, url) {
  if (!parent.children) {
    return false;
  }

  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (parent.children[i].link === url || url.includes(parent.children[i].link)) {
      return true;
    }
  }

  return false;
};

exports.isUrlInChildren = isUrlInChildren;