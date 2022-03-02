"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    searchRoot: {
      position: 'relative',
      width: '100%',
      marginBottom: 35,
      '& .MuiSvgIcon-root': {
        position: 'absolute',
        left: 18,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1
      },
      '& .MuiInputBase-root': {
        width: '100%'
      },
      '& .MuiInputBase-input': {
        height: 48,
        borderRadius: 30,
        backgroundColor: theme.palette.background.paper,
        border: "1px solid ".concat(theme.palette.divider),
        boxSizing: 'border-box',
        padding: '5px 15px 5px 50px',
        transition: 'all 0.3s ease'
      }
    }
  };
});

var SearchBox = function SearchBox(_ref) {
  var searchKeyword = _ref.searchKeyword,
      onSearch = _ref.onSearch,
      onBlur = _ref.onBlur,
      placeholder = _ref.placeholder;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pr: 3,
    className: classes.searchRoot
  }, /*#__PURE__*/_react.default.createElement(_Search.default, null), /*#__PURE__*/_react.default.createElement(_core.InputBase, {
    placeholder: placeholder || 'Search here...',
    inputProps: {
      'aria-label': 'search'
    },
    value: searchKeyword,
    onChange: onSearch,
    onBlur: onBlur
  }));
};

var _default = SearchBox;
exports.default = _default;