"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _CmtContentHead = _interopRequireDefault(require("../CmtTypography/CmtContentHead"));

var _CmtDropdownMenu = _interopRequireDefault(require("../CmtDropdownMenu"));

var _JssHelper = require("../CmtHelpers/JssHelper");

var _CmtCardHeader = _interopRequireDefault(require("./CmtCardHeader.style"));

var _excluded = ["icon", "avatar", "title", "titleProps", "subTitle", "subTitleProps", "actions", "actionMenuClassName", "actionHandleIcon", "actionHandler", "actionsPos", "actionsShowOnHover", "backgroundColor", "gradientDirection", "separator", "alignCenter", "children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var contentRef = /*#__PURE__*/_react.default.createRef();

var ActionsMenu = function ActionsMenu(_ref) {
  var actions = _ref.actions,
      actionHandler = _ref.actionHandler,
      icon = _ref.icon;
  return /*#__PURE__*/_react.default.createElement(_CmtDropdownMenu.default, {
    TriggerComponent: /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      size: "small"
    }, icon || /*#__PURE__*/_react.default.createElement(_MoreVert.default, null)),
    items: actions,
    onItemClick: actionHandler
  });
};

var CmtCardHeader = /*#__PURE__*/_react.default.forwardRef(function CmtCardHeader(props, ref) {
  var icon = props.icon,
      avatar = props.avatar,
      title = props.title,
      titleProps = props.titleProps,
      subTitle = props.subTitle,
      subTitleProps = props.subTitleProps,
      actions = props.actions,
      actionMenuClassName = props.actionMenuClassName,
      actionHandleIcon = props.actionHandleIcon,
      actionHandler = props.actionHandler,
      actionsPos = props.actionsPos,
      actionsShowOnHover = props.actionsShowOnHover,
      backgroundColor = props.backgroundColor,
      gradientDirection = props.gradientDirection,
      separator = props.separator,
      alignCenter = props.alignCenter,
      children = props.children,
      className = props.className,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showActions = _useState2[0],
      setActionsVisibility = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      contentWidth = _useState4[0],
      setContentWidth = _useState4[1];

  var contentHeadProps = {
    icon: icon,
    avatar: avatar,
    title: title,
    titleProps: titleProps,
    subTitle: subTitle,
    subTitleProps: subTitleProps
  };
  var backgroundStyles = (0, _JssHelper.getBackgroundStyle)(backgroundColor, null, gradientDirection);
  var separatorStyles = (0, _JssHelper.getSeparatorStyle)(separator);
  var classes = (0, _CmtCardHeader.default)({
    separatorStyles: separatorStyles,
    contentWidth: contentWidth
  });
  var showHideActionClass = showActions ? classes.showActionMenu : classes.hideActionMenu;

  if (actionsPos === 'default') {
    showHideActionClass = showActions ? classes.showActionDefaultMenu : classes.hideActionDefaultMenu;
  }

  var headerRootClasses = alignCenter ? (0, _clsx.default)(className, classes.headerRoot, classes.headerAlignCenter, separator.color ? 'Cmt-separator' : '') : (0, _clsx.default)(className, classes.headerRoot, separator.color ? 'Cmt-separator' : '');
  var menuRootClasses = actionsShowOnHover ? (0, _clsx.default)(classes.actionMenu, classes.actionMenuHover, 'Cmt-action-menu-hover', showHideActionClass, actionMenuClassName) : (0, _clsx.default)(classes.actionMenu, 'Cmt-action-menu', actionMenuClassName);
  var menuRootActionsClasses = actionsShowOnHover ? actionsPos === 'default' ? classes.actionMenuDefault : '' : classes.actionMenuDefault;
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      onHeaderMouseEntered: function onHeaderMouseEntered() {
        if (actionsShowOnHover) setActionsVisibility(true);
      },
      onHeaderMouseLeft: function onHeaderMouseLeft() {
        if (actionsShowOnHover) setActionsVisibility(false);
      }
    };
  });
  (0, _react.useEffect)(function () {
    setContentWidth(contentRef.current ? contentRef.current.clientWidth : 0);
  }, [actionsPos, actionsShowOnHover]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(headerRootClasses, 'Cmt-header-root'),
    style: backgroundStyles
  }, rest), (icon || avatar || title || subTitle) && /*#__PURE__*/_react.default.createElement(_CmtContentHead.default, (0, _extends2.default)({
    titleStyle: classes.titleStyle,
    subTitleStyle: classes.subTitleStyle
  }, contentHeadProps)), (actions.length > 0 || children) && /*#__PURE__*/_react.default.createElement("div", {
    ref: contentRef,
    className: (0, _clsx.default)(menuRootActionsClasses, 'Cmt-action-default-menu')
  }, children, actions.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft: '8px'
    },
    className: menuRootClasses
  }, /*#__PURE__*/_react.default.createElement(ActionsMenu, {
    actions: actions,
    actionHandler: actionHandler,
    icon: actionHandleIcon
  }))));
});

CmtCardHeader.propTypes = {
  icon: _propTypes.default.element,
  avatar: _propTypes.default.element,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  titleProps: _propTypes.default.object,
  subTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  subTitleProps: _propTypes.default.object,
  actions: _propTypes.default.array,
  //example: [{label: "Close", icon: "icon-slug", onClick: (func optional), ...}, ...]
  actionMenuClassName: _propTypes.default.string,
  actionHandleIcon: _propTypes.default.element,
  actionsPos: _propTypes.default.oneOf(['default', 'top-corner']),
  actionsShowOnHover: _propTypes.default.bool,
  actionHandler: _propTypes.default.func,
  alignCenter: _propTypes.default.bool,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string]),
  gradientDirection: _propTypes.default.string,
  separator: _propTypes.default.object,
  className: _propTypes.default.string
};
CmtCardHeader.defaultProps = {
  title: '',
  subTitle: '',
  actions: [],
  actionsPos: 'default',
  actionsShowOnHover: false,
  actionMenuClassName: '',
  actionHandler: null,
  alignCenter: false,
  separator: {
    color: '',
    borderWidth: 0,
    borderStyle: 'solid'
  },
  className: ''
};
var _default = CmtCardHeader;
exports.default = _default;