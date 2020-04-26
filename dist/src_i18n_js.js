/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonpcalendar"] = window["webpackJsonpcalendar"] || []).push([["src_i18n_js"],{

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! default exports */
/*! export DEFAULT_LOCALE [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export appLocales [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used (runtime-defined)] [no name, virtual] */
/*!   ... (4 already listed exports) */
/*! export translationMessages [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * i18n.js\n */\nvar enTranslationMessages = __webpack_require__(/*! ./translations/en.json */ \"./src/translations/en.json\");\n\nvar frTranslationMessages = __webpack_require__(/*! ./translations/fr.json */ \"./src/translations/fr.json\");\n\nvar DEFAULT_LOCALE = 'en'; // prettier-ignore\n\nvar appLocales = ['en', 'fr'];\n\nvar formatTranslationMessages = function formatTranslationMessages(locale, messages) {\n  var defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};\n\n  var flattenFormattedMessages = function flattenFormattedMessages(formattedMessages, key) {\n    var formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];\n    return Object.assign(formattedMessages, _defineProperty({}, key, formattedMessage));\n  };\n\n  return Object.keys(messages).reduce(flattenFormattedMessages, {});\n};\n\nvar translationMessages = {\n  en: formatTranslationMessages('en', enTranslationMessages),\n  fr: formatTranslationMessages('fr', frTranslationMessages)\n};\nexports.appLocales = appLocales;\nexports.translationMessages = translationMessages;\nexports.DEFAULT_LOCALE = DEFAULT_LOCALE;\n\n//# sourceURL=webpack://calendar/./src/i18n.js?");

/***/ }),

/***/ "./src/translations/en.json":
/*!**********************************!*\
  !*** ./src/translations/en.json ***!
  \**********************************/
/*! default exports */
/*! export app.containers.Calendar.add_event [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.delete [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.end [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.header [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.note [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.nothing_today [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.place [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.send [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.start [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.title [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.update_event [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used (runtime-defined)] [no name, virtual] */
/*!   ... (12 already listed exports) */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"app.containers.Calendar.add_event\\\":\\\"Add Event\\\",\\\"app.containers.Calendar.delete\\\":\\\"Delete\\\",\\\"app.containers.Calendar.end\\\":\\\"End\\\",\\\"app.containers.Calendar.header\\\":\\\"Calendar\\\",\\\"app.containers.Calendar.note\\\":\\\"Note\\\",\\\"app.containers.Calendar.nothing_today\\\":\\\"Nothing Today\\\",\\\"app.containers.Calendar.place\\\":\\\"Place\\\",\\\"app.containers.Calendar.send\\\":\\\"Send\\\",\\\"app.containers.Calendar.start\\\":\\\"Start\\\",\\\"app.containers.Calendar.title\\\":\\\"Title\\\",\\\"app.containers.Calendar.update_event\\\":\\\"Update Event\\\"}\");\n\n//# sourceURL=webpack://calendar/./src/translations/en.json?");

/***/ }),

/***/ "./src/translations/fr.json":
/*!**********************************!*\
  !*** ./src/translations/fr.json ***!
  \**********************************/
/*! default exports */
/*! export app.containers.Calendar.add_event [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.delete [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.end [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.header [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.note [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.nothing_today [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.place [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.send [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.start [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.title [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export app.containers.Calendar.update_event [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export default [provided] [maybe used (runtime-defined)] [no name, virtual] */
/*!   ... (12 already listed exports) */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"app.containers.Calendar.add_event\\\":\\\"Ajouter un évenement\\\",\\\"app.containers.Calendar.delete\\\":\\\"Supprimer\\\",\\\"app.containers.Calendar.end\\\":\\\"Fin\\\",\\\"app.containers.Calendar.header\\\":\\\"Calendrier\\\",\\\"app.containers.Calendar.note\\\":\\\"Note\\\",\\\"app.containers.Calendar.nothing_today\\\":\\\"Rien Aujourd'hui\\\",\\\"app.containers.Calendar.place\\\":\\\"Lieu\\\",\\\"app.containers.Calendar.send\\\":\\\"Envoyer\\\",\\\"app.containers.Calendar.start\\\":\\\"Début\\\",\\\"app.containers.Calendar.title\\\":\\\"Titre\\\",\\\"app.containers.Calendar.update_event\\\":\\\"Modifier un évenement\\\"}\");\n\n//# sourceURL=webpack://calendar/./src/translations/fr.json?");

/***/ })

}]);