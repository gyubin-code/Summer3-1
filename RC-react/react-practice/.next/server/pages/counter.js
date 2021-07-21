(function() {
var exports = {};
exports.id = "pages/counter";
exports.ids = ["pages/counter"];
exports.modules = {

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\components\\Counter.js";


const Counter = ({
  count,
  onCounterClick
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["count : ", count]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: onCounterClick,
    children: "increment"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./pages/counter.js":
/*!**************************!*\
  !*** ./pages/counter.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Counter */ "./components/Counter.js");

var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\pages\\counter.js";

 //deconstruct
//pair , typle

const CounterPage = () => {
  const {
    0: count
    /*value*/
    ,
    1: setCount
    /*method*/

  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  /*초기상태*/
  //react hook

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
      count: count,
      onCounterClick: () => setCount(count + 1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
}; // g현실에서의 동작을 데이터화 하는것 , clickevent
// event driven architecture 


/* harmony default export */ __webpack_exports__["default"] = (CounterPage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/counter.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcmFjdGljZS8uL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1wcmFjdGljZS8uL3BhZ2VzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtcHJhY3RpY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0LXByYWN0aWNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ291bnRlciIsImNvdW50Iiwib25Db3VudGVyQ2xpY2siLCJDb3VudGVyUGFnZSIsInNldENvdW50IiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFDakJDLE9BRGlCO0FBRWpCQztBQUZpQixDQUFELGtCQUlaO0FBQUEsMEJBQ0k7QUFBQSwyQkFBWUQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsV0FBTyxFQUFFQyxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKOztBQVNBLCtEQUFlRixPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtDQUdBO0FBQ0E7O0FBQ0EsTUFBTUcsV0FBVyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUNGO0FBQUs7QUFBTjtBQUFBLE9BQWtCRztBQUFROztBQUExQixNQUF3Q0MsK0NBQVEsQ0FBQyxDQUFELENBQXREO0FBQTBEO0FBQVM7O0FBQ25FLHNCQUNJO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxXQUFLLEVBQUdKLEtBRFY7QUFFRSxvQkFBYyxFQUFLLE1BQUtHLFFBQVEsQ0FBQ0gsS0FBSyxHQUFDLENBQVA7QUFGbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBVkQsQyxDQVdBO0FBQ0E7OztBQUNBLCtEQUFlRSxXQUFmLEU7Ozs7Ozs7Ozs7O0FDbEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2NvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb3VudGVyID0gKHtcclxuY291bnQsXHJcbm9uQ291bnRlckNsaWNrXHJcbn0pID0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwPmNvdW50IDoge2NvdW50fTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ291bnRlckNsaWNrfT5pbmNyZW1lbnQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCI7XHJcbi8vZGVjb25zdHJ1Y3RcclxuLy9wYWlyICwgdHlwbGVcclxuY29uc3QgQ291bnRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291bnQvKnZhbHVlKi8gLCBzZXRDb3VudC8qbWV0aG9kKi8gXT0gdXNlU3RhdGUoNSk7LyrstIjquLDsg4Htg5wqLyAvL3JlYWN0IGhvb2tcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDb3VudGVyXHJcbiAgICAgICAgICAgIGNvdW50ID17Y291bnR9XHJcbiAgICAgICAgICAgIG9uQ291bnRlckNsaWNrID0geyAoKT0+IHNldENvdW50KGNvdW50KzEpIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuLy8gZ+2YhOyLpOyXkOyEnOydmCDrj5nsnpHsnYQg642w7J207YSw7ZmUIO2VmOuKlOqygyAsIGNsaWNrZXZlbnRcclxuLy8gZXZlbnQgZHJpdmVuIGFyY2hpdGVjdHVyZSBcclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlclBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==