import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createStylingFromTheme from './createStylingFromTheme';

import { SPACE, ENTER } from './keys';

export default class Navbar extends Component {
  static defaultProps = {
    dir: 'ltr',
    labels: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    showPreviousButton: true,
    showNextButton: true,
  };

  static propTypes = {
    showPreviousButton: PropTypes.bool,
    showNextButton: PropTypes.bool,
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    dir: PropTypes.string,
    labels: PropTypes.shape({
      previousMonth: PropTypes.string.isRequired,
      nextMonth: PropTypes.string.isRequired,
    }),
    styling: PropTypes.func,
    theme: PropTypes.any,
  };

  state = {
    prevHover: false,
    nextHover: false,
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.labels !== this.props.labels ||
      nextProps.dir !== this.props.dir ||
      this.props.showPreviousButton !== nextProps.showPreviousButton ||
      this.props.showNextButton !== nextProps.showNextButton
    );
  }

  handleNextClick = () => {
    if (this.props.onNextClick) {
      this.props.onNextClick();
    }
  };

  handlePreviousClick = () => {
    if (this.props.onPreviousClick) {
      this.props.onPreviousClick();
    }
  };

  handleNextKeyDown = e => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
      return;
    }
    e.preventDefault();
    this.handleNextClick();
  };

  handlePreviousKeyDown = e => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
      return;
    }
    e.preventDefault();
    this.handlePreviousClick();
  };

  render() {
    const {
      showPreviousButton,
      showNextButton,
      labels,
      dir,
      styling,
      theme,
    } = this.props;

    let previousClickHandler;
    let nextClickHandler;
    let previousKeyDownHandler;
    let nextKeyDownHandler;
    let shouldShowPrevious;
    let shouldShowNext;

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

    const navBarStyling = styling || createStylingFromTheme(theme);

    const previousButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.previousMonth}
        key="previous"
        {...navBarStyling(
          'dayPickerNavButton',
          'prev',
          shouldShowPrevious,
          this.state.prevHover
        )}
        onKeyDown={shouldShowPrevious ? previousKeyDownHandler : undefined}
        onClick={shouldShowPrevious ? previousClickHandler : undefined}
        onMouseEnter={() => this.setState({ prevHover: true })}
        onMouseLeave={() => this.setState({ prevHover: false })}
      />
    );

    const nextButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.nextMonth}
        key="right"
        {...navBarStyling(
          'dayPickerNavButton',
          'next',
          shouldShowNext,
          this.state.nextHover
        )}
        onKeyDown={shouldShowNext ? nextKeyDownHandler : undefined}
        onClick={shouldShowNext ? nextClickHandler : undefined}
        onMouseEnter={() => this.setState({ nextHover: true })}
        onMouseLeave={() => this.setState({ nextHover: false })}
      />
    );

    return (
      <div {...navBarStyling('dayPickerNavBar', dir)}>
        {dir === 'rtl'
          ? [nextButton, previousButton]
          : [previousButton, nextButton]}
      </div>
    );
  }
}
