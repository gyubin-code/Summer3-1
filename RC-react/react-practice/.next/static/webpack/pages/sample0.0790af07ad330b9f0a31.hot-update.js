self["webpackHotUpdate_N_E"]("pages/sample0",{

/***/ "./pages/sample0.js":
/*!**************************!*\
  !*** ./pages/sample0.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sample0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sample0 */ "./components/Sample0.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\pages\\sample0.js",
    _this = undefined,
    _s = $RefreshSig$();



var friends = ["Name : lkanny", "Age: Jimmy", "major: computerscience"];

var sample0page = function sample0page() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5),
      count
  /*value*/
  = _useState[0],
      setCount
  /*method 다시 랜더하는것, 즉 새로은 count가들어온다*/
  = _useState[1];
  /*초기상태*/
  //react hook


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [friends.map(function (friends, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: friends
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sample0__WEBPACK_IMPORTED_MODULE_2__.default, {
      count: count,
      onCounterClick: function onCounterClick() {
        return setCount(count + 1);
      },
      onCounterClick1: function onCounterClick1() {
        return setCount(count - 1);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
}; // map에다가 인자로써 funtion을 리턴한다. '
// map은 주로 배열에서 리턴한다


_s(sample0page, "hn33v/n81SjLzpu1ehOTm7MfbM8=");

/* harmony default export */ __webpack_exports__["default"] = (sample0page); // const sample1Page = () => {
//     const [count/*value*/ , setCount/*method 다시 랜더하는것, 즉 새로은 count가들어온다*/ ]= useState(5);/*초기상태*/ //react hook
//     return (
//         <div>
//           <Sample0
//             count ={count}
//             onCounterClick = { ()=> setCount(count+1) }
//             onCounterClick1 = { ()=> setCount(count-1) }
//             />
//         </div>
//     );
// }
// // g현실에서의 동작을 데이터화 하는것 , clickevent
// event driven architecture

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FtcGxlMC5qcyJdLCJuYW1lcyI6WyJmcmllbmRzIiwic2FtcGxlMHBhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUFDLGVBQUQsRUFBa0IsWUFBbEIsRUFBZ0Msd0JBQWhDLENBQWhCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDK0NDLCtDQUFRLENBQUMsQ0FBRCxDQUR2RDtBQUFBLE1BQ25CQztBQUFLO0FBRGM7QUFBQSxNQUNGQztBQUFRO0FBRE47QUFDMkQ7QUFBUzs7O0FBQzlGLHNCQUNJO0FBQUEsZUFDS0osT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0wsT0FBRCxFQUFTTSxDQUFUO0FBQUEsMEJBQ2I7QUFBQSxrQkFBWU47QUFBWixTQUFRTSxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQVosQ0FETCxlQUtBLDhEQUFDLHdEQUFEO0FBQ0UsV0FBSyxFQUFHSCxLQURWO0FBRUUsb0JBQWMsRUFBSztBQUFBLGVBQUtDLFFBQVEsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsQ0FBYjtBQUFBLE9BRnJCO0FBR0UscUJBQWUsRUFBSztBQUFBLGVBQUtDLFFBQVEsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsQ0FBYjtBQUFBO0FBSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNDLENBaEJELEMsQ0FpQkE7QUFDQTs7O0dBbEJNRixXOztBQW9CTiwrREFBZUEsV0FBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zYW1wbGUwLjA3OTBhZjA3YWQzMzBiOWYwYTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTYW1wbGUwIGZyb20gXCIuLi9jb21wb25lbnRzL1NhbXBsZTBcIjtcclxuXHJcbmNvbnN0IGZyaWVuZHMgPSBbXCJOYW1lIDogbGthbm55XCIsIFwiQWdlOiBKaW1teVwiLCBcIm1ham9yOiBjb21wdXRlcnNjaWVuY2VcIl07XHJcblxyXG5jb25zdCBzYW1wbGUwcGFnZSA9ICgpID0+IHtcclxuY29uc3QgW2NvdW50Lyp2YWx1ZSovICwgc2V0Q291bnQvKm1ldGhvZCDri6Tsi5wg656c642U7ZWY64qU6rKDLCDspokg7IOI66Gc7J2AIGNvdW506rCA65Ok7Ja07Jio64ukKi8gXT0gdXNlU3RhdGUoNSk7LyrstIjquLDsg4Htg5wqLyAvL3JlYWN0IGhvb2tcclxucmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge2ZyaWVuZHMubWFwKChmcmllbmRzLGkpPT4gXHJcbiAgICAgICAgPHAga2V5PXtpfT57ZnJpZW5kc308L3A+KX1cclxuICAgICAgICBcclxuICAgXHJcbiAgICA8U2FtcGxlMFxyXG4gICAgICBjb3VudCA9e2NvdW50fVxyXG4gICAgICBvbkNvdW50ZXJDbGljayA9IHsgKCk9PiBzZXRDb3VudChjb3VudCsxKSB9XHJcbiAgICAgIG9uQ291bnRlckNsaWNrMSA9IHsgKCk9PiBzZXRDb3VudChjb3VudC0xKSB9XHJcbiAgICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgICBcclxuICAgICk7XHJcbn07XHJcbi8vIG1hcOyXkOuLpOqwgCDsnbjsnpDroZzsjaggZnVudGlvbuydhCDrpqzthLTtlZzri6QuICdcclxuLy8gbWFw7J2AIOyjvOuhnCDrsLDsl7Tsl5DshJwg66as7YS07ZWc64ukXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW1wbGUwcGFnZTtcclxuXHJcblxyXG4vLyBjb25zdCBzYW1wbGUxUGFnZSA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IFtjb3VudC8qdmFsdWUqLyAsIHNldENvdW50LyptZXRob2Qg64uk7IucIOuenOuNlO2VmOuKlOqygywg7KaJIOyDiOuhnOydgCBjb3VudOqwgOuTpOyWtOyYqOuLpCovIF09IHVzZVN0YXRlKDUpOy8q7LSI6riw7IOB7YOcKi8gLy9yZWFjdCBob29rXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICA8U2FtcGxlMFxyXG4vLyAgICAgICAgICAgICBjb3VudCA9e2NvdW50fVxyXG4vLyAgICAgICAgICAgICBvbkNvdW50ZXJDbGljayA9IHsgKCk9PiBzZXRDb3VudChjb3VudCsxKSB9XHJcbi8vICAgICAgICAgICAgIG9uQ291bnRlckNsaWNrMSA9IHsgKCk9PiBzZXRDb3VudChjb3VudC0xKSB9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApO1xyXG4vLyB9XHJcbi8vIC8vIGftmITsi6Tsl5DshJzsnZgg64+Z7J6R7J2EIOuNsOydtO2EsO2ZlCDtlZjripTqsoMgLCBjbGlja2V2ZW50XHJcbi8vIGV2ZW50IGRyaXZlbiBhcmNoaXRlY3R1cmUgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=