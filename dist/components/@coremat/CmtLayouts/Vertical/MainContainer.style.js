"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    appRoot: function appRoot(props) {
      var _CmtHeader, _CmtFullFixedHeade;

      return (0, _defineProperty2.default)({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
        transition: 'all 0.01s ease',
        '&.Cmt-fixedHeaderLayout': {
          '& $appMain': (0, _defineProperty2.default)({
            position: 'relative',
            paddingTop: 72
          }, theme.breakpoints.down('sm'), {
            paddingTop: '64px !important'
          }),
          '& .Cmt-header': (_CmtHeader = {
            position: 'fixed',
            top: 0,
            right: 0,
            left: props.sidebarWidth,
            zIndex: 9,
            width: "calc(100% - ".concat(props.sidebarWidth, "px)")
          }, (0, _defineProperty2.default)(_CmtHeader, theme.breakpoints.down(props.drawerBreakPoint), {
            left: 0
          }), (0, _defineProperty2.default)(_CmtHeader, '.layout-type-framed &', (0, _defineProperty2.default)({
            '@media screen and (min-width: 1366px)': {
              left: props.sidebarWidth + 20,
              width: "calc(100% - (".concat(props.sidebarWidth, "px + 57px))"),
              right: 37,
              top: 20
            }
          }, theme.breakpoints.up('xl'), {
            left: props.sidebarWidth + 50,
            width: "calc(100% - (".concat(props.sidebarWidth, "px + 117px))"),
            right: 87,
            top: 50
          })), _CmtHeader)
        },
        '&.Cmt-fullFixedHeaderLayout': (_CmtFullFixedHeade = {
          marginTop: 72,
          height: 'calc(100vh - 72px)'
        }, (0, _defineProperty2.default)(_CmtFullFixedHeade, theme.breakpoints.down('sm'), {
          marginTop: 64,
          height: 'calc(100vh - 64px)'
        }), (0, _defineProperty2.default)(_CmtFullFixedHeade, '& .Cmt-header', {
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1,
          width: '100%'
        }), _CmtFullFixedHeade),
        '&.Cmt-sidebar-fixed': {
          '& .Cmt-sidebar': {
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 999
          },
          '&.Cmt-drawer-sidebar': {
            '& .Cmt-sidebar': {
              position: 'relative'
            }
          },
          '& .Cmt-actionSidebarWrapper': {
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1103,
            '& .Cmt-sidebar': {
              position: 'static'
            }
          }
        },
        '& .Cmt-header .Cmt-toggle-menu': {
          display: 'none'
        },
        '&.Cmt-miniLayout.Cmt-fixedHeaderLayout': {
          '& .Cmt-header': {
            left: props.miniSidebarWidth,
            width: "calc(100% - ".concat(props.miniSidebarWidth, "px)"),
            transition: 'all 0.01s ease',
            '.layout-type-framed &': (0, _defineProperty2.default)({
              '@media screen and (min-width: 1366px)': {
                left: props.miniSidebarWidth + 20,
                width: "calc(100% - (".concat(props.miniSidebarWidth, "px + 57px))"),
                right: 37,
                top: 20
              }
            }, theme.breakpoints.up('xl'), {
              left: props.miniSidebarWidth + 50,
              width: "calc(100% - (".concat(props.miniSidebarWidth, "px + 117px))"),
              right: 87,
              top: 50
            })
          }
        },
        '&.Cmt-miniLayout': {
          '& .Cmt-sidebar': {
            width: props.miniSidebarWidth
          }
        },
        '&.Cmt-fullMiniLayout.Cmt-fixedHeaderLayout': {
          '& .Cmt-header': {
            left: props.sidebarWidth,
            width: "calc(100% - ".concat(props.sidebarWidth, "px)"),
            '.layout-type-framed &': (0, _defineProperty2.default)({
              '@media screen and (min-width: 1366px)': {
                left: props.sidebarWidth + 20,
                width: "calc(100% - (".concat(props.sidebarWidth, "px + 57px))")
              }
            }, theme.breakpoints.up('xl'), {
              left: props.sidebarWidth + 50,
              width: "calc(100% - (".concat(props.sidebarWidth, "px + 117px))")
            })
          }
        },
        '&.Cmt-drawerLayout.Cmt-fixedHeaderLayout': {
          '& .Cmt-header': {
            left: 0,
            width: '100%',
            '.layout-type-framed &': (0, _defineProperty2.default)({
              '@media screen and (min-width: 1366px)': {
                left: 20,
                width: 'calc(100% - 57px)',
                right: 37,
                top: 20,
                borderTopLeftRadius: 12
              }
            }, theme.breakpoints.up('xl'), {
              left: 50,
              width: 'calc(100% - 117px)',
              right: 87,
              top: 50
            })
          }
        }
      }, theme.breakpoints.down(props.drawerBreakPoint), {
        '& .Cmt-header .Cmt-toggle-menu': {
          display: 'block'
        }
      });
    },
    appMain: function appMain(props) {
      return (0, _defineProperty2.default)({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: "calc(100% - ".concat(props.sidebarWidth, "px)"),
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        '.Cmt-sidebar-fixed &': {
          marginLeft: props.sidebarWidth
        },
        '.Cmt-miniLayout &': {
          width: "calc(100% - ".concat(props.miniSidebarWidth, "px)"),
          '& .Cmt-toggle-menu': {
            display: 'block'
          }
        },
        '.Cmt-miniLayout.Cmt-sidebar-fixed &': {
          marginLeft: props.miniSidebarWidth
        },
        '.Cmt-drawerLayout &': {
          width: '100%',
          '& .Cmt-toggle-menu': {
            display: 'block'
          }
        },
        '.Cmt-drawerLayout.Cmt-sidebar-fixed &': {
          marginLeft: 0
        },
        '.Cmt-fullMiniLayout &': {
          '& .Cmt-toggle-menu': {
            display: 'block'
          }
        },
        '.Cmt-modernLayout &': {
          width: "calc(100% - ".concat(props.sidebarWidth + props.actionSidebarWidth, "px)")
        },
        '.Cmt-modernLayout.Cmt-sidebar-fixed &': {
          marginLeft: props.sidebarWidth + props.actionSidebarWidth
        }
      }, theme.breakpoints.down(props.drawerBreakPoint), {
        width: '100%',
        '.Cmt-miniLayout &': {
          width: '100%',
          '& .Cmt-toggle-menu': {
            display: 'none'
          }
        },
        '.Cmt-miniLayout.Cmt-sidebar-fixed &': {
          marginLeft: 0
        },
        '.Cmt-drawerLayout &': {
          '& .Cmt-toggle-menu': {
            display: 'none'
          }
        },
        '.Cmt-fullMiniLayout &': {
          '& .Cmt-toggle-menu': {
            display: 'none'
          }
        },
        '.Cmt-modernLayout &': {
          width: "100% !important"
        },
        '.Cmt-modernLayout.Cmt-sidebar-fixed &': {
          marginLeft: '0 !important'
        }
      });
    },
    appInnerRoot: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    },
    appMainContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      '.Cmt-sidebar-fixed &': {
        flexDirection: 'column'
      },
      '.Cmt-modernLayout &': (0, _defineProperty2.default)({}, theme.breakpoints.down('md'), {
        flexDirection: 'column'
      })
    },
    '@global': {
      '.layout-type-framed': (0, _defineProperty2.default)({
        '@media screen and (min-width: 1366px)': {
          padding: 20,
          backgroundColor: (0, _core.darken)(theme.palette.primary.main, 0.6),
          overflow: 'hidden',
          '& > #root': {
            height: 'calc(100vh - 40px)',
            borderRadius: 12,
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden'
          },
          '& $appRoot': {
            overflowY: 'auto',
            height: '100%',
            '&.Cmt-sidebar-fixed .Cmt-sidebar': {
              position: 'absolute',
              zIndex: 1103
            },
            '&.Cmt-sidebar-fixed .Cmt-actionSidebarWrapper': {
              position: 'absolute'
            }
          },
          '& .Cmt-sidebar-fixed $appMainContainer': {
            overflow: 'hidden'
          },
          '& .Cmt-sidebar-fixed $appMain': {
            overflowY: 'auto'
          }
        }
      }, theme.breakpoints.up('xl'), {
        padding: 50,
        '& > #root': {
          height: 'calc(100vh - 100px)'
        }
      }),
      '.layout-type-boxed': (0, _defineProperty2.default)({
        '@media screen and (min-width: 1366px)': {
          backgroundColor: (0, _core.darken)(theme.palette.primary.main, 0.6),
          overflow: 'hidden',
          '& > #root': {
            width: 1300,
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden'
          },
          '& $appRoot': {
            overflowY: 'auto',
            '&.Cmt-sidebar-fixed .Cmt-sidebar': {
              position: 'absolute',
              zIndex: 1103
            },
            '&.Cmt-sidebar-fixed .Cmt-actionSidebarWrapper': {
              position: 'absolute'
            },
            '&.Cmt-fixedHeaderLayout .Cmt-header': {
              position: 'sticky',
              left: 0,
              width: '100%'
            },
            '&.Cmt-fixedHeaderLayout $appMain': {
              paddingTop: 0
            },
            '&.Cmt-miniLayout.Cmt-fixedHeaderLayout .Cmt-header, &.Cmt-fullMiniLayout.Cmt-fixedHeaderLayout .Cmt-header, &.Cmt-drawerLayout.Cmt-fixedHeaderLayout .Cmt-header': {
              left: 0,
              width: '100%'
            }
          },
          '& .Cmt-sidebar-fixed $appMainContainer': {
            overflow: 'hidden'
          },
          '& .Cmt-sidebar-fixed $appMain': {
            overflowY: 'auto'
          }
        }
      }, theme.breakpoints.up('xl'), {
        '& > #root': {
          width: 1740
        }
      })
    }
  };
});
var _default = useStyles;
exports.default = _default;