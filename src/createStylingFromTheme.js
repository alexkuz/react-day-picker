import { createStyling } from 'react-base16-styling';

export const cn = (...classNames) => classNames.filter(c => c).join(' ');

function getStylingFromBase16() {
  return {
    dayPicker: (
      { style, className },
      locale,
      interactionDisabled,
      customClassName
    ) => ({
      style,
      className: cn(
        'DayPicker',
        locale && `DayPicker--${locale}`,
        interactionDisabled && 'DayPicker--interactionDisabled',
        customClassName,
        className
      ),
    }),

    wrapper: 'DayPicker-wrapper',

    months: 'DayPicker-Months',

    navBar: 'DayPicker-NavBar',

    month: 'DayPicker-Month',

    body: 'DayPicker-Body',

    week: 'DayPicker-Week',

    weekNumber: 'DayPicker-WeekNumber',

    navButton: ({ style, className }, type, shouldShow) => ({
      style,
      className: cn(
        'DayPicker-NavButton',
        type && `DayPicker-NavButton--${type}`,
        !shouldShow && 'DayPicker-NavButton--interactionDisabled',
        className
      ),
    }),

    weekday: 'DayPicker-Weekday',

    weekdays: 'DayPicker-Weekdays',

    weekdaysRow: 'DayPicker-WeekdaysRow',

    caption: 'DayPicker-Caption',

    day: ({ style, className }, day, modifiers) => ({
      style,
      className: cn(
        'DayPicker-Day',
        Object.keys(modifiers)
          .map(modifier => `DayPicker-Day--${modifier}`).join(' '),
        className
      ),
    }),

    footer: 'DayPicker-Footer',

    todayButton: 'DayPicker-TodayButton',

    inputContainer: 'DayPickerInput',
    inputOverlayWrapper: 'DayPickerInput-OverlayWrapper',
    inputOverlay: 'DayPickerInput-Overlay',
  };
}

export default createStyling(getStylingFromBase16, {});
