(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["DayPicker"] = factory(require("react"));
	else
		root["DayPicker"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(32)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(44);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;
var ENTER = exports.ENTER = 13;
var SPACE = exports.SPACE = 32;
var ESC = exports.ESC = 27;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(48);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isDayBefore = isDayBefore;
exports.isDayAfter = isDayAfter;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;
exports.getWeekNumber = getWeekNumber;
/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `d` as a new date with `n` months added.
 *
 * @export
 * @param {[type]} d
 * @param {[type]} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Returns `true` if the first day is before the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayBefore(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

/**
 * Returns `true` if the first day is after the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayAfter(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  date.setHours(0, 0, 0, 0);
  return isDayAfter(date, d1) && isDayBefore(date, d2) || isDayAfter(date, d2) && isDayBefore(date, d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @export
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

/**
 * Return the year's week number (as per ISO, i.e. with the week starting from monday)
 * for the given day.
 *
 * @export
 * @param {Date} day
 * @returns {Number}
 */
function getWeekNumber(day) {
  var date = clone(day);
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  return Math.ceil(((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  getWeekNumber: getWeekNumber,
  isDayAfter: isDayAfter,
  isDayBefore: isDayBefore,
  isDayBetween: isDayBetween,
  isDayInRange: isDayInRange,
  isFutureDay: isFutureDay,
  isPastDay: isPastDay,
  isSameDay: isSameDay
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var ctx = __webpack_require__(62);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cancelEvent = cancelEvent;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.getModifiersFromProps = getModifiersFromProps;
exports.getFirstDayOfWeekFromProps = getFirstDayOfWeekFromProps;
exports.isRangeOfDates = isRangeOfDates;
exports.getMonthsDiff = getMonthsDiff;
exports.getWeekArray = getWeekArray;
exports.startOfMonth = startOfMonth;
exports.nodeListToArray = nodeListToArray;
exports.hasOwnProp = hasOwnProp;

var _DateUtils = __webpack_require__(16);

var _LocaleUtils = __webpack_require__(23);

var _classNames = __webpack_require__(153);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers.selected = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers.disabled = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _LocaleUtils.getFirstDayOfWeek)();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = (0, _DateUtils.clone)(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = (0, _DateUtils.clone)(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = (0, _DateUtils.clone)(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = (0, _DateUtils.clone)(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList, 0);
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactBase16Styling = __webpack_require__(57);

var _default = __webpack_require__(149);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = exports.cn = function cn() {
  for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return classNames.filter(function (c) {
    return c;
  }).join(' ');
};

var COLORS = {
  BACKGROUND: 'base00',
  NAVBAR_BACKGROUND: 'base01',
  NAVBAR_TEXT: 'base03',
  HOVER_BACKGROUND: 'base02',
  WEEKDAY_TEXT: 'base03',
  TEXT: 'base07',
  DISABLED_TEXT: 'base03',
  DISABLED_BACKGROUND: 'base01',
  OUTSIDE_TEXT: 'base02',
  OUTSIDE_BACKGROUND: 'base00',
  TODAY_BACKGROUND: 'base00',
  TODAY_TEXT: 'base08',
  SELECTED_BACKGROUND: 'base0C',
  SELECTED_TEXT: 'base00',
  TODAY_BUTTON_TEXT: 'base08'
};

function dayColors(base16Theme, modifiers) {
  if (modifiers.outside) {
    return {
      color: base16Theme[COLORS.OUTSIDE_TEXT],
      backgroundColor: base16Theme[COLORS.OUTSIDE_BACKGROUND]
    };
  } else if (modifiers.disabled !== -1) {
    return {
      color: base16Theme[COLORS.DISABLED_TEXT],
      backgroundColor: base16Theme[COLORS.DISABLED_BACKGROUND]
    };
  } else if (modifiers.selected !== -1) {
    return {
      color: base16Theme[COLORS.SELECTED_TEXT],
      backgroundColor: base16Theme[COLORS.SELECTED_BACKGROUND]
    };
  } else if (modifiers.today !== -1) {
    return {
      color: base16Theme[COLORS.TODAY_TEXT],
      backgroundColor: base16Theme[COLORS.TODAY_BACKGROUND]
    };
  }

  return {
    color: base16Theme[COLORS.TEXT],
    backgroundColor: base16Theme[COLORS.BACKGROUND]
  };
}

function getStylingFromBase16(base16Theme) {
  return {
    dayPicker: function dayPicker(_ref, locale, interactionDisabled, customClassName) {
      var style = _ref.style,
          className = _ref.className;
      return {
        className: cn('DayPicker', locale && 'DayPicker--' + locale, interactionDisabled && 'DayPicker--interactionDisabled', className, customClassName),
        style: _extends({}, style, {
          color: base16Theme[COLORS.TEXT],
          backgroundColor: base16Theme[COLORS.BACKGROUND]
        })
      };
    },

    dayPickerWrapper: function dayPickerWrapper(_ref2) {
      var style = _ref2.style,
          className = _ref2.className;
      return {
        className: cn('DayPicker-wrapper', className),
        style: style
      };
    },

    dayPickerNavBar: function dayPickerNavBar(_ref3) {
      var style = _ref3.style,
          className = _ref3.className;
      return {
        className: cn('DayPicker-NavBar', className),
        style: _extends({}, style, {
          backgroundColor: base16Theme[COLORS.NAVBAR_BACKGROUND]
        })
      };
    },

    dayPickerMonth: function dayPickerMonth(_ref4) {
      var style = _ref4.style,
          className = _ref4.className;
      return {
        className: cn('DayPicker-Month', className),
        style: style
      };
    },

    dayPickerMonths: function dayPickerMonths(_ref5) {
      var style = _ref5.style,
          className = _ref5.className;
      return {
        className: cn('DayPicker-Months', className),
        style: style
      };
    },

    dayPickerMonthWrapper: function dayPickerMonthWrapper(_ref6) {
      var style = _ref6.style,
          className = _ref6.className;
      return {
        className: cn('DayPicker-Body', className),
        style: style
      };
    },

    dayPickerWeek: function dayPickerWeek(_ref7) {
      var style = _ref7.style,
          className = _ref7.className;
      return {
        className: cn('DayPicker-Week', className),
        style: style
      };
    },

    dayPickerWeekNumber: function dayPickerWeekNumber(_ref8) {
      var style = _ref8.style,
          className = _ref8.className;
      return {
        className: cn('DayPicker-WeekNumber', className),
        style: _extends({}, style, {
          color: base16Theme[COLORS.WEEKDAY_TEXT]
        })
      };
    },

    dayPickerNavButton: function dayPickerNavButton(_ref9, type, shouldShow) {
      var style = _ref9.style,
          className = _ref9.className;
      return {
        className: cn('DayPicker-NavButton', type && 'DayPicker-NavButton--' + type, !shouldShow && 'DayPicker-NavButton--interactionDisabled', className),
        style: _extends({}, style, {
          color: base16Theme[COLORS.NAVBAR_TEXT]
        })
      };
    },

    dayPickerWeekday: function dayPickerWeekday(_ref10) {
      var style = _ref10.style,
          className = _ref10.className;
      return {
        className: cn('DayPicker-Weekday', className),
        style: _extends({}, style, {
          color: base16Theme[COLORS.WEEKDAY_TEXT]
        })
      };
    },

    dayPickerWeekdays: function dayPickerWeekdays(_ref11) {
      var style = _ref11.style,
          className = _ref11.className;
      return {
        className: cn('DayPicker-Weekdays', className),
        style: style
      };
    },

    dayPickerWeekdaysRow: function dayPickerWeekdaysRow(_ref12) {
      var style = _ref12.style,
          className = _ref12.className;
      return {
        className: cn('DayPicker-WeekdaysRow', className),
        style: style
      };
    },

    dayPickerCaption: function dayPickerCaption(_ref13) {
      var style = _ref13.style,
          className = _ref13.className;
      return {
        className: cn('DayPicker-Caption', className),
        style: style
      };
    },

    dayPickerDay: function dayPickerDay(_ref14, day, modifiers) {
      var style = _ref14.style,
          className = _ref14.className;
      return {
        className: cn('DayPicker-Day', Object.keys(modifiers).map(function (modifier) {
          return 'DayPicker-Day--' + modifier;
        }).join(' '), className),
        style: _extends({}, style, dayColors(base16Theme, modifiers))
      };
    },

    dayPickerFooter: function dayPickerFooter(_ref15) {
      var style = _ref15.style,
          className = _ref15.className;
      return {
        className: cn('DayPicker-Footer', className),
        style: style
      };
    },

    dayPickerTodayButton: function dayPickerTodayButton(_ref16) {
      var style = _ref16.style,
          className = _ref16.className;
      return {
        className: cn('DayPicker-TodayButton', className),
        style: _extends({}, style, {
          color: base16Theme[COLORS.TODAY_BUTTON_TEXT]
        })
      };
    },

    dayPickerInput: function dayPickerInput(_ref17) {
      var style = _ref17.style,
          className = _ref17.className;
      return {
        className: cn('DayPickerInput', className),
        style: style
      };
    },

    dayPickerInputOverlayWrapper: function dayPickerInputOverlayWrapper(_ref18) {
      var style = _ref18.style,
          className = _ref18.className;
      return {
        className: cn('DayPickerInput-OverlayWrapper', className),
        style: style
      };
    },

    dayPickerInputOverlay: function dayPickerInputOverlay(_ref19) {
      var style = _ref19.style,
          className = _ref19.className;
      return {
        className: cn('DayPickerInput-Overlay', className),
        style: style
      };
    }
  };
}

exports.default = (0, _reactBase16Styling.createStyling)(getStylingFromBase16, {
  defaultBase16: _default2.default
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(61)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(43)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(32)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var global = __webpack_require__(5);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(14);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(28);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

module.exports = clamp;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;

var _DateUtils = __webpack_require__(16);

var _Helpers = __webpack_require__(22);

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, _DateUtils.isSameDay)(day, mod);
    }
    if ((0, _Helpers.isRangeOfDates)(mod)) {
      return (0, _DateUtils.isDayInRange)(day, mod);
    }
    if (mod.after && mod.before && (0, _DateUtils.isDayAfter)(mod.before, mod.after)) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) && (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after && mod.before && ((0, _DateUtils.isDayAfter)(mod.after, mod.before) || (0, _DateUtils.isSameDay)(mod.after, mod.before))) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) || (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after) {
      return (0, _DateUtils.isDayAfter)(day, mod.after);
    }
    if (mod.before) {
      return (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = { dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Caption = __webpack_require__(55);

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = __webpack_require__(56);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = __webpack_require__(150);

var _Month2 = _interopRequireDefault(_Month);

var _Weekday = __webpack_require__(154);

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = __webpack_require__(22);

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(16);

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = __webpack_require__(23);

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _ModifiersUtils = __webpack_require__(41);

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _keys = __webpack_require__(12);

var _createStylingFromTheme = __webpack_require__(24);

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.month !== nextProps.month) {
        this.setState(this.getStateFromProps(nextProps));
      }
    }
  }, {
    key: 'getNextNavigableMonth',
    value: function getNextNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    }
  }, {
    key: 'getPreviousNavigableMonth',
    value: function getPreviousNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, -1);
    }
  }, {
    key: 'allowPreviousMonth',
    value: function allowPreviousMonth() {
      var previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      return this.allowMonth(previousMonth);
    }
  }, {
    key: 'allowNextMonth',
    value: function allowNextMonth() {
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
      return this.allowMonth(nextMonth);
    }
  }, {
    key: 'allowMonth',
    value: function allowMonth(d) {
      var _props = this.props,
          fromMonth = _props.fromMonth,
          toMonth = _props.toMonth,
          canChangeMonth = _props.canChangeMonth;

      if (!canChangeMonth || fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers.getMonthsDiff(toMonth, d) > 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'allowYearChange',
    value: function allowYearChange() {
      return this.props.canChangeMonth;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(d, callback) {
      var _this2 = this;

      if (!this.allowMonth(d)) {
        return;
      }
      this.setState({ currentMonth: Helpers.startOfMonth(d) }, function () {
        if (callback) {
          callback();
        }
        if (_this2.props.onMonthChange) {
          _this2.props.onMonthChange(_this2.state.currentMonth);
        }
      });
    }
  }, {
    key: 'showNextYear',
    value: function showNextYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'showPreviousYear',
    value: function showPreviousYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'focusFirstDayOfMonth',
    value: function focusFirstDayOfMonth() {
      this.dayNodes[0].focus();
    }
  }, {
    key: 'focusLastDayOfMonth',
    value: function focusLastDayOfMonth() {
      this.dayNodes[this.dayNodes.length - 1].focus();
    }
  }, {
    key: 'focusPreviousDay',
    value: function focusPreviousDay(dayNode) {
      var _this3 = this;

      var dayNodeIndex = this.dayNodes.indexOf(dayNode);

      if (dayNodeIndex === 0) {
        this.showPreviousMonth(function () {
          return _this3.focusLastDayOfMonth();
        });
      } else {
        this.dayNodes[dayNodeIndex - 1].focus();
      }
    }
  }, {
    key: 'focusNextDay',
    value: function focusNextDay(dayNode) {
      var _this4 = this;

      var dayNodeIndex = this.dayNodes.indexOf(dayNode);

      if (dayNodeIndex === this.dayNodes.length - 1) {
        this.showNextMonth(function () {
          return _this4.focusFirstDayOfMonth();
        });
      } else {
        this.dayNodes[dayNodeIndex + 1].focus();
      }
    }
  }, {
    key: 'focusNextWeek',
    value: function focusNextWeek(dayNode) {
      var _this5 = this;

      var dayNodeIndex = this.dayNodes.indexOf(dayNode);
      var isInLastWeekOfMonth = dayNodeIndex > this.dayNodes.length - 8;

      if (isInLastWeekOfMonth) {
        this.showNextMonth(function () {
          var daysAfterIndex = _this5.dayNodes.length - dayNodeIndex;
          var nextMonthDayNodeIndex = 7 - daysAfterIndex;
          _this5.dayNodes[nextMonthDayNodeIndex].focus();
        });
      } else {
        this.dayNodes[dayNodeIndex + 7].focus();
      }
    }
  }, {
    key: 'focusPreviousWeek',
    value: function focusPreviousWeek(dayNode) {
      var _this6 = this;

      var dayNodeIndex = this.dayNodes.indexOf(dayNode);
      var isInFirstWeekOfMonth = dayNodeIndex <= 6;

      if (isInFirstWeekOfMonth) {
        this.showPreviousMonth(function () {
          var startOfLastWeekOfMonth = _this6.dayNodes.length - 7;
          var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
          _this6.dayNodes[previousMonthDayNodeIndex].focus();
        });
      } else {
        this.dayNodes[dayNodeIndex - 7].focus();
      }
    }

    // Event handlers

  }, {
    key: 'handleOutsideDayClick',
    value: function handleOutsideDayClick(day) {
      var currentMonth = this.state.currentMonth;
      var numberOfMonths = this.props.numberOfMonths;

      var diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
      if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
        this.showNextMonth();
      } else if (diffInMonths < 0) {
        this.showPreviousMonth();
      }
    }
  }, {
    key: 'renderNavbar',
    value: function renderNavbar(styling) {
      var _props2 = this.props,
          labels = _props2.labels,
          locale = _props2.locale,
          localeUtils = _props2.localeUtils,
          canChangeMonth = _props2.canChangeMonth,
          navbarElement = _props2.navbarElement,
          attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

      if (!canChangeMonth) return null;

      var props = {
        month: this.state.month,
        styling: styling,
        nextMonth: this.getNextNavigableMonth(),
        previousMonth: this.getPreviousNavigableMonth(),
        showPreviousButton: this.allowPreviousMonth(),
        showNextButton: this.allowNextMonth(),
        onNextClick: this.showNextMonth,
        onPreviousClick: this.showPreviousMonth,
        dir: attributes.dir,
        labels: labels,
        locale: locale,
        localeUtils: localeUtils
      };

      return _react2.default.isValidElement(navbarElement) ? _react2.default.cloneElement(navbarElement, props) : _react2.default.createElement(navbarElement, props);
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths(styling) {
      var _this7 = this;

      var months = [];
      var firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);
      for (var i = 0; i < this.props.numberOfMonths; i += 1) {
        var month = DateUtils.addMonths(this.state.currentMonth, i);
        months.push(_react2.default.createElement(_Month2.default, _extends({
          key: i
        }, this.props, {
          month: month,
          dayRef: function dayRef(dayNode) {
            if (dayNode !== null) _this7.dayNodes.push(dayNode);
          },
          firstDayOfWeek: firstDayOfWeek,
          onDayKeyDown: this.handleDayKeyDown,
          onDayClick: this.handleDayClick,
          styling: styling
        })));
      }

      if (this.props.reverseMonths) {
        months.reverse();
      }
      return months;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter(styling) {
      if (this.props.todayButton) {
        return _react2.default.createElement(
          'div',
          styling('dayPickerFooter', this.props.locale),
          this.renderTodayButton(styling)
        );
      }
      return null;
    }
  }, {
    key: 'renderTodayButton',
    value: function renderTodayButton(styling) {
      return _react2.default.createElement(
        'button',
        _extends({
          type: 'button',
          tabIndex: 0
        }, styling('dayPickerTodayButton', this.props.locale), {
          'aria-label': this.props.todayButton,
          onClick: this.handleTodayButtonClick
        }),
        this.props.todayButton
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var styling = this.props.styling || (0, _createStylingFromTheme2.default)(this.props.theme);

      this.dayNodes = [];

      return _react2.default.createElement(
        'div',
        _extends({}, this.props.containerProps, styling('dayPicker', this.props.locale, !this.props.onDayClick, this.props.className), {
          ref: function ref(el) {
            return _this8.dayPicker = el;
          },
          lang: this.props.locale
        }),
        _react2.default.createElement(
          'div',
          _extends({}, styling('dayPickerWrapper', this.props.locale), {
            tabIndex: this.props.canChangeMonth && this.props.tabIndex ? this.props.tabIndex : -1,
            onKeyDown: this.handleKeyDown,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur
          }),
          this.renderNavbar(styling),
          _react2.default.createElement(
            'div',
            styling('dayPickerMonths', this.props.locale),
            this.renderMonths(styling)
          ),
          this.renderFooter(styling)
        )
      );
    }
  }]);

  return DayPicker;
}(_react.Component);

DayPicker.VERSION = '7.0.5';
DayPicker.defaultProps = {
  tabIndex: 0,
  initialMonth: new Date(),
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: LocaleUtils,
  showOutsideDays: false,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  showWeekNumbers: false,
  showWeekDays: true,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  renderWeek: function renderWeek(weekNumber) {
    return weekNumber;
  },
  weekdayElement: _Weekday2.default,
  navbarElement: _Navbar2.default,
  captionElement: _Caption2.default
};

var _initialiseProps = function _initialiseProps() {
  var _this9 = this;

  this.getStateFromProps = function (props) {
    var initialMonth = Helpers.startOfMonth(props.month || props.initialMonth);
    var currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      var diffInMonths = Helpers.getMonthsDiff(props.fromMonth, currentMonth);
      currentMonth = DateUtils.addMonths(props.fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
    } else if (props.toMonth && props.numberOfMonths > 1 && Helpers.getMonthsDiff(currentMonth, props.toMonth) <= 0) {
      currentMonth = DateUtils.addMonths(props.toMonth, 1 - _this9.props.numberOfMonths);
    }
    return { currentMonth: currentMonth };
  };

  this.dayPicker = null;
  this.dayNodes = [];

  this.showNextMonth = function (callback) {
    if (!_this9.allowNextMonth()) {
      return;
    }
    var deltaMonths = _this9.props.pagedNavigation ? _this9.props.numberOfMonths : 1;
    var nextMonth = DateUtils.addMonths(_this9.state.currentMonth, deltaMonths);
    _this9.showMonth(nextMonth, callback);
  };

  this.showPreviousMonth = function (callback) {
    if (!_this9.allowPreviousMonth()) {
      return;
    }
    var deltaMonths = _this9.props.pagedNavigation ? _this9.props.numberOfMonths : 1;
    var previousMonth = DateUtils.addMonths(_this9.state.currentMonth, -deltaMonths);
    _this9.showMonth(previousMonth, callback);
  };

  this.handleKeyDown = function (e) {
    e.persist();

    switch (e.keyCode) {
      case _keys.LEFT:
        _this9.showPreviousMonth();
        break;
      case _keys.RIGHT:
        _this9.showNextMonth();
        break;
      case _keys.UP:
        _this9.showPreviousYear();
        break;
      case _keys.DOWN:
        _this9.showNextYear();
        break;
      default:
        break;
    }

    if (_this9.props.onKeyDown) {
      _this9.props.onKeyDown(e);
    }
  };

  this.handleDayKeyDown = function (day, modifiers, e) {
    e.persist();
    switch (e.keyCode) {
      case _keys.LEFT:
        Helpers.cancelEvent(e);
        _this9.focusPreviousDay(e.target);
        break;
      case _keys.RIGHT:
        Helpers.cancelEvent(e);
        _this9.focusNextDay(e.target);
        break;
      case _keys.UP:
        Helpers.cancelEvent(e);
        _this9.focusPreviousWeek(e.target);
        break;
      case _keys.DOWN:
        Helpers.cancelEvent(e);
        _this9.focusNextWeek(e.target);
        break;
      case _keys.ENTER:
      case _keys.SPACE:
        Helpers.cancelEvent(e);
        if (_this9.props.onDayClick) {
          _this9.handleDayClick(day, modifiers, e);
        }
        break;
      default:
        break;
    }
    if (_this9.props.onDayKeyDown) {
      _this9.props.onDayKeyDown(day, modifiers, e);
    }
  };

  this.handleDayClick = function (day, modifiers, e) {
    e.persist();
    if (modifiers.outside) {
      _this9.handleOutsideDayClick(day);
    }
    if (_this9.props.onDayClick) {
      _this9.props.onDayClick(day, modifiers, e);
    }
  };

  this.handleDayMouseEnter = function (e, day, dayState) {
    _this9.setState({ hoveredDay: day });

    if (_this9.props.onDayMouseEnter) {
      _this9.props.onDayMouseEnter(e, day, dayState);
    }
  };

  this.handleDayMouseLeave = function (e, day, dayState) {
    _this9.setState({ hoveredDay: null });

    if (_this9.props.onDayMouseLeave) {
      _this9.props.onDayMouseLeave(e, day, dayState);
    }
  };

  this.handleTodayButtonClick = function (e) {
    var today = new Date();
    var month = new Date(today.getFullYear(), today.getMonth());
    _this9.showMonth(month);
    e.target.blur();
    if (_this9.props.onTodayButtonClick) {
      e.persist();
      _this9.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), ModifiersUtils.getModifiersForDay(today, _this9.props.modifiers), e);
    }
  };
};

exports.default = DayPicker;
DayPicker.propTypes = process.env.NODE_ENV !== "production" ? _defineProperty({
  // Rendering months
  initialMonth: _propTypes2.default.instanceOf(Date),
  month: _propTypes2.default.instanceOf(Date),
  numberOfMonths: _propTypes2.default.number,
  fromMonth: _propTypes2.default.instanceOf(Date),
  toMonth: _propTypes2.default.instanceOf(Date),
  canChangeMonth: _propTypes2.default.bool,
  reverseMonths: _propTypes2.default.bool,
  pagedNavigation: _propTypes2.default.bool,
  todayButton: _propTypes2.default.string,
  showWeekNumbers: _propTypes2.default.bool,
  showWeekDays: _propTypes2.default.bool,

  // Modifiers
  selectedDays: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.array]),
  disabledDays: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.array]),

  modifiers: _propTypes2.default.object,

  // Localization
  dir: _propTypes2.default.string,
  firstDayOfWeek: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5, 6]),
  labels: _propTypes2.default.shape({
    nextMonth: _propTypes2.default.string.isRequired,
    previousMonth: _propTypes2.default.string.isRequired
  }),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.shape({
    formatMonthTitle: _propTypes2.default.func,
    formatWeekdayShort: _propTypes2.default.func,
    formatWeekdayLong: _propTypes2.default.func,
    getFirstDayOfWeek: _propTypes2.default.func
  }),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),

  // Customization
  showOutsideDays: _propTypes2.default.bool,
  fixedWeeks: _propTypes2.default.bool,

  styling: _propTypes2.default.func,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.string,

  containerProps: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,

  // Custom elements
  renderDay: _propTypes2.default.func,
  renderWeek: _propTypes2.default.func,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),
  navbarElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),
  captionElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),

  // Events
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayKeyDown: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onDayMouseDown: _propTypes2.default.func,
  onDayMouseUp: _propTypes2.default.func,
  onDayTouchStart: _propTypes2.default.func,
  onDayTouchEnd: _propTypes2.default.func,
  onDayFocus: _propTypes2.default.func,
  onMonthChange: _propTypes2.default.func,
  onCaptionClick: _propTypes2.default.func,
  onWeekClick: _propTypes2.default.func,
  onTodayButtonClick: _propTypes2.default.func
}, 'theme', _propTypes2.default.any) : {};


DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(7);
var has = __webpack_require__(6);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(64);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(70);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(65);
var enumBugKeys = __webpack_require__(33);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(69).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(66)(false);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var component = /-?\d+(\.\d+)?%?/g;
function extractComponents(color) {
  return color.match(component);
}

module.exports = extractComponents;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  Used to create /lib/daypicker.min.js (e.g. for unpkg)
*/

/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = __webpack_require__(42).default;
DayPicker.Input = __webpack_require__(155).default;

module.exports = DayPicker;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleUtils = __webpack_require__(23);

var _LocaleUtils2 = _interopRequireDefault(_LocaleUtils);

var _keys = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(Caption, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locale !== this.props.locale || nextProps.styling !== this.props.styling || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === _keys.ENTER) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          styling = _props.styling,
          date = _props.date,
          months = _props.months,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        _extends({}, styling('dayPickerCaption', date, locale), { role: 'heading' }),
        _react2.default.createElement(
          'div',
          { onClick: onClick, onKeyUp: this.handleKeyUp },
          months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
        )
      );
    }
  }]);

  return Caption;
}(_react.Component);

Caption.defaultProps = {
  localeUtils: _LocaleUtils2.default
};
exports.default = Caption;
Caption.propTypes = process.env.NODE_ENV !== "production" ? {
  date: _propTypes2.default.instanceOf(Date),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  styling: _propTypes2.default.func
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStylingFromTheme = __webpack_require__(24);

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

var _keys = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          showPreviousButton = _props.showPreviousButton,
          showNextButton = _props.showNextButton,
          labels = _props.labels,
          dir = _props.dir,
          styling = _props.styling,
          theme = _props.theme;


      var previousClickHandler = void 0;
      var nextClickHandler = void 0;
      var previousKeyDownHandler = void 0;
      var nextKeyDownHandler = void 0;
      var shouldShowPrevious = void 0;
      var shouldShowNext = void 0;

      if (dir === 'rtl') {
        previousClickHandler = this.handleNextClick;
        nextClickHandler = this.handlePreviousClick;
        previousKeyDownHandler = this.handleNextKeyDown;
        nextKeyDownHandler = this.handlePreviousKeyDown;
        shouldShowNext = showPreviousButton;
        shouldShowPrevious = showNextButton;
      } else {
        previousClickHandler = this.handlePreviousClick;
        nextClickHandler = this.handleNextClick;
        previousKeyDownHandler = this.handlePreviousKeyDown;
        nextKeyDownHandler = this.handleNextKeyDown;
        shouldShowNext = showNextButton;
        shouldShowPrevious = showPreviousButton;
      }

      var navBarStyling = styling || (0, _createStylingFromTheme2.default)(theme);

      var previousButton = _react2.default.createElement('span', _extends({
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous'
      }, navBarStyling('dayPickerNavButton', 'prev', shouldShowPrevious), {
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined
      }));

      var nextButton = _react2.default.createElement('span', _extends({
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right'
      }, navBarStyling('dayPickerNavButton', 'next', shouldShowNext), {
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined
      }));

      return _react2.default.createElement(
        'div',
        navBarStyling('dayPickerNavBar', dir),
        dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.defaultProps = {
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
exports.default = Navbar;
Navbar.propTypes = process.env.NODE_ENV !== "production" ? {
  showPreviousButton: _propTypes2.default.bool,
  showNextButton: _propTypes2.default.bool,
  onPreviousClick: _propTypes2.default.func,
  onNextClick: _propTypes2.default.func,
  dir: _propTypes2.default.string,
  labels: _propTypes2.default.shape({
    previousMonth: _propTypes2.default.string.isRequired,
    nextMonth: _propTypes2.default.string.isRequired
  }),
  styling: _propTypes2.default.func,
  theme: _propTypes2.default.any
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase16Theme = exports.createStyling = exports.invertTheme = undefined;

var _typeof2 = __webpack_require__(58);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(85);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(90);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(98);

var _keys2 = _interopRequireDefault(_keys);

var _lodash = __webpack_require__(102);

var _lodash2 = _interopRequireDefault(_lodash);

var _base = __webpack_require__(103);

var base16 = _interopRequireWildcard(_base);

var _rgb2hex = __webpack_require__(141);

var _rgb2hex2 = _interopRequireDefault(_rgb2hex);

var _parse = __webpack_require__(142);

var _parse2 = _interopRequireDefault(_parse);

var _lodash3 = __webpack_require__(147);

var _lodash4 = _interopRequireDefault(_lodash3);

var _colorConverters = __webpack_require__(148);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_BASE16 = base16.default;

var BASE16_KEYS = (0, _keys2.default)(DEFAULT_BASE16);

// we need a correcting factor, so that a dark, but not black background color
// converts to bright enough inversed color
var flip = function flip(x) {
  return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
};

var invertColor = (0, _lodash4.default)(_parse2.default, _colorConverters.rgb2yuv, function (_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
      y = _ref2[0],
      u = _ref2[1],
      v = _ref2[2];

  return [flip(y), u, v];
}, _colorConverters.yuv2rgb, _rgb2hex2.default);

var merger = function merger(styling) {
  return function (prevStyling) {
    return {
      className: [prevStyling.className, styling.className].filter(Boolean).join(' '),
      style: (0, _extends3.default)({}, prevStyling.style || {}, styling.style || {})
    };
  };
};

var mergeStyling = function mergeStyling(customStyling, defaultStyling) {
  if (customStyling === undefined) {
    return defaultStyling;
  }
  if (defaultStyling === undefined) {
    return customStyling;
  }

  var customType = typeof customStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(customStyling);
  var defaultType = typeof defaultStyling === 'undefined' ? 'undefined' : (0, _typeof3.default)(defaultStyling);

  switch (customType) {
    case 'string':
      switch (defaultType) {
        case 'string':
          return [defaultStyling, customStyling].filter(Boolean).join(' ');
        case 'object':
          return merger({ className: customStyling, style: defaultStyling });
        case 'function':
          return function (styling) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            return merger({
              className: customStyling
            })(defaultStyling.apply(undefined, [styling].concat(args)));
          };
      }
    case 'object':
      switch (defaultType) {
        case 'string':
          return merger({ className: defaultStyling, style: customStyling });
        case 'object':
          return (0, _extends3.default)({}, defaultStyling, customStyling);
        case 'function':
          return function (styling) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            return merger({
              style: customStyling
            })(defaultStyling.apply(undefined, [styling].concat(args)));
          };
      }
    case 'function':
      switch (defaultType) {
        case 'string':
          return function (styling) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              args[_key3 - 1] = arguments[_key3];
            }

            return customStyling.apply(undefined, [merger(styling)({
              className: defaultStyling
            })].concat(args));
          };
        case 'object':
          return function (styling) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }

            return customStyling.apply(undefined, [merger(styling)({
              style: defaultStyling
            })].concat(args));
          };
        case 'function':
          return function (styling) {
            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              args[_key5 - 1] = arguments[_key5];
            }

            return customStyling.apply(undefined, [defaultStyling.apply(undefined, [styling].concat(args))].concat(args));
          };
      }
  }
};

var mergeStylings = function mergeStylings(customStylings, defaultStylings) {
  var keys = (0, _keys2.default)(defaultStylings);
  for (var key in customStylings) {
    if (keys.indexOf(key) === -1) keys.push(key);
  }

  return keys.reduce(function (mergedStyling, key) {
    return mergedStyling[key] = mergeStyling(customStylings[key], defaultStylings[key]), mergedStyling;
  }, {});
};

var getStylingByKeys = function getStylingByKeys(mergedStyling, keys) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  if (keys === null) {
    return mergedStyling;
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  var styles = keys.map(function (key) {
    return mergedStyling[key];
  }).filter(Boolean);

  var props = styles.reduce(function (obj, s) {
    if (typeof s === 'string') {
      obj.className = [obj.className, s].filter(Boolean).join(' ');
    } else if ((typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
      obj.style = (0, _extends3.default)({}, obj.style, s);
    } else if (typeof s === 'function') {
      obj = (0, _extends3.default)({}, obj, s.apply(undefined, [obj].concat(args)));
    }

    return obj;
  }, { className: '', style: {} });

  if (!props.className) {
    delete props.className;
  }

  if ((0, _keys2.default)(props.style).length === 0) {
    delete props.style;
  }

  return props;
};

var invertTheme = exports.invertTheme = function invertTheme(theme) {
  return (0, _keys2.default)(theme).reduce(function (t, key) {
    return t[key] = /^base/.test(key) ? invertColor(theme[key]) : key === 'scheme' ? theme[key] + ':inverted' : theme[key], t;
  }, {});
};

var createStyling = exports.createStyling = (0, _lodash2.default)(function (getStylingFromBase16) {
  for (var _len7 = arguments.length, args = Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
    args[_key7 - 3] = arguments[_key7];
  }

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var themeOrStyling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$defaultBase = options.defaultBase16,
      defaultBase16 = _options$defaultBase === undefined ? DEFAULT_BASE16 : _options$defaultBase,
      _options$base16Themes = options.base16Themes,
      base16Themes = _options$base16Themes === undefined ? null : _options$base16Themes;


  var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
  if (base16Theme) {
    themeOrStyling = (0, _extends3.default)({}, base16Theme, themeOrStyling);
  }

  var theme = BASE16_KEYS.reduce(function (t, key) {
    return t[key] = themeOrStyling[key] || defaultBase16[key], t;
  }, {});

  var customStyling = (0, _keys2.default)(themeOrStyling).reduce(function (s, key) {
    return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
  }, {});

  var defaultStyling = getStylingFromBase16(theme);

  var mergedStyling = mergeStylings(customStyling, defaultStyling);

  return (0, _lodash2.default)(getStylingByKeys, 2).apply(undefined, [mergedStyling].concat(args));
}, 3);

var getBase16Theme = exports.getBase16Theme = function getBase16Theme(theme, base16Themes) {
  if (theme && theme.extend) {
    theme = theme.extend;
  }

  if (typeof theme === 'string') {
    var _theme$split = theme.split(':'),
        _theme$split2 = (0, _slicedToArray3.default)(_theme$split, 2),
        themeName = _theme$split2[0],
        modifier = _theme$split2[1];

    theme = (base16Themes || {})[themeName] || base16[themeName];
    if (modifier === 'inverted') {
      theme = invertTheme(theme);
    }
  }

  return theme && theme.hasOwnProperty('base00') ? theme : undefined;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(59);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(74);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(36);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(63);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(15);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(67);
var toAbsoluteIndex = __webpack_require__(68);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(31)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(73);
var Iterators = __webpack_require__(14);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(43)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(46);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(32);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(20);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(78);
var isArray = __webpack_require__(79);
var anObject = __webpack_require__(13);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(47);
var gOPNExt = __webpack_require__(80);
var $GOPD = __webpack_require__(81);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(15);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(21).f = $propertyIsEnumerable;
  __webpack_require__(39).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(28)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(18);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(21);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(30);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(50).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(21);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(44);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(17);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(89) });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(21);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(49);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(10)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(91);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(94);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(25);
module.exports = __webpack_require__(93);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(25);
module.exports = __webpack_require__(96);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var get = __webpack_require__(97);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(35);
var $keys = __webpack_require__(15);

__webpack_require__(101)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(17);
var core = __webpack_require__(0);
var fails = __webpack_require__(10);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = (function() {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return (name && name.length > 2) ? func : undefined;
}());

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
  var source = (reference + '');
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _threezerotwofour = __webpack_require__(104);

exports.threezerotwofour = _interopRequire(_threezerotwofour);

var _apathy = __webpack_require__(105);

exports.apathy = _interopRequire(_apathy);

var _ashes = __webpack_require__(106);

exports.ashes = _interopRequire(_ashes);

var _atelierDune = __webpack_require__(107);

exports.atelierDune = _interopRequire(_atelierDune);

var _atelierForest = __webpack_require__(108);

exports.atelierForest = _interopRequire(_atelierForest);

var _atelierHeath = __webpack_require__(109);

exports.atelierHeath = _interopRequire(_atelierHeath);

var _atelierLakeside = __webpack_require__(110);

exports.atelierLakeside = _interopRequire(_atelierLakeside);

var _atelierSeaside = __webpack_require__(111);

exports.atelierSeaside = _interopRequire(_atelierSeaside);

var _bespin = __webpack_require__(112);

exports.bespin = _interopRequire(_bespin);

var _brewer = __webpack_require__(113);

exports.brewer = _interopRequire(_brewer);

var _bright = __webpack_require__(114);

exports.bright = _interopRequire(_bright);

var _chalk = __webpack_require__(115);

exports.chalk = _interopRequire(_chalk);

var _codeschool = __webpack_require__(116);

exports.codeschool = _interopRequire(_codeschool);

var _colors = __webpack_require__(117);

exports.colors = _interopRequire(_colors);

var _default = __webpack_require__(118);

exports['default'] = _interopRequire(_default);

var _eighties = __webpack_require__(119);

exports.eighties = _interopRequire(_eighties);

var _embers = __webpack_require__(120);

exports.embers = _interopRequire(_embers);

var _flat = __webpack_require__(121);

exports.flat = _interopRequire(_flat);

var _google = __webpack_require__(122);

exports.google = _interopRequire(_google);

var _grayscale = __webpack_require__(123);

exports.grayscale = _interopRequire(_grayscale);

var _greenscreen = __webpack_require__(124);

exports.greenscreen = _interopRequire(_greenscreen);

var _harmonic = __webpack_require__(125);

exports.harmonic = _interopRequire(_harmonic);

var _hopscotch = __webpack_require__(126);

exports.hopscotch = _interopRequire(_hopscotch);

var _isotope = __webpack_require__(127);

exports.isotope = _interopRequire(_isotope);

var _marrakesh = __webpack_require__(128);

exports.marrakesh = _interopRequire(_marrakesh);

var _mocha = __webpack_require__(129);

exports.mocha = _interopRequire(_mocha);

var _monokai = __webpack_require__(130);

exports.monokai = _interopRequire(_monokai);

var _ocean = __webpack_require__(131);

exports.ocean = _interopRequire(_ocean);

var _paraiso = __webpack_require__(132);

exports.paraiso = _interopRequire(_paraiso);

var _pop = __webpack_require__(133);

exports.pop = _interopRequire(_pop);

var _railscasts = __webpack_require__(134);

exports.railscasts = _interopRequire(_railscasts);

var _shapeshifter = __webpack_require__(135);

exports.shapeshifter = _interopRequire(_shapeshifter);

var _solarized = __webpack_require__(136);

exports.solarized = _interopRequire(_solarized);

var _summerfruit = __webpack_require__(137);

exports.summerfruit = _interopRequire(_summerfruit);

var _tomorrow = __webpack_require__(138);

exports.tomorrow = _interopRequire(_tomorrow);

var _tube = __webpack_require__(139);

exports.tube = _interopRequire(_tube);

var _twilight = __webpack_require__(140);

exports.twilight = _interopRequire(_twilight);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'threezerotwofour',
  author: 'jan t. sott (http://github.com/idleberg)',
  base00: '#090300',
  base01: '#3a3432',
  base02: '#4a4543',
  base03: '#5c5855',
  base04: '#807d7c',
  base05: '#a5a2a2',
  base06: '#d6d5d4',
  base07: '#f7f7f7',
  base08: '#db2d20',
  base09: '#e8bbd0',
  base0A: '#fded02',
  base0B: '#01a252',
  base0C: '#b5e4f4',
  base0D: '#01a0e4',
  base0E: '#a16a94',
  base0F: '#cdab53'
};
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'apathy',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#031A16',
  base01: '#0B342D',
  base02: '#184E45',
  base03: '#2B685E',
  base04: '#5F9C92',
  base05: '#81B5AC',
  base06: '#A7CEC8',
  base07: '#D2E7E4',
  base08: '#3E9688',
  base09: '#3E7996',
  base0A: '#3E4C96',
  base0B: '#883E96',
  base0C: '#963E4C',
  base0D: '#96883E',
  base0E: '#4C963E',
  base0F: '#3E965B'
};
module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'ashes',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#1C2023',
  base01: '#393F45',
  base02: '#565E65',
  base03: '#747C84',
  base04: '#ADB3BA',
  base05: '#C7CCD1',
  base06: '#DFE2E5',
  base07: '#F3F4F5',
  base08: '#C7AE95',
  base09: '#C7C795',
  base0A: '#AEC795',
  base0B: '#95C7AE',
  base0C: '#95AEC7',
  base0D: '#AE95C7',
  base0E: '#C795AE',
  base0F: '#C79595'
};
module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier dune',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
  base00: '#20201d',
  base01: '#292824',
  base02: '#6e6b5e',
  base03: '#7d7a68',
  base04: '#999580',
  base05: '#a6a28c',
  base06: '#e8e4cf',
  base07: '#fefbec',
  base08: '#d73737',
  base09: '#b65611',
  base0A: '#cfb017',
  base0B: '#60ac39',
  base0C: '#1fad83',
  base0D: '#6684e1',
  base0E: '#b854d4',
  base0F: '#d43552'
};
module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier forest',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
  base00: '#1b1918',
  base01: '#2c2421',
  base02: '#68615e',
  base03: '#766e6b',
  base04: '#9c9491',
  base05: '#a8a19f',
  base06: '#e6e2e0',
  base07: '#f1efee',
  base08: '#f22c40',
  base09: '#df5320',
  base0A: '#d5911a',
  base0B: '#5ab738',
  base0C: '#00ad9c',
  base0D: '#407ee7',
  base0E: '#6666ea',
  base0F: '#c33ff3'
};
module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier heath',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
  base00: '#1b181b',
  base01: '#292329',
  base02: '#695d69',
  base03: '#776977',
  base04: '#9e8f9e',
  base05: '#ab9bab',
  base06: '#d8cad8',
  base07: '#f7f3f7',
  base08: '#ca402b',
  base09: '#a65926',
  base0A: '#bb8a35',
  base0B: '#379a37',
  base0C: '#159393',
  base0D: '#516aec',
  base0E: '#7b59c0',
  base0F: '#cc33cc'
};
module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier lakeside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
  base00: '#161b1d',
  base01: '#1f292e',
  base02: '#516d7b',
  base03: '#5a7b8c',
  base04: '#7195a8',
  base05: '#7ea2b4',
  base06: '#c1e4f6',
  base07: '#ebf8ff',
  base08: '#d22d72',
  base09: '#935c25',
  base0A: '#8a8a0f',
  base0B: '#568c3b',
  base0C: '#2d8f6f',
  base0D: '#257fad',
  base0E: '#5d5db1',
  base0F: '#b72dd2'
};
module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'atelier seaside',
  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
  base00: '#131513',
  base01: '#242924',
  base02: '#5e6e5e',
  base03: '#687d68',
  base04: '#809980',
  base05: '#8ca68c',
  base06: '#cfe8cf',
  base07: '#f0fff0',
  base08: '#e6193c',
  base09: '#87711d',
  base0A: '#c3c322',
  base0B: '#29a329',
  base0C: '#1999b3',
  base0D: '#3d62f5',
  base0E: '#ad2bee',
  base0F: '#e619c3'
};
module.exports = exports['default'];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'bespin',
  author: 'jan t. sott',
  base00: '#28211c',
  base01: '#36312e',
  base02: '#5e5d5c',
  base03: '#666666',
  base04: '#797977',
  base05: '#8a8986',
  base06: '#9d9b97',
  base07: '#baae9e',
  base08: '#cf6a4c',
  base09: '#cf7d34',
  base0A: '#f9ee98',
  base0B: '#54be0d',
  base0C: '#afc4db',
  base0D: '#5ea6ea',
  base0E: '#9b859d',
  base0F: '#937121'
};
module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'brewer',
  author: 'timothée poisot (http://github.com/tpoisot)',
  base00: '#0c0d0e',
  base01: '#2e2f30',
  base02: '#515253',
  base03: '#737475',
  base04: '#959697',
  base05: '#b7b8b9',
  base06: '#dadbdc',
  base07: '#fcfdfe',
  base08: '#e31a1c',
  base09: '#e6550d',
  base0A: '#dca060',
  base0B: '#31a354',
  base0C: '#80b1d3',
  base0D: '#3182bd',
  base0E: '#756bb1',
  base0F: '#b15928'
};
module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'bright',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#303030',
  base02: '#505050',
  base03: '#b0b0b0',
  base04: '#d0d0d0',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ffffff',
  base08: '#fb0120',
  base09: '#fc6d24',
  base0A: '#fda331',
  base0B: '#a1c659',
  base0C: '#76c7b7',
  base0D: '#6fb3d2',
  base0E: '#d381c3',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'chalk',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#f5f5f5',
  base08: '#fb9fb1',
  base09: '#eda987',
  base0A: '#ddb26f',
  base0B: '#acc267',
  base0C: '#12cfc0',
  base0D: '#6fc2ef',
  base0E: '#e1a3ee',
  base0F: '#deaf8f'
};
module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'codeschool',
  author: 'brettof86',
  base00: '#232c31',
  base01: '#1c3657',
  base02: '#2a343a',
  base03: '#3f4944',
  base04: '#84898c',
  base05: '#9ea7a6',
  base06: '#a7cfa3',
  base07: '#b5d8f6',
  base08: '#2a5491',
  base09: '#43820d',
  base0A: '#a03b1e',
  base0B: '#237986',
  base0C: '#b02f30',
  base0D: '#484d79',
  base0E: '#c59820',
  base0F: '#c98344'
};
module.exports = exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'colors',
  author: 'mrmrs (http://clrs.cc)',
  base00: '#111111',
  base01: '#333333',
  base02: '#555555',
  base03: '#777777',
  base04: '#999999',
  base05: '#bbbbbb',
  base06: '#dddddd',
  base07: '#ffffff',
  base08: '#ff4136',
  base09: '#ff851b',
  base0A: '#ffdc00',
  base0B: '#2ecc40',
  base0C: '#7fdbff',
  base0D: '#0074d9',
  base0E: '#b10dc9',
  base0F: '#85144b'
};
module.exports = exports['default'];

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'default',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#181818',
  base01: '#282828',
  base02: '#383838',
  base03: '#585858',
  base04: '#b8b8b8',
  base05: '#d8d8d8',
  base06: '#e8e8e8',
  base07: '#f8f8f8',
  base08: '#ab4642',
  base09: '#dc9656',
  base0A: '#f7ca88',
  base0B: '#a1b56c',
  base0C: '#86c1b9',
  base0D: '#7cafc2',
  base0E: '#ba8baf',
  base0F: '#a16946'
};
module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'eighties',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2d2d2d',
  base01: '#393939',
  base02: '#515151',
  base03: '#747369',
  base04: '#a09f93',
  base05: '#d3d0c8',
  base06: '#e8e6df',
  base07: '#f2f0ec',
  base08: '#f2777a',
  base09: '#f99157',
  base0A: '#ffcc66',
  base0B: '#99cc99',
  base0C: '#66cccc',
  base0D: '#6699cc',
  base0E: '#cc99cc',
  base0F: '#d27b53'
};
module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'embers',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#16130F',
  base01: '#2C2620',
  base02: '#433B32',
  base03: '#5A5047',
  base04: '#8A8075',
  base05: '#A39A90',
  base06: '#BEB6AE',
  base07: '#DBD6D1',
  base08: '#826D57',
  base09: '#828257',
  base0A: '#6D8257',
  base0B: '#57826D',
  base0C: '#576D82',
  base0D: '#6D5782',
  base0E: '#82576D',
  base0F: '#825757'
};
module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'flat',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2C3E50',
  base01: '#34495E',
  base02: '#7F8C8D',
  base03: '#95A5A6',
  base04: '#BDC3C7',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ECF0F1',
  base08: '#E74C3C',
  base09: '#E67E22',
  base0A: '#F1C40F',
  base0B: '#2ECC71',
  base0C: '#1ABC9C',
  base0D: '#3498DB',
  base0E: '#9B59B6',
  base0F: '#be643c'
};
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED'
};
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'grayscale',
  author: 'alexandre gavioli (https://github.com/alexx2/)',
  base00: '#101010',
  base01: '#252525',
  base02: '#464646',
  base03: '#525252',
  base04: '#ababab',
  base05: '#b9b9b9',
  base06: '#e3e3e3',
  base07: '#f7f7f7',
  base08: '#7c7c7c',
  base09: '#999999',
  base0A: '#a0a0a0',
  base0B: '#8e8e8e',
  base0C: '#868686',
  base0D: '#686868',
  base0E: '#747474',
  base0F: '#5e5e5e'
};
module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'green screen',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#001100',
  base01: '#003300',
  base02: '#005500',
  base03: '#007700',
  base04: '#009900',
  base05: '#00bb00',
  base06: '#00dd00',
  base07: '#00ff00',
  base08: '#007700',
  base09: '#009900',
  base0A: '#007700',
  base0B: '#00bb00',
  base0C: '#005500',
  base0D: '#009900',
  base0E: '#00bb00',
  base0F: '#005500'
};
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'harmonic16',
  author: 'jannik siebert (https://github.com/janniks)',
  base00: '#0b1c2c',
  base01: '#223b54',
  base02: '#405c79',
  base03: '#627e99',
  base04: '#aabcce',
  base05: '#cbd6e2',
  base06: '#e5ebf1',
  base07: '#f7f9fb',
  base08: '#bf8b56',
  base09: '#bfbf56',
  base0A: '#8bbf56',
  base0B: '#56bf8b',
  base0C: '#568bbf',
  base0D: '#8b56bf',
  base0E: '#bf568b',
  base0F: '#bf5656'
};
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'hopscotch',
  author: 'jan t. sott',
  base00: '#322931',
  base01: '#433b42',
  base02: '#5c545b',
  base03: '#797379',
  base04: '#989498',
  base05: '#b9b5b8',
  base06: '#d5d3d5',
  base07: '#ffffff',
  base08: '#dd464c',
  base09: '#fd8b19',
  base0A: '#fdcc59',
  base0B: '#8fc13e',
  base0C: '#149b93',
  base0D: '#1290bf',
  base0E: '#c85e7c',
  base0F: '#b33508'
};
module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'isotope',
  author: 'jan t. sott',
  base00: '#000000',
  base01: '#404040',
  base02: '#606060',
  base03: '#808080',
  base04: '#c0c0c0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#ff0000',
  base09: '#ff9900',
  base0A: '#ff0099',
  base0B: '#33ff00',
  base0C: '#00ffff',
  base0D: '#0066ff',
  base0E: '#cc00ff',
  base0F: '#3300ff'
};
module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'marrakesh',
  author: 'alexandre gavioli (http://github.com/alexx2/)',
  base00: '#201602',
  base01: '#302e00',
  base02: '#5f5b17',
  base03: '#6c6823',
  base04: '#86813b',
  base05: '#948e48',
  base06: '#ccc37a',
  base07: '#faf0a5',
  base08: '#c35359',
  base09: '#b36144',
  base0A: '#a88339',
  base0B: '#18974e',
  base0C: '#75a738',
  base0D: '#477ca1',
  base0E: '#8868b3',
  base0F: '#b3588e'
};
module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'mocha',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#3B3228',
  base01: '#534636',
  base02: '#645240',
  base03: '#7e705a',
  base04: '#b8afad',
  base05: '#d0c8c6',
  base06: '#e9e1dd',
  base07: '#f5eeeb',
  base08: '#cb6077',
  base09: '#d28b71',
  base0A: '#f4bc87',
  base0B: '#beb55b',
  base0C: '#7bbda4',
  base0D: '#8ab3b5',
  base0E: '#a89bb9',
  base0F: '#bb9584'
};
module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'ocean',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2b303b',
  base01: '#343d46',
  base02: '#4f5b66',
  base03: '#65737e',
  base04: '#a7adba',
  base05: '#c0c5ce',
  base06: '#dfe1e8',
  base07: '#eff1f5',
  base08: '#bf616a',
  base09: '#d08770',
  base0A: '#ebcb8b',
  base0B: '#a3be8c',
  base0C: '#96b5b4',
  base0D: '#8fa1b3',
  base0E: '#b48ead',
  base0F: '#ab7967'
};
module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'paraiso',
  author: 'jan t. sott',
  base00: '#2f1e2e',
  base01: '#41323f',
  base02: '#4f424c',
  base03: '#776e71',
  base04: '#8d8687',
  base05: '#a39e9b',
  base06: '#b9b6b0',
  base07: '#e7e9db',
  base08: '#ef6155',
  base09: '#f99b15',
  base0A: '#fec418',
  base0B: '#48b685',
  base0C: '#5bc4bf',
  base0D: '#06b6ef',
  base0E: '#815ba4',
  base0F: '#e96ba8'
};
module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'pop',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#000000',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#b0b0b0',
  base05: '#d0d0d0',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#eb008a',
  base09: '#f29333',
  base0A: '#f8ca12',
  base0B: '#37b349',
  base0C: '#00aabb',
  base0D: '#0e5a94',
  base0E: '#b31e8d',
  base0F: '#7a2d00'
};
module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'railscasts',
  author: 'ryan bates (http://railscasts.com)',
  base00: '#2b2b2b',
  base01: '#272935',
  base02: '#3a4055',
  base03: '#5a647e',
  base04: '#d4cfc9',
  base05: '#e6e1dc',
  base06: '#f4f1ed',
  base07: '#f9f7f3',
  base08: '#da4939',
  base09: '#cc7833',
  base0A: '#ffc66d',
  base0B: '#a5c261',
  base0C: '#519f50',
  base0D: '#6d9cbe',
  base0E: '#b6b3eb',
  base0F: '#bc9458'
};
module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'shapeshifter',
  author: 'tyler benziger (http://tybenz.com)',
  base00: '#000000',
  base01: '#040404',
  base02: '#102015',
  base03: '#343434',
  base04: '#555555',
  base05: '#ababab',
  base06: '#e0e0e0',
  base07: '#f9f9f9',
  base08: '#e92f2f',
  base09: '#e09448',
  base0A: '#dddd13',
  base0B: '#0ed839',
  base0C: '#23edda',
  base0D: '#3b48e3',
  base0E: '#f996e2',
  base0F: '#69542d'
};
module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'solarized',
  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
  base00: '#002b36',
  base01: '#073642',
  base02: '#586e75',
  base03: '#657b83',
  base04: '#839496',
  base05: '#93a1a1',
  base06: '#eee8d5',
  base07: '#fdf6e3',
  base08: '#dc322f',
  base09: '#cb4b16',
  base0A: '#b58900',
  base0B: '#859900',
  base0C: '#2aa198',
  base0D: '#268bd2',
  base0E: '#6c71c4',
  base0F: '#d33682'
};
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'summerfruit',
  author: 'christopher corley (http://cscorley.github.io/)',
  base00: '#151515',
  base01: '#202020',
  base02: '#303030',
  base03: '#505050',
  base04: '#B0B0B0',
  base05: '#D0D0D0',
  base06: '#E0E0E0',
  base07: '#FFFFFF',
  base08: '#FF0086',
  base09: '#FD8900',
  base0A: '#ABA800',
  base0B: '#00C918',
  base0C: '#1faaaa',
  base0D: '#3777E6',
  base0E: '#AD00A1',
  base0F: '#cc6633'
};
module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'tomorrow',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#cc6666',
  base09: '#de935f',
  base0A: '#f0c674',
  base0B: '#b5bd68',
  base0C: '#8abeb7',
  base0D: '#81a2be',
  base0E: '#b294bb',
  base0F: '#a3685a'
};
module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'london tube',
  author: 'jan t. sott',
  base00: '#231f20',
  base01: '#1c3f95',
  base02: '#5a5758',
  base03: '#737171',
  base04: '#959ca1',
  base05: '#d9d8d8',
  base06: '#e7e7e8',
  base07: '#ffffff',
  base08: '#ee2e24',
  base09: '#f386a1',
  base0A: '#ffd204',
  base0B: '#00853e',
  base0C: '#85cebc',
  base0D: '#009ddc',
  base0E: '#98005d',
  base0F: '#b06110'
};
module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  scheme: 'twilight',
  author: 'david hart (http://hart-dev.com)',
  base00: '#1e1e1e',
  base01: '#323537',
  base02: '#464b50',
  base03: '#5f5a60',
  base04: '#838184',
  base05: '#a7a7a7',
  base06: '#c3c3c3',
  base07: '#ffffff',
  base08: '#cf6a4c',
  base09: '#cda869',
  base0A: '#f9ee98',
  base0B: '#8f9d6a',
  base0C: '#afc4db',
  base0D: '#7587a6',
  base0E: '#9b859d',
  base0F: '#9b703f'
};
module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var clamp = __webpack_require__(40);

function componentToHex(c) {
  var value = Math.round(clamp(c, 0, 255));
  var hex   = value.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

function rgb2hex(rgb) {
  var alpha = rgb.length === 4 ? componentToHex(rgb[3] * 255) : "";

  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]) + alpha;
}

module.exports = rgb2hex;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var hsl = __webpack_require__(143);
var hex = __webpack_require__(144);
var rgb = __webpack_require__(145);
var hsl2rgb = __webpack_require__(146);

function hsl2rgbParse(color) {
  var h = hsl(color);
  var r = hsl2rgb(h);

  // handle alpha since hsl2rgb doesn't know (or care!) about it
  if(h.length === 4) {
    r.push(h[3]);
  }

  return r;
}

var space2parser = {
  "#" : hex,
  "hsl" : hsl2rgbParse,
  "rgb" : rgb
};

function parse(color) {
  for(var scheme in space2parser) {
    if(color.indexOf(scheme) === 0) {
      return space2parser[scheme](color);
    }
  }
}

parse.rgb = rgb;
parse.hsl = hsl;
parse.hex = hex;

module.exports = parse;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var extractComponents = __webpack_require__(53);
var clamp = __webpack_require__(40);

function parseHslComponent(component, i) {
  component = parseFloat(component);

  switch(i) {
    case 0:
      return clamp(component, 0, 360);
    case 1:
    case 2:
      return clamp(component, 0, 100);
    case 3:
      return clamp(component, 0, 1);
  }
}

function hsl(color) {
  return extractComponents(color).map(parseHslComponent);
}

module.exports = hsl;

/***/ }),
/* 144 */
/***/ (function(module, exports) {

function expand(hex) {
  var result = "#";

  for (var i = 1; i < hex.length; i++) {
    var val = hex.charAt(i);
    result += val + val;
  }

  return result;
}

function hex(hex) {
  // #RGB or #RGBA
  if(hex.length === 4 || hex.length === 5) {
    hex = expand(hex);
  }

  var rgb = [
    parseInt(hex.substring(1,3), 16),
    parseInt(hex.substring(3,5), 16),
    parseInt(hex.substring(5,7), 16)
  ];

  // #RRGGBBAA
  if (hex.length === 9) {
    var alpha = parseFloat((parseInt(hex.substring(7,9), 16) / 255).toFixed(2));
    rgb.push(alpha);
  }

  return rgb;
}

module.exports = hex;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var extractComponents = __webpack_require__(53);
var clamp = __webpack_require__(40);

function parseRgbComponent(component, i) {
  if (i < 3) {
    if (component.indexOf('%') != -1) {
      return Math.round(255 * clamp(parseInt(component, 10), 0, 100)/100);
    } else {
      return clamp(parseInt(component, 10), 0, 255);
    }
  } else {
    return clamp(parseFloat(component), 0, 1);
  } 
}

function rgb(color) {
  return extractComponents(color).map(parseRgbComponent);
}

module.exports = rgb;

/***/ }),
/* 146 */
/***/ (function(module, exports) {

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

module.exports = hsl2rgb;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return baseRest(function(funcs) {
    funcs = baseFlatten(funcs, 1);

    var length = funcs.length,
        index = length;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      if (typeof funcs[index] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    return function() {
      var index = 0,
          result = length ? funcs[index].apply(this, arguments) : arguments[0];

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yuv2rgb = yuv2rgb;
exports.rgb2yuv = rgb2yuv;
function yuv2rgb(yuv) {
  var y = yuv[0],
      u = yuv[1],
      v = yuv[2],
      r,
      g,
      b;

  r = y * 1 + u * 0 + v * 1.13983;
  g = y * 1 + u * -0.39465 + v * -0.58060;
  b = y * 1 + u * 2.02311 + v * 0;

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function rgb2yuv(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  var y = r * 0.299 + g * 0.587 + b * 0.114;
  var u = r * -0.14713 + g * -0.28886 + b * 0.436;
  var v = r * 0.615 + g * -0.51499 + b * -0.10001;

  return [y, u, v];
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  scheme: 'Tomorrow',
  author: 'Chris Kempson (http://chriskempson.com)',
  base00: '#ffffff',
  base01: '#e0e0e0',
  base02: '#d6d6d6',
  base03: '#8e908c',
  base04: '#969896',
  base05: '#4d4d4c',
  base06: '#282a2e',
  base07: '#1d1f21',
  base08: '#c82829',
  base09: '#f5871f',
  base0A: '#eab700',
  base0B: '#718c00',
  base0C: '#3e999f',
  base0D: '#4271ae',
  base0E: '#8959a8',
  base0F: '#a3685a'
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Weekdays = __webpack_require__(151);

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Day = __webpack_require__(152);

var _Day2 = _interopRequireDefault(_Day);

var _keys = __webpack_require__(12);

var _ModifiersUtils = __webpack_require__(41);

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _Helpers = __webpack_require__(22);

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(16);

var DateUtils = _interopRequireWildcard(_DateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.dayRefs = [], _this.renderDay = function (day) {
      var monthNumber = _this.props.month.getMonth();
      var propModifiers = Helpers.getModifiersFromProps(_this.props);
      var dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
      if (DateUtils.isSameDay(day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, 'today')) {
        dayModifiers.push('today');
      }
      if (day.getMonth() !== monthNumber) {
        dayModifiers.push('outside');
      }

      var isOutside = day.getMonth() !== monthNumber;
      var tabIndex = -1;
      // Focus on the first day of the month
      if (_this.props.onDayClick && !isOutside && day.getDate() === 1) {
        tabIndex = _this.props.tabIndex; // eslint-disable-line prefer-destructuring
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return _react2.default.createElement(
        _Day2.default,
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          styling: _this.props.styling,
          day: day,
          dayRef: _this.props.dayRef,
          modifiers: modifiers,
          modifiersStyles: _this.props.modifiersStyles,
          empty: isOutside && !_this.props.showOutsideDays && !_this.props.fixedWeeks,
          tabIndex: tabIndex,
          ariaLabel: _this.props.localeUtils.formatDay(day, _this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf('disabled') > -1,
          ariaSelected: dayModifiers.indexOf('selected') > -1,
          onClick: _this.props.onDayClick,
          onFocus: _this.props.onDayFocus,
          onKeyDown: _this.props.onDayKeyDown,
          onMouseEnter: _this.props.onDayMouseEnter,
          onMouseLeave: _this.props.onDayMouseLeave,
          onMouseDown: _this.props.onDayMouseDown,
          onMouseUp: _this.props.onDayMouseUp,
          onTouchEnd: _this.props.onDayTouchEnd,
          onTouchStart: _this.props.onDayTouchStart
        },
        _this.props.renderDay(day, modifiers)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Month, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          styling = _props.styling,
          month = _props.month,
          months = _props.months,
          fixedWeeks = _props.fixedWeeks,
          captionElement = _props.captionElement,
          weekdayElement = _props.weekdayElement,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          firstDayOfWeek = _props.firstDayOfWeek,
          onCaptionClick = _props.onCaptionClick,
          showWeekNumbers = _props.showWeekNumbers,
          showWeekDays = _props.showWeekDays,
          onWeekClick = _props.onWeekClick;


      var captionProps = {
        date: month,
        styling: styling,
        months: months,
        localeUtils: localeUtils,
        locale: locale,
        onClick: onCaptionClick ? function (e) {
          return onCaptionClick(month, e);
        } : undefined
      };
      var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

      var weeks = Helpers.getWeekArray(month, firstDayOfWeek, fixedWeeks);
      return _react2.default.createElement(
        'div',
        _extends({}, styling('dayPickerMonth', locale), { role: 'grid' }),
        caption,
        showWeekDays && _react2.default.createElement(_Weekdays2.default, {
          styling: styling,
          weekdaysShort: weekdaysShort,
          weekdaysLong: weekdaysLong,
          firstDayOfWeek: firstDayOfWeek,
          showWeekNumbers: showWeekNumbers,
          locale: locale,
          localeUtils: localeUtils,
          weekdayElement: weekdayElement
        }),
        _react2.default.createElement(
          'div',
          _extends({}, styling('dayPickerMonthWrapper', locale), { role: 'rowgroup' }),
          weeks.map(function (week, i) {
            var weekNumber = void 0;
            if (showWeekNumbers) {
              weekNumber = DateUtils.getWeekNumber(week[0]);
            }
            return _react2.default.createElement(
              'div',
              _extends({
                key: week[0].getTime()
              }, styling('dayPickerWeek', i, locale), {
                role: 'row'
              }),
              showWeekNumbers && _react2.default.createElement(
                'div',
                _extends({}, styling('dayPickerWeekNumber', locale), {
                  tabIndex: 0,
                  role: 'gridcell',
                  onClick: onWeekClick ? function (e) {
                    return onWeekClick(weekNumber, week, e);
                  } : undefined,
                  onKeyUp: onWeekClick ? function (e) {
                    return e.keyCode === _keys.ENTER && onWeekClick(weekNumber, week, e);
                  } : undefined
                }),
                _this2.props.renderWeek(weekNumber, week, month)
              ),
              week.map(_this2.renderDay)
            );
          })
        )
      );
    }
  }]);

  return Month;
}(_react.Component);

exports.default = Month;
Month.propTypes = process.env.NODE_ENV !== "production" ? {
  styling: _propTypes2.default.func.isRequired,
  tabIndex: _propTypes2.default.number,

  month: _propTypes2.default.instanceOf(Date).isRequired,
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),

  modifiersStyles: _propTypes2.default.object,

  showWeekDays: _propTypes2.default.bool,
  showOutsideDays: _propTypes2.default.bool,

  renderDay: _propTypes2.default.func.isRequired,
  renderWeek: _propTypes2.default.func.isRequired,

  captionElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)]).isRequired,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)]),

  fixedWeeks: _propTypes2.default.bool,
  showWeekNumbers: _propTypes2.default.bool,

  locale: _propTypes2.default.string.isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),
  firstDayOfWeek: _propTypes2.default.number.isRequired,

  onCaptionClick: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayFocus: _propTypes2.default.func,
  onDayKeyDown: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onDayMouseDown: _propTypes2.default.func,
  onDayMouseUp: _propTypes2.default.func,
  onDayTouchEnd: _propTypes2.default.func,
  onDayTouchStart: _propTypes2.default.func,
  onWeekClick: _propTypes2.default.func,

  dayRef: _propTypes2.default.func.isRequired
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekdays = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
  }

  _createClass(Weekdays, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          firstDayOfWeek = _props.firstDayOfWeek,
          showWeekNumbers = _props.showWeekNumbers,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdayElement = _props.weekdayElement,
          styling = _props.styling;

      var days = [];
      for (var i = 0; i < 7; i += 1) {
        var weekday = (i + firstDayOfWeek) % 7;
        var elementProps = {
          key: i,
          weekday: weekday,
          weekdaysLong: weekdaysLong,
          weekdaysShort: weekdaysShort,
          localeUtils: localeUtils,
          locale: locale,
          styling: styling
        };
        var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
        days.push(element);
      }

      return _react2.default.createElement(
        'div',
        _extends({}, styling('dayPickerWeekdays', locale), { role: 'rowgroup' }),
        _react2.default.createElement(
          'div',
          _extends({}, styling('dayPickerWeekdaysRow', locale), { role: 'row' }),
          showWeekNumbers && _react2.default.createElement('div', styling('dayPickerWeekday', locale)),
          days
        )
      );
    }
  }]);

  return Weekdays;
}(_react.Component);

exports.default = Weekdays;
Weekdays.propTypes = process.env.NODE_ENV !== "production" ? {
  styling: _propTypes2.default.func.isRequired,

  firstDayOfWeek: _propTypes2.default.number.isRequired,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),
  showWeekNumbers: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)])
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateUtils = __webpack_require__(16);

var _Helpers = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var propNames = Object.keys(this.props);
      var nextPropNames = Object.keys(nextProps);
      if (propNames.length !== nextPropNames.length) {
        return true;
      }
      return propNames.some(function (name) {
        if (name === 'modifiers') {
          var prop = _this2.props[name];
          var nextProp = nextProps[name];
          var modifiers = Object.keys(prop);
          var nextModifiers = Object.keys(nextProp);
          if (modifiers.length !== nextModifiers.length) {
            return true;
          }
          return modifiers.some(function (mod) {
            return !(0, _Helpers.hasOwnProp)(nextProp, mod) || prop[mod] !== nextProp[mod];
          });
        }
        if (name === 'day') {
          return !(0, _DateUtils.isSameDay)(_this2.props[name], nextProps[name]);
        }
        return !(0, _Helpers.hasOwnProp)(nextProps, name) || _this2.props[name] !== nextProps[name];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          styling = _props.styling,
          day = _props.day,
          tabIndex = _props.tabIndex,
          empty = _props.empty,
          modifiers = _props.modifiers,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onFocus = _props.onFocus,
          ariaLabel = _props.ariaLabel,
          ariaDisabled = _props.ariaDisabled,
          ariaSelected = _props.ariaSelected,
          children = _props.children,
          dayRef = _props.dayRef;


      if (empty) {
        return _react2.default.createElement('div', _extends({ 'aria-disabled': true }, styling('dayPickerDay', day, modifiers, true)));
      }
      return _react2.default.createElement(
        'div',
        _extends({}, styling('dayPickerDay', day, modifiers), {
          ref: modifiers.outside ? null : dayRef,
          tabIndex: tabIndex,
          role: 'gridcell',
          'aria-label': ariaLabel,
          'aria-disabled': ariaDisabled,
          'aria-selected': ariaSelected,
          onClick: handleEvent(onClick, day, modifiers),
          onKeyDown: handleEvent(onKeyDown, day, modifiers),
          onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
          onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
          onMouseUp: handleEvent(onMouseUp, day, modifiers),
          onMouseDown: handleEvent(onMouseDown, day, modifiers),
          onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
          onTouchStart: handleEvent(onTouchStart, day, modifiers),
          onFocus: handleEvent(onFocus, day, modifiers)
        }),
        children
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.defaultProps = {
  tabIndex: -1
};
Day.defaultProps = {
  modifiers: {},
  empty: false
};
exports.default = Day;
Day.propTypes = process.env.NODE_ENV !== "production" ? {
  styling: _propTypes2.default.func.isRequired,

  day: _propTypes2.default.instanceOf(Date).isRequired,
  children: _propTypes2.default.node.isRequired,

  ariaDisabled: _propTypes2.default.bool,
  ariaLabel: _propTypes2.default.string,
  ariaSelected: _propTypes2.default.bool,
  empty: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number,

  dayRef: _propTypes2.default.func
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Proxy object to map classnames when css modules are not used

exports.default = {
  container: 'DayPicker',
  wrapper: 'DayPicker-wrapper',
  interactionDisabled: 'DayPicker--interactionDisabled',
  months: 'DayPicker-Months',
  month: 'DayPicker-Month',

  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  weekNumber: 'DayPicker-WeekNumber',
  day: 'DayPicker-Day',
  footer: 'DayPicker-Footer',
  todayButton: 'DayPicker-TodayButton',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekday = function (_Component) {
  _inherits(Weekday, _Component);

  function Weekday() {
    _classCallCheck(this, Weekday);

    return _possibleConstructorReturn(this, (Weekday.__proto__ || Object.getPrototypeOf(Weekday)).apply(this, arguments));
  }

  _createClass(Weekday, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          weekday = _props.weekday,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          localeUtils = _props.localeUtils,
          locale = _props.locale,
          styling = _props.styling;

      var title = void 0;
      if (weekdaysLong) {
        title = weekdaysLong[weekday];
      } else {
        title = localeUtils.formatWeekdayLong(weekday, locale);
      }
      var content = void 0;
      if (weekdaysShort) {
        content = weekdaysShort[weekday];
      } else {
        content = localeUtils.formatWeekdayShort(weekday, locale);
      }

      return _react2.default.createElement(
        'div',
        _extends({}, styling('dayPickerWeekday', weekday, locale), { role: 'columnheader' }),
        _react2.default.createElement(
          'abbr',
          { title: title },
          content
        )
      );
    }
  }]);

  return Weekday;
}(_react.Component);

exports.default = Weekday;
Weekday.propTypes = process.env.NODE_ENV !== "production" ? {
  weekday: _propTypes2.default.number,
  styling: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string)
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HIDE_TIMEOUT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.defaultFormat = defaultFormat;
exports.defaultParse = defaultParse;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DayPicker = __webpack_require__(42);

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _ModifiersUtils = __webpack_require__(41);

var _keys = __webpack_require__(12);

var _createStylingFromTheme = __webpack_require__(24);

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// When clicking on a day cell, overlay will be hidden after this timeout
var HIDE_TIMEOUT = exports.HIDE_TIMEOUT = 100;

function isDate(date) {
  return date instanceof Date && !isNaN(date.valueOf());
}

function defaultFormat(d) {
  if (isDate(d)) {
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    return year + '-' + month + '-' + day;
  }
  return '';
}

function defaultParse(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  var split = str.split('-');
  if (split.length !== 3) {
    return undefined;
  }
  var year = parseInt(split[0], 10);
  var month = parseInt(split[1], 10) - 1;
  var day = parseInt(split[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
    return undefined;
  }

  return new Date(year, month, day);
}

var DayPickerInput = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, (DayPickerInput.__proto__ || Object.getPrototypeOf(DayPickerInput)).call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.clickedInside = false;
    _this.clickTimeout = null;
    _this.hideTimeout = null;


    _this.state = _this.getStateFromProps(props);
    _this.state.showOverlay = props.showOverlay;

    _this.hideAfterDayClick = _this.hideAfterDayClick.bind(_this);
    _this.handleContainerMouseDown = _this.handleContainerMouseDown.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleInputKeyUp = _this.handleInputKeyUp.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    return _this;
  }

  _createClass(DayPickerInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var monthFromProps = this.props.dayPickerProps.month;
      var nextMonthFromProps = nextProps.dayPickerProps.month;

      var selectedDaysFromProps = this.props.dayPickerProps.selectedDays;
      var nextSelectedDaysFromProps = nextProps.dayPickerProps.selectedDays;

      var nextValue = nextProps.value;
      var currentValue = this.props.value;

      var monthChanged = nextMonthFromProps && !monthFromProps || nextMonthFromProps && (nextMonthFromProps.getFullYear() !== monthFromProps.getFullYear() || nextMonthFromProps.getMonth() !== monthFromProps.getMonth());

      if (nextValue !== currentValue) {
        if (isDate(nextValue)) {
          nextValue = this.props.formatDate(nextValue, this.props.format, this.props.dayPickerProps.locale);
        }
        this.setState({
          value: nextValue
        });
      }
      if (monthChanged) {
        this.setState({ month: nextMonthFromProps });
      }
      if (selectedDaysFromProps !== nextSelectedDaysFromProps) {
        this.setState({ selectedDays: nextSelectedDaysFromProps });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.clickTimeout);
      clearTimeout(this.hideTimeout);
      clearTimeout(this.blurTimeout);
    }
  }, {
    key: 'getStateFromProps',
    value: function getStateFromProps(props) {
      var dayPickerProps = props.dayPickerProps,
          formatDate = props.formatDate,
          format = props.format;
      var value = props.value;

      var month = void 0;
      var day = void 0;
      if (props.value) {
        if (isDate(props.value)) {
          day = props.value;
          value = formatDate(props.value, format, dayPickerProps.locale);
        } else {
          day = props.parseDate(props.value, format, dayPickerProps.locale);
        }
        if (day) {
          month = day;
        }
      } else {
        // Otherwise display the month coming from `dayPickerProps` or the current month
        month = dayPickerProps.initialMonth || dayPickerProps.month || new Date();
      }
      return {
        value: value,
        month: month,
        selectedDays: dayPickerProps.selectedDays
      };
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return this.input;
    }
  }, {
    key: 'getDayPicker',
    value: function getDayPicker() {
      return this.daypicker;
    }
  }, {
    key: 'updateState',


    /**
     * Update the component's state and fire the `onDayChange` event
     * passing the day's modifiers to it
     * @param {Date} day - Will be used for changing the month
     * @param {String} value - Input field value
     * @private
     */
    value: function updateState(day, value, callback) {
      var _props = this.props,
          dayPickerProps = _props.dayPickerProps,
          onDayChange = _props.onDayChange;

      this.setState({ month: day, value: value }, function () {
        if (callback) {
          callback();
        }
        if (!onDayChange) {
          return;
        }
        var modifiersObj = _extends({
          disabled: dayPickerProps.disabledDays,
          selected: dayPickerProps.selectedDays
        }, dayPickerProps.modifiers);
        var modifiers = (0, _ModifiersUtils.getModifiersForDay)(day, modifiersObj).reduce(function (obj, modifier) {
          var newObj = _extends({}, obj);
          newObj[modifier] = true;
          return newObj;
        }, {});
        onDayChange(day, modifiers);
      });
    }

    /**
     * Show the Day Picker overlay.
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'showDayPicker',
    value: function showDayPicker() {
      this.setState({
        showOverlay: true
      });
    }

    /**
     * Hide the Day Picker overlay
     *
     * @memberof DayPickerInput
     */

  }, {
    key: 'hideDayPicker',
    value: function hideDayPicker() {
      this.setState({
        showOverlay: false
      });
    }
  }, {
    key: 'hideAfterDayClick',
    value: function hideAfterDayClick() {
      var _this2 = this;

      if (!this.props.hideOnDayClick) {
        return;
      }
      this.hideTimeout = setTimeout(function () {
        return _this2.hideDayPicker();
      }, HIDE_TIMEOUT);
    }
  }, {
    key: 'handleContainerMouseDown',
    value: function handleContainerMouseDown() {
      var _this3 = this;

      this.clickedInside = true;
      // The input's onBlur method is called from a queue right after the onMouseDown event.
      // setTimeout adds another callback in the queue, which is called after the onBlur event.
      this.clickTimeout = setTimeout(function () {
        _this3.clickedInside = false;
      }, 0);
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick(e) {
      this.showDayPicker();
      if (this.props.inputProps.onClick) {
        e.persist();
        this.props.inputProps.onClick(e);
      }
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(e) {
      this.showDayPicker();
      if (this.props.inputProps.onFocus) {
        e.persist();
        this.props.inputProps.onFocus(e);
      }
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      var _this4 = this;

      this.setState({
        showOverlay: this.clickedInside
      });
      // Force input's focus if blur event was caused by clicking inside the overlay
      if (this.clickedInside) {
        this.blurTimeout = setTimeout(function () {
          return _this4.input.focus();
        }, 0);
      }
      if (this.props.inputProps.onBlur) {
        e.persist();
        this.props.inputProps.onBlur(e);
      }
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var _props2 = this.props,
          dayPickerProps = _props2.dayPickerProps,
          format = _props2.format,
          inputProps = _props2.inputProps,
          onDayChange = _props2.onDayChange,
          parseDate = _props2.parseDate;

      if (inputProps.onChange) {
        e.persist();
        inputProps.onChange(e);
      }
      var value = e.target.value;

      if (value.trim() === '') {
        this.setState({ value: value });
        if (onDayChange) {
          onDayChange(undefined, {});
        }
        return;
      }
      var day = parseDate(value, format, dayPickerProps.locale);
      if (!day) {
        this.setState({ value: value });
        return;
      }
      this.updateState(day, value);
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(e) {
      // Hide the overlay if the ESC key is pressed
      this.setState({ showOverlay: e.keyCode !== _keys.ESC });
      if (this.props.inputProps.onKeyUp) {
        e.persist();
        this.props.inputProps.onKeyUp(e);
      }
    }
  }, {
    key: 'handleDayClick',
    value: function handleDayClick(day, modifiers, e) {
      var _this5 = this;

      var _props3 = this.props,
          clickUnselectsDay = _props3.clickUnselectsDay,
          dayPickerProps = _props3.dayPickerProps,
          onDayChange = _props3.onDayChange,
          formatDate = _props3.formatDate,
          format = _props3.format;

      if (dayPickerProps.onDayClick) {
        dayPickerProps.onDayClick(day, modifiers, e);
      }

      // Do nothing if the day is disabled
      if (modifiers.disabled) {
        return;
      }

      // If the clicked day is already selected, remove the clicked day
      // from the selected days and empty the field value
      if (modifiers.selected && clickUnselectsDay) {
        var selectedDays = this.state.selectedDays;

        if (Array.isArray(selectedDays)) {
          selectedDays = selectedDays.slice(0);
          var selectedDayIdx = selectedDays.indexOf(day);
          selectedDays.splice(selectedDayIdx, 1);
        } else if (selectedDays) {
          selectedDays = null;
        }
        this.setState({ value: '', selectedDays: selectedDays }, this.hideAfterDayClick);
        if (onDayChange) {
          onDayChange(undefined, modifiers);
        }
        return;
      }

      var value = formatDate(day, format, dayPickerProps.locale);
      this.setState({ value: value, month: day }, function () {
        if (onDayChange) {
          onDayChange(day, modifiers);
        }
        _this5.hideAfterDayClick();
      });
    }
  }, {
    key: 'renderOverlay',
    value: function renderOverlay(styling) {
      var _this6 = this;

      var _props4 = this.props,
          dayPickerProps = _props4.dayPickerProps,
          parseDate = _props4.parseDate,
          formatDate = _props4.formatDate,
          format = _props4.format;
      var _state = this.state,
          selectedDays = _state.selectedDays,
          value = _state.value;

      var selectedDay = void 0;
      if (!selectedDays && value) {
        var day = parseDate(value, format, dayPickerProps.locale);
        if (day) {
          selectedDay = day;
        }
      } else if (selectedDays) {
        selectedDay = selectedDays;
      }
      var onTodayButtonClick = void 0;
      if (dayPickerProps.todayButton) {
        // Set the current day when clicking the today button
        onTodayButtonClick = function onTodayButtonClick() {
          return _this6.updateState(new Date(), formatDate(new Date(), format, dayPickerProps.locale), _this6.hideAfterDayClick);
        };
      }
      var Overlay = this.props.overlayComponent;
      return _react2.default.createElement(
        Overlay,
        {
          styling: styling,
          month: this.state.month,
          selectedDay: selectedDay,
          input: this.input
        },
        _react2.default.createElement(_DayPicker2.default, _extends({
          ref: function ref(el) {
            return _this6.daypicker = el;
          },
          onTodayButtonClick: onTodayButtonClick
        }, dayPickerProps, {
          month: this.state.month,
          selectedDays: selectedDay,
          onDayClick: this.handleDayClick,
          onMonthChange: function onMonthChange(month) {
            return _this6.setState({ month: month });
          },
          styling: styling
        }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var Input = this.props.component;
      var styling = this.props.styling || (0, _createStylingFromTheme2.default)(this.props.theme);

      return _react2.default.createElement(
        'div',
        _extends({}, styling('dayPickerInput'), {
          onMouseDown: this.handleContainerMouseDown
        }),
        _react2.default.createElement(Input, _extends({
          ref: function ref(el) {
            return _this7.input = el;
          },
          placeholder: this.props.placeholder
        }, this.props.inputProps, {
          value: this.state.value,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          onKeyUp: this.handleInputKeyUp,
          onClick: this.handleInputClick
        })),
        this.state.showOverlay && this.renderOverlay(styling)
      );
    }
  }]);

  return DayPickerInput;
}(_react2.default.Component);

DayPickerInput.defaultProps = {
  dayPickerProps: {},
  value: '',
  placeholder: 'YYYY-M-D',
  format: 'L',
  formatDate: defaultFormat,
  parseDate: defaultParse,
  showOverlay: false,
  hideOnDayClick: true,
  clickUnselectsDay: false,
  component: 'input',
  inputProps: {},
  overlayComponent: function overlayComponent(_ref) {
    var children = _ref.children,
        styling = _ref.styling;
    return _react2.default.createElement(
      'div',
      styling('dayPickerInputOverlayWrapper'),
      _react2.default.createElement(
        'div',
        styling('dayPickerInputOverlay'),
        children
      )
    );
  }
};
exports.default = DayPickerInput;
DayPickerInput.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  inputProps: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,

  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),

  formatDate: _propTypes2.default.func,
  parseDate: _propTypes2.default.func,

  showOverlay: _propTypes2.default.bool,
  dayPickerProps: _propTypes2.default.object,
  hideOnDayClick: _propTypes2.default.bool,
  clickUnselectsDay: _propTypes2.default.bool,
  component: _propTypes2.default.any,
  overlayComponent: _propTypes2.default.any,

  styling: _propTypes2.default.func,
  theme: _propTypes2.default.string,

  onDayChange: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func
} : {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=daypicker.js.map