"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var bgImage = '/images/auth/auth-bg-pattern.png';
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _authWrap, _authCard;

  return {
    authWrap: (_authWrap = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: function backgroundImage(props) {
        return props.variant === 'bgColor' ? "URL(".concat(bgImage, ")") : '';
      },
      backgroundPosition: function backgroundPosition(props) {
        return props.variant === 'bgColor' ? 'center center' : '';
      },
      backgroundRepeat: function backgroundRepeat(props) {
        return props.variant === 'bgColor' ? 'no-repeat' : '';
      },
      backgroundSize: function backgroundSize(props) {
        return props.variant === 'bgColor' ? 'cover' : '';
      },
      position: 'relative',
      padding: 20
    }, (0, _defineProperty2.default)(_authWrap, theme.breakpoints.up('sm'), {
      padding: 40
    }), (0, _defineProperty2.default)(_authWrap, '&:before', {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: function backgroundColor(props) {
        return props.variant === 'bgColor' ? (0, _styles.alpha)(theme.palette.primary.main, 0.5) : '';
      }
    }), _authWrap),
    authCard: (_authCard = {
      position: 'relative',
      zIndex: 3,
      maxWidth: function maxWidth(props) {
        return props.variant === 'default' ? '850px' : '550px';
      },
      width: '100%',
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column'
    }, (0, _defineProperty2.default)(_authCard, theme.breakpoints.up('md'), {
      flexDirection: 'row'
    }), (0, _defineProperty2.default)(_authCard, theme.breakpoints.up('xl'), {
      maxWidth: function maxWidth(props) {
        return props.variant === 'default' ? '1050px' : '750px';
      }
    }), _authCard)
  };
});

var AuthWrapper = function AuthWrapper(_ref) {
  var children = _ref.children,
      variant = _ref.variant;
  var classes = useStyles({
    variant: variant
  });
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.authWrap
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.authCard
  }, children));
};

var _default = AuthWrapper;
exports.default = _default;