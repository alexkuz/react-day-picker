import { createStyling } from 'react-base16-styling';
import defaultTheme from './themes/default';

export const cn = (...classNames) => classNames.filter(c => c).join(' ');

const COLORS = {
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
  TODAY_BUTTON_TEXT: 'base08',
};

function dayColors(base16Theme, modifiers) {
  if (modifiers.outside) {
    return {
      color: base16Theme[COLORS.OUTSIDE_TEXT],
      backgroundColor: base16Theme[COLORS.OUTSIDE_BACKGROUND],
    };
  } else if (modifiers.disabled !== -1) {
    return {
      color: base16Theme[COLORS.DISABLED_TEXT],
      backgroundColor: base16Theme[COLORS.DISABLED_BACKGROUND],
    };
  } else if (modifiers.selected !== -1) {
    return {
      color: base16Theme[COLORS.SELECTED_TEXT],
      backgroundColor: base16Theme[COLORS.SELECTED_BACKGROUND],
    };
  } else if (modifiers.today !== -1) {
    return {
      color: base16Theme[COLORS.TODAY_TEXT],
      backgroundColor: base16Theme[COLORS.TODAY_BACKGROUND],
    };
  }

  return {
    color: base16Theme[COLORS.TEXT],
    backgroundColor: base16Theme[COLORS.BACKGROUND],
  };
}

function getStylingFromBase16(base16Theme) {
  return {
    dayPicker: ({ style, className }, locale, interactionDisabled, customClassName) => ({
      className: cn(
        'DayPicker',
        locale && `DayPicker--${locale}`,
        interactionDisabled && 'DayPicker--interactionDisabled',
        className,
        customClassName
      ),
      style: {
        ...style,
        color: base16Theme[COLORS.TEXT],
        backgroundColor: base16Theme[COLORS.BACKGROUND],
      },
    }),

    dayPickerWrapper: ({ style, className }) => ({
      className: cn('DayPicker-wrapper', className),
      style,
    }),

    dayPickerNavBar: ({ style, className }) => ({
      className: cn('DayPicker-NavBar', className),
      style: {
        ...style,
        backgroundColor: base16Theme[COLORS.NAVBAR_BACKGROUND],
      },
    }),

    dayPickerMonth: ({ style, className }) => ({
      className: cn('DayPicker-Month', className),
      style,
    }),

    dayPickerMonths: ({ style, className }) => ({
      className: cn('DayPicker-Months', className),
      style,
    }),

    dayPickerMonthWrapper: ({ style, className }) => ({
      className: cn('DayPicker-Body', className),
      style,
    }),

    dayPickerWeek: ({ style, className }) => ({
      className: cn('DayPicker-Week', className),
      style,
    }),

    dayPickerWeekNumber: ({ style, className }) => ({
      className: cn('DayPicker-WeekNumber', className),
      style: {
        ...style,
        color: base16Theme[COLORS.WEEKDAY_TEXT],
      },
    }),

    dayPickerNavButton: ({ style, className }, type, shouldShow) => ({
      className: cn(
        'DayPicker-NavButton',
        type && `DayPicker-NavButton--${type}`,
        !shouldShow && 'DayPicker-NavButton--interactionDisabled',
        className
      ),
      style: {
        ...style,
        color: base16Theme[COLORS.NAVBAR_TEXT],
      },
    }),

    dayPickerWeekday: ({ style, className }) => ({
      className: cn('DayPicker-Weekday', className),
      style: {
        ...style,
        color: base16Theme[COLORS.WEEKDAY_TEXT],
      },
    }),

    dayPickerWeekdays: ({ style, className }) => ({
      className: cn('DayPicker-Weekdays', className),
      style,
    }),

    dayPickerWeekdaysRow: ({ style, className }) => ({
      className: cn('DayPicker-WeekdaysRow', className),
      style,
    }),

    dayPickerCaption: ({ style, className }) => ({
      className: cn('DayPicker-Caption', className),
      style,
    }),

    dayPickerCaptionInner: ({ style, className }) => ({
      className: cn('DayPicker-CaptionInner', className),
      style,
    }),

    dayPickerDay: ({ style, className }, day, modifiers) => ({
      className: cn(
        'DayPicker-Day',
        Object.keys(modifiers)
          .map(modifier => `DayPicker-Day--${modifier}`).join(' '),
        className
      ),
      style: {
        ...style,
        ...dayColors(base16Theme, modifiers),
      },
    }),

    dayPickerFooter: ({ style, className }) => ({
      className: cn('DayPicker-Footer', className),
      style,
    }),

    dayPickerTodayButton: ({ style, className }) => ({
      className: cn('DayPicker-TodayButton', className),
      style: {
        ...style,
        color: base16Theme[COLORS.TODAY_BUTTON_TEXT],
      },
    }),

    dayPickerInput: ({ style, className }) => ({
      className: cn('DayPickerInput', className),
      style,
    }),

    dayPickerInputOverlayWrapper: ({ style, className }) => ({
      className: cn('DayPickerInput-OverlayWrapper', className),
      style,
    }),

    dayPickerInputOverlay: ({ style, className }) => ({
      className: cn('DayPickerInput-Overlay', className),
      style,
    }),
  };
}

export default createStyling(getStylingFromBase16, {
  defaultBase16: defaultTheme,
});
