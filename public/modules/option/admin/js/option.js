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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Modules/Option/Resources/assets/admin/js/BaseOption.js":
/*!****************************************************************!*\
  !*** ./Modules/Option/Resources/assets/admin/js/BaseOption.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: "addOptionsErrors",
    value: function addOptionsErrors(errors) {
      for (var key in errors) {
        var inputField = this.getInputFieldForErrorKey(key);
        inputField.closest('.option').addClass('option-has-errors');
        var parent = inputField.parent();
        parent.append("<span class=\"help-block\">".concat(errors[key][0], "</span>"));
      }
    }
  }, {
    key: "getRowTemplate",
    value: function getRowTemplate(data) {
      var template = _.template($('#option-select-values-template').html());

      return $(template(data));
    }
  }, {
    key: "changeOptionType",
    value: function changeOptionType(_ref) {
      var optionId = _ref.optionId,
          type = _ref.type,
          _ref$values = _ref.values,
          values = _ref$values === void 0 ? [] : _ref$values;
      var optionValuesElement = this.getOptionValuesElement(optionId);
      var templateType = this.getTemplateType(type, optionValuesElement);
      var optionValuesData = {
        optionId: optionId,
        value: {
          id: '',
          label: '',
          price: '',
          price_type: 'fixed'
        }
      };

      if (this.shouldNotChangeTemplate(templateType, optionValuesElement)) {
        return;
      }

      if (values.length !== 0 && templateType === 'text') {
        optionValuesData.value = values[0];
      }

      var template = _.template($("#option-".concat(templateType, "-template")).html());

      optionValuesElement.html(template(optionValuesData));

      if (templateType === 'select') {
        this.addOptionRowEventListener(optionId);
        this.addOptionRows({
          optionId: optionId,
          values: values
        });

        if (values.length === 0) {
          this.getAddNewRowButton(optionId).trigger('click');
        }
      }
    }
  }, {
    key: "addOptionRows",
    value: function addOptionRows(_ref2) {
      var optionId = _ref2.optionId,
          values = _ref2.values;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = values.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              value = _step$value[1];

          this.addOptionRow({
            optionId: optionId,
            valueId: index,
            value: value
          });
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
    key: "getTemplateType",
    value: function getTemplateType(type) {
      if (this.templateTypeIsText(type)) {
        return 'text';
      }

      if (this.templateTypeIsSelect(type)) {
        return 'select';
      }
    }
  }, {
    key: "templateTypeIsText",
    value: function templateTypeIsText(type) {
      return ['field', 'textarea', 'date', 'date_time', 'time'].includes(type);
    }
  }, {
    key: "templateTypeIsSelect",
    value: function templateTypeIsSelect(type) {
      return ['dropdown', 'checkbox', 'checkbox_custom', 'radio', 'radio_custom', 'multiple_select'].includes(type);
    }
  }, {
    key: "shouldNotChangeTemplate",
    value: function shouldNotChangeTemplate(templateType, optionValuesElement) {
      return templateType === undefined || this.alreadyHasCurrentTemplate(templateType, optionValuesElement);
    }
  }, {
    key: "alreadyHasCurrentTemplate",
    value: function alreadyHasCurrentTemplate(templateType, optionValuesElement) {
      if (templateType === 'text') {
        return optionValuesElement.children().hasClass('option-text');
      }

      if (templateType === 'select') {
        return optionValuesElement.children().hasClass('option-select');
      }
    }
  }, {
    key: "initOptionRow",
    value: function initOptionRow(template, selectValues) {
      if (selectValues.length !== 0 && !selectValues.is('.sortable')) {
        this.makeSortable(selectValues[0]);
        selectValues.addClass('sortable');
      }

      this.deleteOptionRowEventListener(template);
      window.admin.tooltip();
    }
  }, {
    key: "deleteOptionRowEventListener",
    value: function deleteOptionRowEventListener(row) {
      row.find('.delete-row').on('click', function (e) {
        $(e.currentTarget).closest('.option-row').remove();
      });
    }
  }, {
    key: "makeSortable",
    value: function makeSortable(el) {
      Sortable.create(el, {
        handle: '.drag-icon',
        animation: 150
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./Modules/Option/Resources/assets/admin/js/Option.js":
/*!************************************************************!*\
  !*** ./Modules/Option/Resources/assets/admin/js/Option.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _BaseOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseOption */ "./Modules/Option/Resources/assets/admin/js/BaseOption.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default =
/*#__PURE__*/
function (_BaseOption) {
  _inherits(_default, _BaseOption);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));
    var values = GreensIntl.data['option.values'];
    $('#type').on('change', function (e) {
      _get(_getPrototypeOf(_default.prototype), "changeOptionType", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), {
        type: e.currentTarget.value,
        values: values
      });

      _get(_getPrototypeOf(_default.prototype), "addOptionsErrors", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), GreensIntl.errors['option.values']);
    });
    $('#type').trigger('change');
    window.admin.removeSubmitButtonOffsetOn('#values');
    return _this;
  }

  _createClass(_default, [{
    key: "addOptionRow",
    value: function addOptionRow(_ref) {
      var valueId = _ref.valueId,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? {
        label: '',
        price: '',
        price_type: 'fixed'
      } : _ref$value;
      var template = this.getRowTemplate({
        optionId: undefined,
        valueId: valueId,
        value: value
      });
      var selectValues = $('#select-values').append(template);

      _get(_getPrototypeOf(_default.prototype), "initOptionRow", this).call(this, template, selectValues);
    }
  }, {
    key: "addOptionRowEventListener",
    value: function addOptionRowEventListener() {
      var _this2 = this;

      $('#add-new-row').on('click', function () {
        var valueId = $('#option-values .option-row').length;

        _this2.addOptionRow({
          valueId: valueId
        });
      });
    }
  }, {
    key: "getOptionValuesElement",
    value: function getOptionValuesElement() {
      return $('#option-values');
    }
  }, {
    key: "getAddNewRowButton",
    value: function getAddNewRowButton() {
      return $('#add-new-row');
    }
  }, {
    key: "getInputFieldForErrorKey",
    value: function getInputFieldForErrorKey(key) {
      var keyParts = key.split('.'); // Replace all "_" to "-".

      keyParts = keyParts.map(function (k) {
        return k.split('_').join('-');
      });
      return $("#".concat(keyParts.join('-')));
    }
  }]);

  return _default;
}(_BaseOption__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./Modules/Option/Resources/assets/admin/js/ProductOption.js":
/*!*******************************************************************!*\
  !*** ./Modules/Option/Resources/assets/admin/js/ProductOption.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _BaseOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseOption */ "./Modules/Option/Resources/assets/admin/js/BaseOption.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default =
/*#__PURE__*/
function (_BaseOption) {
  _inherits(_default, _BaseOption);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));
    _this.optionsCount = 0;

    _this.addOptions(GreensIntl.data['product.options']);

    if (_this.optionsCount === 0) {
      _this.addOption();
    }

    if (_this.optionsCount > 3) {
      _this.collapseOptions();
    }

    _get(_getPrototypeOf(_default.prototype), "addOptionsErrors", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), GreensIntl.errors['product.options']);

    $('#add-new-option').on('click', function () {
      return _this.addOption();
    });
    $('#add-global-option').on('click', function () {
      return _this.addGlobalOption();
    });
    return _this;
  }

  _createClass(_default, [{
    key: "addOptions",
    value: function addOptions(options) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var option = _step.value;
          this.addOption(option);
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
    key: "collapseOptions",
    value: function collapseOptions() {
      var options = $('.option:not(.option-has-errors)');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var option = _step2.value;
          $(option).find('[data-toggle=collapse]').trigger('click');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "addGlobalOption",
    value: function addGlobalOption() {
      var _this2 = this;

      var globalOptionId = $('#global-option').val();

      if (globalOptionId === '') {
        return window.admin.stopButtonLoading($('#add-global-option'));
      }

      $.ajax({
        type: 'GET',
        url: route('admin.options.show', globalOptionId),
        dataType: 'json',
        success: function success(option) {
          _this2.addOption(option);

          window.admin.stopButtonLoading($('#add-global-option'));
        }
      });
    }
  }, {
    key: "addOption",
    value: function addOption() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        id: null,
        name: null,
        type: null,
        is_required: false,
        values: []
      };
      // Cast "is_required" field to boolean.
      option.is_required = !!JSON.parse(option.is_required);
      var optionId = this.optionsCount;

      var template = _.template($('#option-template').html());

      var html = $(template({
        option: option,
        optionId: optionId
      }));

      if (option.name !== null) {
        setTimeout(function () {
          $("#option-".concat(optionId)).find('#option-name').text(option.name);
        });
      }

      var optionGroup = $('#options-group').append(html);

      if (!optionGroup.is('.sortable')) {
        _get(_getPrototypeOf(_default.prototype), "makeSortable", this).call(this, optionGroup[0]);

        optionGroup.addClass('sortable');
      }

      this.deleteOptionEventListener(html);
      this.updateOptionNameEventListener(optionId);
      this.updateTemplateEventListener(optionId, option['values']);
      window.admin.tooltip();
      this.optionsCount++;
    }
  }, {
    key: "deleteOptionEventListener",
    value: function deleteOptionEventListener(option) {
      option.find('.delete-option').on('click', function (e) {
        return $(e.currentTarget).closest('.option').remove();
      });
    }
  }, {
    key: "updateOptionNameEventListener",
    value: function updateOptionNameEventListener(optionId) {
      var option = $("#option-".concat(optionId));
      var old = option.find('#option-name').text();
      $(option).find('.option-name-field').on('input', function (e) {
        var name = e.currentTarget.value !== '' ? e.currentTarget.value : old;
        option.find('#option-name').text(name);
      });
    }
  }, {
    key: "updateTemplateEventListener",
    value: function updateTemplateEventListener(optionId) {
      var _this3 = this;

      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var optionTypeElement = $("#option-".concat(optionId, "-type"));
      optionTypeElement.on('change', function (e) {
        var type = e.currentTarget.value;

        if (type === '') {
          return _this3.getOptionValuesElement(optionId).html('');
        }

        _get(_getPrototypeOf(_default.prototype), "changeOptionType", _this3).call(_this3, {
          optionId: optionId,
          type: type,
          values: values
        });
      }); // Trigger the "change" event on option type after attaching the listener
      // this will automatically take effect of the current option which is
      // maybe loaded from the old input values or from the product data.

      optionTypeElement.trigger('change');
    }
  }, {
    key: "addOptionRow",
    value: function addOptionRow(_ref) {
      var optionId = _ref.optionId,
          valueId = _ref.valueId,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? {
        label: '',
        price: '',
        price_type: 'fixed'
      } : _ref$value;
      var template = this.getRowTemplate({
        optionId: optionId,
        valueId: valueId,
        value: value
      });
      var selectValues = $("#option-".concat(optionId, "-select-values")).append(template);

      _get(_getPrototypeOf(_default.prototype), "initOptionRow", this).call(this, template, selectValues);
    }
  }, {
    key: "addOptionRowEventListener",
    value: function addOptionRowEventListener(optionId) {
      var _this4 = this;

      $("#option-".concat(optionId, "-add-new-row")).on('click', function () {
        var valueId = $("#option-".concat(optionId, "-values .option-row")).length;

        _this4.addOptionRow({
          optionId: optionId,
          valueId: valueId
        });
      });
    }
  }, {
    key: "getOptionValuesElement",
    value: function getOptionValuesElement(optionId) {
      return $("#option-".concat(optionId, "-values"));
    }
  }, {
    key: "getAddNewRowButton",
    value: function getAddNewRowButton(optionId) {
      return $("#option-".concat(optionId, "-add-new-row"));
    }
  }, {
    key: "getInputFieldForErrorKey",
    value: function getInputFieldForErrorKey(key) {
      var keyParts = key.split('.'); // Remove the first element which is "option".

      keyParts.shift(); // Replace all "_" to "-".

      keyParts = keyParts.map(function (k) {
        return k.split('_').join('-');
      });
      return $("#option-".concat(keyParts.join('-')));
    }
  }]);

  return _default;
}(_BaseOption__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./Modules/Option/Resources/assets/admin/js/main.js":
/*!**********************************************************!*\
  !*** ./Modules/Option/Resources/assets/admin/js/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option */ "./Modules/Option/Resources/assets/admin/js/Option.js");
/* harmony import */ var _ProductOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductOption */ "./Modules/Option/Resources/assets/admin/js/ProductOption.js");



if ($('#option-create-form, #option-edit-form').length !== 0) {
  new _Option__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

if ($('#product-create-form, #product-edit-form').length !== 0) {
  new _ProductOption__WEBPACK_IMPORTED_MODULE_1__["default"]();
}

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** multi ./Modules/Option/Resources/assets/admin/js/main.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Office_Files\www\github\greensecom\Modules\Option\Resources\assets\admin\js\main.js */"./Modules/Option/Resources/assets/admin/js/main.js");


/***/ })

/******/ });