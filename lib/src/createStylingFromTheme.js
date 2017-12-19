'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cn = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactBase16Styling = require('react-base16-styling');

var _default = require('./themes/default');

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
//# sourceMappingURL=createStylingFromTheme.js.map