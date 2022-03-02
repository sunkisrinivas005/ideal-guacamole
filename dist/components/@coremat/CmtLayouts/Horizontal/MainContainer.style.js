"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    appRoot: function appRoot(props) {
      return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
        transition: 'all 0.3s ease',
        '& .Cmt-header': {
          '& .Cmt-toggle-menu': (0, _defineProperty2.default)({
            display: 'none',
            marginRight: 10
          }, theme.breakpoints.down(props.drawerBreakPoint), {
            display: 'block !important'
          }),
          '& .Cmt-header-nav': (0, _defineProperty2.default)({}, theme.breakpoints.down(props.drawerBreakPoint), {
            display: 'none'
          })
        }
      };
    },
    appMain: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
      '& .Cmt-customizerBtn': {
        top: 220
      }
    },
    appInnerRoot: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    },
    appMainContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    },
    '@global': {
      '.layout-type-framed': (0, _defineProperty2.default)({
        '@media screen and (min-width: 1366px)': {
          padding: 20,
          backgroundColor: (0, _core.darken)(theme.palette.primary.main, 0.6),
          overflow: 'hidden',
          '& > #root': {
            height: 'calc(100vh - 40px)',
            borderRadius: 12,
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden'
          },
          '& $appRoot': {
            overflowY: 'auto',
            height: '100%'
          }
        }
      }, theme.breakpoints.up('xl'), {
        padding: 50,
        '& > #root': {
          height: 'calc(100vh - 100px)'
        }
      }),
      '.layout-type-boxed': (0, _defineProperty2.default)({
        '@media screen and (min-width: 1366px)': {
          backgroundColor: (0, _core.darken)(theme.palette.primary.main, 0.6),
          overflow: 'hidden',
          '& > #root': {
            width: 1300,
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden'
          },
          '& $appRoot': {
            overflowY: 'auto'
          }
        }
      }, theme.breakpoints.up('xl'), {
        '& > #root': {
          width: 1740
        }
      })
    }
  };
});
var _default = useStyles;
exports.default = _default;