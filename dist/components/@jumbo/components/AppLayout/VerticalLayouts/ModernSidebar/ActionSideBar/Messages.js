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

var _CmtList = _interopRequireDefault(require("../../../../../../@coremat/CmtList"));

var _MessageItem = _interopRequireDefault(require("../../../partials/Header/HeaderMessages/MessageItem"));

var _EmptyResult = _interopRequireDefault(require("./EmptyResult"));

var _SearchBox = _interopRequireDefault(require("./Search/SearchBox"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    },
    sectionHeading: {
      fontSize: 10,
      color: theme.palette.text.secondary,
      marginBottom: 20,
      textTransform: 'uppercase'
    }
  };
});

var Messages = function Messages() {
  var classes = useStyles();

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      searchKeyword = _useState4[0],
      setSearchKeyword = _useState4[1];

  var totalMessages = (0, _react.useMemo)(function () {
    return messages.length;
  }, [messages]);

  var onSearchKeyword = function onSearchKeyword(event) {
    var newSearchKeyword = event.target.value;
    setSearchKeyword(newSearchKeyword);

    if (newSearchKeyword) {
      setMessages(messages.filter(function (item) {
        return item.user.name.toLowerCase().includes(searchKeyword.toLowerCase()) || item.message.toLowerCase().includes(searchKeyword.toLowerCase());
      }));
    } else {
      setMessages([]);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_core.Box, null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement(_core.Box, {
    fontSize: 22,
    fontWeight: 700
  }, "Messages"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    color: "primary"
  }, "View All")), /*#__PURE__*/_react.default.createElement(_SearchBox.default, {
    searchKeyword: searchKeyword,
    onSearch: onSearchKeyword,
    placeholder: "Search in messages..."
  }), /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.sectionHeading
  }, "Unread Messages"), totalMessages ? /*#__PURE__*/_react.default.createElement(_CmtList.default, {
    data: messages,
    renderRow: function renderRow(item, index) {
      return /*#__PURE__*/_react.default.createElement(_MessageItem.default, {
        key: index,
        item: item
      });
    }
  }) : /*#__PURE__*/_react.default.createElement(_EmptyResult.default, {
    content: "No record found"
  }));
};

var _default = Messages;
exports.default = _default;