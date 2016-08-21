import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Weekday extends Component {
  static propTypes = {
    weekday: PropTypes.number,
    styling: PropTypes.func.isRequired,
    locale: PropTypes.string,
    localeUtils: PropTypes.object,

    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),
  };
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }
  render() {
    const {
      weekday,
      weekdaysLong,
      weekdaysShort,
      localeUtils,
      locale,
      styling,
    } = this.props;
    let title;
    if (weekdaysLong) {
      title = weekdaysLong[weekday];
    } else {
      title = localeUtils.formatWeekdayLong(weekday, locale);
    }
    let content;
    if (weekdaysShort) {
      content = weekdaysShort[weekday];
    } else {
      content = localeUtils.formatWeekdayShort(weekday, locale);
    }

    return (
      <div {...styling('weekday', weekday, locale)} role="columnheader">
        <abbr title={title}>{content}</abbr>
      </div>
    );
  }
}
