"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _styles = require("@material-ui/core/styles");

var bgImage = '/images/horizontal-header-bg-pattern.png';
var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    appHeaderDark: {
      backgroundImage: "URL(".concat(bgImage, ")"),
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      color: theme.palette.common.white,
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, 0.47)
      },
      '& > *': {
        position: 'relative',
        zIndex: 3
      },
      '& .Cmt-btn': {
        color: theme.palette.common.white,
        '&:hover, &:focus': {
          backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.04),
          color: theme.palette.common.white
        }
      },
      '& .Cmt-divider': {
        backgroundColor: theme.palette.background.paper
      },
      '& .Cmt-appIcon, & .Cmt-searchIcon': {
        color: theme.palette.common.white,
        '&:hover, &:focus': {
          backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.04),
          color: theme.palette.common.white
        }
      },
      '& .Cmt-lang-switch, & .Cmt-profile-pic': {
        '&:before': {
          backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.38)
        }
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;