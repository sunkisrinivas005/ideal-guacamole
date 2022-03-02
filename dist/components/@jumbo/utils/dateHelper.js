"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeFromNow = exports.makeJSDateObject = exports.isYesterday = exports.isTomorrow = exports.isToday = exports.isDatesSame = exports.isDateAfter = exports.getYesterdayDate = exports.getTodayDate = exports.getTimeDiffString = exports.getTime = exports.getNewDate = exports.getFormattedDate = exports.getDateinDesiredFormat = exports.getDateText = exports.getDateElements = exports.getCustomDateTime = exports.getCustomDateObject = void 0;

var _moment = _interopRequireDefault(require("moment"));

var getTodayDate = function getTodayDate() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'DD.MM.YYYY';
  return (0, _moment.default)().format(format);
};

exports.getTodayDate = getTodayDate;

var getYesterdayDate = function getYesterdayDate() {
  return (0, _moment.default)().subtract(1, 'day').format('DD.MM.YYYY');
};

exports.getYesterdayDate = getYesterdayDate;

var timeFromNow = function timeFromNow(date) {
  var timestamp = (0, _moment.default)(date).format('X');

  var newDate = _moment.default.unix(timestamp);

  return (0, _moment.default)(newDate).fromNow();
};

exports.timeFromNow = timeFromNow;

var isToday = function isToday(date) {
  return (0, _moment.default)().isSame(date, 'day');
};

exports.isToday = isToday;

var getNewDate = function getNewDate(noOfDays) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DD MMM, YYYY';
  return (0, _moment.default)().add(noOfDays, 'days').format(format);
};

exports.getNewDate = getNewDate;

var getDateElements = function getDateElements(date) {
  var dateString = (0, _moment.default)(date).format('dddd, MMMM DD YYYY, hh:mm A');
  var dateSections = dateString.split(',');
  var day = dateSections[0];
  var time = dateSections[2];
  var datePart = dateSections[1].trim().split(' ');
  return {
    day: day,
    time: time,
    date: {
      dateString: dateSections[1],
      month: datePart[0],
      date: datePart[1],
      year: datePart[2]
    }
  };
};

exports.getDateElements = getDateElements;

var getTime = function getTime(date) {
  var dateObj = (0, _moment.default)(date, 'dddd, MMMM DD YYYY, hh:mm a');
  return (0, _moment.default)(dateObj).format('LT');
};

exports.getTime = getTime;

var isDatesSame = function isDatesSame(dateA, dateB) {
  return (0, _moment.default)(dateA).isSame(dateB, 'day');
};

exports.isDatesSame = isDatesSame;

var isDateAfter = function isDateAfter(date) {
  var todayDate = getTodayDate('dddd, MMMM DD YYYY, hh:mm a');
  return (0, _moment.default)(todayDate).isAfter(date);
};

exports.isDateAfter = isDateAfter;

var getDateinDesiredFormat = function getDateinDesiredFormat(date, format) {
  return (0, _moment.default)(date).format(format);
};

exports.getDateinDesiredFormat = getDateinDesiredFormat;

var makeJSDateObject = function makeJSDateObject(date) {
  if (date) {
    return new Date(date.getTime());
  }

  return date;
};
/**
 * Get Formatted Date
 * @param date
 * @param format
 * @returns {string}
 */


exports.makeJSDateObject = makeJSDateObject;

var getFormattedDate = function getFormattedDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';

  if ((0, _moment.default)(date, 'YYYY-MM-DD').isValid()) {
    return (0, _moment.default)(date).format(format);
  }

  return '';
};
/**
 * Check Is dateTime of Tomorrow
 * @param inputDateTime
 * @returns {boolean}
 */


exports.getFormattedDate = getFormattedDate;

var isTomorrow = function isTomorrow(inputDateTime) {
  var tomorrow = (0, _moment.default)().add(1, 'days').format('YYYY-MM-DD');
  return (0, _moment.default)(inputDateTime).isSame(tomorrow, 'day');
};
/**
 * Check Is dateTime of Yesterday
 * @param inputDateTime
 * @returns {boolean}
 */


exports.isTomorrow = isTomorrow;

var isYesterday = function isYesterday(inputDateTime) {
  var yesterday = (0, _moment.default)().subtract(1, 'days').format('YYYY-MM-DD');
  return (0, _moment.default)(inputDateTime).isSame(yesterday, 'day');
};
/**
 * Get Custom Date Time
 * @param value
 * @param unit
 * @param format
 * @returns {string}
 */


exports.isYesterday = isYesterday;

var getCustomDateTime = function getCustomDateTime() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'days';
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (value === 0) {
    return (0, _moment.default)().format(format);
  } else {
    return (0, _moment.default)().add(value, unit).format(format);
  }
};
/**
 * Get Custom Date object
 * @param value
 * @param unit
 * @returns Date object
 */


exports.getCustomDateTime = getCustomDateTime;

var getCustomDateObject = function getCustomDateObject() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'days';

  if (value === 0) {
    return (0, _moment.default)();
  } else {
    return (0, _moment.default)().add(value, unit);
  }
};

exports.getCustomDateObject = getCustomDateObject;

var getDateText = function getDateText(date) {
  if (isToday(date)) {
    return 'Today';
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else {
    return date;
  }
};

exports.getDateText = getDateText;

var getTimeDiffString = function getTimeDiffString(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DD MMM, YYYY';
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var postDate = (0, _moment.default)(date, 'ddd MMM DD YYYY kk:mm:ss Z');
  var currentDate = (0, _moment.default)();

  var duration = _moment.default.duration(currentDate.diff(postDate));

  var minutes = duration.asMinutes() | 0;
  var hours = duration.asHours() | 0;

  switch (true) {
    case minutes === 0:
      return 'Just now';

    case minutes < 60:
      return "".concat(minutes, " min ").concat(suffix);

    case hours < 24:
      return "".concat(hours, " hours ").concat(suffix);

    default:
      return postDate.format(format);
  }
};

exports.getTimeDiffString = getTimeDiffString;