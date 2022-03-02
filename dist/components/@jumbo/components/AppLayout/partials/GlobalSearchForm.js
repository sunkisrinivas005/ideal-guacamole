"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _searchRoot;

  return {
    searchRoot: (_searchRoot = {
      position: 'relative',
      width: 260
    }, (0, _defineProperty2.default)(_searchRoot, theme.breakpoints.up('md'), {
      width: 450
    }), (0, _defineProperty2.default)(_searchRoot, '& .Cmt-icon', {
      position: 'absolute',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1
    }), (0, _defineProperty2.default)(_searchRoot, '& .MuiInputBase-root', {
      width: '100%'
    }), (0, _defineProperty2.default)(_searchRoot, '& .MuiInputBase-input', {
      position: 'relative',
      flex: '1 1 auto',
      width: '1%',
      minWidth: 0,
      height: 48,
      borderRadius: '30px 0 0  30px',
      backgroundColor: (0, _styles.alpha)(theme.palette.common.dark, 0.08),
      color: theme.palette.text.secondary,
      boxSizing: 'border-box',
      padding: '5px 15px 5px 50px',
      transition: 'all 0.3s ease',
      '&:not(:last-child) .MuiOutlinedInput-root': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      '&:focus': {
        backgroundColor: (0, _styles.alpha)(theme.palette.common.dark, 0.12)
      }
    }), _searchRoot),
    inputGroup: {
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch'
    },
    inputGroupAppend: {
      marginRight: '-1px'
    },
    button: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      borderRadius: '0 30px 30px 0',
      height: '100%',
      minWidth: 100
    }
  };
});

var GlobalSearchForm = function GlobalSearchForm() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      showCategories = _React$useState2[0],
      setShowCategories = _React$useState2[1];

  var onShowCategories = function onShowCategories(event) {
    setShowCategories(event.currentTarget);
  };

  var onHideCategories = function onHideCategories() {
    setShowCategories(null);
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pr: 3,
    className: (0, _clsx.default)(classes.searchRoot, 'Cmt-search')
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.inputGroup
  }, /*#__PURE__*/_react.default.createElement(_core.InputBase, {
    className: classes.inputText,
    placeholder: 'Search here...',
    inputProps: {
      'aria-label': 'search'
    }
  }), /*#__PURE__*/_react.default.createElement(_Search.default, {
    className: (0, _clsx.default)('Cmt-icon')
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: (0, _clsx.default)(classes.inputGroupAppend, 'Cmt-inputGroupAppend')
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "outlined",
    className: classes.button,
    endIcon: /*#__PURE__*/_react.default.createElement(_ArrowDropDown.default, null),
    onClick: onShowCategories
  }, "Categories"), /*#__PURE__*/_react.default.createElement(_Menu.default, {
    id: "simple-menu",
    anchorEl: showCategories,
    keepMounted: true,
    open: Boolean(showCategories),
    onClose: onHideCategories
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    onClick: onHideCategories
  }, "Option 1"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    onClick: onHideCategories
  }, "Option 2"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    onClick: onHideCategories
  }, "Option 3")))));
};

var _default = GlobalSearchForm;
exports.default = _default;