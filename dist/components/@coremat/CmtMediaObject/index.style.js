"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function () {
  return {
    mediaObject: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start'
    },
    mediaImageTop: {
      alignSelf: 'flex-start',
      marginTop: 12
    },
    mediaImageCenter: {
      alignSelf: 'center'
    },
    mediaImageBottom: {
      marginBottom: 12,
      alignSelf: 'flex-end'
    },
    rootAvatar: {
      height: 60,
      width: 60
    },
    mediaBody: {
      flex: '1 1 0%'
    },
    mediaHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    mediaHeaderContent: {
      flex: 1
    },
    mediaActions: {
      alignSelf: 'flex-start'
    },
    mediaFooter: {
      display: 'flex'
    }
  };
});
var _default = useStyles;
exports.default = _default;