import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Weekdays extends Component {
  static propTypes = {
    styling: PropTypes.func.isRequired,

    firstDayOfWeek: PropTypes.number.isRequired,
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
    showWeekNumbers: PropTypes.bool,
    locale: PropTypes.string.isRequired,
    localeUtils: PropTypes.object.isRequired,
    weekdayElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(React.Component),
    ]),
  };
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }
  render() {
    const {
      firstDayOfWeek,
      showWeekNumbers,
      weekdaysLong,
      weekdaysShort,
      locale,
      localeUtils,
      weekdayElement,
      styling,
    } = this.props;
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      const weekday = (i + firstDayOfWeek) % 7;
      const elementProps = {
        key: i,
        weekday,
        weekdaysLong,
        weekdaysShort,
        localeUtils,
        locale,
        styling,
      };
      const element = React.isValidElement(weekdayElement)
        ? React.cloneElement(weekdayElement, elementProps)
        : React.createElement(weekdayElement, elementProps);
      days.push(element);
    }

    return (
      <div {...styling('dayPickerWeekdays', locale)} role="rowgroup">
        <div {...styling('dayPickerWeekdaysRow', locale)} role="row">
          {showWeekNumbers && <div {...styling('dayPickerWeekday', locale)} />}
          {days}
        </div>
      </div>
    );
  }
}
