"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebounce = exports.linkify = exports.isValidEmail = exports.idGenerator = exports.geValidUrl = exports.capitalizeFLetter = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var capitalizeFLetter = function capitalizeFLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
};

exports.capitalizeFLetter = capitalizeFLetter;

var isValidEmail = function isValidEmail(value) {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value);
};

exports.isValidEmail = isValidEmail;

var idGenerator = function idGenerator() {
  return Math.floor(Math.random() * 100000);
};

exports.idGenerator = idGenerator;

var linkify = function linkify(inputText) {
  var replacedText, replacePattern1, replacePattern2, replacePattern3; //URLs starting with http://, https://, or ftp://

  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\\/%?=~_|!:,.;]*[-A-Z0-9+&@#\\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>'); //URLs starting with "www." (without // before it, or it'd re-link the ones done above).

  replacePattern2 = /(^|[^\\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>'); //Change email addresses to mailto:: links.

  replacePattern3 = /(([a-zA-Z0-9\-_.])+@[a-zA-Z0-9\\-]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
  return replacedText;
};

exports.linkify = linkify;

var geValidUrl = function geValidUrl(url) {
  var ubSecureUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!url.match(/^[a-zA-Z]+:\/\//)) {
    if (ubSecureUrl) {
      return 'http://' + url;
    }

    return 'https://' + url;
  }

  return url;
};

exports.geValidUrl = geValidUrl;

var useDebounce = function useDebounce(value, delay) {
  // State and setters for debounced value
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  (0, _react.useEffect)(function () {
    // Set debouncedValue to value (passed in) after the specified delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Return a cleanup function that will be called every time ...
    // ... useEffect is re-called. useEffect will only be re-called ...
    // ... if value changes (see the inputs array below).
    // This is how we prevent debouncedValue from changing if value is ...
    // ... changed within the delay period. Timeout gets cleared and restarted.
    // To put it in context, if the user is typing within our app's ...
    // ... search box, we don't want the debouncedValue to update until ...
    // ... they've stopped typing for more than 500ms.

    return function () {
      clearTimeout(handler);
    };
  }, // Only re-call effect if value changes
  // You could also add the "delay" var to inputs array if you ...
  // ... need to be able to change that dynamically.
  [value, delay]);
  return debouncedValue;
};

exports.useDebounce = useDebounce;