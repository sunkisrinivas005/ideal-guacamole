"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _clsx = _interopRequireDefault(require("clsx"));

var _GridContainer = _interopRequireDefault(require("../../GridContainer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _makeStyles.default)(function (theme) {
  return {
    textPrimary: {
      color: theme.palette.primary.main
    },
    mbSpace: {
      marginBottom: 16
    }
  };
});

var CurrencyCalculationDetails = function CurrencyCalculationDetails(_ref) {
  var onCalculate = _ref.onCalculate,
      onReset = _ref.onReset,
      currencies = _ref.currencies,
      calculatedValue = _ref.calculatedValue;
  var amountToConvert = calculatedValue.amountToConvert,
      rate = calculatedValue.rate,
      value = calculatedValue.value,
      convertFrom = calculatedValue.convertFrom,
      convertTo = calculatedValue.convertTo;
  var classes = useStyles();

  var _useState = (0, _react.useState)(convertFrom),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      from = _useState2[0],
      setFrom = _useState2[1];

  var _useState3 = (0, _react.useState)(convertTo),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      to = _useState4[0],
      setTo = _useState4[1];

  var _useState5 = (0, _react.useState)(amountToConvert),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      amount = _useState6[0],
      setAmount = _useState6[1];

  (0, _react.useEffect)(function () {
    onCalculate(to, from, amount);
  }, []);

  var onConvert = function onConvert() {
    onCalculate(to, from, amount);
  };

  var onResetCalculator = function onResetCalculator() {
    onReset();
    setAmount(0);
  };

  return /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "p",
    mb: 4,
    fontSize: 12,
    color: "text.primary"
  }, "".concat(amountToConvert, " ").concat(convertFrom.name, " equals")), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "div",
    variant: "h1",
    className: (0, _clsx.default)(classes.textPrimary, classes.mbSpace)
  }, value + ' ' + convertTo.name), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "p",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    color: "text.secondary",
    mb: 6
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    mr: 2
  }, "@ 1 ".concat(convertFrom.name), " =", ' ', /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "span",
    className: classes.textPrimary
  }, "".concat(rate, " ").concat(convertTo.name))))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    pb: {
      xs: 6,
      md: 10,
      xl: 16
    }
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    style: {
      width: '100%'
    },
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, null, "From"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    label: "From",
    value: from,
    onChange: function onChange(event) {
      return setFrom(event.target.value);
    },
    inputProps: {
      name: 'from',
      id: 'demo-controlled-open-select'
    }
  }, currencies.map(function (currency, index) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: index,
      value: currency
    }, currency.name);
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    style: {
      width: '100%'
    },
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, null, "To"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    label: "To",
    value: to,
    onChange: function onChange(event) {
      return setTo(event.target.value);
    },
    inputProps: {
      name: 'to',
      id: 'demo-controlled-open-select-to'
    }
  }, currencies.map(function (currency, index) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: index,
      value: currency
    }, currency.name);
  })))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    variant: "outlined",
    label: "Amount",
    margin: "normal",
    type: "number",
    fullWidth: true,
    style: {
      marginTop: 0,
      marginBottom: 0
    },
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    }
  })))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    onClick: onConvert
  }, "Calculate"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    ml: 3
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "outlined",
    onClick: onResetCalculator
  }, "Reset"))));
};

var _default = CurrencyCalculationDetails;
exports.default = _default;