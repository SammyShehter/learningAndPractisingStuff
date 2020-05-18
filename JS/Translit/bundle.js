/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: latSimple, kirSimple, latSpec, kirSpec, latSuperSpec, kirSuperSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"latSimple\", function() { return latSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kirSimple\", function() { return kirSimple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"latSpec\", function() { return latSpec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kirSpec\", function() { return kirSpec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"latSuperSpec\", function() { return latSuperSpec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kirSuperSpec\", function() { return kirSuperSpec; });\n\nconst latSimple = [\n  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't','u', 'v', 'w', 'x', 'y', 'z', \"'\",\n  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z', '\"'\n];\nconst kirSimple = [\n  'а', 'б', 'ц', 'д', 'е', 'ф', 'г', 'х', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'ъ','р', 'с', 'т','у', 'в', 'щ', 'х', 'ы', 'з', 'ь',\n  'А', 'Б', 'Ц', 'Д', 'Е', 'Ф', 'Г', 'Х', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Ъ','Р', 'С', 'Т','У', 'В', 'Щ', 'Х', 'Ы', 'З', 'Ь'\n];\nconst latSpec = [\n  'сh','ыo','зh','цh','ыe','йe','ыa','йa','ыu','йu','йo',\n  'Сh','Ыo','Зh','Цh','Ыe','Йe','Ыa','Йa','Ыu','Йu','Йo',\n  'СH','ЫO','ЗH','ЦH','ЫE','ЙE','ЫA','ЙA','ЫU','ЙU','ЙO'\n];\nconst kirSpec = [\n  'ш','ё','ж','ч','э','э','я','я','ю','ю','ё',\n  'Ш','Ё','Ж','Ч','Э','Э','Я','Я','Ю','Ю','Ё',\n  'Ш','Ё','Ж','Ч','Э','Э','Я','Я','Ю','Ю','Ё'\n];\nconst latSuperSpec = [\n  'с-h','ы-o','з-h','ц-h','ы-e','й-e','ы-a','й-a','ы-u','й-u','й-o',\n  'С-h','Ы-o','З-h','Ц-h','Ы-e','Й-e','Ы-a','Й-a','Ы-u','Й-u','Й-o',\n  'С-H','Ы-O','З-H','Ц-H','Ы-E','Й-E','Ы-A','Й-A','Ы-U','Й-U','Й-O',\n  'С_h','Ы_o','З_h','Ц_h','Ы_e','Й_e','Ы_a','Й_a','Ы_u','Й_u','Й_o',\n  'С_H','Ы_O','З_H','Ц_H','Ы_E','Й_E','Ы_A','Й_A','Ы_U','Й_U','Й_O'\n];\nconst kirSuperSpec = [\n  'сх','ыо','зх','цх','ые','йе','ыа','йа','ыу','йу','йо',\n  'Сх','Ыо','Зх','Цх','Ые','Йе','Ыа','Йа','Ыу','Йу','Йо',\n  'СХ','ЫО','ЗХ','ЦХ','ЫЕ','ЙЕ','ЫА','ЙА','ЫУ','ЙУ','ЙО',\n  'Сх','Ыо','Зх','Цх','Ые','Йе','Ыа','Йа','Ыу','Йу','Йо',\n  'СХ','ЫО','ЗХ','ЦХ','ЫЕ','ЙЕ','ЫА','ЙА','ЫУ','ЙУ','ЙО'\n];\n\n\n__webpack_require__(/*! ./letters.js */ \"./src/letters.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/letters.js":
/*!************************!*\
  !*** ./src/letters.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n  /* \n  Определившись с массивами, переходим к самому интересному.\n  Тут лишь важно отметить, что каждый ключ \"kir*\" и \"lat*\"\n  массивов взаимосвязан и ведет к ожидаемой транслитерируемой букве.\n  T.е. если latSimple[1] = \"b\", значит kirSimple[1] = \"б\" и т.д.\n  Этот порядок очень важно сохранять\n  */\n\n  const text = document.getElementById(\"translit\"); //Ловим Текстовое поле\n  text.addEventListener('input', (event) => {    // Начинаем его слушать\n\n    const key = event.data;   //Определяем нажатую букву\n    let specCaseUsed = false;   //Задаем значение \"ложь\" для случаев составных букв типа \"Ш\" или \"Ч\" \n    let superSpecCaseUsed = false;    //Задаем значение \"ложь\" для случаев обратных составным буквам типа \"СХ\" или \"ЦХ\" которые иначе привели бы к составным буквам \n\n    let specCase = text.value;\n    specCase = specCase.substring(specCase.length, specCase.length - 2);   //specCase получает значение последних двух букв из текстового поля\n\n    let superSpecCase = text.value;\n    superSpecCase = superSpecCase.substring(superSpecCase.length, superSpecCase.length - 3);   //superSpecCase получает значение последних трех букв из текстового поля\n\n   /*\n    Сейчас запустится цикл проверки и подставления необходимого значения,\n    иными словами - магия транслитерации.\n    Я подробно опишу первый цикл, остальные работают примерно также,\n    лишь с небольшими изминениями.\n   */\n\n    for(let i = 0; i < latSuperSpec.length; i++ ){   //Запускается цикл по массиву latSuperSpec. Он первый потому что важно проверить если пользователь хочет ввести НЕ составные буквы\n      if(superSpecCase === latSuperSpec[i]){    // Если последнии 3 символа введенные в текстовое поле соответсвуют строке из массива, то это наш случай. Начинаем обработку\n        let str = text.value;     //Копируем весь текст из текстового поля в переменную str. Это делается для избегания конфликтовв\n          str = str.substring(0, str.length - 3);     //Стираем последнии три символа из нашей строки\n          text.value = str;     //Присваеваем значение нашей строки к текстовому полю. Другими словами - в текстовом поле стерты последнии три символа\n          text.value += kirSuperSpec[i];    //Добавляем в текстовое поле нужную букву. Готово :)\n          superSpecCaseUsed = true;     //Отмечаем что необходимая буква найдена а значит последующие циклы будут сброшены.\n      }\n    }\n\n    //Но что если необходимая буква не найдена в предыдущем цикле?\n\n    if(!superSpecCaseUsed){     //Не проблема! Запускается цикл поиска по составным буквам по той же логике и т.д. до необходимой буквы.\n      for(let i = 0; i < latSpec.length; i++){\n        if(specCase === latSpec[i]){\n          let str = text.value;\n          str = str.substring(0, str.length - 2);\n          text.value = str;\n          text.value += kirSpec[i];\n          specCaseUsed = true;\n        }\n      }\n    }\n\n    if(!specCaseUsed && !superSpecCaseUsed){\n      for (let j = 0; j < latSimple.length; j++) {\n        if (key === latSimple[j]) {\n          // event.preventDefault();\n          let str = text.value;\n          str = str.substring(0, str.length - 1);\n          text.value = str;\n          text.value += kirSimple[j];\n        }\n      }\n    }\n\n  });\n\n\n//# sourceURL=webpack:///./src/letters.js?");

/***/ })

/******/ });