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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/fetchInitialization.js":
/*!***********************************!*\
  !*** ./js/fetchInitialization.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchInitialization; });\n/* harmony import */ var _getFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFetch */ \"./js/getFetch.js\");\n/* harmony import */ var _getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentCountOfVideo */ \"./js/getCurrentCountOfVideo.js\");\n\n\n\nfunction fetchInitialization() {\n  const nextPageToken = '';\n  Object(_getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nextPageToken);\n}\n\n\n//# sourceURL=webpack:///./js/fetchInitialization.js?");

/***/ }),

/***/ "./js/getCurrentCountOfVideo.js":
/*!**************************************!*\
  !*** ./js/getCurrentCountOfVideo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCurrentVideoCount; });\nconst BIG_SCREEN_MIN_WIDTH = 1200;\nconst MEDIUM_SCREEN_MIN_WIDTH = 720;\nconst SMALL_SCREEN_MAX_WIDTH = 560;\n\nfunction getCurrentVideoCount() {\n  if (window.screen.availWidth <= SMALL_SCREEN_MAX_WIDTH) { return 1; }\n  if (window.screen.availWidth > SMALL_SCREEN_MAX_WIDTH) {\n    if (window.screen.availWidth >= MEDIUM_SCREEN_MIN_WIDTH) {\n      if (window.screen.availWidth >= BIG_SCREEN_MIN_WIDTH) { return 4; }\n      return 3;\n    }\n    return 2;\n  }\n  return 4;\n}\n\n\n//# sourceURL=webpack:///./js/getCurrentCountOfVideo.js?");

/***/ }),

/***/ "./js/getFetch.js":
/*!************************!*\
  !*** ./js/getFetch.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sendRequest; });\n/* harmony import */ var _outputVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outputVideo */ \"./js/outputVideo.js\");\n/* eslint-disable max-len */\n\n\nfunction sendRequest(pageToken) {\n  event.preventDefault();\n  document.querySelector('.content-slider').innerHTML = '';\n\n  const inputQuery = document.getElementById('searchKey').value;\n  if (inputQuery.replace(/\\s/g, '') !== '') {\n    const apiKey = 'AIzaSyBQfk5quGb0LjS5XGTK5XU9dliPF33IjiM';\n    let fetchRequest;\n    if (pageToken !== '') {\n      fetchRequest = `https://www.googleapis.com/youtube/v3/search?pageToken=${pageToken}&type=video&part=snippet&maxResults=15&order=relevance&key=${apiKey}&q=${inputQuery}`;\n    } else {\n      sendRequest.videoDescriptionArray = [];\n      sendRequest.videoInfoArray = [];\n      sendRequest.indexOfLeftVideo = 0;\n      fetchRequest = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&order=relevance&key=${apiKey}&q=${inputQuery}`;\n    }\n\n    fetch(fetchRequest)\n      .then((response) => {\n        if (response.status !== 200) {\n          console.log(`Sorry, there was a problem. Status: ${\n            response.status}`);\n          return 0;\n        }\n        return response.text();\n      })\n      .then(text => (text.length ? JSON.parse(text) : {}))\n      .then((data) => {\n        sendRequest.pageToken = data.nextPageToken;\n        let idVideo = '';\n        data.items.forEach((item) => {\n          sendRequest.videoDescriptionArray.push(item);\n          idVideo += `${item.id.videoId},`;\n        });\n        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idVideo}&key=${apiKey}`)\n          .then((response) => {\n            if (response.status !== 200) {\n              console.log(`Sorry, there was a problem. Status: ${\n                response.status}`);\n              return 0;\n            }\n            return response.text();\n          })\n          .then(text => (text.length ? JSON.parse(text) : {}))\n          .then((secondData) => {\n            secondData.items.forEach((item) => {\n              sendRequest.videoInfoArray.push(item);\n            });\n            Object(_outputVideo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sendRequest.videoDescriptionArray, sendRequest.videoInfoArray, sendRequest.indexOfLeftVideo);\n          });\n      })\n      .catch(error => console.log(error));\n  }\n}\n\n\n//# sourceURL=webpack:///./js/getFetch.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _insertSearchForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertSearchForm */ \"./js/insertSearchForm.js\");\n/* harmony import */ var _insertVideoSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertVideoSection */ \"./js/insertVideoSection.js\");\n/* harmony import */ var _insertNavigationDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertNavigationDots */ \"./js/insertNavigationDots.js\");\n/* harmony import */ var _onResizeWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onResizeWindow */ \"./js/onResizeWindow.js\");\n// import '../style/css.css';\n// import '../style/reset.css';\n\n\n\n\n\nObject(_insertSearchForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_insertVideoSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_insertNavigationDots__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nwindow.onresize = () => Object(_onResizeWindow__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/insertClip.js":
/*!**************************!*\
  !*** ./js/insertClip.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insertVideo; });\nfunction insertVideo(generalInfo, countOfView) {\n  const videoSection = document.querySelector('.content-slider');\n\n  const videoBox = document.createElement('div');\n  videoBox.className = 'container';\n\n  const innerContainer = document.createElement('div');\n  innerContainer.className = 'inner-container';\n  videoBox.appendChild(innerContainer);\n\n  const image = document.createElement('div');\n  image.className = 'image-container';\n  const videoUrl = generalInfo.snippet.thumbnails.medium.url;\n  image.style.backgroundImage = `url(${videoUrl})`;\n  innerContainer.appendChild(image);\n\n  const linkVideo = document.createElement('a');\n  linkVideo.className = 'link-text';\n  linkVideo.href = `https://www.youtube.com/watch?v=${generalInfo.id.videoId}`;\n  linkVideo.target = '_blank';\n  image.appendChild(linkVideo);\n\n  const nameVideo = document.createElement('span');\n  nameVideo.className = 'name-video';\n  nameVideo.textContent = generalInfo.snippet.title;\n  linkVideo.appendChild(nameVideo);\n\n  const infoContainer = document.createElement('div');\n  infoContainer.className = 'info';\n  innerContainer.appendChild(infoContainer);\n\n  const infoList = document.createElement('ul');\n  infoList.className = 'info-list';\n  infoContainer.appendChild(infoList);\n\n  const firstElementList = document.createElement('li');\n  firstElementList.className = 'element-list';\n  infoList.appendChild(firstElementList);\n\n  const secondElementList = document.createElement('li');\n  secondElementList.className = 'element-list';\n  infoList.appendChild(secondElementList);\n\n  const thirdElementList = document.createElement('li');\n  thirdElementList.className = 'element-list';\n  infoList.appendChild(thirdElementList);\n\n  const spanIconAuthor = document.createElement('span');\n  spanIconAuthor.className = 'icon';\n  firstElementList.appendChild(spanIconAuthor);\n\n  const iconAuthor = document.createElement('i');\n  iconAuthor.className = 'fa fa-user';\n  spanIconAuthor.appendChild(iconAuthor);\n\n  const nameAuthor = document.createElement('span');\n  nameAuthor.className = 'element';\n  nameAuthor.textContent = generalInfo.snippet.channelTitle;\n  firstElementList.appendChild(nameAuthor);\n\n  const spanIconDate = document.createElement('span');\n  spanIconDate.className = 'icon';\n  secondElementList.appendChild(spanIconDate);\n\n  const iconDate = document.createElement('i');\n  iconDate.className = 'fa fa-calendar';\n  spanIconDate.appendChild(iconDate);\n\n  const date = document.createElement('span');\n  date.className = 'element';\n  date.textContent = generalInfo.snippet.publishedAt.substr(0, 10);\n  secondElementList.appendChild(date);\n\n  const spanIconView = document.createElement('span');\n  spanIconView.className = 'icon';\n  thirdElementList.appendChild(spanIconView);\n\n  const iconView = document.createElement('i');\n  iconView.className = 'fa fa-eye';\n  spanIconView.appendChild(iconView);\n\n  const view = document.createElement('span');\n  view.className = 'element';\n  view.textContent = countOfView.statistics.viewCount;\n  thirdElementList.appendChild(view);\n\n  const descriptionVideo = document.createElement('p');\n  descriptionVideo.className = 'cope-text';\n  descriptionVideo.textContent = generalInfo.snippet.description;\n  innerContainer.appendChild(descriptionVideo);\n\n  videoSection.appendChild(videoBox);\n}\n\n\n//# sourceURL=webpack:///./js/insertClip.js?");

/***/ }),

/***/ "./js/insertNavigationDots.js":
/*!************************************!*\
  !*** ./js/insertNavigationDots.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insertDots; });\n/* harmony import */ var _showNextPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNextPage */ \"./js/showNextPage.js\");\n/* harmony import */ var _navigationHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigationHandler */ \"./js/navigationHandler.js\");\n\n\n\nfunction insertDots() {\n  const mainInnerContainer = document.querySelector('.main-inner-container');\n  const buttons = document.createElement('section');\n  buttons.className = 'buttons-section';\n  buttons.innerHTML = '<div class=\"button\"><span></span></div>\\n'\n        + '            <div class=\"button\"><span></span></div>\\n'\n        + '            <div class=\"button\"><span></span></div>';\n\n  mainInnerContainer.appendChild(buttons);\n  const dots = document.querySelectorAll('.button');\n  dots[2].onclick = () => Object(_showNextPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  dots[0].onclick = () => Object(_navigationHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack:///./js/insertNavigationDots.js?");

/***/ }),

/***/ "./js/insertSearchForm.js":
/*!********************************!*\
  !*** ./js/insertSearchForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insertSearchForm; });\n/* harmony import */ var _fetchInitialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchInitialization */ \"./js/fetchInitialization.js\");\n\n\nfunction insertSearchForm() {\n  const wrapper = document.createElement('div');\n  const mainInnerContainer = document.createElement('div');\n  mainInnerContainer.className = 'main-inner-container';\n  wrapper.className = 'wrapper';\n  wrapper.appendChild(mainInnerContainer);\n  mainInnerContainer.innerHTML = '<section class=\"search-field\">'\n        + '    <form class=\"search\" autocomplete=\"off\" name=\"search\" method=\"post\">'\n        + '      <input class=\"input\" type=\"search\" id=\"searchKey\" name=\"searchKey\" placeholder=\"Search\" />'\n        + '      <button class=\"submit\" type=\"submit\" name=\"\" value=\"\">'\n        + '      </button>'\n        + '    </form>'\n        + '</section>';\n  const wrapperSection = document.querySelector('body');\n  wrapperSection.appendChild(wrapper);\n  document.querySelector('.search').onsubmit = () => Object(_fetchInitialization__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack:///./js/insertSearchForm.js?");

/***/ }),

/***/ "./js/insertVideoSection.js":
/*!**********************************!*\
  !*** ./js/insertVideoSection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insertVideoSection; });\n/* harmony import */ var _swipeHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swipeHandler */ \"./js/swipeHandler.js\");\n\n\nfunction insertVideoSection() {\n  const mainInnerContainer = document.querySelector('.main-inner-container');\n  const videoSection = document.createElement('section');\n  videoSection.className = 'video-section';\n  videoSection.id = 'videoSection';\n  mainInnerContainer.appendChild(videoSection);\n  const slider = document.createElement('div');\n  slider.classList.add('content-slider', '-animated');\n  slider.style.left = '0';\n\n  videoSection.appendChild(slider);\n  videoSection.addEventListener('mousedown', _swipeHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"], false);\n  videoSection.addEventListener('touchstart', _swipeHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"], false);\n}\n\n\n//# sourceURL=webpack:///./js/insertVideoSection.js?");

/***/ }),

/***/ "./js/navigationHandler.js":
/*!*********************************!*\
  !*** ./js/navigationHandler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showPrevPage; });\n/* harmony import */ var _getFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFetch */ \"./js/getFetch.js\");\n/* harmony import */ var _outputVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outputVideo */ \"./js/outputVideo.js\");\n/* harmony import */ var _getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCurrentCountOfVideo */ \"./js/getCurrentCountOfVideo.js\");\n\n\n\n\nfunction showPrevPage() {\n  const countOfVideo = Object(_getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo -= countOfVideo;\n  if (_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo >= 0) {\n    const arrOfElement = document.querySelectorAll('.container');\n    for (let i = 0; i < countOfVideo; i += 1) {\n      arrOfElement[i].remove();\n    }\n\n    Object(_outputVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  } else {\n    _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo = 0;\n    const arrOfElement = document.querySelectorAll('.container');\n    for (let i = 0; i < countOfVideo; i += 1) {\n      arrOfElement[i].remove();\n    }\n    Object(_outputVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n}\n\n\n//# sourceURL=webpack:///./js/navigationHandler.js?");

/***/ }),

/***/ "./js/onResizeWindow.js":
/*!******************************!*\
  !*** ./js/onResizeWindow.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onResizeWindow; });\n/* harmony import */ var _getFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFetch */ \"./js/getFetch.js\");\n/* harmony import */ var _insertClip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertClip */ \"./js/insertClip.js\");\n/* harmony import */ var _outputNumberOfPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outputNumberOfPage */ \"./js/outputNumberOfPage.js\");\n/* harmony import */ var _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchInitialization */ \"./js/fetchInitialization.js\");\n\n\n\n\n\nconst BIG_SCREEN_MIN_WIDTH = 1200;\nconst MEDIUM_SCREEN_MIN_WIDTH = 720;\nconst SMALL_SCREEN_MAX_WIDTH = 560;\n\nfunction onResizeWindow() {\n  //   let videoCount =  getCurrentVideoCount();\n  if (window.screen.availWidth < BIG_SCREEN_MIN_WIDTH && _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount === 4) {\n    document.querySelectorAll('.container')[3].remove();\n    console.log(_fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount);\n    _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount = 3;\n  }\n\n  if (window.screen.availWidth < MEDIUM_SCREEN_MIN_WIDTH && _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount === 3) {\n    document.querySelectorAll('.container')[2].remove();\n    _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount = 2;\n    console.log(_fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount);\n  }\n\n  if (window.screen.availWidth < SMALL_SCREEN_MAX_WIDTH && _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount === 2) {\n    document.querySelectorAll('.container')[1].remove();\n    _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount = 1;\n    console.log(_fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount);\n  }\n\n  if (window.screen.availWidth >= SMALL_SCREEN_MAX_WIDTH && _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount === 1) {\n    Object(_insertClip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoDescriptionArray[_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo + 1],\n      _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoInfoArray[_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo + 1]);\n    _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount = 2;\n    console.log(_fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount);\n  }\n\n  if (window.screen.availWidth >= MEDIUM_SCREEN_MIN_WIDTH && _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount === 2) {\n    Object(_insertClip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoDescriptionArray[_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo + 2],\n      _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoInfoArray[_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo + 2]);\n    _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount = 3;\n    console.log(_fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount);\n  }\n\n  if (window.screen.availWidth >= BIG_SCREEN_MIN_WIDTH && _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount === 3) {\n    Object(_insertClip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoDescriptionArray[_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo + 3],\n      _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoInfoArray[_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo + 3]);\n    _fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount = 4;\n    console.log(_fetchInitialization__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoCount);\n  }\n\n  Object(_outputNumberOfPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack:///./js/onResizeWindow.js?");

/***/ }),

/***/ "./js/outputNumberOfPage.js":
/*!**********************************!*\
  !*** ./js/outputNumberOfPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outputNumberOfPage; });\n/* harmony import */ var _getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentCountOfVideo */ \"./js/getCurrentCountOfVideo.js\");\n/* harmony import */ var _getFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFetch */ \"./js/getFetch.js\");\n\n\n\nfunction outputNumberOfPage() {\n  const dots = document.querySelectorAll('.button');\n  const videoCount = Object(_getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const num = Math.ceil(_getFetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"].indexOfLeftVideo / videoCount);\n  if (_getFetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"].indexOfLeftVideo !== 0) {\n    if (_getFetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"].indexOfLeftVideo >= _getFetch__WEBPACK_IMPORTED_MODULE_1__[\"default\"].videoInfoArray.length - videoCount) {\n      dots[0].innerHTML = '';\n      dots[1].innerHTML = '';\n      dots[2].innerHTML = num + 1;\n    } else {\n      dots[0].innerHTML = '';\n      dots[1].innerHTML = num + 1;\n      dots[2].innerHTML = '';\n    }\n  } else {\n    dots[0].innerText = num + 1;\n    dots[1].innerHTML = '';\n    dots[2].innerHTML = '';\n  }\n}\n\n\n//# sourceURL=webpack:///./js/outputNumberOfPage.js?");

/***/ }),

/***/ "./js/outputVideo.js":
/*!***************************!*\
  !*** ./js/outputVideo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outputVideo; });\n/* harmony import */ var _insertClip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertClip */ \"./js/insertClip.js\");\n/* harmony import */ var _getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentCountOfVideo */ \"./js/getCurrentCountOfVideo.js\");\n/* harmony import */ var _outputNumberOfPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outputNumberOfPage */ \"./js/outputNumberOfPage.js\");\n/* harmony import */ var _getFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getFetch */ \"./js/getFetch.js\");\n/* harmony import */ var _fetchInitialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchInitialization */ \"./js/fetchInitialization.js\");\n\n\n\n\n\n\nfunction outputVideo() {\n  _fetchInitialization__WEBPACK_IMPORTED_MODULE_4__[\"default\"].videoCount = Object(_getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  for (let i = 0; i < _fetchInitialization__WEBPACK_IMPORTED_MODULE_4__[\"default\"].videoCount; i += 1) {\n    Object(_insertClip__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_getFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoDescriptionArray[_getFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"].indexOfLeftVideo + i],\n      _getFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"].videoInfoArray[_getFetch__WEBPACK_IMPORTED_MODULE_3__[\"default\"].indexOfLeftVideo + i]);\n  }\n  Object(_outputNumberOfPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack:///./js/outputVideo.js?");

/***/ }),

/***/ "./js/showNextPage.js":
/*!****************************!*\
  !*** ./js/showNextPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showNextPage; });\n/* harmony import */ var _getFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFetch */ \"./js/getFetch.js\");\n/* harmony import */ var _outputVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outputVideo */ \"./js/outputVideo.js\");\n/* harmony import */ var _getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCurrentCountOfVideo */ \"./js/getCurrentCountOfVideo.js\");\n\n\n\n\nfunction showNextPage() {\n  const countOfVideo = Object(_getCurrentCountOfVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const arrOfElement = document.querySelectorAll('.container');\n  for (let i = 0; i < countOfVideo; i += 1) {\n    arrOfElement[i].remove();\n  }\n  _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo += countOfVideo;\n  if (_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].videoDescriptionArray.length - _getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOfLeftVideo <= 2 * countOfVideo) {\n    Object(_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_getFetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pageToken);\n  } else { Object(_outputVideo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); }\n}\n\n\n//# sourceURL=webpack:///./js/showNextPage.js?");

/***/ }),

/***/ "./js/swipeHandler.js":
/*!****************************!*\
  !*** ./js/swipeHandler.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return swipeStart; });\n/* harmony import */ var _showNextPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNextPage */ \"./js/showNextPage.js\");\n/* harmony import */ var _navigationHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigationHandler */ \"./js/navigationHandler.js\");\n\n\n\nfunction handleSwipeMove(e) {\n  const slider = document.querySelector('.content-slider');\n  const clientX = e.clientX || e.changedTouches[0].clientX;\n  let left = handleSwipeMove.left + (clientX - handleSwipeMove.startX);\n\n  if (left > 200) left = 200;\n  slider.style.left = `${left}px`;\n}\n\nfunction handleSwipeEnd(e) {\n  const slider = document.querySelector('.content-slider');\n  const width = document.querySelector('.video-section').clientWidth;\n  const left = parseInt(slider.style.left, 10);\n  const endX = e.clientX || e.changedTouches[0].clientX;\n\n  slider.classList.add('-animated');\n  document.removeEventListener('mousemove', handleSwipeEnd.func, false);\n  document.removeEventListener('mouseup', handleSwipeEnd, false);\n  document.removeEventListener('touchmove', handleSwipeEnd.func, false);\n  document.removeEventListener('touchend', handleSwipeEnd, false);\n\n  if (left > 0) slider.style.left = '0px';\n\n  if (endX - handleSwipeEnd.startX < 0) {\n    slider.style.left = `-${(Math.floor(Math.abs(left) / width) + 1) * width}px`;\n    Object(_showNextPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    slider.style.left = '0px';\n  } else if (endX - handleSwipeEnd.startX > 0) {\n    slider.style.left = `-${(Math.floor(Math.abs(left) / width)) * width}px`;\n\n    Object(_navigationHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    slider.style.left = '0px';\n  }\n}\n\nfunction swipeStart(e) {\n  if (e.button === 0 || e.type === 'touchstart') {\n    const slider = document.querySelector('.content-slider');\n    const left = parseInt(slider.style.left, 10);\n\n    slider.classList.remove('-animated');\n    handleSwipeMove.startX = e.clientX || e.changedTouches[0].clientX;\n    handleSwipeMove.left = left;\n    handleSwipeEnd.func = handleSwipeMove;\n    handleSwipeEnd.startX = e.clientX || e.changedTouches[0].clientX;\n\n    document.addEventListener('mousemove', handleSwipeMove, false);\n    document.addEventListener('mouseup', handleSwipeEnd, false);\n    document.addEventListener('touchmove', handleSwipeMove, false);\n    document.addEventListener('touchend', handleSwipeEnd, false);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/swipeHandler.js?");

/***/ })

/******/ });