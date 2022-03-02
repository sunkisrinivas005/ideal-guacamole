"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    headerRoot: function headerRoot(props) {
      return {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        zIndex: 1,
        padding: 24,
        '&.Cmt-separator': _objectSpread(_objectSpread({}, props.separatorStyles), {}, {
          '& + .Cmt-card-content': {
            paddingTop: 24
          }
        }),
        '& + .Cmt-card-content': {
          paddingTop: 0
        }
      };
    },
    headerAlignCenter: function headerAlignCenter(props) {
      return {
        paddingLeft: props.contentWidth + 12,
        '& .Cmt-content-head': {
          justifyContent: 'center',
          '& .Cmt-header-content': {
            flex: '0 0 auto'
          }
        }
      };
    },
    titleStyle: {
      position: 'relative'
    },
    subTitleStyle: {
      marginBottom: 0,
      marginTop: 4,
      fontSize: 12,
      color: theme.palette.text.disabled,
      letterSpacing: 0.4,
      fontWeight: theme.typography.fontWeightRegular
    },
    '@keyframes showHide': {
      '0%': {
        animationTimingFunction: 'ease-in',
        opacity: 0,
        transform: 'scale(0)'
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    actionMenu: {
      '& button': {
        padding: 0,
        height: 40,
        width: 40,
        minWidth: 'auto',
        fontSize: 10
      }
    },
    actionMenuDefault: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 10,
      '& .Cmt-action-menu-hover': {
        top: '50%'
      }
    },
    actionMenuAbsolute: {
      position: 'relative',
      paddingTop: 40,
      '& .Cmt-action-menu': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
        textAlign: 'center',
        transition: 'all 0.25s ease'
      }
    },
    actionMenuHover: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 2,
      transition: 'all 0.25s ease'
    },
    showActionMenu: {
      animationName: '$showHide',
      animationDuration: '0.25s',
      animationTimingFunction: 'ease-in',
      transform: 'translate(20% , -20%)'
    },
    hideActionMenu: {
      transform: 'translate(100% , -100%)',
      animationName: '$showHide',
      animationDuration: '0.25s',
      animationTimingFunction: 'ease-in'
    },
    showActionDefaultMenu: {
      animationName: '$showHide',
      animationDuration: '0.25s',
      animationTimingFunction: 'ease-in',
      transform: 'translate(20% , -50%)'
    },
    hideActionDefaultMenu: {
      transform: 'translate(100% , -50%)',
      animationName: '$showHide',
      animationDuration: '0.25s',
      animationTimingFunction: 'ease-in'
    }
  };
});
var _default = useStyles;
exports.default = _default;