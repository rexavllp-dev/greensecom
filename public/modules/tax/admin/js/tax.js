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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modules/Tax/Resources/assets/admin/js/TaxRate.js":
/*!**********************************************************!*\
  !*** ./Modules/Tax/Resources/assets/admin/js/TaxRate.js ***!
  \**********************************************************/
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
  function _default(rateId) {
    var rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _default);

    this.rateId = rateId;
    this.rate = rate;
  }

  _createClass(_default, [{
    key: "html",
    value: function html() {
      this.html = this.template({
        rateId: this.rateId,
        rate: this.rate
      });
      this.eventListeners();
      return this.html;
    }
  }, {
    key: "updateState",
    value: function updateState() {
      this.html.find('.country select').trigger('change');
    }
  }, {
    key: "template",
    value: function template(data) {
      var template = _.template($('#tax-rate-template').html());

      return $(template(data));
    }
  }, {
    key: "eventListeners",
    value: function eventListeners(html) {
      var _this = this;

      this.html.find('.country select').on('change', function (e) {
        if (e.currentTarget.value) {
          _this.changeState(e.currentTarget.value);
        }
      });
      this.html.on('click', '.delete-row', this["delete"]);
    }
  }, {
    key: "changeState",
    value: function changeState(countryCode) {
      var _this2 = this;

      this.getStateField().prop('disabled', true);
      var oldState = this.getStateField().val();
      $.getJSON(route('countries.states.index', countryCode), function (states) {
        _this2.getStateField().replaceWith(_this2.getStateTemplate(states)).prop('disabled', false);

        if (oldState) {
          _this2.getStateField().val(oldState);
        }
      });
    }
  }, {
    key: "getStateField",
    value: function getStateField() {
      var id = $.escapeSelector("rates.".concat(this.rateId, ".state"));
      return $("#".concat(id));
    }
  }, {
    key: "getStateTemplate",
    value: function getStateTemplate(states) {
      if ($.isEmptyObject(states)) {
        return this.getInputStateTemplate();
      }

      return this.getSelectStateTemplate(states);
    }
  }, {
    key: "getInputStateTemplate",
    value: function getInputStateTemplate() {
      var template = _.template($('#state-input-template').html());

      return template({
        rateId: this.rateId
      });
    }
  }, {
    key: "getSelectStateTemplate",
    value: function getSelectStateTemplate(states) {
      var template = _.template($('#state-select-template').html());

      return template({
        rateId: this.rateId,
        states: states
      });
    }
  }, {
    key: "delete",
    value: function _delete(e) {
      $(e.currentTarget).closest('.tax-rate').remove();
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Tax/Resources/assets/admin/js/TaxRates.js":
/*!***********************************************************!*\
  !*** ./Modules/Tax/Resources/assets/admin/js/TaxRates.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _TaxRate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxRate */ "./Modules/Tax/Resources/assets/admin/js/TaxRate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    this.rateCount = 0;
    this.addTaxRates(GreensIntl.data['tax_rates']);

    if (this.rateCount === 0) {
      this.addTaxRate();
    }

    this.addTaxRatesErrors(GreensIntl.errors['tax_rates']);
    this.eventListeners();
    this.sortable();
  }

  _createClass(_default, [{
    key: "addTaxRates",
    value: function addTaxRates(rates) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var rate = _step.value;
          this.addTaxRate(rate);
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
    key: "addTaxRate",
    value: function addTaxRate() {
      var rate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var textRate = new _TaxRate__WEBPACK_IMPORTED_MODULE_0__["default"](this.rateCount++, rate);
      $('#tax-rates').append(textRate.html());
      textRate.updateState();
      window.admin.tooltip();
    }
  }, {
    key: "addTaxRatesErrors",
    value: function addTaxRatesErrors(errors) {
      for (var key in errors) {
        var id = $.escapeSelector(key);
        var parent = $("#".concat(id)).parent();
        parent.addClass('has-error');
        parent.append("<span class=\"help-block\">".concat(errors[key][0], "</span>"));
      }
    }
  }, {
    key: "eventListeners",
    value: function eventListeners() {
      var _this = this;

      $('#add-new-rate').on('click', function () {
        return _this.addTaxRate();
      });
    }
  }, {
    key: "sortable",
    value: function sortable() {
      Sortable.create(document.getElementById('tax-rates'), {
        handle: '.drag-icon',
        animation: 150
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Tax/Resources/assets/admin/js/main.js":
/*!*******************************************************!*\
  !*** ./Modules/Tax/Resources/assets/admin/js/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxRates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxRates */ "./Modules/Tax/Resources/assets/admin/js/TaxRates.js");

window.admin.removeSubmitButtonOffsetOn('#rates');
new _TaxRates__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ 16:
/*!*************************************************************!*\
  !*** multi ./Modules/Tax/Resources/assets/admin/js/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Office_Files\www\github\greensecom\Modules\Tax\Resources\assets\admin\js\main.js */"./Modules/Tax/Resources/assets/admin/js/main.js");


/***/ })

/******/ });