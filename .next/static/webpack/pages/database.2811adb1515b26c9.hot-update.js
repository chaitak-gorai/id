"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/database",{

/***/ "./pages/database.js":
/*!***************************!*\
  !*** ./pages/database.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading */ \"./node_modules/react-loading/dist/react-loading.js\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Datasheet = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('https://secret-caverns-07392.herokuapp.com/user/all').then(function(res) {\n                        return res.json();\n                    }).then(function(result) {\n                        setData(result);\n                    }).catch(function(err) {\n                        return console.log(err);\n                    });\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    if (data === null) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_loading__WEBPACK_IMPORTED_MODULE_4___default()), {\n        className: \"loader-wrapper\",\n        type: 'bars',\n        color: '#1b8dff'\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, _this));\n    else return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Table, {\n        striped: true,\n        bordered: true,\n        hover: true,\n        responsive: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                    children: data && Object.keys(data[0]).map(function(key) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: key\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                            lineNumber: 31,\n                            columnNumber: 49\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                children: data && data.map(function(value, key1) {\n                    var _this2 = _this1;\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                children: key1\n                            }, key1, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, _this1),\n                            Object.keys(value).slice(1, Object.keys(value).length).map(function(key) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                    children: typeof value[key] === 'string' ? value[key] === 'NaN' ? '-' : value[key] : typeof value[key] === 'boolean' ? value[key] ? 'Yes' : 'No' : value[key]\n                                }, key, false, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 23\n                                }, _this2);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, _this));\n};\n_s(Datasheet, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Datasheet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Datasheet);\nvar _c;\n$RefreshReg$(_c, \"Datasheet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNYO0FBQ007QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsR0FBSyxDQUFDSyxTQUFTLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQzs7O0lBQ3ZCLEdBQUssQ0FBbUJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlCSSxJQUFJLEdBQWFKLEdBQWMsS0FBekJLLE9BQU8sR0FBSUwsR0FBYztJQUN0Q0QsZ0RBQVMsK0pBQUMsUUFBUSxXQUFJLENBQUM7Ozs7OzJCQUNmTyxLQUFLLENBQUMsQ0FBcUQsc0RBQzlEQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHO3dCQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsSUFBSTt1QkFDdEJGLElBQUksQ0FBQyxRQUFRLENBQVBHLE1BQU0sRUFBSyxDQUFDO3dCQUNqQkwsT0FBTyxDQUFDSyxNQUFNO29CQUNoQixDQUFDLEVBQ0FDLEtBQUssQ0FBQyxRQUFRLENBQVBDLEdBQUc7d0JBQUtDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7Ozs7Ozs7SUFDbkMsQ0FBQyxJQUFFLENBQUMsQ0FBQztJQUVMLEVBQUUsRUFBRVIsSUFBSSxLQUFLLElBQUksRUFDZixNQUFNLDZFQUNIRixzREFBWTtRQUNYYSxTQUFTLEVBQUMsQ0FBZ0I7UUFDMUJDLElBQUksRUFBRSxDQUFNO1FBQ1pDLEtBQUssRUFBRSxDQUFTOzs7Ozs7U0FJcEIsTUFBTSw2RUFDSGhCLGtEQUFLO1FBQUNpQixPQUFPO1FBQUNDLFFBQVE7UUFBQ0MsS0FBSztRQUFDQyxVQUFVOzt3RkFDckNDLENBQUs7c0dBQ0hDLENBQUU7OEJBQ0FuQixJQUFJLElBQ0hvQixNQUFNLENBQUNDLElBQUksQ0FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUdzQixHQUFHLENBQUMsUUFBUSxDQUFQQyxHQUFHO3NDQUFLLE1BQU0sK0RBQUxDLENBQUU7c0NBQVlELEdBQUc7MkJBQVRBLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR25ERSxDQUFLOzBCQUNIekIsSUFBSSxJQUNIQSxJQUFJLENBQUNzQixHQUFHLENBQUMsUUFBUUMsQ0FBUEcsS0FBSyxFQUFFSCxJQUFHLEVBQUssQ0FBQzs7b0JBQ3hCLE1BQU0sNkVBQ0hKLENBQUU7O3dHQUNBSyxDQUFFOzBDQUFZRCxJQUFHOytCQUFUQSxJQUFHOzs7Ozs0QkFDWEgsTUFBTSxDQUFDQyxJQUFJLENBQUNLLEtBQUssRUFDZkMsS0FBSyxDQUFDLENBQUMsRUFBRVAsTUFBTSxDQUFDQyxJQUFJLENBQUNLLEtBQUssRUFBRUUsTUFBTSxFQUNsQ04sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRzs4Q0FDUCxNQUFNLCtEQUFMTSxDQUFFOzhDQUNBLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDSCxHQUFHLE1BQU0sQ0FBUSxVQUMzQkcsS0FBSyxDQUFDSCxHQUFHLE1BQU0sQ0FBSyxPQUNsQixDQUFHLEtBQ0hHLEtBQUssQ0FBQ0gsR0FBRyxJQUNYLE1BQU0sQ0FBQ0csS0FBSyxDQUFDSCxHQUFHLE1BQU0sQ0FBUyxXQUMvQkcsS0FBSyxDQUFDSCxHQUFHLElBQ1AsQ0FBSyxPQUNMLENBQUksTUFDTkcsS0FBSyxDQUFDSCxHQUFHO21DQVROQSxHQUFHOzs7Ozs7Ozs7Ozs7Z0JBY3RCLENBQUM7Ozs7Ozs7Ozs7OztBQUliLENBQUM7R0F2REt4QixTQUFTO0tBQVRBLFNBQVM7QUF5RGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXRhYmFzZS5qcz9jZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcblxuY29uc3QgRGF0YXNoZWV0ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zZWNyZXQtY2F2ZXJucy0wNzM5Mi5oZXJva3VhcHAuY29tL3VzZXIvYWxsJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldERhdGEocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtdKTtcblxuICBpZiAoZGF0YSA9PT0gbnVsbClcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0TG9hZGluZ1xuICAgICAgICBjbGFzc05hbWU9J2xvYWRlci13cmFwcGVyJ1xuICAgICAgICB0eXBlPXsnYmFycyd9XG4gICAgICAgIGNvbG9yPXsnIzFiOGRmZid9XG4gICAgICAvPlxuICAgICk7XG4gIGVsc2VcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgcmVzcG9uc2l2ZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGFbMF0pLm1hcCgoa2V5KSA9PiA8dGgga2V5PXtrZXl9PntrZXl9PC90aD4pfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgZGF0YS5tYXAoKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGgga2V5PXtrZXl9PntrZXl9PC90aD5cbiAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDEsIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIHZhbHVlW2tleV0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVba2V5XSA9PT0gJ05hTidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWVba2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiB2YWx1ZVtrZXldID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZVtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnWWVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ05vJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlW2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNoZWV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIlJlYWN0TG9hZGluZyIsIkRhdGFzaGVldCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsInR5cGUiLCJjb2xvciIsInN0cmlwZWQiLCJib3JkZXJlZCIsImhvdmVyIiwicmVzcG9uc2l2ZSIsInRoZWFkIiwidHIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidGgiLCJ0Ym9keSIsInZhbHVlIiwic2xpY2UiLCJsZW5ndGgiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/database.js\n");

/***/ })

});