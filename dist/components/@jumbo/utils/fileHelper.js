"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileName = exports.getFileExtension = exports.getAssetsUrl = exports.downloadFile = void 0;

var getFileExtension = function getFileExtension(filename) {
  if (filename) return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  return null;
};

exports.getFileExtension = getFileExtension;

var getFileName = function getFileName(fileUrl) {
  var removeExt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filename = fileUrl.split('/').pop();

  if (removeExt) {
    return filename.split('.').slice(0, -1).join('.');
  }

  return filename;
};

exports.getFileName = getFileName;

var downloadFile = function downloadFile(fileUrl) {
  var downloadFileName = getFileName(fileUrl);
  var link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank';
  link.setAttribute('download', downloadFileName); //or any other extension

  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};

exports.downloadFile = downloadFile;

var getAssetsUrl = function getAssetsUrl(fileUrl) {
  return "/images/".concat(fileUrl);
};

exports.getAssetsUrl = getAssetsUrl;