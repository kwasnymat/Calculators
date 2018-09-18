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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Calculator; });\n/* abstract */ class Calculator {\r\n    constructor(selectorName) {\r\n         this.name = selectorName;\r\n         this.$calculatorDOMElement = $(selectorName);\r\n\r\n         this.firstNumberArray = [];\r\n         this.secondNumberArray = [];\r\n         this.resultNumberArray = [0,0,0,0,0,0,0,0,0];\r\n         this.initEvents();\r\n   }\r\n\r\n   /* Abstract method add numbers in two array\r\n   *  @param {array} numberX First number\r\n   *  @param {array} numberY Second number\r\n   *  @return {array}\r\n   */\r\n   add(numberX, numberY) {\r\n       console.error(\"Powinieneś zaimplementować tą metodę w klasie dziedziczącej. \");\r\n       return [0,0,0,0,0,0,0,0];\r\n   }\r\n\r\n   /* Abstract method changing number\r\n   *  @param {jQuery element} root Parent element\r\n   */\r\n   changeNumber(root) {\r\n       console.error(\"Powinieneś zaimplementować tą metodę w klasie dziedziczącej. \");\r\n   }\r\n\r\n   /* Abstract method changing Result\r\n   */\r\n   updateResult() {\r\n       console.error(\"Powinieneś zaimplementować tą metodę w klasie dziedziczącej. \");\r\n   }\r\n\r\n   /* Get the name of calculator selector\r\n   *  @return {string}\r\n   */\r\n   getName() {\r\n       return `Hello I am ${this.name}`;\r\n   }\r\n\r\n   /* Check what number is set in both numbers and add\r\n   *  @return {string}\r\n   */\r\n   checkNumber() {\r\n       let root =  this.$calculatorDOMElement;\r\n       let $firstNumber = root.children(\".group-number\").children(\"label:first-child\");\r\n       let $secondNumber = root.children(\".group-number\").children(\"label:nth-child(2)\");\r\n       let $resultNumber = root.children(\".group-number\").children(\".result-bit\");\r\n\r\n       for(let i = $firstNumber.length-1, j = 0; i >= 0 ; i--, j++) {\r\n           this.firstNumberArray[i] = parseInt( $firstNumber.eq(j).find('.active').text() );\r\n           this.secondNumberArray[i] = parseInt( $secondNumber.eq(j).find('.active').text() );\r\n           this.resultNumberArray[i] = parseInt( $resultNumber.eq(j).find('.active').text() );\r\n       }\r\n       this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);\r\n   }\r\n\r\n   /* Set event click on number\r\n   */\r\n   initEvents() {\r\n        this.$calculatorDOMElement.find(\".display-number\").on('click', (event) => {\r\n            const parentLabel = $(event.target).parent(\".display-number\");\r\n            this.changeNumber(parentLabel);\r\n        })\r\n   }\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQ2FsY3VsYXRvci5qcz9jMmQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsTUFBTTtBQUNwQixjQUFjLE1BQU07QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFUSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYWJzdHJhY3QgKi8gY2xhc3MgQ2FsY3VsYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvck5hbWUpIHtcclxuICAgICAgICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xyXG4gICAgICAgICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudCA9ICQoc2VsZWN0b3JOYW1lKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZmlyc3ROdW1iZXJBcnJheSA9IFtdO1xyXG4gICAgICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5ID0gW107XHJcbiAgICAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXkgPSBbMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgfVxyXG5cclxuICAgLyogQWJzdHJhY3QgbWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxyXG4gICAqICBAcGFyYW0ge2FycmF5fSBudW1iZXJYIEZpcnN0IG51bWJlclxyXG4gICAqICBAcGFyYW0ge2FycmF5fSBudW1iZXJZIFNlY29uZCBudW1iZXJcclxuICAgKiAgQHJldHVybiB7YXJyYXl9XHJcbiAgICovXHJcbiAgIGFkZChudW1iZXJYLCBudW1iZXJZKSB7XHJcbiAgICAgICBjb25zb2xlLmVycm9yKFwiUG93aW5pZW5lxZsgemFpbXBsZW1lbnRvd2HEhyB0xIUgbWV0b2TEmSB3IGtsYXNpZSBkemllZHppY3rEhWNlai4gXCIpO1xyXG4gICAgICAgcmV0dXJuIFswLDAsMCwwLDAsMCwwLDBdO1xyXG4gICB9XHJcblxyXG4gICAvKiBBYnN0cmFjdCBtZXRob2QgY2hhbmdpbmcgbnVtYmVyXHJcbiAgICogIEBwYXJhbSB7alF1ZXJ5IGVsZW1lbnR9IHJvb3QgUGFyZW50IGVsZW1lbnRcclxuICAgKi9cclxuICAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3dpbmllbmXFmyB6YWltcGxlbWVudG93YcSHIHTEhSBtZXRvZMSZIHcga2xhc2llIGR6aWVkemljesSFY2VqLiBcIik7XHJcbiAgIH1cclxuXHJcbiAgIC8qIEFic3RyYWN0IG1ldGhvZCBjaGFuZ2luZyBSZXN1bHRcclxuICAgKi9cclxuICAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgICAgY29uc29sZS5lcnJvcihcIlBvd2luaWVuZcWbIHphaW1wbGVtZW50b3dhxIcgdMSFIG1ldG9kxJkgdyBrbGFzaWUgZHppZWR6aWN6xIVjZWouIFwiKTtcclxuICAgfVxyXG5cclxuICAgLyogR2V0IHRoZSBuYW1lIG9mIGNhbGN1bGF0b3Igc2VsZWN0b3JcclxuICAgKiAgQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gICBnZXROYW1lKCkge1xyXG4gICAgICAgcmV0dXJuIGBIZWxsbyBJIGFtICR7dGhpcy5uYW1lfWA7XHJcbiAgIH1cclxuXHJcbiAgIC8qIENoZWNrIHdoYXQgbnVtYmVyIGlzIHNldCBpbiBib3RoIG51bWJlcnMgYW5kIGFkZFxyXG4gICAqICBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgIGNoZWNrTnVtYmVyKCkge1xyXG4gICAgICAgbGV0IHJvb3QgPSAgdGhpcy4kY2FsY3VsYXRvckRPTUVsZW1lbnQ7XHJcbiAgICAgICBsZXQgJGZpcnN0TnVtYmVyID0gcm9vdC5jaGlsZHJlbihcIi5ncm91cC1udW1iZXJcIikuY2hpbGRyZW4oXCJsYWJlbDpmaXJzdC1jaGlsZFwiKTtcclxuICAgICAgIGxldCAkc2Vjb25kTnVtYmVyID0gcm9vdC5jaGlsZHJlbihcIi5ncm91cC1udW1iZXJcIikuY2hpbGRyZW4oXCJsYWJlbDpudGgtY2hpbGQoMilcIik7XHJcbiAgICAgICBsZXQgJHJlc3VsdE51bWJlciA9IHJvb3QuY2hpbGRyZW4oXCIuZ3JvdXAtbnVtYmVyXCIpLmNoaWxkcmVuKFwiLnJlc3VsdC1iaXRcIik7XHJcblxyXG4gICAgICAgZm9yKGxldCBpID0gJGZpcnN0TnVtYmVyLmxlbmd0aC0xLCBqID0gMDsgaSA+PSAwIDsgaS0tLCBqKyspIHtcclxuICAgICAgICAgICB0aGlzLmZpcnN0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCggJGZpcnN0TnVtYmVyLmVxKGopLmZpbmQoJy5hY3RpdmUnKS50ZXh0KCkgKTtcclxuICAgICAgICAgICB0aGlzLnNlY29uZE51bWJlckFycmF5W2ldID0gcGFyc2VJbnQoICRzZWNvbmROdW1iZXIuZXEoaikuZmluZCgnLmFjdGl2ZScpLnRleHQoKSApO1xyXG4gICAgICAgICAgIHRoaXMucmVzdWx0TnVtYmVyQXJyYXlbaV0gPSBwYXJzZUludCggJHJlc3VsdE51bWJlci5lcShqKS5maW5kKCcuYWN0aXZlJykudGV4dCgpICk7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLnJlc3VsdE51bWJlckFycmF5ID0gdGhpcy5hZGQodGhpcy5maXJzdE51bWJlckFycmF5LCB0aGlzLnNlY29uZE51bWJlckFycmF5KTtcclxuICAgfVxyXG5cclxuICAgLyogU2V0IGV2ZW50IGNsaWNrIG9uIG51bWJlclxyXG4gICAqL1xyXG4gICBpbml0RXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuJGNhbGN1bGF0b3JET01FbGVtZW50LmZpbmQoXCIuZGlzcGxheS1udW1iZXJcIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudExhYmVsID0gJChldmVudC50YXJnZXQpLnBhcmVudChcIi5kaXNwbGF5LW51bWJlclwiKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VOdW1iZXIocGFyZW50TGFiZWwpO1xyXG4gICAgICAgIH0pXHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2FsY3VsYXRvciAgfTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvQ2FsY3VsYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BinaryCalculator__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DecCalculator__ = __webpack_require__(4);\n\r\n\r\n\r\n$(document).ready(function() {\r\n    const bitCalc = new __WEBPACK_IMPORTED_MODULE_0__BinaryCalculator__[\"a\" /* BinaryCalculator */](\".binary-calculator\");\r\n    const decCalc = new __WEBPACK_IMPORTED_MODULE_1__DecCalculator__[\"a\" /* DecCalculator */](\".dec-calculator\");\r\n})\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQTJCO0FBQ0g7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpbmFyeUNhbGN1bGF0b3IgfSBmcm9tIFwiLi9CaW5hcnlDYWxjdWxhdG9yXCI7XHJcbmltcG9ydCB7IERlY0NhbGN1bGF0b3IgfSBmcm9tIFwiLi9EZWNDYWxjdWxhdG9yXCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGJpdENhbGMgPSBuZXcgQmluYXJ5Q2FsY3VsYXRvcihcIi5iaW5hcnktY2FsY3VsYXRvclwiKTtcclxuICAgIGNvbnN0IGRlY0NhbGMgPSBuZXcgRGVjQ2FsY3VsYXRvcihcIi5kZWMtY2FsY3VsYXRvclwiKTtcclxufSlcclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BinaryCalculator; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator__ = __webpack_require__(0);\n\r\n\r\nclass BinaryCalculator extends __WEBPACK_IMPORTED_MODULE_0__Calculator__[\"a\" /* Calculator */]{\r\n    constructor(settings) {\r\n        super(settings);\r\n        console.log( this.getName() );\r\n    }\r\n\r\n    /* Method add numbers in two array\r\n    *  @param {array} numberX First number\r\n    *  @param {array} numberY Second number\r\n    *  @return {array}\r\n    */\r\n    add(numberX, numberY) {\r\n        let result = [0,0,0,0,0,0,0,0,0];\r\n        for(let i = numberX.length - 1; i >= 0  ; i--) {\r\n            let carryBit =  numberX[i] + numberY[i] + result[i];\r\n            if( carryBit  === 2) {\r\n                result[i] = 0;\r\n                result[i-1] = 1;\r\n            } else if (carryBit === 3 ){\r\n                result[i] = 1;\r\n                result[i-1] = 1;\r\n            } else {\r\n                result[i] = carryBit;\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n\r\n    /* Method changing number\r\n    *  @param {jQuery element} root Parent element\r\n    */\r\n    changeNumber(root) {\r\n        let activeElement = root.find('.active');\r\n        activeElement.removeClass(\"active\");\r\n        activeElement.siblings().addClass(\"active\");\r\n        root.children(\":first-child\").slideToggle(() => {\r\n             this.checkNumber();\r\n             this.updateResult();\r\n        });\r\n    }\r\n\r\n    /* Method changing Result\r\n    */\r\n    updateResult() {\r\n         let root =  this.$calculatorDOMElement;\r\n         let $resultNumber = root.children(\".group-number\").children(\".result-bit\");\r\n         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {\r\n            let valueResult = parseInt( $resultNumber.eq(j).find(\".active\").text() );\r\n            if( this.resultNumberArray[i] != valueResult ) {\r\n                let activeElement = $resultNumber.eq(j).find(\".active\").removeClass(\"active\");\r\n                activeElement.siblings().addClass(\"active\");\r\n                $resultNumber.eq(j).children(\":first-child\").slideToggle();\r\n            }\r\n         }\r\n    }\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvQmluYXJ5Q2FsY3VsYXRvci5qcz9lZDUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxTQUFTO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcclxuXHJcbmNsYXNzIEJpbmFyeUNhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9ye1xyXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuZ2V0TmFtZSgpICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWV0aG9kIGFkZCBudW1iZXJzIGluIHR3byBhcnJheVxyXG4gICAgKiAgQHBhcmFtIHthcnJheX0gbnVtYmVyWCBGaXJzdCBudW1iZXJcclxuICAgICogIEBwYXJhbSB7YXJyYXl9IG51bWJlclkgU2Vjb25kIG51bWJlclxyXG4gICAgKiAgQHJldHVybiB7YXJyYXl9XHJcbiAgICAqL1xyXG4gICAgYWRkKG51bWJlclgsIG51bWJlclkpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gWzAsMCwwLDAsMCwwLDAsMCwwXTtcclxuICAgICAgICBmb3IobGV0IGkgPSBudW1iZXJYLmxlbmd0aCAtIDE7IGkgPj0gMCAgOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGNhcnJ5Qml0ID0gIG51bWJlclhbaV0gKyBudW1iZXJZW2ldICsgcmVzdWx0W2ldO1xyXG4gICAgICAgICAgICBpZiggY2FycnlCaXQgID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ktMV0gPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhcnJ5Qml0ID09PSAzICl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSAxO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ktMV0gPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gY2FycnlCaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZXRob2QgY2hhbmdpbmcgbnVtYmVyXHJcbiAgICAqICBAcGFyYW0ge2pRdWVyeSBlbGVtZW50fSByb290IFBhcmVudCBlbGVtZW50XHJcbiAgICAqL1xyXG4gICAgY2hhbmdlTnVtYmVyKHJvb3QpIHtcclxuICAgICAgICBsZXQgYWN0aXZlRWxlbWVudCA9IHJvb3QuZmluZCgnLmFjdGl2ZScpO1xyXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYWN0aXZlRWxlbWVudC5zaWJsaW5ncygpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHJvb3QuY2hpbGRyZW4oXCI6Zmlyc3QtY2hpbGRcIikuc2xpZGVUb2dnbGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgdGhpcy5jaGVja051bWJlcigpO1xyXG4gICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNZXRob2QgY2hhbmdpbmcgUmVzdWx0XHJcbiAgICAqL1xyXG4gICAgdXBkYXRlUmVzdWx0KCkge1xyXG4gICAgICAgICBsZXQgcm9vdCA9ICB0aGlzLiRjYWxjdWxhdG9yRE9NRWxlbWVudDtcclxuICAgICAgICAgbGV0ICRyZXN1bHROdW1iZXIgPSByb290LmNoaWxkcmVuKFwiLmdyb3VwLW51bWJlclwiKS5jaGlsZHJlbihcIi5yZXN1bHQtYml0XCIpO1xyXG4gICAgICAgICBmb3IobGV0IGkgPSAgdGhpcy5yZXN1bHROdW1iZXJBcnJheS5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwIDsgaS0tLCBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlUmVzdWx0ID0gcGFyc2VJbnQoICRyZXN1bHROdW1iZXIuZXEoaikuZmluZChcIi5hY3RpdmVcIikudGV4dCgpICk7XHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldICE9IHZhbHVlUmVzdWx0ICkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSAkcmVzdWx0TnVtYmVyLmVxKGopLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5zaWJsaW5ncygpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgJHJlc3VsdE51bWJlci5lcShqKS5jaGlsZHJlbihcIjpmaXJzdC1jaGlsZFwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQmluYXJ5Q2FsY3VsYXRvciAgfTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvQmluYXJ5Q2FsY3VsYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return DecCalculator; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator__ = __webpack_require__(0);\n\r\n\r\n\r\nclass DecCalculator extends __WEBPACK_IMPORTED_MODULE_0__Calculator__[\"a\" /* Calculator */]  {\r\n    constructor(settings){\r\n        super(settings);\r\n        console.log(this.getName());\r\n    }\r\n    changeNumber(root) {\r\n        let activeElement = root.find('.active');\r\n        activeElement.attr('contenteditable', 'true').trigger('focus');\r\n\r\n        activeElement.on('keydown', e => {\r\n            e.preventDefault();\r\n            if(e.which >= 48 && e.which <= 57 ){\r\n                e.target.textContent = Number(String.fromCharCode(e.which));\r\n            }\r\n        });\r\n    }\r\n    initEvents(){\r\n        super.initEvents()\r\n        $('.dec-calculator .operator-bar span').on('click', e => {\r\n            this.checkNumber();\r\n            this.updateResult();\r\n        })\r\n    }\r\n    add(numberX, numberY){\r\n        let sum = 0;\r\n        let result = [0,0,0,0,0,0,0,0,0];\r\n        for (let i = numberX.length - 1; i >=0; i--){\r\n            let sum = numberX[i] + numberY[i] + result[i];\r\n            if (sum > 9){\r\n                sum -= 10;\r\n                result[i] = sum;\r\n                result[i-1] += 1;\r\n            } else {\r\n                result[i] = sum;\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    updateResult(){\r\n        let resultSpan = $('.dec-calculator .result-bit span');\r\n        for (let i = this.resultNumberArray.length -1 , j = 0; i >= 0, j < resultSpan.length ; i--, j++){\r\n            resultSpan.eq(j).text(this.resultNumberArray[i]);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvRGVjQ2FsY3VsYXRvci5qcz80NjhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZ0NBQWdDO0FBQzlGO0FBQ0E7QUFDQTtBQUNBOztBQUVRIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcclxuXHJcbmNsYXNzIERlY0NhbGN1bGF0b3IgZXh0ZW5kcyBDYWxjdWxhdG9yICB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyl7XHJcbiAgICAgICAgc3VwZXIoc2V0dGluZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TmFtZSgpKTtcclxuICAgIH1cclxuICAgIGNoYW5nZU51bWJlcihyb290KSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUVsZW1lbnQgPSByb290LmZpbmQoJy5hY3RpdmUnKTtcclxuICAgICAgICBhY3RpdmVFbGVtZW50LmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJykudHJpZ2dlcignZm9jdXMnKTtcclxuXHJcbiAgICAgICAgYWN0aXZlRWxlbWVudC5vbigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA1NyApe1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBOdW1iZXIoU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRFdmVudHMoKXtcclxuICAgICAgICBzdXBlci5pbml0RXZlbnRzKClcclxuICAgICAgICAkKCcuZGVjLWNhbGN1bGF0b3IgLm9wZXJhdG9yLWJhciBzcGFuJykub24oJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOdW1iZXIoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWRkKG51bWJlclgsIG51bWJlclkpe1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBudW1iZXJYLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pe1xyXG4gICAgICAgICAgICBsZXQgc3VtID0gbnVtYmVyWFtpXSArIG51bWJlcllbaV0gKyByZXN1bHRbaV07XHJcbiAgICAgICAgICAgIGlmIChzdW0gPiA5KXtcclxuICAgICAgICAgICAgICAgIHN1bSAtPSAxMDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHN1bTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpLTFdICs9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBzdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHVwZGF0ZVJlc3VsdCgpe1xyXG4gICAgICAgIGxldCByZXN1bHRTcGFuID0gJCgnLmRlYy1jYWxjdWxhdG9yIC5yZXN1bHQtYml0IHNwYW4nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5yZXN1bHROdW1iZXJBcnJheS5sZW5ndGggLTEgLCBqID0gMDsgaSA+PSAwLCBqIDwgcmVzdWx0U3Bhbi5sZW5ndGggOyBpLS0sIGorKyl7XHJcbiAgICAgICAgICAgIHJlc3VsdFNwYW4uZXEoaikudGV4dCh0aGlzLnJlc3VsdE51bWJlckFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERlY0NhbGN1bGF0b3IgIH07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL0RlY0NhbGN1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);