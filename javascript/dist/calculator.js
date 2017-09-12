(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["calculator"] = factory();
	else
		root["calculator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Calculator = function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n  }\n\n  _createClass(Calculator, [{\n    key: \"add\",\n    value: function add(op1, op2) {\n      return op1 + op2;\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(op1, op2) {\n      return op1 - op2;\n    }\n  }, {\n    key: \"mul\",\n    value: function mul(op1, op2) {\n      return op1 * op2;\n    }\n  }, {\n    key: \"div\",\n    value: function div(op1, op2) {\n      return op1 / op2;\n    }\n  }]);\n\n  return Calculator;\n}();\n\nexports.default = Calculator;\nmodule.exports = exports['default'];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ2FsY3VsYXRvci5qcz9jOTZhIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJvcDEiLCJvcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVTs7Ozs7Ozt3QkFDQUMsRyxFQUFLQyxHLEVBQUs7QUFDWixhQUFPRCxNQUFNQyxHQUFiO0FBQ0Q7Ozt3QkFFR0QsRyxFQUFLQyxHLEVBQUs7QUFDWixhQUFPRCxNQUFNQyxHQUFiO0FBQ0Q7Ozt3QkFFR0QsRyxFQUFLQyxHLEVBQUs7QUFDWixhQUFPRCxNQUFNQyxHQUFiO0FBQ0Q7Ozt3QkFFR0QsRyxFQUFLQyxHLEVBQUs7QUFDWixhQUFPRCxNQUFNQyxHQUFiO0FBQ0Q7Ozs7OztrQkFHWUYsVSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYXRvciB7XG4gIGFkZChvcDEsIG9wMikge1xuICAgIHJldHVybiBvcDEgKyBvcDI7XG4gIH1cblxuICBzdWIob3AxLCBvcDIpIHtcbiAgICByZXR1cm4gb3AxIC0gb3AyO1xuICB9XG5cbiAgbXVsKG9wMSwgb3AyKSB7XG4gICAgcmV0dXJuIG9wMSAqIG9wMjtcbiAgfVxuXG4gIGRpdihvcDEsIG9wMikge1xuICAgIHJldHVybiBvcDEgLyBvcDI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9DYWxjdWxhdG9yLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ])
});
;