"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/singleton",{

/***/ "./src/pages/singleton/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/singleton/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pattern_singleton_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pattern/singleton/counter */ \"./pattern/singleton/counter.ts\");\n/* harmony import */ var _pattern_singleton_superCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pattern/singleton/superCounter */ \"./pattern/singleton/superCounter.ts\");\n\n\n\nconst counter = new _pattern_singleton_superCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\ncounter.increment();\ncounter.increment();\ncounter.increment();\nconsole.log(\"Counter in counter.js: \", _pattern_singleton_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCounter());\nconst Singleton = ()=>{\n    const onClickHandler = (color)=>{\n        _pattern_singleton_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].increment();\n        console.log(\"\".concat(color, \" button clicked: \").concat(_pattern_singleton_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCounter()));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-[20px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-red-500\",\n                onClick: ()=>onClickHandler(\"red\"),\n                children: \"Red button\"\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/singleton/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500\",\n                onClick: ()=>onClickHandler(\"blue\"),\n                children: \"Blue button\"\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/singleton/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/singleton/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Singleton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Singleton);\nvar _c;\n$RefreshReg$(_c, \"Singleton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2luZ2xldG9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0U7QUFDQztBQUVuRSxNQUFNRSxVQUFVLElBQUlELHVFQUFZQTtBQUVoQ0MsUUFBUUMsU0FBUztBQUNqQkQsUUFBUUMsU0FBUztBQUNqQkQsUUFBUUMsU0FBUztBQUVqQkMsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQkwsNkVBQTJCO0FBRWxFLE1BQU1PLFlBQVksSUFBTTtJQUN0QixNQUFNQyxpQkFBaUIsQ0FBQ0MsUUFBa0I7UUFDeENULDRFQUEwQjtRQUMxQkksUUFBUUMsR0FBRyxDQUFDLEdBQTRCTCxPQUF6QlMsT0FBTSxxQkFBaUQsT0FBOUJULDZFQUEyQjtJQUNyRTtJQUNBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVc7Z0JBQWNFLFNBQVMsSUFBTUwsZUFBZTswQkFBUTs7Ozs7OzBCQUd2RSw4REFBQ0k7Z0JBQU9ELFdBQVc7Z0JBQWVFLFNBQVMsSUFBTUwsZUFBZTswQkFBUzs7Ozs7Ozs7Ozs7O0FBSy9FO0tBZk1EO0FBaUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zaW5nbGV0b24vaW5kZXgudHN4PzA5MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNpbmdsZXRvbkNvdW50ZXIgZnJvbSBcIi4uLy4uLy4uL3BhdHRlcm4vc2luZ2xldG9uL2NvdW50ZXJcIjtcbmltcG9ydCBTdXBlckNvdW50ZXIgZnJvbSBcIi4uLy4uLy4uL3BhdHRlcm4vc2luZ2xldG9uL3N1cGVyQ291bnRlclwiO1xuXG5jb25zdCBjb3VudGVyID0gbmV3IFN1cGVyQ291bnRlcigpO1xuXG5jb3VudGVyLmluY3JlbWVudCgpO1xuY291bnRlci5pbmNyZW1lbnQoKTtcbmNvdW50ZXIuaW5jcmVtZW50KCk7XG5cbmNvbnNvbGUubG9nKFwiQ291bnRlciBpbiBjb3VudGVyLmpzOiBcIiwgc2luZ2xldG9uQ291bnRlci5nZXRDb3VudGVyKCkpO1xuXG5jb25zdCBTaW5nbGV0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICBzaW5nbGV0b25Db3VudGVyLmluY3JlbWVudCgpO1xuICAgIGNvbnNvbGUubG9nKGAke2NvbG9yfSBidXR0b24gY2xpY2tlZDogJHtzaW5nbGV0b25Db3VudGVyLmdldENvdW50ZXIoKX1gKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLVsyMHB4XVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYmctcmVkLTUwMFwifSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSGFuZGxlcihcInJlZFwiKX0+XG4gICAgICAgIFJlZCBidXR0b25cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYmctYmx1ZS01MDBcIn0gb25DbGljaz17KCkgPT4gb25DbGlja0hhbmRsZXIoXCJibHVlXCIpfT5cbiAgICAgICAgQmx1ZSBidXR0b25cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xldG9uO1xuIl0sIm5hbWVzIjpbInNpbmdsZXRvbkNvdW50ZXIiLCJTdXBlckNvdW50ZXIiLCJjb3VudGVyIiwiaW5jcmVtZW50IiwiY29uc29sZSIsImxvZyIsImdldENvdW50ZXIiLCJTaW5nbGV0b24iLCJvbkNsaWNrSGFuZGxlciIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/singleton/index.tsx\n"));

/***/ })

});