/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.querySelector('#add').onclick = function () {\r\n  if(document.querySelector('#task input').value.length == 0){\r\n    alert(\"Enter Task\");\r\n  }\r\n  else{\r\n      document.querySelector('#list').innerHTML += `\r\n            <div class=\"tak\">\r\n            <input type=\"checkbox\" id=\"chkBox\"/>\r\n                <span id=\"taskname\">\r\n                    ${document.querySelector('#task input').value}\r\n                </span>\r\n                <button class=\"edit\">Edit</button>\r\n                <button class=\"delete\">\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                </button><hr><br>\r\n            </div>\r\n        `;\r\n        const current_tasks = document.querySelectorAll(\".delete\");\r\n        for(let i=0; i<current_tasks.length; i++){\r\n            current_tasks[i].onclick = function(){\r\n                this.parentNode.remove();\r\n            }\r\n        }\r\n\r\n        let tasks = document.querySelectorAll(\".tak\");\r\n        for(let i=0; i<list.length; i++){\r\n            list[i].onclick = () => {\r\n                this.list.toggle('completed');\r\n            }\r\n        }\r\n\r\n        document.querySelector(\"#task input\").value = \"\";\r\n    }\r\n  }\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);