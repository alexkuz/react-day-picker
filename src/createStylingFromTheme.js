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

    dayPickerWrapper: 'DayPicker-wrapper',

    dayPickerNavBar: 'DayPicker-NavBar',

    dayPickerMonths: 'DayPicker-Months',

    dayPickerMonth: 'DayPicker-Month',

    dayPickerMonthWrapper: 'DayPicker-Body',

    dayPickerWeek: 'DayPicker-Week',

    dayPickerWeekNumber: 'DayPicker-WeekNumber',

    dayPickerNavButton: ({ style, className }, type, shouldShow) => ({
      style,
      className: cn(
        'DayPicker-NavButton',
        type && `DayPicker-NavButton--${type}`,
        !shouldShow && 'DayPicker-NavButton--interactionDisabled',
        className
      ),
    }),

    dayPickerWeekday: 'DayPicker-Weekday',

    dayPickerWeekdays: 'DayPicker-Weekdays',

    dayPickerWeekdaysRow: 'DayPicker-WeekdaysRow',

    dayPickerCaption: 'DayPicker-Caption',

    dayPickerDay: ({ style, className }, day, modifiers) => ({
      style,
      className: cn(
        'DayPicker-Day',
        Object.keys(modifiers)
          .map(modifier => `DayPicker-Day--${modifier}`).join(' '),
        className
      ),
    }),

    dayPickerFooter: 'DayPicker-Footer',

    dayPickerTodayButton: 'DayPicker-TodayButton',

    dayPickerInputContainer: 'DayPickerInput',
    dayPickerInputOverlayWrapper: 'DayPickerInput-OverlayWrapper',
    dayPickerInputOverlay: 'DayPickerInput-Overlay',
  };
}

export default createStyling(getStylingFromBase16, {});
