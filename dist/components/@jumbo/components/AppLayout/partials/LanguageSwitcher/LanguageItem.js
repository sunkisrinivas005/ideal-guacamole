"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _CmtImage = _interopRequireDefault(require("../../../../../@coremat/CmtImage"));

var _data = require("./data");

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 24px',
      '& .flag': {
        fontSize: 30
      },
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, 0.08)
      }
    }
  };
});

var LanguageItem = function LanguageItem(_ref) {
  var language = _ref.language,
      _onClick = _ref.onClick;
  var locale = language.locale,
      name = language.name;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: (0, _clsx.default)(classes.root, 'pointer'),
    onClick: function onClick() {
      return _onClick(language);
    }
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: _data.flags[locale]
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    ml: 3
  }, name));
};

var _default = LanguageItem;
exports.default = _default;