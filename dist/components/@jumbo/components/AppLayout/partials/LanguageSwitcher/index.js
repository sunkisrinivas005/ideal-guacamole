"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _AppContext = _interopRequireDefault(require("../../../contextProvider/AppContextProvider/AppContext"));

var _LanguageItem = _interopRequireDefault(require("./LanguageItem"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _CmtCard = _interopRequireDefault(require("../../../../../@coremat/CmtCard"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtList = _interopRequireDefault(require("../../../../../@coremat/CmtList"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _CmtImage = _interopRequireDefault(require("../../../../../@coremat/CmtImage"));

var _data = require("./data");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function () {
  return {
    cardRoot: {
      '& .Cmt-header-root': {
        paddingTop: 14,
        paddingBottom: 14
      }
    },
    perfectScrollbarLanguage: {
      height: 324
    },
    menuItemRoot: {
      paddingTop: 0,
      paddingBottom: 0,
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    popoverRoot: {
      '& .MuiPopover-paper': {
        width: 205
      }
    }
  };
});

var LanguageSwitcher = function LanguageSwitcher() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_AppContext.default),
      locale = _useContext.locale,
      setLocale = _useContext.setLocale;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var theme = (0, _core.useTheme)();

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? 'language' : undefined;

  var switchLanguage = function switchLanguage(item) {
    setLocale(item);
    handleClose();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: handleClick,
    "data-tut": "reactour__localization"
  }, /*#__PURE__*/_react.default.createElement(_CmtImage.default, {
    src: _data.flags[locale.locale]
  })), /*#__PURE__*/_react.default.createElement(_core.Popover, {
    className: classes.popoverRoot,
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_CmtCard.default, {
    className: classes.cardRoot
  }, /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    title: "Language",
    separator: {
      color: theme.palette.borderColor.dark,
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    className: classes.perfectScrollbarLanguage
  }, /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: _data.languageData,
    renderRow: function renderRow(item, index) {
      return /*#__PURE__*/_react.default.createElement(_LanguageItem.default, {
        key: index,
        language: item,
        onClick: switchLanguage
      });
    }
  })))));
};

var _default = LanguageSwitcher;
exports.default = _default;