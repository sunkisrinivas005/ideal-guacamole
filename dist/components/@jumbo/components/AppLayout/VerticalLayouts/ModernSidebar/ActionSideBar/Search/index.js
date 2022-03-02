"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _SearchHistory = _interopRequireDefault(require("./SearchHistory"));

var _lodash = _interopRequireDefault(require("lodash"));

var _CmtList = _interopRequireDefault(require("../../../../../../../@coremat/CmtList"));

var _EmptyResult = _interopRequireDefault(require("../EmptyResult"));

var _CmtMediaObject = _interopRequireDefault(require("../../../../../../../@coremat/CmtMediaObject"));

var _CmtAvatar = _interopRequireDefault(require("../../../../../../../@coremat/CmtAvatar"));

var _SearchBox = _interopRequireDefault(require("./SearchBox"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    requestDetailRoot: {
      padding: '12px 0',
      borderBottom: "solid 1px ".concat(theme.palette.divider),
      cursor: 'pointer',
      '& .Cmt-media-object': {
        alignItems: 'center'
      }
    },
    sectionHeading: {
      fontSize: 10,
      color: theme.palette.text.secondary,
      marginBottom: 20,
      textTransform: 'uppercase'
    },
    avatarSize: (0, _defineProperty2.default)({
      height: 40,
      width: 40
    }, theme.breakpoints.up('sm'), {
      height: 56,
      width: 56
    }),
    titleRoot: {
      fontSize: 14,
      cursor: 'pointer'
    },
    subTitleRoot: {
      fontSize: 12,
      letterSpacing: 0.4,
      color: theme.palette.text.disabled
    }
  };
});
var searchKeywords = ['Autopilot', 'React', 'Bootstrap', 'Crypto', 'Jumbo', 'Top Admin', 'AngulrJs'];

var Search = function Search() {
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchKeyword = _useState2[0],
      setSearchKeyword = _useState2[1];

  var _useState3 = (0, _react.useState)(searchKeywords),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      keywords = _useState4[0],
      setKeywords = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      requests = _useState6[0],
      setRequests = _useState6[1];

  var totalKeywords = (0, _react.useMemo)(function () {
    return keywords.length;
  }, [keywords]);
  var totalRequests = (0, _react.useMemo)(function () {
    return requests.length;
  }, [requests]);
  var delayedQuery = (0, _react.useCallback)(_lodash.default.debounce(function (newValue, noOfKeyword, keywords) {
    addNewKeyword(newValue, noOfKeyword, keywords);
  }, 3000), []);
  (0, _react.useEffect)(function () {
    if (searchKeyword) {
      setRequests(function (requests) {
        return requests.filter(function (item) {
          return item.user.name.toLowerCase().includes(searchKeyword.toLowerCase()) || item.user.username.toLowerCase().includes(searchKeyword.toLowerCase());
        });
      });
    } else {
      setRequests([]);
    }
  }, [searchKeyword]);

  var onSearchKeyword = function onSearchKeyword(event) {
    setSearchKeyword(event.target.value);
    delayedQuery(event.target.value, totalKeywords, keywords);
  };

  var onSearchBlur = function onSearchBlur(event) {
    addNewKeyword(event.target.value, totalKeywords, keywords);
  };

  var addNewKeyword = function addNewKeyword(keyword, totalKeywords, keywords) {
    if (keyword && !keywords.find(function (option) {
      return option.toLowerCase().includes(keyword.toLowerCase());
    })) {
      if (totalKeywords === 7) {
        keywords.pop();
      }

      setKeywords([keyword].concat((0, _toConsumableArray2.default)(keywords)));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700
    },
    className: 'mb-7'
  }, "Search"), /*#__PURE__*/_react.default.createElement(_SearchBox.default, {
    searchKeyword: searchKeyword,
    onSearch: onSearchKeyword,
    onBlur: onSearchBlur
  }), /*#__PURE__*/_react.default.createElement(_SearchHistory.default, {
    keywords: keywords,
    setKeywords: setKeywords
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.sectionHeading
  }, "New Requests"), totalRequests ? /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: requests,
    renderRow: function renderRow(item, index) {
      return /*#__PURE__*/_react.default.createElement(RenderRow, {
        key: index,
        item: item
      });
    }
  }) : /*#__PURE__*/_react.default.createElement(_EmptyResult.default, {
    content: "No record found"
  }));
};

var RenderRow = function RenderRow(_ref) {
  var item = _ref.item;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.requestDetailRoot
  }, /*#__PURE__*/_react.default.createElement(_CmtMediaObject.default, {
    avatarPos: "center",
    avatar: /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      className: classes.avatarSize,
      src: item.user.profile_pic,
      alt: item.user.name
    }),
    title: item.user.name,
    titleProps: {
      variant: 'h4',
      className: classes.titleRoot
    },
    subTitle: "@".concat(item.user.username),
    subTitleProps: {
      variant: 'body2',
      className: classes.subTitleRoot
    },
    actionsComponent: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      size: "small",
      color: "primary",
      variant: "contained",
      style: {
        marginRight: 10
      }
    }, "Accept"), /*#__PURE__*/_react.default.createElement(_core.Button, {
      size: "small",
      color: "primary"
    }, "Cancel"))
  }));
};

var _default = Search;
exports.default = _default;