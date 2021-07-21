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


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      good = _useState2[0],
      setGood = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [friends.map(function (friends, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: friends
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sample0__WEBPACK_IMPORTED_MODULE_2__.default, {
      count: count,
      onCounterClick: function onCounterClick() {
        return setCount(count + 1);
      },
      onCounterClick1: function onCounterClick1() {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        return setGood(good);
      },
      children: good ? "good" : "bad"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
}; // map에다가 인자로써 funtion을 리턴한다. '
// map은 주로 배열에서 리턴한다


_s(sample0page, "1CB8YY1MLsPeKRP9xwTEwcaQ2e8=");

/* harmony default export */ __webpack_exports__["default"] = (sample0page);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FtcGxlMC5qcyJdLCJuYW1lcyI6WyJmcmllbmRzIiwic2FtcGxlMHBhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJnb29kIiwic2V0R29vZCIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsZUFBRCxFQUFrQixZQUFsQixFQUFnQyx3QkFBaEMsQ0FBaEI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUMrQ0MsK0NBQVEsQ0FBQyxDQUFELENBRHZEO0FBQUEsTUFDbkJDO0FBQUs7QUFEYztBQUFBLE1BQ0ZDO0FBQVE7QUFETjtBQUMyRDtBQUFTOzs7QUFEcEUsbUJBRU5GLCtDQUFRLENBQUMsS0FBRCxDQUZGO0FBQUEsTUFFcEJHLElBRm9CO0FBQUEsTUFFZkMsT0FGZTs7QUFHMUIsc0JBQ0k7QUFBQSxlQUNLTixPQUFPLENBQUNPLEdBQVIsQ0FBWSxVQUFDUCxPQUFELEVBQVNRLENBQVQ7QUFBQSwwQkFDYjtBQUFBLGtCQUFZUjtBQUFaLFNBQVFRLENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBWixDQURMLGVBS0ksOERBQUMsd0RBQUQ7QUFDSSxXQUFLLEVBQUdMLEtBRFo7QUFFSSxvQkFBYyxFQUFLO0FBQUEsZUFBS0MsUUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFiO0FBQUEsT0FGdkI7QUFHSSxxQkFBZSxFQUFLLDJCQUFJO0FBQ3BCLFlBQUdBLEtBQUssSUFBRSxDQUFWLEVBQVk7QUFDUjtBQUNILFNBRkQsTUFHSTtBQUFDQyxrQkFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFSO0FBQWtCO0FBQ3RCO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBZUk7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFLRyxPQUFPLENBQUNELElBQUQsQ0FBWjtBQUFBLE9BQWpCO0FBQUEsZ0JBQXVDQSxJQUFJLEdBQUcsTUFBSCxHQUFVO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCQyxDQXhCRCxDLENBeUJBO0FBQ0E7OztHQTFCTUosVzs7QUE0Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FtcGxlMC42YjBiMWI3ZjYyZjE0OTRhYWM1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU2FtcGxlMCBmcm9tIFwiLi4vY29tcG9uZW50cy9TYW1wbGUwXCI7XHJcblxyXG5jb25zdCBmcmllbmRzID0gW1wiTmFtZSA6IGxrYW5ueVwiLCBcIkFnZTogSmltbXlcIiwgXCJtYWpvcjogY29tcHV0ZXJzY2llbmNlXCJdO1xyXG5cclxuY29uc3Qgc2FtcGxlMHBhZ2UgPSAoKSA9PiB7XHJcbmNvbnN0IFtjb3VudC8qdmFsdWUqLyAsIHNldENvdW50LyptZXRob2Qg64uk7IucIOuenOuNlO2VmOuKlOqygywg7KaJIOyDiOuhnOydgCBjb3VudOqwgOuTpOyWtOyYqOuLpCovIF09IHVzZVN0YXRlKDUpOy8q7LSI6riw7IOB7YOcKi8gLy9yZWFjdCBob29rXHJcbmNvbnN0W2dvb2Qsc2V0R29vZF09dXNlU3RhdGUoZmFsc2UpO1xyXG5yZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICB7ZnJpZW5kcy5tYXAoKGZyaWVuZHMsaSk9PiBcclxuICAgICAgICA8cCBrZXk9e2l9PntmcmllbmRzfTwvcD4pfVxyXG4gICAgICAgIFxyXG4gICBcclxuICAgICAgICA8U2FtcGxlMFxyXG4gICAgICAgICAgICBjb3VudCA9e2NvdW50fVxyXG4gICAgICAgICAgICBvbkNvdW50ZXJDbGljayA9IHsgKCk9PiBzZXRDb3VudChjb3VudCsxKSB9XHJcbiAgICAgICAgICAgIG9uQ291bnRlckNsaWNrMSA9IHsgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKGNvdW50PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtzZXRDb3VudChjb3VudC0xKX1cclxuICAgICAgICAgICAgICAgIH0gIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzZXRHb29kKGdvb2QpIH0+e2dvb2QgPyBcImdvb2RcIjpcImJhZFwifTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgKTtcclxufTtcclxuLy8gbWFw7JeQ64uk6rCAIOyduOyekOuhnOyNqCBmdW50aW9u7J2EIOumrO2EtO2VnOuLpC4gJ1xyXG4vLyBtYXDsnYAg7KO866GcIOuwsOyXtOyXkOyEnCDrpqzthLTtlZzri6RcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbXBsZTBwYWdlO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=