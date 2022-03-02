"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _CmtCard = _interopRequireDefault(require("../../../../@coremat/CmtCard"));

var _CmtCardHeader = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardHeader"));

var _CmtCardContent = _interopRequireDefault(require("../../../../@coremat/CmtCard/CmtCardContent"));

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
var currencies = [{
  name: 'USD',
  code: 'usd'
}, {
  name: 'INR',
  code: 'inr'
}, {
  name: 'EURO',
  code: 'euro'
}];
var currencyRates = {
  'usd-inr': 74,
  'inr-usd': 0.0135,
  'usd-euro': 0.89,
  'euro-usd': 1.13,
  'inr-euro': 0.0117,
  'euro-inr': 85,
  'inr-inr': 1,
  'usd-usd': 1,
  'euro-euro': 1
};

var ConversionResult = function ConversionResult(_ref) {
  var fromCurrency = _ref.fromCurrency,
      toCurrency = _ref.toCurrency,
      amount = _ref.amount,
      convertedValue = _ref.convertedValue,
      currencyRate = _ref.currencyRate;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "p",
    mb: 4,
    fontSize: 12,
    color: "text.primary"
  }, "".concat(amount, " ").concat(fromCurrency.name, " equals")), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "div",
    variant: "h1",
    className: (0, _clsx.default)(classes.textPrimary, classes.mbSpace)
  }, convertedValue + ' ' + toCurrency.name), /*#__PURE__*/_react.default.createElement(_core.Box, {
    component: "p",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    color: "text.secondary",
    mb: 6
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mr-2"
  }, "@ 1 ".concat(fromCurrency.name), " = ", /*#__PURE__*/_react.default.createElement("span", {
    className: classes.textPrimary
  }, "".concat(currencyRate, " ").concat(toCurrency.name)))));
};

var ConversionControls = function ConversionControls(_ref2) {
  var amount = _ref2.amount,
      setAmount = _ref2.setAmount,
      fromCurrency = _ref2.fromCurrency,
      setFromCurrency = _ref2.setFromCurrency,
      toCurrency = _ref2.toCurrency,
      setToCurrency = _ref2.setToCurrency;
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    pb: {
      xs: 6,
      md: 10,
      xl: 16
    }
  }, /*#__PURE__*/_react.default.createElement(_GridContainer.default, null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    style: {
      width: '100%'
    },
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, null, "From"), /*#__PURE__*/_react.default.createElement(_core.Select, {
    label: "From",
    value: fromCurrency,
    onChange: function onChange(event) {
      return setFromCurrency(event.target.value);
    },
    inputProps: {
      name: 'from',
      id: 'demo-controlled-open-select'
    }
  }, currencies.map(function (currency, index) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: index,
      value: currency
    }, currency.name);
  })))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    style: {
      width: '100%'
    },
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, null, "To"), /*#__PURE__*/_react.default.createElement(_core.Select, {
    label: "To",
    value: toCurrency,
    onChange: function onChange(event) {
      return setToCurrency(event.target.value);
    },
    inputProps: {
      name: 'to',
      id: 'demo-controlled-open-select-to'
    }
  }, currencies.map(function (currency, index) {
    return /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
      key: index,
      value: currency
    }, currency.name);
  })))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
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
      return setAmount(parseFloat(e.target.value));
    }
  }))));
};

var CurrencyCalculator = function CurrencyCalculator(_ref3) {
  var title = _ref3.title,
      titleProps = _ref3.titleProps,
      className = _ref3.className;

  var _useState = (0, _react.useState)(currencies[0]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      fromCurrency = _useState2[0],
      setFromCurrency = _useState2[1];

  var _useState3 = (0, _react.useState)(currencies[1]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      toCurrency = _useState4[0],
      setToCurrency = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      amount = _useState6[0],
      setAmount = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      convertedValue = _useState8[0],
      setConvertedValue = _useState8[1];

  var _useState9 = (0, _react.useState)(1),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      currencyRate = _useState10[0],
      setCurrencyRate = _useState10[1];

  (0, _react.useEffect)(function () {
    setCurrencyRate(currencyRates["".concat(fromCurrency.code, "-").concat(toCurrency.code)]);
    setConvertedValue(amount * currencyRate);
  }, [fromCurrency, toCurrency, amount, currencyRate]);

  var resetCalculator = function resetCalculator() {
    setFromCurrency(currencies[0]);
    setToCurrency(currencies[1]);
    setAmount(0);
  };

  return /*#__PURE__*/_react.default.createElement(_CmtCard.default, {
    className: className
  }, title && /*#__PURE__*/_react.default.createElement(_CmtCardHeader.default, {
    title: title,
    titleProps: titleProps
  }), /*#__PURE__*/_react.default.createElement(_CmtCardContent.default, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(ConversionResult, {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    amount: amount,
    convertedValue: convertedValue,
    currencyRate: currencyRate
  }), /*#__PURE__*/_react.default.createElement(ConversionControls, {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    setFromCurrency: setFromCurrency,
    setToCurrency: setToCurrency,
    amount: amount,
    setAmount: setAmount
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "outlined",
    size: 'large',
    onClick: resetCalculator
  }, "Reset")))));
};

var _default = CurrencyCalculator;
exports.default = _default;