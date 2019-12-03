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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Form__ = __webpack_require__(/*! ./components/Form */ 5);\n/**\n * BLOCK: twd-no-man-s-land-tracker/\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('fienen/nml-call-tracker', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Call Tracker Form'), // Block title.\n\ticon: 'phone', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('The Walking Dead'), __('No Man\\'s Land'), __('game')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-block-cgb-block-twd-no-man-s-land-tracker/'></p>.\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Form__[\"a\" /* default */], null)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Form__[\"a\" /* default */], null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHR3ZC1uby1tYW4tcy1sYW5kLXRyYWNrZXIvXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IENhbGxGb3JtIGZyb20gJy4vY29tcG9uZW50cy9Gb3JtJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2ZpZW5lbi9ubWwtY2FsbC10cmFja2VyJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdDYWxsIFRyYWNrZXIgRm9ybScpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ3Bob25lJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ3dpZGdldHMnLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnVGhlIFdhbGtpbmcgRGVhZCcpLCBfXygnTm8gTWFuXFwncyBMYW5kJyksIF9fKCdnYW1lJyldLFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLXR3ZC1uby1tYW4tcy1sYW5kLXRyYWNrZXIvJz48L3A+LlxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDYWxsRm9ybSwgbnVsbClcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggRnJvbnRlbmQgSFRNTC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDYWxsRm9ybSwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */
/*!**************************************!*\
  !*** ./src/block/components/Form.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n\n\nvar calls = [{\n    id: 0,\n    name: \"Free (1 Call)\",\n    cost: 0\n}, {\n    id: 1,\n    name: \"Free (5 Call)\",\n    cost: 0\n}, {\n    id: 2,\n    name: \"Get 1 Survivor\",\n    cost: 1\n}, {\n    id: 3,\n    name: \"Choose From 2\",\n    cost: 5\n}, {\n    id: 4,\n    name: \"Choose from 3\",\n    cost: 15\n}, {\n    id: 5,\n    name: \"Choose from 3 (2x)\",\n    cost: 15\n}, {\n    id: 6,\n    name: \"Keep All 3\",\n    cost: 40\n}, {\n    id: 7,\n    name: \"Keep All 3 (2x)\",\n    cost: 40\n}, {\n    id: 8,\n    name: \"Keep All 3 (3x)\",\n    cost: 40\n}];\n\nvar survivors = [{\n    id: 1,\n    name: \"Assault\",\n    type: 0\n}, {\n    id: 2,\n    name: \"Bruiser\",\n    type: 0\n}, {\n    id: 3,\n    name: \"Hunter\",\n    type: 0\n}, {\n    id: 4,\n    name: \"Scout\",\n    type: 0\n}, {\n    id: 5,\n    name: \"Shooter\",\n    type: 0\n}, {\n    id: 6,\n    name: \"Warrior\",\n    type: 0\n}, {\n    id: 7,\n    name: \"Aaron\",\n    type: 1\n}, {\n    id: 8,\n    name: \"Abraham\",\n    type: 1\n}, {\n    id: 9,\n    name: \"Alpha\",\n    type: 1\n}, {\n    id: 10,\n    name: \"Carl\",\n    type: 1\n}, {\n    id: 11,\n    name: \"Carol\",\n    type: 1\n}, {\n    id: 12,\n    name: \"Daryl\",\n    type: 1\n}, {\n    id: 13,\n    name: \"Daryl (Huntsman)\",\n    type: 2\n}, {\n    id: 14,\n    name: \"Dwight\",\n    type: 1\n}, {\n    id: 15,\n    name: \"Eugene\",\n    type: 1\n}, {\n    id: 16,\n    name: \"Ezekiel\",\n    type: 1\n}, {\n    id: 17,\n    name: \"Gabriel\",\n    type: 1\n}, {\n    id: 18,\n    name: \"Glenn\",\n    type: 1\n}, {\n    id: 19,\n    name: \"Glenn (Riot Gear)\",\n    type: 2\n}, {\n    id: 20,\n    name: \"Governor\",\n    type: 1\n}, {\n    id: 21,\n    name: \"Jerry\",\n    type: 1\n}, {\n    id: 22,\n    name: \"Jesus\",\n    type: 1\n}, {\n    id: 23,\n    name: \"Maggie\",\n    type: 1\n}, {\n    id: 24,\n    name: \"Maggie (Hilltop)\",\n    type: 2\n}, {\n    id: 25,\n    name: \"Merle\",\n    type: 1\n}, {\n    id: 26,\n    name: \"Michonne\",\n    type: 1\n}, {\n    id: 27,\n    name: \"Morgan\",\n    type: 1\n}, {\n    id: 28,\n    name: \"Morgan (Sniper)\",\n    type: 2\n}, {\n    id: 29,\n    name: \"Negan\",\n    type: 1\n}, {\n    id: 30,\n    name: \"Rick\",\n    type: 1\n}, {\n    id: 31,\n    name: \"Rick (Survivalist)\",\n    type: 2\n}, {\n    id: 32,\n    name: \"Rosita\",\n    type: 1\n}, {\n    id: 33,\n    name: \"Rufus\",\n    type: 1\n}, {\n    id: 34,\n    name: \"Sasha\",\n    type: 1\n}, {\n    id: 35,\n    name: \"Tara\",\n    type: 1\n}];\n\nvar survivorTypes = {\n    0: \"Survivor\",\n    1: \"Hero\",\n    2: \"Special Hero\"\n};\n\nvar CallForm = function CallForm() {\n    return wp.element.createElement(\n        \"form\",\n        null,\n        wp.element.createElement(\n            \"label\",\n            { \"for\": \"callType\" },\n            \"Call Type\"\n        ),\n        wp.element.createElement(\n            \"select\",\n            { name: \"callType\" },\n            wp.element.createElement(\n                \"option\",\n                null,\n                \"Select call type\"\n            ),\n            calls.map(renderCalls)\n        ),\n        wp.element.createElement(\n            \"button\",\n            { type: \"submit\" },\n            \"Record Call Results\"\n        )\n    );\n};\n\nvar renderCalls = function renderCalls(opt) {\n    return wp.element.createElement(\n        \"option\",\n        { value: opt.id },\n        opt.name\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (CallForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9jb21wb25lbnRzL0Zvcm0uanM/OWM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBjYWxscyA9IFt7XG4gICAgaWQ6IDAsXG4gICAgbmFtZTogXCJGcmVlICgxIENhbGwpXCIsXG4gICAgY29zdDogMFxufSwge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiRnJlZSAoNSBDYWxsKVwiLFxuICAgIGNvc3Q6IDBcbn0sIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkdldCAxIFN1cnZpdm9yXCIsXG4gICAgY29zdDogMVxufSwge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiQ2hvb3NlIEZyb20gMlwiLFxuICAgIGNvc3Q6IDVcbn0sIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIkNob29zZSBmcm9tIDNcIixcbiAgICBjb3N0OiAxNVxufSwge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiQ2hvb3NlIGZyb20gMyAoMngpXCIsXG4gICAgY29zdDogMTVcbn0sIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIktlZXAgQWxsIDNcIixcbiAgICBjb3N0OiA0MFxufSwge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6IFwiS2VlcCBBbGwgMyAoMngpXCIsXG4gICAgY29zdDogNDBcbn0sIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIktlZXAgQWxsIDMgKDN4KVwiLFxuICAgIGNvc3Q6IDQwXG59XTtcblxudmFyIHN1cnZpdm9ycyA9IFt7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJBc3NhdWx0XCIsXG4gICAgdHlwZTogMFxufSwge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiQnJ1aXNlclwiLFxuICAgIHR5cGU6IDBcbn0sIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIkh1bnRlclwiLFxuICAgIHR5cGU6IDBcbn0sIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIlNjb3V0XCIsXG4gICAgdHlwZTogMFxufSwge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiU2hvb3RlclwiLFxuICAgIHR5cGU6IDBcbn0sIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIldhcnJpb3JcIixcbiAgICB0eXBlOiAwXG59LCB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCJBYXJvblwiLFxuICAgIHR5cGU6IDFcbn0sIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIkFicmFoYW1cIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDksXG4gICAgbmFtZTogXCJBbHBoYVwiLFxuICAgIHR5cGU6IDFcbn0sIHtcbiAgICBpZDogMTAsXG4gICAgbmFtZTogXCJDYXJsXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIkNhcm9sXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAxMixcbiAgICBuYW1lOiBcIkRhcnlsXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAxMyxcbiAgICBuYW1lOiBcIkRhcnlsIChIdW50c21hbilcIixcbiAgICB0eXBlOiAyXG59LCB7XG4gICAgaWQ6IDE0LFxuICAgIG5hbWU6IFwiRHdpZ2h0XCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAxNSxcbiAgICBuYW1lOiBcIkV1Z2VuZVwiLFxuICAgIHR5cGU6IDFcbn0sIHtcbiAgICBpZDogMTYsXG4gICAgbmFtZTogXCJFemVraWVsXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAxNyxcbiAgICBuYW1lOiBcIkdhYnJpZWxcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDE4LFxuICAgIG5hbWU6IFwiR2xlbm5cIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDE5LFxuICAgIG5hbWU6IFwiR2xlbm4gKFJpb3QgR2VhcilcIixcbiAgICB0eXBlOiAyXG59LCB7XG4gICAgaWQ6IDIwLFxuICAgIG5hbWU6IFwiR292ZXJub3JcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDIxLFxuICAgIG5hbWU6IFwiSmVycnlcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDIyLFxuICAgIG5hbWU6IFwiSmVzdXNcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDIzLFxuICAgIG5hbWU6IFwiTWFnZ2llXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAyNCxcbiAgICBuYW1lOiBcIk1hZ2dpZSAoSGlsbHRvcClcIixcbiAgICB0eXBlOiAyXG59LCB7XG4gICAgaWQ6IDI1LFxuICAgIG5hbWU6IFwiTWVybGVcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDI2LFxuICAgIG5hbWU6IFwiTWljaG9ubmVcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDI3LFxuICAgIG5hbWU6IFwiTW9yZ2FuXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAyOCxcbiAgICBuYW1lOiBcIk1vcmdhbiAoU25pcGVyKVwiLFxuICAgIHR5cGU6IDJcbn0sIHtcbiAgICBpZDogMjksXG4gICAgbmFtZTogXCJOZWdhblwiLFxuICAgIHR5cGU6IDFcbn0sIHtcbiAgICBpZDogMzAsXG4gICAgbmFtZTogXCJSaWNrXCIsXG4gICAgdHlwZTogMVxufSwge1xuICAgIGlkOiAzMSxcbiAgICBuYW1lOiBcIlJpY2sgKFN1cnZpdmFsaXN0KVwiLFxuICAgIHR5cGU6IDJcbn0sIHtcbiAgICBpZDogMzIsXG4gICAgbmFtZTogXCJSb3NpdGFcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDMzLFxuICAgIG5hbWU6IFwiUnVmdXNcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDM0LFxuICAgIG5hbWU6IFwiU2FzaGFcIixcbiAgICB0eXBlOiAxXG59LCB7XG4gICAgaWQ6IDM1LFxuICAgIG5hbWU6IFwiVGFyYVwiLFxuICAgIHR5cGU6IDFcbn1dO1xuXG52YXIgc3Vydml2b3JUeXBlcyA9IHtcbiAgICAwOiBcIlN1cnZpdm9yXCIsXG4gICAgMTogXCJIZXJvXCIsXG4gICAgMjogXCJTcGVjaWFsIEhlcm9cIlxufTtcblxudmFyIENhbGxGb3JtID0gZnVuY3Rpb24gQ2FsbEZvcm0oKSB7XG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgXCJmb3JcIjogXCJjYWxsVHlwZVwiIH0sXG4gICAgICAgICAgICBcIkNhbGwgVHlwZVwiXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICB7IG5hbWU6IFwiY2FsbFR5cGVcIiB9LFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIlNlbGVjdCBjYWxsIHR5cGVcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNhbGxzLm1hcChyZW5kZXJDYWxscylcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgXCJSZWNvcmQgQ2FsbCBSZXN1bHRzXCJcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG52YXIgcmVuZGVyQ2FsbHMgPSBmdW5jdGlvbiByZW5kZXJDYWxscyhvcHQpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICB7IHZhbHVlOiBvcHQuaWQgfSxcbiAgICAgICAgb3B0Lm5hbWVcbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsbEZvcm07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svY29tcG9uZW50cy9Gb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = React;

/***/ })
/******/ ]);