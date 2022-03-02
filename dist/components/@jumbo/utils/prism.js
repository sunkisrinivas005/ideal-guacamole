"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = highlight;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _prismjs = _interopRequireDefault(require("prismjs"));

require("prismjs/components/prism-css");

require("prismjs/components/prism-diff");

require("prismjs/components/prism-javascript");

require("prismjs/components/prism-json");

require("prismjs/components/prism-jsx");

require("prismjs/components/prism-markup");

require("prismjs/components/prism-tsx");

require("prismjs/themes/prism-okaidia.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function highlight(code, language) {
  var prismLanguage;

  switch (language) {
    case 'ts':
      prismLanguage = _prismjs.default.languages.tsx;
      break;

    case 'js':
    case 'sh':
      prismLanguage = _prismjs.default.languages.jsx;
      break;

    case 'diff':
      prismLanguage = _objectSpread({}, _prismjs.default.languages.diff); // original `/^[-<].*$/m` matches lines starting with `<` which matches
      // <SomeComponent />
      // we will only use `-` as the deleted marker

      prismLanguage.deleted = /^[-].*$/m;
      break;

    default:
      prismLanguage = _prismjs.default.languages[language];
      break;
  }

  if (!prismLanguage) {
    if (language) {
      throw new Error("unsupported language: \"".concat(language, "\", \"").concat(code, "\""));
    } else {
      prismLanguage = _prismjs.default.languages.jsx;
    }
  }

  return _prismjs.default.highlight(code, prismLanguage);
}