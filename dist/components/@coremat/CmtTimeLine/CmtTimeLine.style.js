"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    timelineRoot: {
      position: 'relative',
      '&.right': {
        textAlign: 'right'
      }
    }
  };
});

exports.default = _default;