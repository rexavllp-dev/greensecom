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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modules/Attribute/Resources/assets/admin/js/AttributeValues.js":
/*!************************************************************************!*\
  !*** ./Modules/Attribute/Resources/assets/admin/js/AttributeValues.js ***!
  \************************************************************************/
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
  function _default() {
    _classCallCheck(this, _default);

    this.attributeId = 0;
    this.valuesCount = 0;
    this.addOldValues(GreensIntl.data['attribute.values']);

    if (this.valuesCount === 0) {
      this.addAttributeValue();
    }

    this.eventListeners();
    this.sortable();
    window.admin.removeSubmitButtonOffsetOn('#values');
  }

  _createClass(_default, [{
    key: "addOldValues",
    value: function addOldValues() {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          this.addAttributeValue(value);
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
    key: "addAttributeValue",
    value: function addAttributeValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        id: '',
        value: ''
      };

      var template = _.template($('#attribute-value-template').html());

      var html = template({
        valueId: this.valuesCount++,
        value: value
      });
      $('#attribute-values').append(html);
      window.admin.tooltip();
    }
  }, {
    key: "eventListeners",
    value: function eventListeners() {
      var _this = this;

      $('#add-new-value').on('click', function () {
        return _this.addAttributeValue();
      });
      $('#attribute-values').on('click', '.delete-row', function (e) {
        $(e.currentTarget).closest('tr').remove();
      });
    }
  }, {
    key: "sortable",
    value: function sortable() {
      Sortable.create(document.getElementById('attribute-values'), {
        handle: '.drag-icon',
        animation: 150
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Attribute/Resources/assets/admin/js/ProductAttributes.js":
/*!**************************************************************************!*\
  !*** ./Modules/Attribute/Resources/assets/admin/js/ProductAttributes.js ***!
  \**************************************************************************/
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
  function _default() {
    _classCallCheck(this, _default);

    this.attributeCount = 0;
    this.addProductAttributes(GreensIntl.data['product.attributes']);

    if (this.attributeCount === 0) {
      this.addProductAttribute();
    }

    this.addProductAttributesErrors(GreensIntl.errors['product.attributes']);
    this.eventListeners();
    this.triggerSelected();
    this.sortable();
  }

  _createClass(_default, [{
    key: "addProductAttributes",
    value: function addProductAttributes(attributes) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var attribute = _step.value;
          this.addProductAttribute(attribute);
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
    key: "addProductAttribute",
    value: function addProductAttribute() {
      var attribute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var template = _.template($('#product-attribute-template').html());

      var html = template({
        attributeId: this.attributeCount++,
        attribute: attribute
      });
      $('#product-attributes').append(html);
      window.admin.tooltip();
      window.admin.selectize();
    }
  }, {
    key: "addProductAttributesErrors",
    value: function addProductAttributesErrors(errors) {
      for (var key in errors) {
        var id = $.escapeSelector(key);
        var parent = $("#".concat(id)).parent();
        parent.addClass('has-error');
        parent.append("<span class=\"help-block\">".concat(errors[key][0], "</span>"));
      }
    }
  }, {
    key: "deleteProductAttribute",
    value: function deleteProductAttribute(e) {
      $(e.currentTarget).closest('tr').remove();
    }
  }, {
    key: "changeProductAttributeValues",
    value: function changeProductAttributeValues(attributeEl) {
      var clearSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var values = $(attributeEl).find('option:selected').data('values');
      var id = $.escapeSelector("attributes.".concat(attributeEl.dataset.attributeId, ".values"));
      var attributeValues = $("#".concat(id))[0].selectize;

      if (clearSelected) {
        attributeValues.clear();
      }

      attributeValues.clearOptions();
      var options = attributeValues.options;

      for (var _id in values) {
        attributeValues.addOption({
          id: _id,
          name: values[_id]
        });

        for (var i in options) {
          attributeValues.addItem(options[i].value);
        }
      }
    }
  }, {
    key: "eventListeners",
    value: function eventListeners() {
      var _this = this;

      $('#add-new-attribute').on('click', function () {
        return _this.addProductAttribute();
      });
      $('#product-attributes').on('click', '.delete-row', this.deleteProductAttribute);
      $('#product-attributes-wrapper').on('change', '.attribute', function (e) {
        _this.changeProductAttributeValues(e.currentTarget);
      });
    }
  }, {
    key: "triggerSelected",
    value: function triggerSelected() {
      var _this2 = this;

      $('.attribute').has('option:selected').each(function (i, el) {
        _this2.changeProductAttributeValues(el, false);
      });
    }
  }, {
    key: "sortable",
    value: function sortable() {
      Sortable.create(document.getElementById('product-attributes'), {
        handle: '.drag-icon',
        animation: 150
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Attribute/Resources/assets/admin/js/main.js":
/*!*************************************************************!*\
  !*** ./Modules/Attribute/Resources/assets/admin/js/main.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AttributeValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributeValues */ "./Modules/Attribute/Resources/assets/admin/js/AttributeValues.js");
/* harmony import */ var _ProductAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAttributes */ "./Modules/Attribute/Resources/assets/admin/js/ProductAttributes.js");



if ($('#attribute-values-wrapper').length !== 0) {
  new _AttributeValues__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

if ($('#product-attributes-wrapper').length !== 0) {
  new _ProductAttributes__WEBPACK_IMPORTED_MODULE_1__["default"]();
}

/***/ }),

/***/ 2:
/*!*******************************************************************!*\
  !*** multi ./Modules/Attribute/Resources/assets/admin/js/main.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\github\greensecom\Modules\Attribute\Resources\assets\admin\js\main.js */"./Modules/Attribute/Resources/assets/admin/js/main.js");


/***/ })

/******/ });