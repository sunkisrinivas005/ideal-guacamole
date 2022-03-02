"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _excluded = ["className", "renderedMarkdown"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
  return {
    root: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
      color: theme.palette.text.primary,
      wordBreak: 'break-word',
      '& .anchor-link': {
        marginTop: -96,
        // Offset for the anchor.
        position: 'absolute'
      },
      '& pre, pre.language-jsx': (0, _defineProperty2.default)({
        margin: theme.spacing(0, 'auto'),
        padding: theme.spacing(4),
        backgroundColor: '#272c34',
        direction: 'ltr',
        borderRadius: 0,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        // iOS momentum scrolling.
        maxWidth: 'calc(100vw - 32px)'
      }, theme.breakpoints.up('md'), {
        maxWidth: 'calc(100vw - 32px - 16px)'
      }),
      // inline code
      '& code': {
        direction: 'ltr',
        lineHeight: 1.4,
        display: 'inline-block',
        fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
        WebkitFontSmoothing: 'subpixel-antialiased',
        padding: '0 3px',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.type === 'light' ? 'rgba(255, 229, 100, 0.2)' : 'rgba(255, 229, 100, 0.2)',
        fontSize: '.85em',
        borderRadius: 2
      },
      '& code[class*="language-"]': {
        backgroundColor: '#272c34',
        color: '#fff',
        // Avoid layout jump after hydration (style injected by prism)
        lineHeight: 1.5
      },
      // code blocks
      '& pre code': {
        fontSize: '.9em'
      },
      '& .token.operator': {
        background: 'transparent'
      },
      '& h1': _objectSpread(_objectSpread({}, theme.typography.h3), {}, {
        fontSize: 40,
        margin: '16px 0'
      }),
      '& .description': _objectSpread(_objectSpread({}, theme.typography.h5), {}, {
        margin: '0 0 40px'
      }),
      '& h2': _objectSpread(_objectSpread({}, theme.typography.h4), {}, {
        fontSize: 30,
        margin: '40px 0 16px'
      }),
      '& h3': _objectSpread(_objectSpread({}, theme.typography.h5), {}, {
        margin: '40px 0 16px'
      }),
      '& h4': _objectSpread(_objectSpread({}, theme.typography.h6), {}, {
        margin: '32px 0 16px'
      }),
      '& h5': _objectSpread(_objectSpread({}, theme.typography.subtitle2), {}, {
        margin: '32px 0 16px'
      }),
      '& p, & ul, & ol': {
        marginTop: 0,
        marginBottom: 16
      },
      '& ul': {
        paddingLeft: 30
      },
      '& h1, & h2, & h3, & h4': {
        '& code': {
          fontSize: 'inherit',
          lineHeight: 'inherit',
          // Remove scroll on small screens.
          wordBreak: 'break-all'
        },
        '& .anchor-link-style': {
          // To prevent the link to get the focus.
          display: 'none'
        },
        '&:hover .anchor-link-style': {
          display: 'inline-block',
          padding: '0 8px',
          color: theme.palette.text.secondary,
          '&:hover': {
            color: theme.palette.text.primary
          },
          '& svg': {
            width: '0.7em',
            height: '0.7em',
            fill: 'currentColor'
          }
        }
      },
      '& table': {
        // Trade display table for scroll overflow
        display: 'block',
        wordBreak: 'normal',
        width: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        // iOS momentum scrolling.
        borderCollapse: 'collapse',
        marginBottom: '16px',
        borderSpacing: 0,
        overflow: 'hidden',
        '& .prop-name': {
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace'
        },
        '& .required': {
          color: theme.palette.type === 'light' ? '#006500' : '#a5ffa5'
        },
        '& .prop-type': {
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
          color: theme.palette.type === 'light' ? '#932981' : '#ffb6ec'
        },
        '& .prop-default': {
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
          borderBottom: "1px dotted ".concat(theme.palette.divider)
        }
      },
      '& td': _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
        borderBottom: "1px solid ".concat(theme.palette.divider),
        padding: 16,
        color: theme.palette.text.primary
      }),
      '& td code': {
        lineHeight: 1.6
      },
      '& th': {
        lineHeight: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.primary,
        whiteSpace: 'pre',
        borderBottom: "1px solid ".concat(theme.palette.divider),
        padding: 16
      },
      '& blockquote': {
        borderLeft: '5px solid #ffe564',
        backgroundColor: 'rgba(255,229,100,0.2)',
        padding: '4px 24px',
        margin: '24px 0',
        '& p': {
          marginTop: '16px'
        }
      },
      '& a, & a code': {
        // Style taken from the Link component
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      '& img, video': {
        maxWidth: '100%'
      },
      '& img': {
        // Avoid layout jump
        display: 'inline-block'
      },
      '& hr': {
        height: 1,
        margin: theme.spacing(6, 0),
        border: 'none',
        flexShrink: 0,
        backgroundColor: theme.palette.divider
      },
      '& kbd': {
        // Style taken from GitHub
        padding: '2px 5px',
        font: '11px Consolas,Liberation Mono,Menlo,monospace',
        lineHeight: '10px',
        color: '#444d56',
        verticalAlign: 'middle',
        backgroundColor: '#fafbfc',
        border: '1px solid #d1d5da',
        borderRadius: 3,
        boxShadow: 'inset 0 -1px 0 #d1d5da'
      },
      '& .token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
        color: 'rgb(252, 146, 158)'
      }
    }),
    scrollbarRoot: {
      maxHeight: 'min(68vh, 1000px)'
    }
  };
};

var useStyles = (0, _styles.makeStyles)(styles, {
  name: 'MarkdownElement',
  flip: false
});

var MarkdownElement = /*#__PURE__*/_react.default.forwardRef(function MarkdownElement(props, ref) {
  var className = props.className,
      renderedMarkdown = props.renderedMarkdown,
      other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var classes = useStyles();
  var more = {};

  if (typeof renderedMarkdown === 'string') {
    // workaround for https://github.com/facebook/react/issues/17170
    // otherwise we could just set `dangerouslySetInnerHTML={undefined}`
    more.dangerouslySetInnerHTML = {
      __html: renderedMarkdown
    };
  }

  return /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    className: classes.scrollbarRoot
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, 'markdown-body', className)
  }, more, other, {
    ref: ref
  })));
});

MarkdownElement.propTypes = {
  className: _propTypes.default.string,
  renderedMarkdown: _propTypes.default.string
};
var _default = MarkdownElement;
exports.default = _default;