"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    sectionHeading: {
      fontSize: 10,
      color: theme.palette.text.secondary,
      marginBottom: 20,
      textTransform: 'uppercase'
    },
    chipRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > .MuiChip-root': {
        marginBottom: 12,
        '&:not(:last-child)': {
          marginRight: 12
        }
      }
    }
  };
});

var SearchHistory = function SearchHistory(_ref) {
  var keywords = _ref.keywords,
      setKeywords = _ref.setKeywords;
  var classes = useStyles();

  var handleDelete = function handleDelete(keyword) {
    setKeywords(keywords.filter(function (option) {
      return option !== keyword;
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    mb: 7
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionHeading
  }, "History"), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.chipRoot
  }, keywords.map(function (keyword, index) {
    return /*#__PURE__*/_react.default.createElement(_core.Chip, {
      key: index,
      label: keyword,
      onDelete: function onDelete() {
        return handleDelete(keyword);
      }
    });
  })));
};

var _default = SearchHistory;
exports.default = _default;