"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/hooks",{

/***/ "./src/pages/hooks/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/hooks/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Width\": function() { return /* binding */ Width; },\n/* harmony export */   \"default\": function() { return /* binding */ Hooks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n// Hooks가 추가되기 전에 React에서 상태와 생명 주기 함수를 사용하려면 클래스 컴포넌트를 사용해야 했다.\n// class MyComponent extends React.Component {\n//     /* Adding state and binding custom methods */\n//     constructor() {\n//         super()\n//         this.state = { ... }\n//         this.customMethodOne = this.customMethodOne.bind(this)\n//         this.customMethodTwo = this.customMethodTwo.bind(this)\n//     }\n//\n//     /* Lifecycle Methods */\n//     componentDidMount() { ...}\n//     componentWillUnmount() { ... }\n//\n//     /* Custom methods */\n//     customMethodOne() { ... }\n//     customMethodTwo() { ... }\n//\n//     render() { return { ... }}\n// }\nfunction Count(param) {\n    let { count , increment , decrement  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"counter\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: increment,\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: decrement,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current count: \",\n                    count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = Count;\nfunction Width(param) {\n    let { width  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Current width: \",\n            width\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Width;\n// class pattern\n// export default class Hooks extends React.Component<any, any> {\n//   constructor() {\n//     super();\n//     this.state = {\n//       count: 0,\n//       width: 0,\n//     };\n//   }\n//\n//   componentDidMount() {\n//     this.handleResize();\n//     window.addEventListener(\"resize\", this.handleResize);\n//   }\n//\n//   componentWillUnmount() {\n//     window.removeEventListener(\"resize\", this.handleResize);\n//   }\n//\n//   increment = () => {\n//     this.setState(({ count }) => ({ count: count + 1 }));\n//   };\n//\n//   decrement = () => {\n//     this.setState(({ count }) => ({ count: count - 1 }));\n//   };\n//\n//   handleResize = () => {\n//     this.setState({ width: window.innerWidth });\n//   };\n//\n//   render() {\n//     return (\n//       <div className=\"App\">\n//         <Count\n//           count={this.state.count}\n//           increment={this.increment}\n//           decrement={this.decrement}\n//         />\n//         <div id=\"divider\" />\n//         <Width width={this.state.width} />\n//       </div>\n//     );\n//   }\n// }\nfunction useCounter() {\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const increment = ()=>setCount(count + 1);\n    const decrement = ()=>setCount(count - 1);\n    return {\n        count,\n        increment,\n        decrement\n    };\n}\n_s(useCounter, \"oDgYfYHkD9Wkv4hrAPCkI/ev3YU=\");\nfunction useWindowWidth() {\n    _s1();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>setWidth(window.innerWidth);\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>window.addEventListener(\"resize\", handleResize);\n    });\n    return width;\n}\n_s1(useWindowWidth, \"4/nr7/glcmtQpNPa3y1HsyGlpKw=\");\nfunction Hooks() {\n    _s2();\n    const counter = useCounter();\n    const width = useWindowWidth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Count, {\n                count: counter.count,\n                increment: counter.increment,\n                decrement: counter.decrement\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"divider\"\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Width, {\n                width: width\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s2(Hooks, \"nL5L8YaqHfV+AT569L5OzMQPYV0=\", false, function() {\n    return [\n        useCounter,\n        useWindowWidth\n    ];\n});\n_c2 = Hooks;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Count\");\n$RefreshReg$(_c1, \"Width\");\n$RefreshReg$(_c2, \"Hooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRakIsU0FBUzs7Ozs7OzBCQUU5Qiw4REFBQ0M7Z0JBQUlpQixJQUFHOzs7Ozs7MEJBQ1IsOERBQUNaO2dCQUFNQyxPQUFPQTs7Ozs7Ozs7Ozs7O0FBR3BCLENBQUM7SUFmdUJTOztRQUNOUjtRQUNGRTs7O01BRlFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob29rcy9pbmRleC50c3g/NGI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBIb29rc+qwgCDstpTqsIDrkJjquLAg7KCE7JeQIFJlYWN07JeQ7IScIOyDge2DnOyZgCDsg53rqoUg7KO86riwIO2VqOyImOulvCDsgqzsmqntlZjroKTrqbQg7YG0656Y7IqkIOy7tO2PrOuEjO2KuOulvCDsgqzsmqntlbTslbwg7ZaI64ukLlxuLy8gY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICAgIC8qIEFkZGluZyBzdGF0ZSBhbmQgYmluZGluZyBjdXN0b20gbWV0aG9kcyAqL1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgICBzdXBlcigpXG4vLyAgICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLiB9XG4vLyAgICAgICAgIHRoaXMuY3VzdG9tTWV0aG9kT25lID0gdGhpcy5jdXN0b21NZXRob2RPbmUuYmluZCh0aGlzKVxuLy8gICAgICAgICB0aGlzLmN1c3RvbU1ldGhvZFR3byA9IHRoaXMuY3VzdG9tTWV0aG9kVHdvLmJpbmQodGhpcylcbi8vICAgICB9XG4vL1xuLy8gICAgIC8qIExpZmVjeWNsZSBNZXRob2RzICovXG4vLyAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7IC4uLn1cbi8vICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHsgLi4uIH1cbi8vXG4vLyAgICAgLyogQ3VzdG9tIG1ldGhvZHMgKi9cbi8vICAgICBjdXN0b21NZXRob2RPbmUoKSB7IC4uLiB9XG4vLyAgICAgY3VzdG9tTWV0aG9kVHdvKCkgeyAuLi4gfVxuLy9cbi8vICAgICByZW5kZXIoKSB7IHJldHVybiB7IC4uLiB9fVxuLy8gfVxuXG5mdW5jdGlvbiBDb3VudCh7IGNvdW50LCBpbmNyZW1lbnQsIGRlY3JlbWVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnR9Pis8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZW1lbnR9Pi08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+Q3VycmVudCBjb3VudDoge2NvdW50fTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFdpZHRoKHsgd2lkdGggfSkge1xuICByZXR1cm4gPHA+Q3VycmVudCB3aWR0aDoge3dpZHRofTwvcD47XG59XG5cbi8vIGNsYXNzIHBhdHRlcm5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvb2tzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4vLyAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgIHN1cGVyKCk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgIGNvdW50OiAwLFxuLy8gICAgICAgd2lkdGg6IDAsXG4vLyAgICAgfTtcbi8vICAgfVxuLy9cbi8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4vLyAgIH1cbi8vXG4vLyAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcbi8vICAgfVxuLy9cbi8vICAgaW5jcmVtZW50ID0gKCkgPT4ge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoKHsgY291bnQgfSkgPT4gKHsgY291bnQ6IGNvdW50ICsgMSB9KSk7XG4vLyAgIH07XG4vL1xuLy8gICBkZWNyZW1lbnQgPSAoKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSgoeyBjb3VudCB9KSA9PiAoeyBjb3VudDogY291bnQgLSAxIH0pKTtcbi8vICAgfTtcbi8vXG4vLyAgIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuLy8gICB9O1xuLy9cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuLy8gICAgICAgICA8Q291bnRcbi8vICAgICAgICAgICBjb3VudD17dGhpcy5zdGF0ZS5jb3VudH1cbi8vICAgICAgICAgICBpbmNyZW1lbnQ9e3RoaXMuaW5jcmVtZW50fVxuLy8gICAgICAgICAgIGRlY3JlbWVudD17dGhpcy5kZWNyZW1lbnR9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxkaXYgaWQ9XCJkaXZpZGVyXCIgLz5cbi8vICAgICAgICAgPFdpZHRoIHdpZHRoPXt0aGlzLnN0YXRlLndpZHRofSAvPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1c2VDb3VudGVyKCkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHNldENvdW50KGNvdW50ICsgMSk7XG4gIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHNldENvdW50KGNvdW50IC0gMSk7XG5cbiAgcmV0dXJuIHsgY291bnQsIGluY3JlbWVudCwgZGVjcmVtZW50IH07XG59XG5cbmZ1bmN0aW9uIHVzZVdpbmRvd1dpZHRoKCkge1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4gc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB3aWR0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9va3MoKSB7XG4gIGNvbnN0IGNvdW50ZXIgPSB1c2VDb3VudGVyKCk7XG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8Q291bnRcbiAgICAgICAgY291bnQ9e2NvdW50ZXIuY291bnR9XG4gICAgICAgIGluY3JlbWVudD17Y291bnRlci5pbmNyZW1lbnR9XG4gICAgICAgIGRlY3JlbWVudD17Y291bnRlci5kZWNyZW1lbnR9XG4gICAgICAvPlxuICAgICAgPGRpdiBpZD1cImRpdmlkZXJcIiAvPlxuICAgICAgPFdpZHRoIHdpZHRoPXt3aWR0aH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ291bnQiLCJjb3VudCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiV2lkdGgiLCJ3aWR0aCIsInVzZUNvdW50ZXIiLCJzZXRDb3VudCIsInVzZVdpbmRvd1dpZHRoIiwic2V0V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkhvb2tzIiwiY291bnRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/hooks/index.tsx\n"));

/***/ })

});