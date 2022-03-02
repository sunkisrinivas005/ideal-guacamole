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

var useStyles = (0, _core.makeStyles)(function () {
  return {
    advCardContent: function advCardContent(props) {
      return _objectSpread(_objectSpread({}, props.backgroundStyles), {}, {
        padding: 24,
        position: 'relative',
        '& > *': {
          position: 'relative',
          zIndex: 3
        },
        '&:before': props.overlayStyles ? _objectSpread(_objectSpread({}, props.overlayStyles), {}, {
          content: "''",
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 0,
          width: '100%',
          height: '100%'
        }) : {}
      });
    },
    alignCenter: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      '& .Cmt-content-head': {
        flexDirection: 'column'
      },
      '& .Cmt-avatar': {
        marginRight: 0,
        marginBottom: 15
      }
    },
    gridOrder1: {
      order: 1
    },
    gridOrder2: {
      order: 2
    }
  };
});
var _default = useStyles;
exports.default = _default;