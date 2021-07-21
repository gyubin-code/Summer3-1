self["webpackHotUpdate_N_E"]("pages/sample0",{

/***/ "./components/Sample0.js":
/*!*******************************!*\
  !*** ./components/Sample0.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\components\\Sample0.js",
    _this = undefined;



var Sample0 = function Sample0(_ref) {
  var count = _ref.count,
      onCounterClick = _ref.onCounterClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["count : ", count]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onCounterClick,
      children: "like"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onCounterClick1,
      children: "dislike"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Sample0;
/* harmony default export */ __webpack_exports__["default"] = (Sample0);

var _c;

$RefreshReg$(_c, "Sample0");

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


/***/ }),

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
    _this = undefined;



var friends = ["Name : lkanny", "Age: Jimmy", "major: computerscience"];

var sample0page = function sample0page() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: friends.map(function (friends, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: friends
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
}; // map에다가 인자로써 funtion을 리턴한다. '
// map은 주로 배열에서 리턴한다


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TYW1wbGUwLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zYW1wbGUwLmpzIl0sIm5hbWVzIjpbIlNhbXBsZTAiLCJjb3VudCIsIm9uQ291bnRlckNsaWNrIiwib25Db3VudGVyQ2xpY2sxIiwiZnJpZW5kcyIsInNhbXBsZTBwYWdlIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQ2hCQyxLQURnQixRQUNoQkEsS0FEZ0I7QUFBQSxNQUVoQkMsY0FGZ0IsUUFFaEJBLGNBRmdCO0FBQUEsc0JBSVo7QUFBQSw0QkFDSTtBQUFBLDZCQUFZRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBUSxhQUFPLEVBQUVDLGNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFRLGFBQU8sRUFBRUMsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKWTtBQUFBLENBQWhCOztLQUFNSCxPO0FBV04sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQUNBLElBQU1JLE9BQU8sR0FBRyxDQUFDLGVBQUQsRUFBa0IsWUFBbEIsRUFBZ0Msd0JBQWhDLENBQWhCOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsc0JBQ2hCO0FBQUEsY0FDS0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0YsT0FBRCxFQUFTRyxDQUFUO0FBQUEsMEJBQ2I7QUFBQSxrQkFBWUg7QUFBWixTQUFRRyxDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBQUEsQ0FBcEIsQyxDQUtBO0FBQ0E7OztBQUVBLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbXBsZTAuZjliYmU1ZTI3NjYzZmYzOGExNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNhbXBsZTAgPSAoe1xyXG5jb3VudCxcclxub25Db3VudGVyQ2xpY2tcclxufSkgPT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHA+Y291bnQgOiB7Y291bnR9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Db3VudGVyQ2xpY2t9Pmxpa2U8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ291bnRlckNsaWNrMX0+ZGlzbGlrZTwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlMDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTYW1wbGUwIGZyb20gXCIuLi9jb21wb25lbnRzL1NhbXBsZTBcIjtcclxuY29uc3QgZnJpZW5kcyA9IFtcIk5hbWUgOiBsa2FubnlcIiwgXCJBZ2U6IEppbW15XCIsIFwibWFqb3I6IGNvbXB1dGVyc2NpZW5jZVwiXTtcclxuXHJcbmNvbnN0IHNhbXBsZTBwYWdlID0gKCkgPT4gXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtmcmllbmRzLm1hcCgoZnJpZW5kcyxpKT0+IFxyXG4gICAgICAgIDxwIGtleT17aX0+e2ZyaWVuZHN9PC9wPil9XHJcbiAgICA8L2Rpdj47XHJcbi8vIG1hcOyXkOuLpOqwgCDsnbjsnpDroZzsjaggZnVudGlvbuydhCDrpqzthLTtlZzri6QuICdcclxuLy8gbWFw7J2AIOyjvOuhnCDrsLDsl7Tsl5DshJwg66as7YS07ZWc64ukXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW1wbGUwcGFnZTsiXSwic291cmNlUm9vdCI6IiJ9