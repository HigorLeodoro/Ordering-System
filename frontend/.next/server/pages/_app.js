/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@nextauth.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch  {\n        console.log(\"Erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //tentar pegar algo no cookie (token)\n        const { \"@nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { id , name , email  } = response.data;\n                setUser({\n                    id,\n                    name,\n                    email\n                });\n            }).catch(()=>{\n                // se deu erro deslogar usuario\n                signOut();\n            });\n        }\n    }, []);\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/session\", {\n                email,\n                password\n            });\n            //console.log(response.data)\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" // quais caminhos terao acesso ao cookie\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //passar para proximas requisicoes o token\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Logado com sucesso!\");\n            //redirecionar o user   para /dashbord\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashbord\");\n        } catch (err1) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao acessar!\");\n            console.log(\"ERRO AO ACESSAR\", err1);\n        }\n    }\n    async function signUp({ name , email , password  }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Conta criada com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (err2) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao cadastrar!\");\n            console.log(\"Erro ao cadastrar usuario\", err2);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/devsource/Desktop/pizzaria/frontend/src/contexts/AuthContext.tsx\",\n        lineNumber: 134,\n        columnNumber: 9\n    }, this);\n}\nfunction err(arg0, err) {\n    throw new Error(\"Function not implemented.\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUNELHVEQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFcEIsUUFBTThCLElBQUcsRUFBQztZQUNQN0IsdURBQVcsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUV1QixJQUFHLENBQUM7U0FDaEQ7S0FDSjtJQUVELHFCQUNJLDhEQUFDNUIsV0FBVyxDQUFDK0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRXhCLElBQUk7WUFBRUUsZUFBZTtZQUFFVSxNQUFNO1lBQUVuQixPQUFPO1lBQUU2QixNQUFNO1NBQUU7a0JBQzFFdkIsUUFBUTs7Ozs7WUFDVSxDQUMxQjtDQUNKO0FBRUQsU0FBU3FCLEdBQUcsQ0FBQ0ssSUFBWSxFQUFFTCxHQUFRLEVBQUU7SUFDakMsTUFBTSxJQUFJTSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztDQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpQ2xpZW50JztcblxuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSwgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJzsgXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gICAgdXNlcjogVXNlclByb3BzO1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+IFByb21pc2U8dm9pZD47XG4gICAgc2lnbk91dDogKCkgPT4gdm9pZDtcbiAgICBzaWduVXA6IChjcmVkZW50aWFsczogU2lnblVwUHJvcHMpID0+IFByb21pc2U8dm9pZD47XG59XG5cbnR5cGUgVXNlclByb3BzID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG59XG5cbnR5cGUgU2lnbkluUHJvcHMgPSB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG50eXBlIFNpZ25VcFByb3BzID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCl7XG4gICAgdHJ5e1xuICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicpXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICB9Y2F0Y2h7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvIGFvIGRlc2xvZ2FyJylcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcyl7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzPigpXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICAvL3RlbnRhciBwZWdhciBhbGdvIG5vIGNvb2tpZSAodG9rZW4pXG4gICAgICAgIGNvbnN0IHsgJ0BuZXh0YXV0aC50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcblxuICAgICAgICBpZih0b2tlbil7XG4gICAgICAgICAgICBhcGkuZ2V0KCcvbWUnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCBlbWFpbCB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZSBkZXUgZXJybyBkZXNsb2dhciB1c3VhcmlvXG4gICAgICAgICAgICAgICAgc2lnbk91dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfSwgW10pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKHtlbWFpbCwgcGFzc3dvcmR9OiBTaWduSW5Qcm9wcyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zZXNzaW9uJywge1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lLCB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YVxuXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnQG5leHRhdXRoLnRva2VuJywgdG9rZW4se1xuICAgICAgICAgICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsIC8vZXhwaXJhIGVtIDEgbWVzXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvXCIgLy8gcXVhaXMgY2FtaW5ob3MgdGVyYW8gYWNlc3NvIGFvIGNvb2tpZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy9wYXNzYXIgcGFyYSBwcm94aW1hcyByZXF1aXNpY29lcyBvIHRva2VuXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcblxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkxvZ2FkbyBjb20gc3VjZXNzbyFcIilcblxuICAgICAgICAgICAgLy9yZWRpcmVjaW9uYXIgbyB1c2VyICAgcGFyYSAvZGFzaGJvcmRcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvcmQnKVxuXG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvIGFvIGFjZXNzYXIhXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJSTyBBTyBBQ0VTU0FSJywgZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnblVwKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25VcFByb3BzKXtcbiAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvdXNlcnMnLCB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkNvbnRhIGNyaWFkYSBjb20gc3VjZXNzbyFcIilcblxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcblxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBhbyBjYWRhc3RyYXIhXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm8gYW8gY2FkYXN0cmFyIHVzdWFyaW9cIiwgZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4sIHNpZ25PdXQsIHNpZ25VcCB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGVycihhcmcwOiBzdHJpbmcsIGVycjogYW55KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuJyk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsIlJvdXRlciIsInRvYXN0IiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImRhdGEiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJzdWNjZXNzIiwiZXJyIiwiZXJyb3IiLCJzaWduVXAiLCJQcm92aWRlciIsInZhbHVlIiwiYXJnMCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/devsource/Desktop/pizzaria/frontend/src/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                autoClose: 2000\n            }, void 0, false, {\n                fileName: \"/Users/devsource/Desktop/pizzaria/frontend/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devsource/Desktop/pizzaria/frontend/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBRW9CO0FBQ1A7QUFDQztBQUdoRCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0osK0RBQVk7OzBCQUNYLDhEQUFDRyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzBCQUM1Qiw4REFBQ0gsMERBQWM7Z0JBQUNJLFNBQVMsRUFBRSxJQUFJOzs7OztvQkFBSTs7Ozs7O1lBQ3RCLENBQ2hCO0NBQ0Y7QUFFRCxpRUFBZUgsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0J1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIGF1dG9DbG9zZT17MjAwMH0gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIlRvYXN0Q29udGFpbmVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupAPIClient\": () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./src/services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n        baseURL: \"http://localhost:3333\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@nextauth.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            //qualquer erro 401 (nao autorizado) deve deslogar o usuario\n            if (true) {\n                // chamar a funcao para deslogar o usuario\n                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDSDtBQUNpQjtBQUNOO0FBRTNDLFNBQVNJLGNBQWMsQ0FBQ0MsR0FBRyxHQUFHQyxTQUFTLEVBQUU7SUFDNUMsSUFBSUMsT0FBTyxHQUFHTixxREFBWSxDQUFDSSxHQUFHLENBQUM7SUFFL0IsTUFBTUcsR0FBRyxHQUFHUixtREFBWSxDQUFDO1FBQ3JCVSxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDQyxPQUFPLEVBQUM7WUFDSkMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFTCxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0osQ0FBQztJQUVGQyxHQUFHLENBQUNLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUNELENBQUFBLFFBQVEsR0FBSTtRQUN0QyxPQUFPQSxRQUFRLENBQUM7S0FDbkIsRUFBRSxDQUFDRSxLQUFpQixHQUFLO1FBQ3RCLElBQUdBLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLEtBQUssR0FBRyxFQUFDO1lBQzdCLDREQUE0RDtZQUM1RCxJQUFHLElBQTJCLEVBQUM7Z0JBQzNCLDBDQUEwQztnQkFDMUNkLDhEQUFPLEVBQUUsQ0FBQzthQUNiLE1BQUksRUFFSjtTQUNKO1FBRUQsT0FBT2UsT0FBTyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUFDO0tBRWhDLENBQUM7SUFFRixPQUFPUixHQUFHLENBQUM7Q0FFZCIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnOyBcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnOyBcbmltcG9ydCB7IEF1dGhUb2tlbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMvQXV0aFRva2VuRXJyb3InXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBUElDbGllbnQoY3R4ID0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcblxuICAgIGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnLFxuICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWydAbmV4dGF1dGgudG9rZW4nXX1gXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSwgKGVycm9yOiBBeGlvc0Vycm9yKSA9PiB7XG4gICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKXtcbiAgICAgICAgICAgIC8vcXVhbHF1ZXIgZXJybyA0MDEgKG5hbyBhdXRvcml6YWRvKSBkZXZlIGRlc2xvZ2FyIG8gdXN1YXJpb1xuICAgICAgICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAvLyBjaGFtYXIgYSBmdW5jYW8gcGFyYSBkZXNsb2dhciBvIHVzdWFyaW9cbiAgICAgICAgICAgICAgICBzaWduT3V0KCk7IFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoVG9rZW5FcnJvcigpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcblxuICAgIH0pXG5cbiAgICByZXR1cm4gYXBpO1xuXG59Il0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiQXV0aFRva2VuRXJyb3IiLCJzaWduT3V0Iiwic2V0dXBBUElDbGllbnQiLCJjdHgiLCJ1bmRlZmluZWQiLCJjb29raWVzIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQWMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emEvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzPzdkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBBUElDbGllbnQgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBzZXR1cEFQSUNsaWVudCgpOyJdLCJuYW1lcyI6WyJzZXR1cEFQSUNsaWVudCIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/apiClient.ts\n");

/***/ }),

/***/ "./src/services/errors/AuthTokenError.ts":
/*!***********************************************!*\
  !*** ./src/services/errors/AuthTokenError.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthTokenError\": () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"Error with authentication token.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxjQUFjLFNBQVNDLEtBQUs7SUFDckNDLGFBQWM7UUFDVixLQUFLLENBQUMsa0NBQWtDLENBQUM7S0FDNUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BpenphLy4vc3JjL3NlcnZpY2VzL2Vycm9ycy9BdXRoVG9rZW5FcnJvci50cz8yM2ViIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoVG9rZW5FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ0Vycm9yIHdpdGggYXV0aGVudGljYXRpb24gdG9rZW4uJylcbiAgICB9XG59Il0sIm5hbWVzIjpbIkF1dGhUb2tlbkVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/errors/AuthTokenError.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();