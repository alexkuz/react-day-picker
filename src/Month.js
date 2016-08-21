import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Weekdays from './Weekdays';
import Day from './Day';
import { ENTER } from './keys';

import * as ModifiersUtils from './ModifiersUtils';
import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';

export default class Month extends Component {
  static propTypes = {
    styling: PropTypes.func.isRequired,
    tabIndex: PropTypes.number,

    month: PropTypes.instanceOf(Date).isRequired,
    months: PropTypes.arrayOf(PropTypes.string),

    modifiersStyles: PropTypes.object,

    showWeekDays: PropTypes.bool,
    showOutsideDays: PropTypes.bool,

    renderDay: PropTypes.func.isRequired,
    renderWeek: PropTypes.func.isRequired,

    captionElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(React.Component),
    ]).isRequired,
    weekdayElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(React.Component),
    ]),

    fixedWeeks: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,

    locale: PropTypes.string.isRequired,
    localeUtils: PropTypes.object.isRequired,
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
    firstDayOfWeek: PropTypes.number.isRequired,

    onCaptionClick: PropTypes.func,
    onDayClick: PropTypes.func,
    onDayFocus: PropTypes.func,
    onDayKeyDown: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onDayMouseDown: PropTypes.func,
    onDayMouseUp: PropTypes.func,
    onDayTouchEnd: PropTypes.func,
    onDayTouchStart: PropTypes.func,
    onWeekClick: PropTypes.func,

    dayRef: PropTypes.func.isRequired,
  };

  dayRefs = [];

  renderDay = day => {
    const monthNumber = this.props.month.getMonth();
    const propModifiers = Helpers.getModifiersFromProps(this.props);
    const dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
    if (
      DateUtils.isSameDay(day, new Date()) &&
      !Object.prototype.hasOwnProperty.call(propModifiers, 'today')
    ) {
      dayModifiers.push('today');
    }
    if (day.getMonth() !== monthNumber) {
      dayModifiers.push('outside');
    }

    const isOutside = day.getMonth() !== monthNumber;
    let tabIndex = -1;
    // Focus on the first day of the month
    if (this.props.onDayClick && !isOutside && day.getDate() === 1) {
      tabIndex = this.props.tabIndex; // eslint-disable-line prefer-destructuring
    }
    const key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;
    const modifiers = {};
    dayModifiers.forEach(modifier => {
      modifiers[modifier] = true;
    });

    return (
      <Day
        key={`${isOutside ? 'outside-' : ''}${key}`}
        styling={this.props.styling}
        day={day}
        dayRef={this.props.dayRef}
        modifiers={modifiers}
        modifiersStyles={this.props.modifiersStyles}
        empty={
          isOutside && !this.props.showOutsideDays && !this.props.fixedWeeks
        }
        tabIndex={tabIndex}
        ariaLabel={this.props.localeUtils.formatDay(day, this.props.locale)}
        ariaDisabled={isOutside || dayModifiers.indexOf('disabled') > -1}
        ariaSelected={dayModifiers.indexOf('selected') > -1}
        onClick={this.props.onDayClick}
        onFocus={this.props.onDayFocus}
        onKeyDown={this.props.onDayKeyDown}
        onMouseEnter={this.props.onDayMouseEnter}
        onMouseLeave={this.props.onDayMouseLeave}
        onMouseDown={this.props.onDayMouseDown}
        onMouseUp={this.props.onDayMouseUp}
        onTouchEnd={this.props.onDayTouchEnd}
        onTouchStart={this.props.onDayTouchStart}
      >
        {this.props.renderDay(day, modifiers)}
      </Day>
    );
  };

  render() {
    const {
      styling,

      month,
      months,

      fixedWeeks,
      captionElement,
      weekdayElement,

      locale,
      localeUtils,
      weekdaysLong,
      weekdaysShort,
      firstDayOfWeek,

      onCaptionClick,

      showWeekNumbers,
      showWeekDays,
      onWeekClick,
    } = this.props;

    const captionProps = {
      date: month,
      styling,
      months,
      localeUtils,
      locale,
      onClick: onCaptionClick ? e => onCaptionClick(month, e) : undefined,
    };
    const caption = React.isValidElement(captionElement)
      ? React.cloneElement(captionElement, captionProps)
      : React.createElement(captionElement, captionProps);

    const weeks = Helpers.getWeekArray(month, firstDayOfWeek, fixedWeeks);
    return (
      <div {...styling('month', locale)} role="grid">
        {caption}
        {showWeekDays && (
          <Weekdays
            styling={styling}
            weekdaysShort={weekdaysShort}
            weekdaysLong={weekdaysLong}
            firstDayOfWeek={firstDayOfWeek}
            showWeekNumbers={showWeekNumbers}
            locale={locale}
            localeUtils={localeUtils}
            weekdayElement={weekdayElement}
          />
        )}
        <div {...styling('body', locale)} role="rowgroup">
          {weeks.map((week, i) => {
            let weekNumber;
            if (showWeekNumbers) {
              weekNumber = DateUtils.getWeekNumber(week[0]);
            }
            return (
              <div
                key={week[0].getTime()}
                {...styling('week', i, locale)}
                role="row"
              >
                {showWeekNumbers && (
                  <div
                    {...styling('weekNumber', locale)}
                    tabIndex={0}
                    role="gridcell"
                    onClick={
                      onWeekClick
                        ? e => onWeekClick(weekNumber, week, e)
                        : undefined
                    }
                    onKeyUp={
                      onWeekClick
                        ? e =>
                            e.keyCode === ENTER &&
                            onWeekClick(weekNumber, week, e)
                        : undefined
                    }
                  >
                    {this.props.renderWeek(weekNumber, week, month)}
                  </div>
                )}
                {week.map(this.renderDay)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
