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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modules/Slider/Resources/assets/admin/js/Slide.js":
/*!***********************************************************!*\
  !*** ./Modules/Slider/Resources/assets/admin/js/Slide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default(data) {
    _classCallCheck(this, _default);

    this.slidePanelHtml = this.getSlidePanelHtml(data);
  }

  _createClass(_default, [{
    key: "getSlidePanelHtml",
    value: function getSlidePanelHtml(data) {
      data.slide.options = data.slide.options || this.getDefaultOptions();

      var template = _.template($('#slide-template').html());

      return $(template(data));
    }
  }, {
    key: "getDefaultOptions",
    value: function getDefaultOptions() {
      return {
        caption_1: {},
        caption_2: {},
        direction: 'left',
        call_to_action: {}
      };
    }
  }, {
    key: "render",
    value: function render() {
      this.attachEventListeners();
      this.showSelectedOptionBlock();
      return this.slidePanelHtml;
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;

      this.slidePanelHtml.find('.delete-slide').on('click', function () {
        _this.slidePanelHtml.remove();
      });
      this.slidePanelHtml.find('.change-option-block').on('change', function (e) {
        _this.slidePanelHtml.find('.slide-options').hide();

        _this.slidePanelHtml.find(".".concat(e.currentTarget.value)).show();
      });
    }
  }, {
    key: "showSelectedOptionBlock",
    value: function showSelectedOptionBlock() {
      var _this2 = this;

      setTimeout(function () {
        _this2.slidePanelHtml.find('.change-option-block').trigger('change');
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Slider/Resources/assets/admin/js/Slider.js":
/*!************************************************************!*\
  !*** ./Modules/Slider/Resources/assets/admin/js/Slider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide */ "./Modules/Slider/Resources/assets/admin/js/Slide.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    this.slideCount = 0;
    this.addSlides(GreensIntl.data['slider.slides']);

    if (this.slideCount === 0) {
      this.addSlide();
    }

    this.attachEventListeners();
    this.makeSlidesSortable();
  }

  _createClass(_default, [{
    key: "addSlides",
    value: function addSlides(slides) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var attributes = _step.value;
          this.addSlide(attributes);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "addSlide",
    value: function addSlide() {
      var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var slide = new _Slide__WEBPACK_IMPORTED_MODULE_0__["default"]({
        slideNumber: this.slideCount++,
        slide: attributes
      });
      $('#slides-wrapper').append(slide.render());
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this;

      $('.add-slide').on('click', function () {
        _this.addSlide();
      });
      this.attachImagePickerEventListener();
    }
  }, {
    key: "attachImagePickerEventListener",
    value: function attachImagePickerEventListener() {
      $('#slides-wrapper').on('click', '.slide-image', function (e) {
        var picker = new MediaPicker({
          type: 'image'
        });
        picker.on('select', function (file) {
          var html = "\n                    <img src=\"".concat(file.path, "\">\n                    <input type=\"hidden\" name=\"slides[").concat(e.currentTarget.dataset.slideNumber, "][file_id]\" value=\"").concat(file.id, "\">\n                ");
          $(e.currentTarget).html(html);
        });
      });
    }
  }, {
    key: "makeSlidesSortable",
    value: function makeSlidesSortable() {
      Sortable.create(document.getElementById('slides-wrapper'), {
        handle: '.slide-drag',
        animation: 150
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Slider/Resources/assets/admin/js/main.js":
/*!**********************************************************!*\
  !*** ./Modules/Slider/Resources/assets/admin/js/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./Modules/Slider/Resources/assets/admin/js/Slider.js");

new _Slider__WEBPACK_IMPORTED_MODULE_0__["default"]();
$('#autoplay').on('change', function (e) {
  $('.autoplay-speed-field').toggleClass('hide');
});
window.admin.removeSubmitButtonOffsetOn('#slides');

/***/ }),

/***/ 15:
/*!****************************************************************!*\
  !*** multi ./Modules/Slider/Resources/assets/admin/js/main.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Office_Files\www\github\greensecom\Modules\Slider\Resources\assets\admin\js\main.js */"./Modules/Slider/Resources/assets/admin/js/main.js");


/***/ })

/******/ });