/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodoist"] = self["webpackChunktodoist"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todos = [\r\n  {\r\n    index: 0,\r\n    completed: false,\r\n    description: 'Watch Movie',\r\n  },\r\n  {\r\n    index: 1,\r\n    completed: true,\r\n    description: 'Read a Book',\r\n  },\r\n];\r\n\r\nconst addList = () => {\r\n  const tcontainer = document.querySelector('#list');\r\n  todos.forEach((list) => {\r\n    tcontainer.innerHTML += `\r\n    <div class=\"tak\">\r\n      <input type=\"checkbox\" id=\"chkBox\"/>\r\n      <span id=\"taskname\">\r\n        ${list.description}\r\n      </span>\r\n      <button class=\"delete\">\r\n        <i class=\"far fa-trash-alt\"></i>\r\n      </button><hr><br>\r\n    </div>\r\n`;\r\n  });\r\n};\r\naddList();\r\n\n\n//# sourceURL=webpack://todoist/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);