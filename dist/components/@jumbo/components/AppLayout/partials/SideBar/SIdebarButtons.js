"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ImportContacts = _interopRequireDefault(require("@material-ui/icons/ImportContacts"));

var _RotateLeft = _interopRequireDefault(require("@material-ui/icons/RotateLeft"));

var _Flag = _interopRequireDefault(require("@material-ui/icons/Flag"));

var _GroupWork = _interopRequireDefault(require("@material-ui/icons/GroupWork"));

var _GitHub = _interopRequireDefault(require("@material-ui/icons/GitHub"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

var _SidebarThemeContext = _interopRequireDefault(require("../../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    list: {
      padding: '30px 24px',
      marginTop: 10,
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        padding: '30px 20px'
      }
    },
    listItem: {
      borderRadius: theme.shape.borderRadius,
      transition: 'all 0.3s ease',
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        width: 40,
        height: 40,
        padding: 3,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiListItemIcon-root': {
          marginTop: 0
        }
      },
      '&:not(:last-child)': {
        marginBottom: 16
      },
      '& .MuiListItemIcon-root': {
        minWidth: 'auto',
        color: (0, _core.lighten)(theme.palette.common.black, 0.5)
      },
      '& .MuiListItemText-root': {
        marginLeft: 20,
        '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
          display: 'none'
        }
      }
    }
  };
});
var buttons = [{
  title: {
    text: 'Documentations',
    color: '#5D9405'
  },
  icon: /*#__PURE__*/_react.default.createElement(_ImportContacts.default, null),
  backgroundColor: '#D7F5B1',
  link: 'https://docs-jumbo.g-axon.work/'
}, {
  title: {
    text: 'Changelog',
    color: '#384CC4'
  },
  icon: /*#__PURE__*/_react.default.createElement(_RotateLeft.default, null),
  backgroundColor: '#EAEDFF',
  link: 'https://docs-jumbo.g-axon.work/settings/change-logs'
}, {
  title: {
    text: 'Raise a ticket',
    color: '#019592'
  },
  subTitle: {
    text: 'Avg. response time 18 hrs.',
    color: '#00C4B4'
  },
  icon: /*#__PURE__*/_react.default.createElement(_Flag.default, null),
  backgroundColor: '#D8FFF7',
  link: 'https://themeforest.net/item/react-material-bootstrap-4-admin-template/20978545/support'
}, {
  title: {
    text: 'Join Community',
    color: '#D36F1A'
  },
  subTitle: {
    text: 'Join 1000+ memers.',
    color: '#FF8C00'
  },
  icon: /*#__PURE__*/_react.default.createElement(_GroupWork.default, null),
  backgroundColor: '#FFF1D2',
  link: 'https://jumbo-react.slack.com/join/shared_invite/enQtNTQyMTA4MDk5NjIwLWFiYjk0YzBmY2E4MTRmOGQwOGE4ZWNkNTFmMjBiZGU5ZjY5ZmYyOTgwYjgzZjM5MWIxMmY5ZjE5M2UxMTkwOGE#/'
}, {
  title: {
    text: 'Github Access',
    color: '#0356AF'
  },
  subTitle: {
    text: 'Get connected with Github.',
    color: '#0795F4'
  },
  icon: /*#__PURE__*/_react.default.createElement(_GitHub.default, null),
  backgroundColor: '#E3F9FF',
  link: 'http://github.g-axon.com/index.php?repo=gaxon-lab/jumbo-react-5.x.x'
}];

var SidebarButtons = function SidebarButtons() {
  var _useContext = (0, _react.useContext)(_SidebarThemeContext.default),
      sidebarTheme = _useContext.sidebarTheme;

  var classes = useStyles({
    sidebarTheme: sidebarTheme
  });
  return /*#__PURE__*/_react.default.createElement(_List.default, {
    className: classes.list,
    disablePadding: true
  }, buttons.map(function (button, index) {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      key: index,
      alignItems: "flex-start",
      button: true,
      component: "a",
      href: button.link,
      target: "_blank",
      style: {
        backgroundColor: button.backgroundColor,
        color: button.title.color
      },
      className: classes.listItem
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, {
      style: {
        color: button.title.color
      }
    }, button.icon), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
      primary: button.title.text,
      secondary: button.subTitle ? button.subTitle.text : '',
      secondaryTypographyProps: {
        style: button.subTitle ? {
          color: button.subTitle.color
        } : {}
      }
    }));
  }));
};

var _default = SidebarButtons;
exports.default = _default;