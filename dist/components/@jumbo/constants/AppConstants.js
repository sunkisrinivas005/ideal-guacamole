"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWallHeight = exports.getTaskListSidebarHeight = exports.getTaskListContainerHeight = exports.getTaskDetailContainerHeight = exports.getMailContainerHeight = exports.getContactContainerHeight = exports.getChatSidebarHeight = exports.getChatContainerHeight = exports.getAppSidebarHeight = exports.TaskDetailHeaderHeight = exports.TaskDetailAddCommentHeight = exports.MailAppContentHeaderHeight = exports.InBuildAppSidebarHeaderHeight = exports.InBuildAppHeaderHeight = exports.CurrentAuthMethod = exports.ChatSidebarTabContainerHeight = exports.ChatSidebarHeaderHeight = exports.ChatFooterHeight = exports.AppMainContentPadding = exports.AppHeaderHeightSm = exports.AppHeaderHeight = exports.AppFooterHeightSm = exports.AppFooterHeight = void 0;
var AppHeaderHeight = 72;
exports.AppHeaderHeight = AppHeaderHeight;
var AppHeaderHeightSm = 64;
exports.AppHeaderHeightSm = AppHeaderHeightSm;
var AppFooterHeight = 72;
exports.AppFooterHeight = AppFooterHeight;
var AppFooterHeightSm = 64;
exports.AppFooterHeightSm = AppFooterHeightSm;
var AppMainContentPadding = 60;
exports.AppMainContentPadding = AppMainContentPadding;
var InBuildAppHeaderHeight = 70;
exports.InBuildAppHeaderHeight = InBuildAppHeaderHeight;
var InBuildAppSidebarHeaderHeight = 86;
exports.InBuildAppSidebarHeaderHeight = InBuildAppSidebarHeaderHeight;
var MailAppContentHeaderHeight = 78;
exports.MailAppContentHeaderHeight = MailAppContentHeaderHeight;
var TaskDetailHeaderHeight = 72;
exports.TaskDetailHeaderHeight = TaskDetailHeaderHeight;
var TaskDetailAddCommentHeight = 72;
exports.TaskDetailAddCommentHeight = TaskDetailAddCommentHeight;
var ChatSidebarHeaderHeight = 124;
exports.ChatSidebarHeaderHeight = ChatSidebarHeaderHeight;
var ChatSidebarTabContainerHeight = 49;
exports.ChatSidebarTabContainerHeight = ChatSidebarTabContainerHeight;
var ChatFooterHeight = 70;
exports.ChatFooterHeight = ChatFooterHeight;
var CurrentAuthMethod = 'basic'; //jwtAuth,firebase,basic

exports.CurrentAuthMethod = CurrentAuthMethod;

var getAppSidebarHeight = function getAppSidebarHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + InBuildAppSidebarHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + InBuildAppSidebarHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + InBuildAppSidebarHeaderHeight + (visibleAppFooter ? AppHeaderHeight : 0);
  }
};

exports.getAppSidebarHeight = getAppSidebarHeight;

var getMailContainerHeight = function getMailContainerHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + MailAppContentHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + MailAppContentHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + MailAppContentHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getMailContainerHeight = getMailContainerHeight;

var getContactContainerHeight = function getContactContainerHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getContactContainerHeight = getContactContainerHeight;

var getTaskListSidebarHeight = function getTaskListSidebarHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getTaskListSidebarHeight = getTaskListSidebarHeight;

var getTaskListContainerHeight = function getTaskListContainerHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getTaskListContainerHeight = getTaskListContainerHeight;

var getTaskDetailContainerHeight = function getTaskDetailContainerHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + TaskDetailHeaderHeight + TaskDetailAddCommentHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + TaskDetailHeaderHeight + TaskDetailAddCommentHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + TaskDetailHeaderHeight + TaskDetailAddCommentHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getTaskDetailContainerHeight = getTaskDetailContainerHeight;

var getChatSidebarHeight = function getChatSidebarHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + ChatSidebarHeaderHeight + ChatSidebarTabContainerHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + ChatSidebarHeaderHeight + ChatSidebarTabContainerHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + ChatSidebarHeaderHeight + ChatSidebarTabContainerHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getChatSidebarHeight = getChatSidebarHeight;

var getChatContainerHeight = function getChatContainerHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + ChatFooterHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + ChatFooterHeight + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + ChatFooterHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getChatContainerHeight = getChatContainerHeight;

var getWallHeight = function getWallHeight(width, visibleAppFooter) {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + (visibleAppFooter ? AppFooterHeightSm : 0);

    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + (visibleAppFooter ? AppFooterHeightSm : 0);

    default:
      return AppHeaderHeight + AppMainContentPadding + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

exports.getWallHeight = getWallHeight;