import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Caption from './Caption';
import Navbar from './Navbar';
import Month from './Month';
import Weekday from './Weekday';

import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import * as ModifiersUtils from './ModifiersUtils';

import { ENTER, SPACE, LEFT, UP, DOWN, RIGHT } from './keys';

import createStylingFromTheme from './createStylingFromTheme';

export default class DayPicker extends Component {
  static VERSION = '7.0.5';

  static propTypes = {
    // Rendering months
    initialMonth: PropTypes.instanceOf(Date),
    month: PropTypes.instanceOf(Date),
    numberOfMonths: PropTypes.number,
    fromMonth: PropTypes.instanceOf(Date),
    toMonth: PropTypes.instanceOf(Date),
    canChangeMonth: PropTypes.bool,
    reverseMonths: PropTypes.bool,
    pagedNavigation: PropTypes.bool,
    todayButton: PropTypes.string,
    showWeekNumbers: PropTypes.bool,
    showWeekDays: PropTypes.bool,

    // Modifiers
    selectedDays: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.array,
    ]),
    disabledDays: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.array,
    ]),

    modifiers: PropTypes.object,

    // Localization
    dir: PropTypes.string,
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    labels: PropTypes.shape({
      nextMonth: PropTypes.string.isRequired,
      previousMonth: PropTypes.string.isRequired,
    }),
    locale: PropTypes.string,
    localeUtils: PropTypes.shape({
      formatMonthTitle: PropTypes.func,
      formatWeekdayShort: PropTypes.func,
      formatWeekdayLong: PropTypes.func,
      getFirstDayOfWeek: PropTypes.func,
    }),
    months: PropTypes.arrayOf(PropTypes.string),
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),

    // Customization
    showOutsideDays: PropTypes.bool,
    fixedWeeks: PropTypes.bool,

    styling: PropTypes.func,
    className: PropTypes.string,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    containerProps: PropTypes.object,
    tabIndex: PropTypes.number,

    // Custom elements
    renderDay: PropTypes.func,
    renderWeek: PropTypes.func,
    weekdayElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(Component),
    ]),
    navbarElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(Component),
    ]),
    captionElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(Component),
    ]),

    // Events
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onDayClick: PropTypes.func,
    onDayKeyDown: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onDayMouseDown: PropTypes.func,
    onDayMouseUp: PropTypes.func,
    onDayTouchStart: PropTypes.func,
    onDayTouchEnd: PropTypes.func,
    onDayFocus: PropTypes.func,
    onMonthChange: PropTypes.func,
    onCaptionClick: PropTypes.func,
    onWeekClick: PropTypes.func,
    onTodayButtonClick: PropTypes.func,
  };

  static defaultProps = {
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    labels: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
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
    renderDay: day => day.getDate(),
    renderWeek: weekNumber => weekNumber,
    weekdayElement: Weekday,
    navbarElement: Navbar,
    captionElement: Caption,
  };

  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.month !== nextProps.month) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }

  getStateFromProps = props => {
    const initialMonth = Helpers.startOfMonth(
      props.month || props.initialMonth
    );
    let currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      const diffInMonths = Helpers.getMonthsDiff(props.fromMonth, currentMonth);
      currentMonth = DateUtils.addMonths(
        props.fromMonth,
        Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths
      );
    } else if (
      props.toMonth &&
      props.numberOfMonths > 1 &&
      Helpers.getMonthsDiff(currentMonth, props.toMonth) <= 0
    ) {
      currentMonth = DateUtils.addMonths(
        props.toMonth,
        1 - this.props.numberOfMonths
      );
    }
    return { currentMonth };
  };

  getNextNavigableMonth() {
    return DateUtils.addMonths(
      this.state.currentMonth,
      this.props.numberOfMonths
    );
  }

  getPreviousNavigableMonth() {
    return DateUtils.addMonths(this.state.currentMonth, -1);
  }

  dayPicker = null;
  dayNodes = [];

  allowPreviousMonth() {
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
    return this.allowMonth(previousMonth);
  }

  allowNextMonth() {
    const nextMonth = DateUtils.addMonths(
      this.state.currentMonth,
      this.props.numberOfMonths
    );
    return this.allowMonth(nextMonth);
  }

  allowMonth(d) {
    const { fromMonth, toMonth, canChangeMonth } = this.props;
    if (
      !canChangeMonth ||
      (fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)
    ) {
      return false;
    }
    return true;
  }

  allowYearChange() {
    return this.props.canChangeMonth;
  }

  showMonth(d, callback) {
    if (!this.allowMonth(d)) {
      return;
    }
    this.setState({ currentMonth: Helpers.startOfMonth(d) }, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  showNextMonth = callback => {
    if (!this.allowNextMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation
      ? this.props.numberOfMonths
      : 1;
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, deltaMonths);
    this.showMonth(nextMonth, callback);
  };

  showPreviousMonth = callback => {
    if (!this.allowPreviousMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation
      ? this.props.numberOfMonths
      : 1;
    const previousMonth = DateUtils.addMonths(
      this.state.currentMonth,
      -deltaMonths
    );
    this.showMonth(previousMonth, callback);
  };

  showNextYear() {
    if (!this.allowYearChange()) {
      return;
    }
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
    this.showMonth(nextMonth);
  }

  showPreviousYear() {
    if (!this.allowYearChange()) {
      return;
    }
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
    this.showMonth(nextMonth);
  }

  focusFirstDayOfMonth() {
    this.dayNodes[0].focus();
  }

  focusLastDayOfMonth() {
    this.dayNodes[this.dayNodes.length - 1].focus();
  }

  focusPreviousDay(dayNode) {
    const dayNodeIndex = this.dayNodes.indexOf(dayNode);

    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => this.focusLastDayOfMonth());
    } else {
      this.dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodeIndex = this.dayNodes.indexOf(dayNode);

    if (dayNodeIndex === this.dayNodes.length - 1) {
      this.showNextMonth(() => this.focusFirstDayOfMonth());
    } else {
      this.dayNodes[dayNodeIndex + 1].focus();
    }
  }

  focusNextWeek(dayNode) {
    const dayNodeIndex = this.dayNodes.indexOf(dayNode);
    const isInLastWeekOfMonth = dayNodeIndex > this.dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(() => {
        const daysAfterIndex = this.dayNodes.length - dayNodeIndex;
        const nextMonthDayNodeIndex = 7 - daysAfterIndex;
        this.dayNodes[nextMonthDayNodeIndex].focus();
      });
    } else {
      this.dayNodes[dayNodeIndex + 7].focus();
    }
  }

  focusPreviousWeek(dayNode) {
    const dayNodeIndex = this.dayNodes.indexOf(dayNode);
    const isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(() => {
        const startOfLastWeekOfMonth = this.dayNodes.length - 7;
        const previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        this.dayNodes[previousMonthDayNodeIndex].focus();
      });
    } else {
      this.dayNodes[dayNodeIndex - 7].focus();
    }
  }

  // Event handlers

  handleKeyDown = e => {
    e.persist();

    switch (e.keyCode) {
      case LEFT:
        this.showPreviousMonth();
        break;
      case RIGHT:
        this.showNextMonth();
        break;
      case UP:
        this.showPreviousYear();
        break;
      case DOWN:
        this.showNextYear();
        break;
      default:
        break;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  };

  handleDayKeyDown = (day, modifiers, e) => {
    e.persist();
    switch (e.keyCode) {
      case LEFT:
        Helpers.cancelEvent(e);
        this.focusPreviousDay(e.target);
        break;
      case RIGHT:
        Helpers.cancelEvent(e);
        this.focusNextDay(e.target);
        break;
      case UP:
        Helpers.cancelEvent(e);
        this.focusPreviousWeek(e.target);
        break;
      case DOWN:
        Helpers.cancelEvent(e);
        this.focusNextWeek(e.target);
        break;
      case ENTER:
      case SPACE:
        Helpers.cancelEvent(e);
        if (this.props.onDayClick) {
          this.handleDayClick(day, modifiers, e);
        }
        break;
      default:
        break;
    }
    if (this.props.onDayKeyDown) {
      this.props.onDayKeyDown(day, modifiers, e);
    }
  };

  handleDayClick = (day, modifiers, e) => {
    e.persist();
    if (modifiers.outside) {
      this.handleOutsideDayClick(day);
    }
    if (this.props.onDayClick) {
      this.props.onDayClick(day, modifiers, e);
    }
  };

  handleDayMouseEnter = (e, day, dayState) => {
    this.setState({ hoveredDay: day });

    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(e, day, dayState);
    }
  };

  handleDayMouseLeave = (e, day, dayState) => {
    this.setState({ hoveredDay: null });

    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(e, day, dayState);
    }
  };

  handleOutsideDayClick(day) {
    const { currentMonth } = this.state;
    const { numberOfMonths } = this.props;
    const diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
    if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
      this.showNextMonth();
    } else if (diffInMonths < 0) {
      this.showPreviousMonth();
    }
  }

  handleTodayButtonClick = e => {
    const today = new Date();
    const month = new Date(today.getFullYear(), today.getMonth());
    this.showMonth(month);
    if (this.props.onTodayButtonClick) {
      e.persist();
      this.props.onTodayButtonClick(
        new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        ModifiersUtils.getModifiersForDay(today, this.props.modifiers),
        e
      );
    }
  };

  renderNavbar(styling) {
    const {
      labels,
      locale,
      localeUtils,
      canChangeMonth,
      navbarElement,
      ...attributes
    } = this.props;

    if (!canChangeMonth) return null;

    const props = {
      month: this.state.month,
      styling,
      nextMonth: this.getNextNavigableMonth(),
      previousMonth: this.getPreviousNavigableMonth(),
      showPreviousButton: this.allowPreviousMonth(),
      showNextButton: this.allowNextMonth(),
      onNextClick: this.showNextMonth,
      onPreviousClick: this.showPreviousMonth,
      dir: attributes.dir,
      labels,
      locale,
      localeUtils,
    };

    return React.isValidElement(navbarElement)
      ? React.cloneElement(navbarElement, props)
      : React.createElement(navbarElement, props);
  }

  renderMonths(styling) {
    const months = [];
    const firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);
    for (let i = 0; i < this.props.numberOfMonths; i += 1) {
      const month = DateUtils.addMonths(this.state.currentMonth, i);
      months.push(
        <Month
          key={i}
          {...this.props}
          month={month}
          dayRef={dayNode => {
            if (dayNode !== null) this.dayNodes.push(dayNode);
          }}
          firstDayOfWeek={firstDayOfWeek}
          onDayKeyDown={this.handleDayKeyDown}
          onDayClick={this.handleDayClick}
          styling={styling}
        />
      );
    }

    if (this.props.reverseMonths) {
      months.reverse();
    }
    return months;
  }

  renderFooter(styling) {
    if (this.props.todayButton) {
      return (
        <div {...styling('dayPickerFooter', this.props.locale)}>
          {this.renderTodayButton(styling)}
        </div>
      );
    }
    return null;
  }

  renderTodayButton(styling) {
    return (
      <button
        type="button"
        tabIndex={0}
        {...styling('dayPickerTodayButton', this.props.locale)}
        aria-label={this.props.todayButton}
        onClick={this.handleTodayButtonClick}
      >
        {this.props.todayButton}
      </button>
    );
  }

  render() {
    const styling =
      this.props.styling || createStylingFromTheme(this.props.theme);

    this.dayNodes = [];

    return (
      <div
        {...this.props.containerProps}
        {...styling(
          'dayPicker',
          this.props.locale,
          !this.props.onDayClick,
          this.props.className
        )}
        ref={el => (this.dayPicker = el)}
        lang={this.props.locale}
      >
        <div
          {...styling('dayPickerWrapper', this.props.locale)}
          tabIndex={
            this.props.canChangeMonth && this.props.tabIndex
              ? this.props.tabIndex
              : -1
          }
          onKeyDown={this.handleKeyDown}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        >
          {this.renderNavbar(styling)}
          <div {...styling('dayPickerMonths', this.props.locale)}>
            {this.renderMonths(styling)}
          </div>
          {this.renderFooter(styling)}
        </div>
      </div>
    );
  }
}

DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;
