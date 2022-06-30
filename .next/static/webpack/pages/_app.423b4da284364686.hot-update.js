"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_whatsapp_icon_seeklogo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/whatsapp-icon-seeklogo.com.svg */ \"./public/whatsapp-icon-seeklogo.com.svg\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\n\n\n\n\n\nfunction login() {\n    var signIn = function() {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase__WEBPACK_IMPORTED_MODULE_4__.provider).catch(alert);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen grid place-items-center bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _public_whatsapp_icon_seeklogo_com_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"Whatsapp image\",\n                        width: \"100px\",\n                        height: \"100px\"\n                    }, void 0, false, {\n                        fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border flex items-center px-5 py-2 rounded hover:border-blue-300\",\n                        onClick: signIn,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"https://cdn-teams-slug.flaticon.com/google.jpg\",\n                                width: 50,\n                                height: 50\n                            }, void 0, false, {\n                                fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                                lineNumber: 24,\n                                columnNumber: 109\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Sign in with Google\"\n                            }, void 0, false, {\n                                fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                                lineNumber: 24,\n                                columnNumber: 193\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/evans/Desktop/next-whatsapp/pages/login.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDRTtBQUMyQjtBQUNiO0FBQ0U7QUFFL0MsU0FBU00sS0FBSyxHQUFHO0lBQ2YsSUFBTUMsTUFBTSxHQUFHLFdBQU07UUFDbkJGLDhEQUFlLENBQUVGLDJDQUFJLEVBQUNDLCtDQUFRLENBQUMsQ0FBQ0ksS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUM5QztJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx1REFBd0Q7OzBCQUNyRSw4REFBQ1gsa0RBQUk7MEJBQ0gsNEVBQUNZLE9BQUs7OEJBQUMsT0FBSzs7Ozs7d0JBQVE7Ozs7O29CQUNmOzBCQUNQLDhEQUFDRixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTs7a0NBQzVCLDhEQUFDVixtREFBSzt3QkFDSlksR0FBRyxFQUFFWCw4RUFBSTt3QkFDVFksR0FBRyxFQUFDLGdCQUFnQjt3QkFDcEJDLEtBQUssRUFBQyxPQUFPO3dCQUNiQyxNQUFNLEVBQUMsT0FBTzs7Ozs7NEJBRWQ7a0NBQ0osOERBQUNDLFFBQU07d0JBQUNOLFNBQVMsRUFBQyxrRUFBa0U7d0JBQUNPLE9BQU8sRUFBRVgsTUFBTTs7MENBQUUsOERBQUNOLG1EQUFLO2dDQUFDWSxHQUFHLEVBQUMsZ0RBQWdEO2dDQUFDRSxLQUFLLEVBQUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O29DQUFHOzBDQUFBLDhEQUFDRyxNQUFJOzBDQUFDLHFCQUFtQjs7Ozs7b0NBQU87Ozs7Ozs0QkFBUzs7Ozs7O29CQUU3Tjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBRUQsK0RBQWViLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIvcHVibGljL3doYXRzYXBwLWljb24tc2Vla2xvZ28uY29tLnN2Z1wiO1xyXG5pbXBvcnQgeyBhdXRoLCBwcm92aWRlciB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBzaWduSW5XaXRoUG9wdXB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgY29uc3Qgc2lnbkluID0gKCkgPT4ge1xyXG4gICAgc2lnbkluV2l0aFBvcHVwIChhdXRoLHByb3ZpZGVyKS5jYXRjaChhbGVydCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciAgYmctZ3JheS0xMDBcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgIGFsdD1cIldoYXRzYXBwIGltYWdlXCJcclxuICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPVwibWItODBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIgcHgtNSBweS0yIHJvdW5kZWQgaG92ZXI6Ym9yZGVyLWJsdWUtMzAwJyBvbkNsaWNrPXtzaWduSW59PjxJbWFnZSBzcmM9XCJodHRwczovL2Nkbi10ZWFtcy1zbHVnLmZsYXRpY29uLmNvbS9nb29nbGUuanBnXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfS8+PHNwYW4+U2lnbiBpbiB3aXRoIEdvb2dsZTwvc3Bhbj48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJsb2dvIiwiYXV0aCIsInByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwibG9naW4iLCJzaWduSW4iLCJjYXRjaCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});