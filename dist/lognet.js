(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lognet", [], factory);
	else if(typeof exports === 'object')
		exports["lognet"] = factory();
	else
		root["lognet"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_logger) {
  "use strict";

  _logger = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Lognet = function Lognet() {
    var _this = this;

    _classCallCheck(this, Lognet);

    _defineProperty(this, "getClientInfo", function () {
      return {
        clientWidth: document.body.clientWidth,
        clientHeight: document.body.clientHeight,
        windowInnerWidth: window.innerWidth,
        windowInnerHeight: window.innerHeight,
        windowOuterWidth: window.outerWidth,
        windowOuterHeight: window.outerHeight,
        userAgent: window.navigator.userAgent
      };
    });

    _defineProperty(this, "addListener", function () {
      window.addEventListener('error', function (e) {
        var content = "\u9519\u8BEF\u4FE1\u606F: ".concat(e.message, "\r\n\u6587\u4EF6: ").concat(e.filename, "\r\n\u884C\u53F7: ").concat(e.lineno, "\r\n\u5217\u53F7: ").concat(e.colno);

        _this.submitGeneral(content);
      });
    });

    _defineProperty(this, "submitGeneral", function (content) {
      if (!_this.options.appKey) {
        _this.printError('App key is not set.');

        return;
      }

      if (!content || content.length < 1) {
        _this.printError('Cannot submit empty content.');

        return;
      }

      fetch('https://lognet.pwp.app/api/submit/general', {
        method: 'POST',
        body: JSON.stringify(_objectSpread({
          appKey: _this.options.appKey,
          path: window.location.pathname,
          content: content
        }, _this.getClientInfo())),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })["catch"](function (e) {
        if (_this.debug) {
          _this.printError(e);
        }
      });
    });

    _defineProperty(this, "printError", function (err) {
      if (_this.injection) {
        _this.privateError.apply(console, err);
      } else {
        console.error(err);
      }
    });

    _defineProperty(this, "init", function () {
      if (!_this.inited) {
        var dom = document.getElementById('lognet');

        if (dom) {
          var key = dom.getAttribute('key');
          var mission = dom.getAttribute('mission');
          _this.options.appKey = key ? key : _this.options.appKey;
          _this.options.missionId = mission ? mission : _this.options.missionId;
        } // init injection


        if (_this.injection) {
          interceptConsole();
        }

        _this.inited = true;
      }
    });

    _defineProperty(this, "setKey", function (appKey) {
      if (typeof appKey !== 'string') {
        _this.printError('App key must be a string.');

        return;
      }

      _this.options.appKey = appKey;
    });

    _defineProperty(this, "setMission", function (missionId) {
      if (typeof missionId !== 'string') {
        _this.printError('Mission ID must be a string.');

        return;
      }

      _this.options.missionId = missionId;
    });

    _defineProperty(this, "setInjection", function (injection) {
      if (typeof injection !== 'boolean') {
        _this.printError('Please set a boolean to injection option.');

        return;
      }

      _this.injection = injection;

      if (!_this.injection) {
        console.error = _this.privateError;
      } else {
        _this.interceptConsole();
      }
    });

    _defineProperty(this, "setDebug", function (flag) {
      if (typeof flag !== 'boolean') {
        _this.printError('Please set a boolen to debug flag.');

        return;
      }

      _this.debug = flag;
    });

    _defineProperty(this, "setOptions", function (options) {
      if (_typeof(options) !== 'object') {
        _this.printError('Options should be a object.');

        return;
      }

      if (!options.appKey) {
        _this.printError('Cannot set options, some necessary options are lost.');

        return;
      }

      if (!options.injection) {
        options.injection = false;
        return;
      }

      _this.options = options;
    });

    _defineProperty(this, "interceptConsole", function () {
      _this.privateError = console.error;

      console.error = function (err) {
        _this.submitGeneral(err);

        _this.privateError.apply(console, err);
      };
    });

    this.inited = false; // init options

    this.options = {
      appKey: null,
      missionId: null,
      injection: false,
      debug: false
    }; // init logger

    this.logger = new _logger["default"](this.options.appKey, this.options.missionId);
    this.debug = this.logger.debug;
    this.info = this.logger.info;
    this.warn = this.logger.warn;
    this.error = this.logger.error; // set up parent

    this.logger.parent = this; // init listener

    this.addListener();
  };

  var lognet = new Lognet();
  window.addEventListener('load', function () {
    lognet.init();
  });
  module.exports = lognet;
  module.exports["default"] = lognet;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MissionLogger = function MissionLogger() {
    var _this = this;

    _classCallCheck(this, MissionLogger);

    _defineProperty(this, "debug", function (content, missionId) {
      _this.log('debug', content, missionId);
    });

    _defineProperty(this, "info", function (content, missionId) {
      _this.log('info', content, missionId);
    });

    _defineProperty(this, "warn", function (content, missionId) {
      _this.log('warn', content, missionId);
    });

    _defineProperty(this, "error", function (content, missionId) {
      _this.log('error', content, missionId);
    });

    _defineProperty(this, "log", function (type, content, missionId) {
      _this.submit(missionId ? missionId : _this.parent.options.missionId, type, content);
    });

    _defineProperty(this, "submit", function (missionId, type, content) {
      if (!_this.parent || !_this.parent.options.appKey) {
        _this.printError('App key is not set.');

        return;
      }

      if (!missionId) {
        _this.printError('Mission ID is not set.');

        return;
      }

      fetch('https://lognet.pwp.app/api/submit/mission', {
        method: 'POST',
        body: JSON.stringify(_objectSpread({
          appKey: _this.parent.options.appKey,
          type: type,
          missionId: missionId,
          path: window.location.pathname,
          content: content
        }, _this.parent.getClientInfo())),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })["catch"](function (e) {
        if (_this.parent && _this.parent.debug) {
          _this.printError(e);
        }
      });
    });

    _defineProperty(this, "printError", function (err) {
      if (_this.parent && _this.parent.privateError) {
        _this.parent.privateError.apply(console, err);
      } else {
        console.log(err);
      }
    });

    _defineProperty(this, "setPrivateError", function (privateError) {
      _this.privateError = privateError;
    });

    _defineProperty(this, "setKey", function (appKey) {
      _this.appKey = appKey;
    });

    _defineProperty(this, "setMission", function (missionId) {
      _this.missionId = missionId;
    });

    _defineProperty(this, "setDebug", function (flag) {
      _this.flag = flag;
    });
  };

  var _default = MissionLogger;
  _exports["default"] = _default;
});

/***/ })
/******/ ]);
});