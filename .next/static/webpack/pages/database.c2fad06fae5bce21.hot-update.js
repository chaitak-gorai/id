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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading */ \"./node_modules/react-loading/dist/react-loading.js\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Database_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Database.module.scss */ \"./Database.module.scss\");\n/* harmony import */ var _Database_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Database_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Datasheet = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_LENOVO_Desktop_Client_id_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('https://secret-caverns-07392.herokuapp.com/user/all').then(function(res) {\n                        return res.json();\n                    }).then(function(result) {\n                        setData(result);\n                    }).catch(function(err) {\n                        return console.log(err);\n                    });\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    if (data === null) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_loading__WEBPACK_IMPORTED_MODULE_4___default()), {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_Database_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loaderWrapper)),\n        type: 'bars',\n        color: '#1b8dff'\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, _this));\n    //   else\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                className: \"py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        ms: 3,\n                        children: [\n                            \"30th Dinner:\",\n                            ' ',\n                            data ? data.filter(function(item) {\n                                return item.dinner30 === true;\n                            }).length : 0,\n                            \"30th Dinner:\",\n                            ' ',\n                            data ? data.filter(function(item) {\n                                return item.dinner30 === true;\n                            }).length : 0\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Table, {\n                striped: true,\n                bordered: true,\n                hover: true,\n                responsive: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                            children: data && Object.keys(data[0]).map(function(key) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                    children: key\n                                }, key, false, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 49\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                        children: data && data.map(function(value, key1) {\n                            var _this2 = _this1;\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: key1\n                                    }, key1, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 19\n                                    }, _this1),\n                                    Object.keys(value).slice(1, Object.keys(value).length).map(function(key) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: typeof value[key] === 'string' ? value[key] === 'NaN' ? '-' : value[key] : typeof value[key] === 'boolean' ? value[key] ? 'Yes' : 'No' : value[key]\n                                        }, key, false, {\n                                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 23\n                                        }, _this2);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, _this1));\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Client\\\\id\\\\pages\\\\database.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Datasheet, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Datasheet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Datasheet);\nvar _c;\n$RefreshReg$(_c, \"Datasheet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNILEdBQUcsSUFDWCxNQUFNLENBQUNHLEtBQUssQ0FBQ0gsR0FBRyxNQUFNLENBQVMsV0FDL0JHLEtBQUssQ0FBQ0gsR0FBRyxJQUNQLENBQUssT0FDTCxDQUFJLE1BQ05HLEtBQUssQ0FBQ0gsR0FBRzsyQ0FUTkEsR0FBRzs7Ozs7Ozs7Ozs7O3dCQWN0QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQUtiLENBQUM7R0F6RUs5QixTQUFTO0tBQVRBLFNBQVM7QUEyRWYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXRhYmFzZS5qcz9jZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9EYXRhYmFzZS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IERhdGFzaGVldCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc2VjcmV0LWNhdmVybnMtMDczOTIuaGVyb2t1YXBwLmNvbS91c2VyL2FsbCcpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBzZXREYXRhKHJlc3VsdCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGRhdGEgPT09IG51bGwpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdExvYWRpbmdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5sb2FkZXJXcmFwcGVyKX1cbiAgICAgICAgdHlwZT17J2JhcnMnfVxuICAgICAgICBjb2xvcj17JyMxYjhkZmYnfVxuICAgICAgICAvLyBzdHlsZT17e1xuICAgICAgICAvLyAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAvLyAgIHRvcDogJzUwJScsXG4gICAgICAgIC8vICAgbGVmdDogJzUwJScsXG4gICAgICAgIC8vICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgLy8gfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgLy8gICBlbHNlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPSdweS01Jz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1zPXszfT5cbiAgICAgICAgICAgIDMwdGggRGlubmVyOnsnICd9XG4gICAgICAgICAgICB7ZGF0YSA/IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmRpbm5lcjMwID09PSB0cnVlKS5sZW5ndGggOiAwfVxuICAgICAgICAgICAgMzB0aCBEaW5uZXI6eycgJ31cbiAgICAgICAgICAgIHtkYXRhID8gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZGlubmVyMzAgPT09IHRydWUpLmxlbmd0aCA6IDB9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciByZXNwb25zaXZlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YVswXSkubWFwKChrZXkpID0+IDx0aCBrZXk9e2tleX0+e2tleX08L3RoPil9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICBkYXRhLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2tleX0+e2tleX08L3RoPlxuICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMSwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgdmFsdWVba2V5XSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZVtrZXldID09PSAnTmFOJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZVtrZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbHVlW2tleV0gPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlW2tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdZZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnTm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWVba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNoZWV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWJsZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIlJlYWN0TG9hZGluZyIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJEYXRhc2hlZXQiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJsb2FkZXJXcmFwcGVyIiwidHlwZSIsImNvbG9yIiwibXMiLCJmaWx0ZXIiLCJpdGVtIiwiZGlubmVyMzAiLCJsZW5ndGgiLCJzdHJpcGVkIiwiYm9yZGVyZWQiLCJob3ZlciIsInJlc3BvbnNpdmUiLCJ0aGVhZCIsInRyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInRoIiwidGJvZHkiLCJ2YWx1ZSIsInNsaWNlIiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/database.js\n");

/***/ })

});