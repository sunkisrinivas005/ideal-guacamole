"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtCardFooter = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardFooter"));

var _CmtCardContent = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardContent"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _excluded = ["title", "subTitle", "avatar", "icon", "actionHandleIcon", "actionHandler", "actionsPos", "actionsShowOnHover", "footer", "children"];

var JumboCard = function JumboCard(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      avatar = _ref.avatar,
      icon = _ref.icon,
      actionHandleIcon = _ref.actionHandleIcon,
      actionHandler = _ref.actionHandler,
      actionsPos = _ref.actionsPos,
      actionsShowOnHover = _ref.actionsShowOnHover,
      footer = _ref.footer,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, restProps, (icon || avatar || title || subTitle) && /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    title: title,
    subTitle: subTitle,
    avatar: avatar,
    icon: icon,
    actionHandleIcon: actionHandleIcon,
    actionHandler: actionHandler,
    actionsPos: actionsPos,
    actionsShowOnHover: actionsShowOnHover,
    titleProps: {
      variant: 'h4',
      component: 'div'
    }
  }), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, children), footer && /*#__PURE__*/_react.default.createElement(_CmtCardFooter.default, null, footer));
};

var _default = JumboCard;
exports.default = _default;