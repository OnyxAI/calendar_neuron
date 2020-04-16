(window["webpackJsonpcalendar"] = window["webpackJsonpcalendar"] || []).push([[596],{

/***/ 62596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * i18n.js
 */
var enTranslationMessages = __webpack_require__(32036);

var frTranslationMessages = __webpack_require__(64344);

var DEFAULT_LOCALE = 'en'; // prettier-ignore

var appLocales = ['en', 'fr'];

var formatTranslationMessages = function formatTranslationMessages(locale, messages) {
  var defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};

  var flattenFormattedMessages = function flattenFormattedMessages(formattedMessages, key) {
    var formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, _defineProperty({}, key, formattedMessage));
  };

  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

var translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages)
};
exports.appLocales = appLocales;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

/***/ }),

/***/ 32036:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"app.containers.Calendar.add_event\":\"Add Event\",\"app.containers.Calendar.delete\":\"Delete\",\"app.containers.Calendar.end\":\"End\",\"app.containers.Calendar.header\":\"Calendar\",\"app.containers.Calendar.note\":\"Note\",\"app.containers.Calendar.place\":\"Place\",\"app.containers.Calendar.send\":\"Send\",\"app.containers.Calendar.start\":\"Start\",\"app.containers.Calendar.title\":\"Title\",\"app.containers.Calendar.update_event\":\"Update Event\"}");

/***/ }),

/***/ 64344:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"app.containers.Calendar.add_event\":\"AJouter un évenement\",\"app.containers.Calendar.delete\":\"Supprimer\",\"app.containers.Calendar.end\":\"Fin\",\"app.containers.Calendar.header\":\"Calendrier\",\"app.containers.Calendar.note\":\"Note\",\"app.containers.Calendar.place\":\"Lieu\",\"app.containers.Calendar.send\":\"Envoyer\",\"app.containers.Calendar.start\":\"Début\",\"app.containers.Calendar.title\":\"Titre\",\"app.containers.Calendar.update_event\":\"Modifier un évenement\"}");

/***/ })

}]);