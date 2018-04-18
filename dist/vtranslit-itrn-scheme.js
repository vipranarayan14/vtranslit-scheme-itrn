window["vTranslitItrnScheme"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vTranslitItrnScheme = exports.vTranslitItrnScheme = {
  'about': {
    'schemeCode': 'Itrn',
    'schemeName': 'ITRANS',
    'type': 'roman'
  },
  'data': {
    'consonants': ['ka', 'kha', 'ga', 'gha', ['~Na', 'N^a'], 'cha', 'Cha', 'ja', 'jha', ['~na', 'JNa'], 'Ta', 'Tha', 'Da', 'Dha', 'Na', 'ta', 'tha', 'da', 'dha', 'na', '^na', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'Ra', 'la', 'La', 'zha', ['va', 'wa'], 'sha', ['Sha', 'Sa', 'shha'], 'sa', 'ha'],
    'deadConsonants': ['k', 'kh', 'g', 'gh', ['~N', 'N^'], 'ch', 'Ch', 'j', 'jh', ['~n', 'JN'], 'T', 'Th', 'D', 'Dh', 'N', 't', 'th', 'd', 'dh', 'n', '^n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'R', 'l', 'L', 'zh', ['v', 'w'], 'sh', ['Sh', 'S', 'shh'], 's', 'h'],
    'symbols': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '|', '||', ['OM', 'AUM'], '.a', ['M', '.m'], ['H', '.h'], '.N'],
    'virama': [';;'],
    'vowelMarks': ['a', ['A', 'aa'], 'i', ['I', 'ii'], 'u', ['U', 'uu'], ['RRi', 'R^i'], ['RRI', 'R^I'], ['LLi', 'L^i'], ['LLI', 'L^I'], 'e', 'E', 'ai', 'o', 'O', 'au'],
    'vowels': ['a', ['A', 'aa'], 'i', ['I', 'ii'], 'u', ['U', 'uu'], ['RRi', 'R^i'], ['RRI', 'R^I'], ['LLi', 'L^i'], ['LLI', 'L^I'], 'e', 'E', 'ai', 'o', 'O', 'au']
  }
};

/***/ })
/******/ ])["vTranslitItrnScheme"];