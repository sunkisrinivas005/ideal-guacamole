"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function () {
  return {
    appSidebar: {
      display: 'flex',
      flexDirection: 'column',
      width: function width(props) {
        return props.sidebarWidth;
      },
      height: '100%',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: 1103
    },
    appSidebarContent: {
      height: '100%',
      position: 'relative',
      transition: 'all 0.3s ease',
      backgroundColor: function backgroundColor(props) {
        return props.sidebarTheme.bgColor;
      },
      color: function color(props) {
        return props.sidebarTheme.textColor;
      },
      overflow: 'hidden',
      boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)',
      '.Cmt-miniLayout &': {
        width: function width(props) {
          return props.miniSidebarWidth;
        },
        '&:hover': {
          width: function width(props) {
            return props.sidebarWidth;
          }
        }
      },
      '& > *': {
        position: 'relative',
        zIndex: 3
      }
    },
    actionSidebarWrapper: {
      display: 'flex',
      width: function width(props) {
        return props.sidebarWidth + props.actionSidebarWidth;
      },
      transition: 'all 0.3s ease',
      '& .actionSidebar': {
        width: function width(props) {
          return props.actionSidebarWidth;
        }
      }
    },
    overlayRoot: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%'
    }
  };
});
var _default = useStyles;
exports.default = _default;