"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    revealArea: {
      position: 'relative',
      overflow: 'hidden'
    },
    backLayer: {
      color: theme.palette.common.white,
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 1,
      backgroundColor: theme.palette.primary.main,
      paddingBottom: 65
    },
    backLayerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 24px'
    },
    iconBlock: {
      display: 'block'
    },
    iconView: {
      '& .MuiSvgIcon-root': {
        display: 'block'
      }
    },
    frontLayer: function frontLayer(props) {
      return {
        position: 'relative',
        zIndex: 2,
        marginBottom: props.headerSize,
        backgroundColor: theme.palette.background.paper,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
      };
    },
    frontLayerSubHeader: {
      display: 'flex',
      padding: '18px 24px',
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
});
var _default = useStyles;
exports.default = _default;