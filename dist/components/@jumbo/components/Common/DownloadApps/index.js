"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _CmtAdvCard = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard"));

var _CmtAdvCardContent = _interopRequireDefault(require("../../../../@coremat/CmtAdvCard/CmtAdvCardContent"));

var _CmtImage = _interopRequireDefault(require("../../../../@coremat/CmtImage"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _core = require("@material-ui/core");

var apps = [{
  label: 'Andrioid App',
  imageURL: '/images/dashboard/google_play_store.png',
  link: 'http://play.store.com'
}, {
  label: 'IOS App',
  imageURL: '/images/dashboard/apple_play_store.png',
  link: 'http://play.store.com'
}];
var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    cardRoot: {
      color: theme.palette.common.white,
      padding: 16
    },
    titleRoot: {
      fontSize: 10,
      letterSpacing: 1.5,
      marginBottom: 7,
      textTransform: 'uppercase'
    },
    subTitleRoot: {
      fontSize: 20,
      marginBottom: 10
    }
  };
});

var DownloadApps = function DownloadApps() {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_CmtAdvCard.default, {
    className: classes.cardRoot,
    backgroundColor: ['#03DAC5 -18.96%', '#6200EE 108.17%'],
    gradientDirection: "180deg"
  }, /*#__PURE__*/_react.default.createElement(_CmtAdvCardContent.default, {
    title: "Download Mobile Apps",
    titleProps: {
      variant: 'body1',
      component: 'div',
      className: classes.titleRoot
    },
    subTitle: "Now, your account is on your fingers",
    subTitleProps: {
      variant: 'h1',
      component: 'div',
      className: classes.subTitleRoot
    },
    extraContent: /*#__PURE__*/_react.default.createElement(_Box.default, {
      mt: 5,
      mx: -2,
      display: "flex",
      alignItems: "center"
    }, apps.map(function (app, index) {
      return /*#__PURE__*/_react.default.createElement(_Box.default, {
        px: 2,
        key: index
      }, /*#__PURE__*/_react.default.createElement(_core.Link, {
        href: app.link
      }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
        src: app.imageURL
      })));
    })),
    alignCenter: true
  }));
};

var _default = DownloadApps;
exports.default = _default;