"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _lab = require("@material-ui/lab");

var _core = require("@material-ui/core");

var _CmtAvatar = _interopRequireDefault(require("../CmtAvatar"));

var _excluded = ["items", "max", "srcKey", "titleKey", "phCharLength", "avatarSize", "onItemClick", "onMoreClick", "spacing", "expandable", "renderItemSummary", "renderMore", "moreVisibleOn", "itemStyle", "activeItemStyle", "tooltipProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    rootAvatarGroup: function rootAvatarGroup(props) {
      return {
        '& .MuiAvatar-root': {
          borderColor: props.avatarStyle.outlineColor,
          borderWidth: props.avatarStyle.outlineThickness,
          marginLeft: -props.spacing,
          transition: 'all 0.30s ease',
          '&:first-child': {
            marginLeft: 0
          },
          '&:hover': {
            borderColor: props.avatarActiveStyle.outlineColor ? props.avatarActiveStyle.outlineColor : theme.palette.primary.main,
            borderWidth: props.avatarActiveStyle.outlineThickness,
            boxShadow: "rgba(0,0,0,0.2) 0px 2px ".concat(props.avatarActiveStyle.elevation, "px -1px"),
            zIndex: "".concat(props.totalRecords, " !important")
          }
        },
        '&:hover .Cmt-hoverEffect': {
          marginLeft: 0
        }
      };
    }
  };
});

var getPlaceholderChar = function getPlaceholderChar(str, phCharLength) {
  if (str && phCharLength > 0) {
    return str.substr(0, phCharLength).toUpperCase();
  }
};

var CmtAvatarGroup = function CmtAvatarGroup(_ref) {
  var items = _ref.items,
      max = _ref.max,
      srcKey = _ref.srcKey,
      titleKey = _ref.titleKey,
      phCharLength = _ref.phCharLength,
      avatarSize = _ref.avatarSize,
      onItemClick = _ref.onItemClick,
      onMoreClick = _ref.onMoreClick,
      spacing = _ref.spacing,
      expandable = _ref.expandable,
      renderItemSummary = _ref.renderItemSummary,
      renderMore = _ref.renderMore,
      moreVisibleOn = _ref.moreVisibleOn,
      itemStyle = _ref.itemStyle,
      activeItemStyle = _ref.activeItemStyle,
      tooltipProps = _ref.tooltipProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var avatarStyle = function avatarStyle() {
    return _objectSpread({
      outlineColor: '#fafafa',
      outlineThickness: 2
    }, itemStyle);
  };

  var avatarActiveStyle = function avatarActiveStyle() {
    return _objectSpread({
      outlineColor: '',
      outlineThickness: 2,
      elevation: 3
    }, activeItemStyle);
  };

  var totalRecords = items.length;
  var visibleItems = items.slice(0, max < totalRecords ? max - 1 : max);
  var restItems = max < totalRecords ? items.slice(max - 1, totalRecords) : [];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      openMoreTooltip = _useState2[0],
      setOpenMoreTooltip = _useState2[1];

  var _useState3 = (0, _react.useState)(moreVisibleOn && moreVisibleOn !== 'click' && restItems.length && renderMore ? renderMore(restItems) : ''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      renderedMoreItems = _useState4[0],
      setRenderedMoreItems = _useState4[1];

  var ttProps = moreVisibleOn === 'click' ? {
    open: openMoreTooltip
  } : {};
  (0, _react.useEffect)(function () {
    if (openMoreTooltip) {
      setRenderedMoreItems(renderMore(restItems));
    } else if (moreVisibleOn === 'click') {
      setRenderedMoreItems('');
    } //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [openMoreTooltip]);
  var classes = useStyles({
    spacing: spacing,
    avatarStyle: avatarStyle,
    avatarActiveStyle: avatarActiveStyle,
    totalRecords: totalRecords
  });

  var handleItemClick = function handleItemClick(item, index, event) {
    if (onItemClick) onItemClick(item, index, event);
  };

  return /*#__PURE__*/_react.default.createElement(_lab.AvatarGroup, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.rootAvatarGroup, 'Cmt-root-avatar-group'),
    max: max
  }, rest), visibleItems.map(function (item, index) {
    return renderItemSummary ? /*#__PURE__*/_react.default.createElement(_core.Tooltip, (0, _extends2.default)({
      title: renderItemSummary(item, index),
      key: index
    }, tooltipProps), /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      className: expandable ? 'Cmt-hoverEffect' : '',
      alt: item[titleKey],
      src: item[srcKey],
      size: avatarSize,
      onClick: function onClick(event) {
        return handleItemClick(item, index, event);
      },
      style: {
        cursor: 'pointer',
        zIndex: index
      }
    }, getPlaceholderChar(item[titleKey], phCharLength))) : /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
      key: index,
      className: expandable ? 'Cmt-hoverEffect' : '',
      alt: item[titleKey],
      src: item[srcKey],
      size: avatarSize,
      onClick: function onClick(event) {
        return handleItemClick(item, index, event);
      },
      style: {
        cursor: 'pointer',
        zIndex: index
      }
    }, getPlaceholderChar(item[titleKey], phCharLength));
  }), max < totalRecords && /*#__PURE__*/_react.default.createElement(_core.Tooltip, (0, _extends2.default)({
    title: renderedMoreItems
  }, ttProps), /*#__PURE__*/_react.default.createElement(_CmtAvatar.default, {
    className: (0, _clsx.default)('Cmt-avatar-more', expandable ? 'Cmt-hoverEffect' : ''),
    alt: restItems.length.toString(),
    size: avatarSize,
    style: {
      cursor: 'pointer',
      zIndex: max
    },
    onClick: function onClick(event) {
      if ((onMoreClick && (0, _typeof2.default)(onMoreClick)) === 'function') onMoreClick(event);

      if (moreVisibleOn === 'click') {
        setOpenMoreTooltip(!openMoreTooltip);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_core.ClickAwayListener, {
    onClickAway: function onClickAway() {
      return setOpenMoreTooltip(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, "+", restItems.length)))));
};

CmtAvatarGroup.prototype = {
  items: _propTypes.default.array.isRequired,
  max: _propTypes.default.number,
  spacing: _propTypes.default.number,
  srcKey: _propTypes.default.string,
  titleKey: _propTypes.default.string,
  phCharLength: _propTypes.default.number,
  avatarSize: _propTypes.default.oneOfType([_propTypes.default.oneOf(['small', 'medium', 'large']), _propTypes.default.number]),
  onItemClick: _propTypes.default.func,
  onMoreClick: _propTypes.default.func,
  expandable: _propTypes.default.bool,
  renderItemSummary: _propTypes.default.func,
  renderMore: _propTypes.default.func,
  moreVisibleOn: _propTypes.default.oneOf(['hover', 'click']),
  itemStyle: _propTypes.default.object,
  activeItemStyle: _propTypes.default.object,
  tooltipProps: _propTypes.default.object
};
CmtAvatarGroup.defaultProps = {
  items: [],
  max: 5,
  spacing: 8,
  srcKey: 'src',
  titleKey: 'title',
  phCharLength: 1,
  avatarSize: 'medium',
  expandable: false,
  moreVisibleOn: 'hover',
  itemStyle: {
    outlineColor: '#fafafa',
    outlineThickness: 2
  },
  activeItemStyle: {
    outlineColor: '',
    outlineThickness: 2,
    elevation: 1
  }
};
var _default = CmtAvatarGroup;
exports.default = _default;