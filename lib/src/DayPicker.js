'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Caption = require('./Caption');

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _Weekday = require('./Weekday');

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = require('./Helpers');

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = require('./DateUtils');

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = require('./LocaleUtils');

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _ModifiersUtils = require('./ModifiersUtils');

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _keys = require('./keys');

var _createStylingFromTheme = require('./createStylingFromTheme');

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if (_this9.props.onTodayButtonClick) {
      e.persist();
      _this9.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), ModifiersUtils.getModifiersForDay(today, _this9.props.modifiers), e);
    }
  };
};

exports.default = DayPicker;
DayPicker.propTypes = process.env.NODE_ENV !== "production" ? {
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
  theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

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
} : {};


DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;
//# sourceMappingURL=DayPicker.js.map