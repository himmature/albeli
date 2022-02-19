/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/models/Submit.js":
/*!*********************************!*\
  !*** ./app/js/models/Submit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submit": () => (/* binding */ Submit)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Submit class encapsulating the submit button on the dom and providing the functionalities related to submit button such as:
 - creating a dummy link to download the exported json file
 - creating the download url and attaching it to the hyperlink
 - downloading the json file
*/
var Submit = function Submit() {
  _classCallCheck(this, Submit);

  _defineProperty(this, "submitButtonHandler", function (fileName, savedImageJson) {
    var fName = fileName.substr(0, fileName.lastIndexOf("."));
    var submitLink = document.getElementById("submit-link");
    submitLink.download = "".concat(fName, ".json");
    submitLink.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedImageJson));
    submitLink.click();
  });

  this.submitNode = document.getElementById("submit");
};

/***/ }),

/***/ "./app/js/models/index.js":
/*!********************************!*\
  !*** ./app/js/models/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submit": () => (/* reexport safe */ _Submit__WEBPACK_IMPORTED_MODULE_0__.Submit)
/* harmony export */ });
/* harmony import */ var _Submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submit */ "./app/js/models/Submit.js");


/***/ }),

/***/ "./app/js/templates/CanvasControls.js":
/*!********************************************!*\
  !*** ./app/js/templates/CanvasControls.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvasControlsPrimary": () => (/* binding */ canvasControlsPrimary),
/* harmony export */   "canvasControlsSecondary": () => (/* binding */ canvasControlsSecondary)
/* harmony export */ });
var canvasControlsPrimary = "<div class='canvas-container__controls'>\n  <button id='scale-up'>+</button>\n  <button id='scale-down'>-</button>\n</div>";
var canvasControlsSecondary = "<div class='canvas-container__controls'>\n  <button id='move-left'>Move Left</button>\n  <button id='move-right'>Move Right</button>\n  <button id='move-up'>Move Up</button>\n  <button id='move-down'>Move down</button>\n</div>";

/***/ }),

/***/ "./app/js/templates/ImageUploadSection.js":
/*!************************************************!*\
  !*** ./app/js/templates/ImageUploadSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageUploadSection": () => (/* binding */ imageUploadSection)
/* harmony export */ });
var imageUploadSection = "<div id='image-upload__div'>\n  <h3 for=\"fileSelector\">Select an Image file to Upload</h3>\n  <input type=\"file\" id=\"fileSelector\" hidden/>\n  <input type=\"file\" id=\"jsonSelector\" hidden/>\n  <button class='image-upload__div-control' id='browse'>Browse</button>\n  <button class='image-upload__div-control' id='import'>Import</button>\n  <button class='image-upload__div-control' id='submit'>Submit</button>\n  <button class='image-upload__div-control' id='reset'>Reset</button>\n  <a class='image-upload__div-control' id='submit-link' hidden>Submit</a>\n</div>";

/***/ }),

/***/ "./app/js/templates/Index.js":
/*!***********************************!*\
  !*** ./app/js/templates/Index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _MainCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainCanvas */ "./app/js/templates/MainCanvas.js");
/* harmony import */ var _CanvasControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasControls */ "./app/js/templates/CanvasControls.js");
/* harmony import */ var _ImageUploadSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageUploadSection */ "./app/js/templates/ImageUploadSection.js");



var main = "<div class=\"main-header\"><h1>Photo Editor - Created by Himanshu Yawalkar</h1></div>\n<form class='image-upload' action=\"#\">\n  ".concat(_ImageUploadSection__WEBPACK_IMPORTED_MODULE_2__.imageUploadSection, "\n</form>\n<div class='canvas-container'>\n    ").concat(_CanvasControls__WEBPACK_IMPORTED_MODULE_1__.canvasControlsPrimary, "\n    ").concat(_MainCanvas__WEBPACK_IMPORTED_MODULE_0__.mainCanvas, "\n    ").concat(_CanvasControls__WEBPACK_IMPORTED_MODULE_1__.canvasControlsSecondary, "\n</div>");

/***/ }),

/***/ "./app/js/templates/MainCanvas.js":
/*!****************************************!*\
  !*** ./app/js/templates/MainCanvas.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainCanvas": () => (/* binding */ mainCanvas)
/* harmony export */ });
var mainCanvas = "<canvas id=\"editorCanvas\" width=\"600\" height=\"600\"></canvas>";

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: Helvetica, Verdana, sans-serif;\n  line-height: 1.5em;\n  height: 100%;\n  background-color: #407dd8;\n  color: #fff;\n  margin: 0;\n}\n\n#imageContainer,\n#debugContainer {\n  padding: 1em;\n  box-sizing: border-box;\n}\n\n.column {\n  width: 48%;\n  margin: 0.5%;\n  border: 1px solid #000;\n  vertical-align: top;\n}\n.column.left {\n  float: left;\n}\n.column.right {\n  float: right;\n}\n\nh1 {\n  margin: 0;\n}\n\n.main-header {\n  padding: 2%;\n  height: 5vh;\n  background-color: #657993;\n}\n\n.image-upload {\n  display: flex;\n  justify-content: space-around;\n  background-color: #44af47;\n  padding: 5px;\n}\n\n#image-upload__div {\n  text-align: center;\n}\n\n.file-name {\n  color: yellow;\n}\n\n.image-upload__div-control {\n  padding: 5px;\n  font-size: 1.5em;\n  background-color: #fff;\n  color: #000;\n  font-weight: 600;\n  border-radius: 8px;\n  box-shadow: 0 0 8px 0 #d4c2c2;\n}\n.image-upload__div-control:hover {\n  background-color: #000;\n  color: #fff;\n  cursor: pointer;\n}\n\n#submit {\n  display: none;\n  border: 1px solid black;\n  padding: 8px;\n  text-decoration: none;\n}\n\n.canvas-container {\n  margin: 5%;\n  display: flex;\n}\n\n.canvas-container__controls {\n  display: none;\n  flex-direction: column;\n  padding: 5%;\n}\n.canvas-container__controls button {\n  width: 100px;\n  height: 100px;\n  margin: 5px 0;\n  font-size: 5.5rem;\n  border-radius: 8px;\n}\n.canvas-container__controls button:hover {\n  cursor: pointer;\n}\n.canvas-container__controls #move-left {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.canvas-container__controls #move-right {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.canvas-container__controls #move-up {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.canvas-container__controls #move-down {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n\n#editorCanvas {\n  background-color: transparent;\n}", "",{"version":3,"sources":["webpack://./app/css/main.scss"],"names":[],"mappings":"AAAA;EACE,2CAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,SAAA;AACF;;AAEA;;EAEE,YAAA;EACA,sBAAA;AACF;;AAEA;EACE,UAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;AACF;AACE;EACE,WAAA;AACJ;AACE;EACE,YAAA;AACJ;;AAEA;EACE,SAAA;AACF;;AACA;EACE,WAAA;EACA,WAAA;EACA,yBAAA;AAEF;;AAAA;EACE,aAAA;EACA,6BAAA;EACA,yBAAA;EACA,YAAA;AAGF;;AAAA;EACE,kBAAA;AAGF;;AAAA;EACE,aAAA;AAGF;;AAAA;EACE,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,6BAAA;AAGF;AAFE;EACE,sBAAA;EACA,WAAA;EACA,eAAA;AAIJ;;AAAA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,qBAAA;AAGF;;AAAA;EACE,UAAA;EACA,aAAA;AAGF;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAGF;AAFE;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AAIJ;AAHI;EACE,eAAA;AAKN;AAFE;EACE,iBAAA;EACA,gBAAA;AAIJ;AAFE;EACE,iBAAA;EACA,gBAAA;AAIJ;AAFE;EACE,iBAAA;EACA,gBAAA;AAIJ;AAFE;EACE,iBAAA;EACA,gBAAA;AAIJ;;AAAA;EACE,6BAAA;AAGF","sourcesContent":["body {\r\n  font-family: Helvetica, Verdana, sans-serif;\r\n  line-height: 1.5em;\r\n  height: 100%;\r\n  background-color: #407dd8;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\n#imageContainer,\r\n#debugContainer {\r\n  padding: 1em;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.column {\r\n  width: 48%;\r\n  margin: 0.5%;\r\n  border: 1px solid #000;\r\n  vertical-align: top;\r\n\r\n  &.left {\r\n    float: left;\r\n  }\r\n  &.right {\r\n    float: right;\r\n  }\r\n}\r\nh1 {\r\n  margin: 0;\r\n}\r\n.main-header {\r\n  padding: 2%;\r\n  height: 5vh;\r\n  background-color: #657993;\r\n}\r\n.image-upload {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  background-color: #44af47;\r\n  padding: 5px;\r\n}\r\n\r\n#image-upload__div {\r\n  text-align: center;\r\n}\r\n\r\n.file-name {\r\n  color: yellow;\r\n}\r\n\r\n.image-upload__div-control {\r\n  padding: 5px;\r\n  font-size: 1.5em;\r\n  background-color: #fff;\r\n  color: #000;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 8px 0 #d4c2c2;\r\n  &:hover {\r\n    background-color: #000;\r\n    color: #fff;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n#submit {\r\n  display: none;\r\n  border: 1px solid black;\r\n  padding: 8px;\r\n  text-decoration: none;\r\n}\r\n\r\n.canvas-container {\r\n  margin: 5%;\r\n  display: flex;\r\n}\r\n\r\n.canvas-container__controls {\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 5%;\r\n  button {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 5px 0;\r\n    font-size: 5.5rem;\r\n    border-radius: 8px;\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  #move-left {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n  }\r\n  #move-right {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n  }\r\n  #move-up {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n  }\r\n  #move-down {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n  }\r\n}\r\n\r\n#editorCanvas {\r\n  background-color: transparent;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/css/main.scss":
/*!***************************!*\
  !*** ./app/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./app/css/main.scss");
/* harmony import */ var _templates_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/Index */ "./app/js/templates/Index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./app/js/models/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var AppView = function AppView() {
  document.body.innerHTML = _templates_Index__WEBPACK_IMPORTED_MODULE_1__.main;
  /*
    initialization/declaration of some of the app level dom elements and variables
  */

  var fileSelector = document.getElementById("fileSelector");
  var jsonSelector = document.getElementById("jsonSelector");
  var imageUploadNode = document.getElementById("image-upload__div");
  var browseNode = document.getElementById("browse");
  var importNode = document.getElementById("import");
  var scaleUpNode = document.getElementById("scale-up");
  var scaleDownNode = document.getElementById("scale-down");
  var moveLeftNode = document.getElementById("move-left");
  var moveRightNode = document.getElementById("move-right");
  var moveUpNode = document.getElementById("move-up");
  var moveDownNode = document.getElementById("move-down");
  var resetNode = document.getElementById("reset");
  var controlsNode = document.querySelectorAll(".canvas-container__controls");
  var submit = new _models__WEBPACK_IMPORTED_MODULE_2__.Submit();
  var img = new Image();
  var editorCanvas = document.getElementById("editorCanvas");
  var ctx = editorCanvas.getContext("2d");
  var width, height;
  var imageX = 0;
  var imageY = 0;
  var canvasWidth = 960;
  var canvasHeight = 600;
  var fileName = '';
  browseNode.addEventListener("click", function () {
    fileSelector.click();
  });
  importNode.addEventListener("click", function () {
    jsonSelector.click();
  });
  resetNode.addEventListener("click", function () {
    AppView();
  });
  /*
    method used to render all the canvas controls once the actual canvas is rendered
  */

  var showCanvasControls = function showCanvasControls() {
    var _iterator = _createForOfIteratorHelper(controlsNode),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        node.style.display = "flex";
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  /*
    function to export the image description into a json file
  */


  var exportHandler = function exportHandler() {
    var exportedJSON = {
      id: new Date(),
      name: fileName,
      imageX: imageX,
      imageY: imageY,
      width: width,
      height: height,
      src: img.src
    };
    submit.submitButtonHandler(fileName, exportedJSON);
  };
  /*
    event to capture the image file uploaded by the user
  */


  fileSelector.onchange = function (e) {
    var file = e.target.files[0];
    fileName = file.name;
    var fileNameNode = document.createElement("p");
    fileNameNode.textContent = "Uploaded File: ".concat(file.name);
    fileNameNode.classList.add("file-name");
    imageUploadNode.append(fileNameNode);

    switch (file.type) {
      case "image/jpeg":
      case "image/png":
      case "image/gif":
        // read Image contents from file
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
          // create HTMLImageElement holding image data
          img.src = reader.result;

          img.onload = function () {
            editorCanvas.width = canvasWidth;
            editorCanvas.height = canvasHeight;
            width = img.naturalWidth;
            height = img.naturalHeight;
            editorCanvas.style.backgroundColor = "grey";
            ctx.drawImage(img, imageX, imageY);
          }; // do your magic here...


          showCanvasControls();
          submit.submitNode.style.display = 'inline-block';
          submit.submitNode.addEventListener('click', exportHandler);
        };

    }
  };
  /*
    event to capture the json file uploaded by the user
  */


  jsonSelector.onchange = function (e) {
    var jsonFile = e.target.files[0];
    fileName = jsonFile.name;

    switch (jsonFile.type) {
      case 'application/json':
        var reader = new FileReader();
        reader.readAsText(jsonFile);

        reader.onload = function (ev) {
          var result = JSON.parse(ev.target.result);
          img.src = result.src;

          img.onload = function () {
            width = result.width;
            height = result.height;
            imageX = result.imageX;
            imageY = result.imageY;
            editorCanvas.style.backgroundColor = "grey";
            editorCanvas.width = canvasWidth;
            editorCanvas.height = canvasHeight;
            ctx.drawImage(img, imageX, imageY, width, height);
            showCanvasControls();
            submit.submitNode.style.display = 'inline-block';
            submit.submitNode.addEventListener('click', exportHandler);
          };
        };

    }
  };
  /*
  canvas controls include the following:
  - scaling up the image by 10 units
  - scaling down the image by 10 units
  - moving up the image by 10 units: only applicable if the bottom border of the image is below the bottom border of canvas
  - moving down the image by 10 units: only applicable if the top border of the image is above the top border of canvas
  - moving left the image by 10 units: only applicable if the right border of image is greater then the right border of canvas
  - moving right the image by 10 units: only applicable if the left border of image is less then the left border of canvas
  */


  scaleUpNode.addEventListener("click", function (ev) {
    width += 10;
    height += 10;
    ctx.drawImage(img, imageX, imageY, width, height);
  });
  scaleDownNode.addEventListener("click", function (ev) {
    if (width > editorCanvas.width && height > editorCanvas.height) {
      width -= 10;
      height -= 10;
    }

    if (width > editorCanvas.width) {
      width -= 10;
    } else if (height > editorCanvas.height) {
      height -= 10;
    }

    ctx.drawImage(img, imageX, imageY, width, height);
  });
  moveLeftNode.addEventListener("click", function (ev) {
    var currentX = imageX + width;

    if (currentX > editorCanvas.width) {
      imageX -= 10;
    }

    ctx.drawImage(img, imageX, imageY, width, height);
  });
  moveRightNode.addEventListener("click", function (ev) {
    if (imageX < 0) {
      imageX += 10;
    }

    ctx.drawImage(img, imageX, imageY, width, height);
  });
  moveUpNode.addEventListener("click", function (ev) {
    var currentY = imageY + height;

    if (currentY > editorCanvas.height) {
      imageY -= 10;
    }

    ctx.drawImage(img, imageX, imageY, width, height);
  });
  moveDownNode.addEventListener("click", function (ev) {
    if (imageY < 0) {
      imageY += 10;
    }

    ctx.drawImage(img, imageX, imageY, width, height);
  });
};

AppView();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map