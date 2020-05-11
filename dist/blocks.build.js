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
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_group__ = __webpack_require__(/*! ./content-group */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_group__ = __webpack_require__(/*! ./sidebar-group */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(/*! ./settings */ 5);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9jb250ZW50LWdyb3VwJztcbmltcG9ydCAnLi9zaWRlYmFyLWdyb3VwJztcbmltcG9ydCAnLi9zZXR0aW5ncyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************!*\
  !*** ./src/content-group/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\n\n\nregisterBlockType('myplugin/content-group', {\n\ttitle: 'Content Group',\n\tcategory: 'layout',\n\tsupports: {\n\t\tanchor: false,\n\t\thtml: false,\n\t\treusable: true,\n\t\tinserter: true,\n\t\tmultiple: false,\n\t\tclassName: false,\n\t\tcustomClassName: false\n\t},\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks, { templateLock: false })\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});\n\n//const { withDispatch } = wp.data;\n// edit: withDispatch( dispatch => {\n// \tdispatch( 'core/block-editor' ).setTemplateValidity( true );\n// } )( ( { className } ) => {//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LWdyb3VwL2luZGV4LmpzPzFkNDMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG5cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ215cGx1Z2luL2NvbnRlbnQtZ3JvdXAnLCB7XG5cdHRpdGxlOiAnQ29udGVudCBHcm91cCcsXG5cdGNhdGVnb3J5OiAnbGF5b3V0Jyxcblx0c3VwcG9ydHM6IHtcblx0XHRhbmNob3I6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiB0cnVlLFxuXHRcdGluc2VydGVyOiB0cnVlLFxuXHRcdG11bHRpcGxlOiBmYWxzZSxcblx0XHRjbGFzc05hbWU6IGZhbHNlLFxuXHRcdGN1c3RvbUNsYXNzTmFtZTogZmFsc2Vcblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7IHRlbXBsYXRlTG9jazogZmFsc2UgfSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuLy9jb25zdCB7IHdpdGhEaXNwYXRjaCB9ID0gd3AuZGF0YTtcbi8vIGVkaXQ6IHdpdGhEaXNwYXRjaCggZGlzcGF0Y2ggPT4ge1xuLy8gXHRkaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnNldFRlbXBsYXRlVmFsaWRpdHkoIHRydWUgKTtcbi8vIH0gKSggKCB7IGNsYXNzTmFtZSB9ICkgPT4ge1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRlbnQtZ3JvdXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./src/content-group/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LWdyb3VwL2VkaXRvci5zY3NzP2VkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250ZW50LWdyb3VwL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************!*\
  !*** ./src/sidebar-group/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar InnerBlocks = wp.editor.InnerBlocks;\nvar withDispatch = wp.data.withDispatch;\n\n\n\n\nregisterBlockType('myplugin/sidebar-group', {\n\ttitle: 'Sidebar Group',\n\tcategory: 'layout',\n\tsupports: {\n\t\tanchor: false,\n\t\thtml: false,\n\t\treusable: true,\n\t\tinserter: true,\n\t\tmultiple: false,\n\t\tclassName: false,\n\t\tcustomClassName: false\n\t},\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(InnerBlocks, { templateLock: false })\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});\n\n//const { withDispatch } = wp.data;\n// edit: withDispatch( dispatch => {\n// \tdispatch( 'core/block-editor' ).setTemplateValidity( true );\n// } )( ( { className } ) => {//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaWRlYmFyLWdyb3VwL2luZGV4LmpzPzdjZWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG52YXIgd2l0aERpc3BhdGNoID0gd3AuZGF0YS53aXRoRGlzcGF0Y2g7XG5cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ215cGx1Z2luL3NpZGViYXItZ3JvdXAnLCB7XG5cdHRpdGxlOiAnU2lkZWJhciBHcm91cCcsXG5cdGNhdGVnb3J5OiAnbGF5b3V0Jyxcblx0c3VwcG9ydHM6IHtcblx0XHRhbmNob3I6IGZhbHNlLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHRcdHJldXNhYmxlOiB0cnVlLFxuXHRcdGluc2VydGVyOiB0cnVlLFxuXHRcdG11bHRpcGxlOiBmYWxzZSxcblx0XHRjbGFzc05hbWU6IGZhbHNlLFxuXHRcdGN1c3RvbUNsYXNzTmFtZTogZmFsc2Vcblx0fSxcblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7IHRlbXBsYXRlTG9jazogZmFsc2UgfSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuLy9jb25zdCB7IHdpdGhEaXNwYXRjaCB9ID0gd3AuZGF0YTtcbi8vIGVkaXQ6IHdpdGhEaXNwYXRjaCggZGlzcGF0Y2ggPT4ge1xuLy8gXHRkaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnNldFRlbXBsYXRlVmFsaWRpdHkoIHRydWUgKTtcbi8vIH0gKSggKCB7IGNsYXNzTmFtZSB9ICkgPT4ge1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZGViYXItZ3JvdXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./src/sidebar-group/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaWRlYmFyLWdyb3VwL2VkaXRvci5zY3NzP2Y5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaWRlYmFyLWdyb3VwL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/settings/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\n\n\n\nregisterBlockType('myplugin/book-settings', {\n\ttitle: 'Book Settings',\n\tcategory: 'common',\n\tsupports: {\n\t\tanchor: false,\n\t\thtml: false,\n\t\treusable: false,\n\t\tinserter: false,\n\t\tmultiple: false,\n\t\tclassName: false,\n\t\tcustomClassName: false\n\t},\n\tattributes: {\n\t\tbookTitle: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: '_myplugin_book_title'\n\t\t},\n\t\tauthor: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: '_myplugin_author'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar className = props.className,\n\t\t    attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\t\tvar bookTitle = attributes.bookTitle,\n\t\t    author = attributes.author;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"TextControl\"], { label: 'Book Title', value: bookTitle || '', onChange: function onChange(value) {\n\t\t\t\t\tsetAttributes({ bookTitle: value });\n\t\t\t\t} }),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"TextControl\"], { label: 'Author', value: author || '', onChange: function onChange(value) {\n\t\t\t\t\tsetAttributes({ author: value });\n\t\t\t\t} })\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});\n\nvar registerPlugin = wp.plugins.registerPlugin;\nvar PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;\nvar useCallback = wp.element.useCallback;\nvar _wp$data = wp.data,\n    useSelect = _wp$data.useSelect,\n    useDispatch = _wp$data.useDispatch;\n\n\nregisterPlugin('additional-settings', {\n\ticon: 'book',\n\trender: function render() {\n\t\tvar postType = useSelect(function (select) {\n\t\t\treturn select('core/editor').getCurrentPostType();\n\t\t});\n\t\tif ('book' !== postType) {\n\t\t\treturn null;\n\t\t}\n\n\t\tvar isbn = useSelect(function (select) {\n\t\t\treturn select('core/editor').getEditedPostAttribute('meta')._myplugin_book_isbn;\n\t\t}, []);\n\n\t\tvar _useDispatch = useDispatch('core/editor'),\n\t\t    editPost = _useDispatch.editPost;\n\n\t\tvar onChangeIsbn = useCallback(function (value) {\n\t\t\teditPost({ meta: { _myplugin_book_isbn: value } });\n\t\t}, []);\n\n\t\treturn wp.element.createElement(\n\t\t\tPluginDocumentSettingPanel,\n\t\t\t{\n\t\t\t\tname: 'additional-settings',\n\t\t\t\ttitle: 'Additional settings'\n\t\t\t},\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__[\"TextControl\"], {\n\t\t\t\tlabel: 'ISBN',\n\t\t\t\tvalue: isbn,\n\t\t\t\tonChange: onChangeIsbn\n\t\t\t})\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9pbmRleC5qcz9kYjVmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuaW1wb3J0IHsgVGV4dENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnbXlwbHVnaW4vYm9vay1zZXR0aW5ncycsIHtcblx0dGl0bGU6ICdCb29rIFNldHRpbmdzJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRzdXBwb3J0czoge1xuXHRcdGFuY2hvcjogZmFsc2UsXG5cdFx0aHRtbDogZmFsc2UsXG5cdFx0cmV1c2FibGU6IGZhbHNlLFxuXHRcdGluc2VydGVyOiBmYWxzZSxcblx0XHRtdWx0aXBsZTogZmFsc2UsXG5cdFx0Y2xhc3NOYW1lOiBmYWxzZSxcblx0XHRjdXN0b21DbGFzc05hbWU6IGZhbHNlXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRib29rVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAnX215cGx1Z2luX2Jvb2tfdGl0bGUnXG5cdFx0fSxcblx0XHRhdXRob3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAnX215cGx1Z2luX2F1dGhvcidcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cdFx0dmFyIGJvb2tUaXRsZSA9IGF0dHJpYnV0ZXMuYm9va1RpdGxlLFxuXHRcdCAgICBhdXRob3IgPSBhdHRyaWJ1dGVzLmF1dGhvcjtcblxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7IGxhYmVsOiAnQm9vayBUaXRsZScsIHZhbHVlOiBib29rVGl0bGUgfHwgJycsIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBib29rVGl0bGU6IHZhbHVlIH0pO1xuXHRcdFx0XHR9IH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7IGxhYmVsOiAnQXV0aG9yJywgdmFsdWU6IGF1dGhvciB8fCAnJywgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGF1dGhvcjogdmFsdWUgfSk7XG5cdFx0XHRcdH0gfSlcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG52YXIgcmVnaXN0ZXJQbHVnaW4gPSB3cC5wbHVnaW5zLnJlZ2lzdGVyUGx1Z2luO1xudmFyIFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsID0gd3AuZWRpdFBvc3QuUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw7XG52YXIgdXNlQ2FsbGJhY2sgPSB3cC5lbGVtZW50LnVzZUNhbGxiYWNrO1xudmFyIF93cCRkYXRhID0gd3AuZGF0YSxcbiAgICB1c2VTZWxlY3QgPSBfd3AkZGF0YS51c2VTZWxlY3QsXG4gICAgdXNlRGlzcGF0Y2ggPSBfd3AkZGF0YS51c2VEaXNwYXRjaDtcblxuXG5yZWdpc3RlclBsdWdpbignYWRkaXRpb25hbC1zZXR0aW5ncycsIHtcblx0aWNvbjogJ2Jvb2snLFxuXHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHR2YXIgcG9zdFR5cGUgPSB1c2VTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRDdXJyZW50UG9zdFR5cGUoKTtcblx0XHR9KTtcblx0XHRpZiAoJ2Jvb2snICE9PSBwb3N0VHlwZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0dmFyIGlzYm4gPSB1c2VTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJykuX215cGx1Z2luX2Jvb2tfaXNibjtcblx0XHR9LCBbXSk7XG5cblx0XHR2YXIgX3VzZURpc3BhdGNoID0gdXNlRGlzcGF0Y2goJ2NvcmUvZWRpdG9yJyksXG5cdFx0ICAgIGVkaXRQb3N0ID0gX3VzZURpc3BhdGNoLmVkaXRQb3N0O1xuXG5cdFx0dmFyIG9uQ2hhbmdlSXNibiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0ZWRpdFBvc3QoeyBtZXRhOiB7IF9teXBsdWdpbl9ib29rX2lzYm46IHZhbHVlIH0gfSk7XG5cdFx0fSwgW10pO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnYWRkaXRpb25hbC1zZXR0aW5ncycsXG5cdFx0XHRcdHRpdGxlOiAnQWRkaXRpb25hbCBzZXR0aW5ncydcblx0XHRcdH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0bGFiZWw6ICdJU0JOJyxcblx0XHRcdFx0dmFsdWU6IGlzYm4sXG5cdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUlzYm5cblx0XHRcdH0pXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2V0dGluZ3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: TextControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 7 */
/*!**********************************!*\
  !*** ./src/settings/editor.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9lZGl0b3Iuc2Nzcz9jZGI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2V0dGluZ3MvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);