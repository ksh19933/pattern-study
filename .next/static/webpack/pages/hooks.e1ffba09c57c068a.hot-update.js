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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Width\": function() { return /* binding */ Width; },\n/* harmony export */   \"default\": function() { return /* binding */ Hooks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n// Hooks가 추가되기 전에 React에서 상태와 생명 주기 함수를 사용하려면 클래스 컴포넌트를 사용해야 했다.\n// class MyComponent extends React.Component {\n//     /* Adding state and binding custom methods */\n//     constructor() {\n//         super()\n//         this.state = { ... }\n//         this.customMethodOne = this.customMethodOne.bind(this)\n//         this.customMethodTwo = this.customMethodTwo.bind(this)\n//     }\n//\n//     /* Lifecycle Methods */\n//     componentDidMount() { ...}\n//     componentWillUnmount() { ... }\n//\n//     /* Custom methods */\n//     customMethodOne() { ... }\n//     customMethodTwo() { ... }\n//\n//     render() { return { ... }}\n// }\nfunction Count(param) {\n    let { count , increment , decrement  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"counter\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"btns\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: increment,\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: decrement,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current count: \",\n                    count\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = Count;\nfunction Width(param) {\n    let { width  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Current width: \",\n            width\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Width;\n// class pattern\n// export default class Hooks extends React.Component<any, any> {\n//   constructor() {\n//     super();\n//     this.state = {\n//       count: 0,\n//       width: 0,\n//     };\n//   }\n//\n//   componentDidMount() {\n//     this.handleResize();\n//     window.addEventListener(\"resize\", this.handleResize);\n//   }\n//\n//   componentWillUnmount() {\n//     window.removeEventListener(\"resize\", this.handleResize);\n//   }\n//\n//   increment = () => {\n//     this.setState(({ count }) => ({ count: count + 1 }));\n//   };\n//\n//   decrement = () => {\n//     this.setState(({ count }) => ({ count: count - 1 }));\n//   };\n//\n//   handleResize = () => {\n//     this.setState({ width: window.innerWidth });\n//   };\n//\n//   render() {\n//     return (\n//       <div className=\"App\">\n//         <Count\n//           count={this.state.count}\n//           increment={this.increment}\n//           decrement={this.decrement}\n//         />\n//         <div id=\"divider\" />\n//         <Width width={this.state.width} />\n//       </div>\n//     );\n//   }\n// }\nfunction useCounter() {\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const increment = ()=>setCount(count + 1);\n    const decrement = ()=>setCount(count - 1);\n    return {\n        count,\n        increment,\n        decrement\n    };\n}\n_s(useCounter, \"oDgYfYHkD9Wkv4hrAPCkI/ev3YU=\");\nfunction useWindowWidth() {\n    _s1();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>setWidth(window.innerWidth);\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.addEventListener(\"resize\", handleResize);\n    });\n    return width;\n}\n_s1(useWindowWidth, \"4/nr7/glcmtQpNPa3y1HsyGlpKw=\");\nfunction Hooks() {\n    _s2();\n    const counter = useCounter();\n    const width = useWindowWidth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Count, {\n                count: counter.count,\n                increment: counter.increment,\n                decrement: counter.decrement\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Width, {\n                width: width\n            }, void 0, false, {\n                fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimseunghwan/Desktop/pattern/src/pages/hooks/index.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s2(Hooks, \"nL5L8YaqHfV+AT569L5OzMQPYV0=\", false, function() {\n    return [\n        useCounter,\n        useWindowWidth\n    ];\n});\n_c2 = Hooks;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Count\");\n$RefreshReg$(_c1, \"Width\");\n$RefreshReg$(_c2, \"Hooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7Ozs7OzswQkFFOUIsOERBQUNDOzs7OzswQkFDRCw4REFBQ0s7Z0JBQU1DLE9BQU9BOzs7Ozs7Ozs7Ozs7QUFHcEIsQ0FBQztJQWZ1QlM7O1FBQ05SO1FBQ0ZFOzs7TUFGUU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvb2tzL2luZGV4LnRzeD80Yjk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIEhvb2tz6rCAIOy2lOqwgOuQmOq4sCDsoITsl5AgUmVhY3Tsl5DshJwg7IOB7YOc7JmAIOyDneuqhSDso7zquLAg7ZWo7IiY66W8IOyCrOyaqe2VmOugpOuptCDtgbTrnpjsiqQg7Lu07Y+s64SM7Yq466W8IOyCrOyaqe2VtOyVvCDtlojri6QuXG4vLyBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgICAgLyogQWRkaW5nIHN0YXRlIGFuZCBiaW5kaW5nIGN1c3RvbSBtZXRob2RzICovXG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICAgIHN1cGVyKClcbi8vICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4uIH1cbi8vICAgICAgICAgdGhpcy5jdXN0b21NZXRob2RPbmUgPSB0aGlzLmN1c3RvbU1ldGhvZE9uZS5iaW5kKHRoaXMpXG4vLyAgICAgICAgIHRoaXMuY3VzdG9tTWV0aG9kVHdvID0gdGhpcy5jdXN0b21NZXRob2RUd28uYmluZCh0aGlzKVxuLy8gICAgIH1cbi8vXG4vLyAgICAgLyogTGlmZWN5Y2xlIE1ldGhvZHMgKi9cbi8vICAgICBjb21wb25lbnREaWRNb3VudCgpIHsgLi4ufVxuLy8gICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkgeyAuLi4gfVxuLy9cbi8vICAgICAvKiBDdXN0b20gbWV0aG9kcyAqL1xuLy8gICAgIGN1c3RvbU1ldGhvZE9uZSgpIHsgLi4uIH1cbi8vICAgICBjdXN0b21NZXRob2RUd28oKSB7IC4uLiB9XG4vL1xuLy8gICAgIHJlbmRlcigpIHsgcmV0dXJuIHsgLi4uIH19XG4vLyB9XG5cbmZ1bmN0aW9uIENvdW50KHsgY291bnQsIGluY3JlbWVudCwgZGVjcmVtZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudH0+KzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlY3JlbWVudH0+LTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD5DdXJyZW50IGNvdW50OiB7Y291bnR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gV2lkdGgoeyB3aWR0aCB9KSB7XG4gIHJldHVybiA8cD5DdXJyZW50IHdpZHRoOiB7d2lkdGh9PC9wPjtcbn1cblxuLy8gY2xhc3MgcGF0dGVyblxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9va3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbi8vICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgc3VwZXIoKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge1xuLy8gICAgICAgY291bnQ6IDAsXG4vLyAgICAgICB3aWR0aDogMCxcbi8vICAgICB9O1xuLy8gICB9XG4vL1xuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcbi8vICAgfVxuLy9cbi8vICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4vLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xuLy8gICB9XG4vL1xuLy8gICBpbmNyZW1lbnQgPSAoKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSgoeyBjb3VudCB9KSA9PiAoeyBjb3VudDogY291bnQgKyAxIH0pKTtcbi8vICAgfTtcbi8vXG4vLyAgIGRlY3JlbWVudCA9ICgpID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKCh7IGNvdW50IH0pID0+ICh7IGNvdW50OiBjb3VudCAtIDEgfSkpO1xuLy8gICB9O1xuLy9cbi8vICAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGggfSk7XG4vLyAgIH07XG4vL1xuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4vLyAgICAgICAgIDxDb3VudFxuLy8gICAgICAgICAgIGNvdW50PXt0aGlzLnN0YXRlLmNvdW50fVxuLy8gICAgICAgICAgIGluY3JlbWVudD17dGhpcy5pbmNyZW1lbnR9XG4vLyAgICAgICAgICAgZGVjcmVtZW50PXt0aGlzLmRlY3JlbWVudH1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICAgPGRpdiBpZD1cImRpdmlkZXJcIiAvPlxuLy8gICAgICAgICA8V2lkdGggd2lkdGg9e3RoaXMuc3RhdGUud2lkdGh9IC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHVzZUNvdW50ZXIoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4gc2V0Q291bnQoY291bnQgKyAxKTtcbiAgY29uc3QgZGVjcmVtZW50ID0gKCkgPT4gc2V0Q291bnQoY291bnQgLSAxKTtcblxuICByZXR1cm4geyBjb3VudCwgaW5jcmVtZW50LCBkZWNyZW1lbnQgfTtcbn1cblxuZnVuY3Rpb24gdXNlV2luZG93V2lkdGgoKSB7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb29rcygpIHtcbiAgY29uc3QgY291bnRlciA9IHVzZUNvdW50ZXIoKTtcbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dXaWR0aCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb3VudFxuICAgICAgICBjb3VudD17Y291bnRlci5jb3VudH1cbiAgICAgICAgaW5jcmVtZW50PXtjb3VudGVyLmluY3JlbWVudH1cbiAgICAgICAgZGVjcmVtZW50PXtjb3VudGVyLmRlY3JlbWVudH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IC8+XG4gICAgICA8V2lkdGggd2lkdGg9e3dpZHRofSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb3VudCIsImNvdW50IiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJXaWR0aCIsIndpZHRoIiwidXNlQ291bnRlciIsInNldENvdW50IiwidXNlV2luZG93V2lkdGgiLCJzZXRXaWR0aCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiSG9va3MiLCJjb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/hooks/index.tsx\n"));

/***/ })

});