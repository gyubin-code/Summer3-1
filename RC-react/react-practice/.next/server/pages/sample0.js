(function() {
var exports = {};
exports.id = "pages/sample0";
exports.ids = ["pages/sample0"];
exports.modules = {

/***/ "./components/Sample0.js":
/*!*******************************!*\
  !*** ./components/Sample0.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\components\\Sample0.js";


const Sample0 = ({
  count,
  onCounterClick,
  onCounterClick1
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["count : ", count]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: onCounterClick,
    children: "like"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: onCounterClick1,
    children: "dislike"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Sample0);

/***/ }),

/***/ "./pages/sample0.js":
/*!**************************!*\
  !*** ./pages/sample0.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sample0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sample0 */ "./components/Sample0.js");

var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\pages\\sample0.js";


const friends = ["Name : lkanny", "Age: Jimmy", "major: computerscience"];

const sample0page = () => {
  const {
    0: count
    /*value*/
    ,
    1: setCount
    /*method 다시 랜더하는것, 즉 새로은 count가들어온다*/

  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  /*초기상태*/
  //react hook

  const {
    0: good,
    1: setGood
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [friends.map((friends, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: friends
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sample0__WEBPACK_IMPORTED_MODULE_2__.default, {
      count: count,
      onCounterClick: () => setCount(count + 1),
      onCounterClick1: () => {
        if (count == 0) {
          return;
        } else {
          setCount(count - 1);
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => setGood(!good),
      children: good ? "good" : "bad"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
}; // map에다가 인자로써 funtion을 리턴한다. '
// map은 주로 배열에서 리턴한다


/* harmony default export */ __webpack_exports__["default"] = (sample0page);

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
var __webpack_exports__ = (__webpack_exec__("./pages/sample0.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcmFjdGljZS8uL2NvbXBvbmVudHMvU2FtcGxlMC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1wcmFjdGljZS8uL3BhZ2VzL3NhbXBsZTAuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtcHJhY3RpY2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0LXByYWN0aWNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU2FtcGxlMCIsImNvdW50Iiwib25Db3VudGVyQ2xpY2siLCJvbkNvdW50ZXJDbGljazEiLCJmcmllbmRzIiwic2FtcGxlMHBhZ2UiLCJzZXRDb3VudCIsInVzZVN0YXRlIiwiZ29vZCIsInNldEdvb2QiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQ2pCQyxPQURpQjtBQUVqQkMsZ0JBRmlCO0FBR2pCQztBQUhpQixDQUFELGtCQUtaO0FBQUEsMEJBQ0k7QUFBQSwyQkFBWUYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQVEsV0FBTyxFQUFFQyxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBUSxXQUFPLEVBQUVDLGVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7O0FBWUEsK0RBQWVILE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRUE7QUFFQSxNQUFNSSxPQUFPLEdBQUcsQ0FBQyxlQUFELEVBQWtCLFlBQWxCLEVBQWdDLHdCQUFoQyxDQUFoQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0o7QUFBSztBQUFOO0FBQUEsT0FBa0JLO0FBQVE7O0FBQTFCLE1BQW1FQywrQ0FBUSxDQUFDLENBQUQsQ0FBakY7QUFBcUY7QUFBUzs7QUFDOUYsUUFBSztBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWVGLCtDQUFRLENBQUMsS0FBRCxDQUE1QjtBQUNBLHNCQUNJO0FBQUEsZUFDS0gsT0FBTyxDQUFDTSxHQUFSLENBQVksQ0FBQ04sT0FBRCxFQUFTTyxDQUFULGtCQUNiO0FBQUEsZ0JBQVlQO0FBQVosT0FBUU8sQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURDLENBREwsZUFLSSw4REFBQyx3REFBRDtBQUNJLFdBQUssRUFBR1YsS0FEWjtBQUVJLG9CQUFjLEVBQUssTUFBS0ssUUFBUSxDQUFDTCxLQUFLLEdBQUMsQ0FBUCxDQUZwQztBQUdJLHFCQUFlLEVBQUssTUFBSTtBQUNwQixZQUFHQSxLQUFLLElBQUUsQ0FBVixFQUFZO0FBQ1I7QUFDSCxTQUZELE1BR0k7QUFBQ0ssa0JBQVEsQ0FBQ0wsS0FBSyxHQUFDLENBQVAsQ0FBUjtBQUFrQjtBQUN0QjtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFlSTtBQUFRLGFBQU8sRUFBRSxNQUFLUSxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUE3QjtBQUFBLGdCQUF3Q0EsSUFBSSxHQUFHLE1BQUgsR0FBVTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcUJDLENBeEJELEMsQ0F5QkE7QUFDQTs7O0FBRUEsK0RBQWVILFdBQWYsRTs7Ozs7Ozs7Ozs7QUNsQ0EsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvc2FtcGxlMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNhbXBsZTAgPSAoe1xyXG5jb3VudCxcclxub25Db3VudGVyQ2xpY2ssXHJcbm9uQ291bnRlckNsaWNrMVxyXG59KSA9PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8cD5jb3VudCA6IHtjb3VudH08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNvdW50ZXJDbGlja30+bGlrZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Db3VudGVyQ2xpY2sxfT5kaXNsaWtlPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYW1wbGUwOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFNhbXBsZTAgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2FtcGxlMFwiO1xyXG5cclxuY29uc3QgZnJpZW5kcyA9IFtcIk5hbWUgOiBsa2FubnlcIiwgXCJBZ2U6IEppbW15XCIsIFwibWFqb3I6IGNvbXB1dGVyc2NpZW5jZVwiXTtcclxuXHJcbmNvbnN0IHNhbXBsZTBwYWdlID0gKCkgPT4ge1xyXG5jb25zdCBbY291bnQvKnZhbHVlKi8gLCBzZXRDb3VudC8qbWV0aG9kIOuLpOyLnCDrnpzrjZTtlZjripTqsoMsIOymiSDsg4jroZzsnYAgY291bnTqsIDrk6TslrTsmKjri6QqLyBdPSB1c2VTdGF0ZSg1KTsvKuy0iOq4sOyDge2DnCovIC8vcmVhY3QgaG9va1xyXG5jb25zdFtnb29kLHNldEdvb2RdPXVzZVN0YXRlKGZhbHNlKTtcclxucmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge2ZyaWVuZHMubWFwKChmcmllbmRzLGkpPT4gXHJcbiAgICAgICAgPHAga2V5PXtpfT57ZnJpZW5kc308L3A+KX1cclxuICAgICAgICBcclxuICAgXHJcbiAgICAgICAgPFNhbXBsZTBcclxuICAgICAgICAgICAgY291bnQgPXtjb3VudH1cclxuICAgICAgICAgICAgb25Db3VudGVyQ2xpY2sgPSB7ICgpPT4gc2V0Q291bnQoY291bnQrMSkgfVxyXG4gICAgICAgICAgICBvbkNvdW50ZXJDbGljazEgPSB7ICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudD09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7c2V0Q291bnQoY291bnQtMSl9XHJcbiAgICAgICAgICAgICAgICB9ICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4gc2V0R29vZCghZ29vZCkgfT57Z29vZCA/IFwiZ29vZFwiOlwiYmFkXCJ9PC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICApO1xyXG59O1xyXG4vLyBtYXDsl5Dri6TqsIAg7J247J6Q66Gc7I2oIGZ1bnRpb27snYQg66as7YS07ZWc64ukLiAnXHJcbi8vIG1hcOydgCDso7zroZwg67Cw7Je07JeQ7IScIOumrO2EtO2VnOuLpFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FtcGxlMHBhZ2U7XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==