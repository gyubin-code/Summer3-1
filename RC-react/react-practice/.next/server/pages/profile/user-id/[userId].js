(function() {
var exports = {};
exports.id = "pages/profile/user-id/[userId]";
exports.ids = ["pages/profile/user-id/[userId]"];
exports.modules = {

/***/ "./pages/profile/user-id/[userId].js":
/*!*******************************************!*\
  !*** ./pages/profile/user-id/[userId].js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\SchoolProgramming\\RC-react\\react-practice\\pages\\profile\\user-id\\[userId].js";

const ProfilePage = ({
  username,
  major,
  age,
  userId
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "Profile"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["username : ", username]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["major : ", major]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["age : ", age]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["userId: ", userId]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 5
}, undefined);

async function getServerSideProps(context) {
  const userId = context.query.userId;
  return {
    props: {
      username: "Ikanny",
      major: "Computer engineering",
      age: 20,
      userId: userId
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/profile/user-id/[userId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcmFjdGljZS8uL3BhZ2VzL3Byb2ZpbGUvdXNlci1pZC9bdXNlcklkXS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1wcmFjdGljZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlByb2ZpbGVQYWdlIiwidXNlcm5hbWUiLCJtYWpvciIsImFnZSIsInVzZXJJZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFDakJDLFVBRGlCO0FBRWpCQyxPQUZpQjtBQUdqQkMsS0FIaUI7QUFJakJDO0FBSmlCLENBQUQsa0JBTWhCO0FBQUEsMEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUVBO0FBQUEsOEJBQWVILFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkEsZUFHQTtBQUFBLDJCQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLGVBSUE7QUFBQSx5QkFBVUMsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQSxlQUtBO0FBQUEsMkJBQVlDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7O0FBYU8sZUFBZUMsa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQzlDLFFBQU1GLE1BQU0sR0FBRUUsT0FBTyxDQUFDQyxLQUFSLENBQWNILE1BQTVCO0FBQ0EsU0FBTztBQUNISSxTQUFLLEVBQUU7QUFDUFAsY0FBUSxFQUFFLFFBREg7QUFFUEMsV0FBSyxFQUFFLHNCQUZBO0FBR1BDLFNBQUcsRUFBRSxFQUhFO0FBSVBDLFlBQU0sRUFBR0E7QUFKRjtBQURKLEdBQVA7QUFRQztBQUNMLCtEQUFlSixXQUFmLEU7Ozs7Ozs7Ozs7O0FDeEJBLG1EIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvdXNlci1pZC9bdXNlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2ZpbGVQYWdlID0gKHtcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgbWFqb3IsXHJcbiAgICBhZ2UsXHJcbiAgICB1c2VySWRcclxuICAgIH0pID0+XHJcbiAgICA8ZGl2PlxyXG4gICAgPGgxPlByb2ZpbGU8L2gxPlxyXG4gICAgPHA+dXNlcm5hbWUgOiB7dXNlcm5hbWV9PC9wPlxyXG4gICAgPHA+bWFqb3IgOiB7bWFqb3J9PC9wPlxyXG4gICAgPHA+YWdlIDoge2FnZX08L3A+XHJcbiAgICA8cD51c2VySWQ6IHt1c2VySWR9PC9wPlxyXG4gICAgPC9kaXY+O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHVzZXJJZCA9Y29udGV4dC5xdWVyeS51c2VySWRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJJa2FubnlcIixcclxuICAgICAgICBtYWpvcjogXCJDb21wdXRlciBlbmdpbmVlcmluZ1wiLFxyXG4gICAgICAgIGFnZTogMjAsXHJcbiAgICAgICAgdXNlcklkIDogdXNlcklkXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9