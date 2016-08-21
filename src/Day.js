/* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isSameDay } from './DateUtils';
import { hasOwnProp } from './Helpers';

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return e => {
    e.persist();
    handler(day, modifiers, e);
  };
}

export default class Day extends Component {
  static propTypes = {
    styling: PropTypes.func.isRequired,

    day: PropTypes.instanceOf(Date).isRequired,
    children: PropTypes.node.isRequired,

    ariaDisabled: PropTypes.bool,
    ariaLabel: PropTypes.string,
    ariaSelected: PropTypes.bool,
    empty: PropTypes.bool,
    modifiers: PropTypes.object,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    onFocus: PropTypes.func,
    tabIndex: PropTypes.number,

    dayRef: PropTypes.func,
  };

  static defaultProps = {
    tabIndex: -1,
  };

  static defaultProps = {
    modifiers: {},
    empty: false,
  };

  shouldComponentUpdate(nextProps) {
    const propNames = Object.keys(this.props);
    const nextPropNames = Object.keys(nextProps);
    if (propNames.length !== nextPropNames.length) {
      return true;
    }
    return propNames.some(name => {
      if (name === 'modifiers') {
        const prop = this.props[name];
        const nextProp = nextProps[name];
        const modifiers = Object.keys(prop);
        const nextModifiers = Object.keys(nextProp);
        if (modifiers.length !== nextModifiers.length) {
          return true;
        }
        return modifiers.some(
          mod => !hasOwnProp(nextProp, mod) || prop[mod] !== nextProp[mod]
        );
      }
      if (name === 'day') {
        return !isSameDay(this.props[name], nextProps[name]);
      }
      return (
        !hasOwnProp(nextProps, name) || this.props[name] !== nextProps[name]
      );
    });
  }

  render() {
    const {
      styling,
      day,
      tabIndex,
      empty,
      modifiers,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      onMouseDown,
      onClick,
      onKeyDown,
      onTouchStart,
      onTouchEnd,
      onFocus,
      ariaLabel,
      ariaDisabled,
      ariaSelected,
      children,
      dayRef,
    } = this.props;

    if (empty) {
      return <div aria-disabled {...styling('day', day, modifiers, true)} />;
    }
    return (
      <div
        {...styling('day', day, modifiers)}
        ref={modifiers.outside ? null : dayRef}
        tabIndex={tabIndex}
        role="gridcell"
        aria-label={ariaLabel}
        aria-disabled={ariaDisabled}
        aria-selected={ariaSelected}
        onClick={handleEvent(onClick, day, modifiers)}
        onKeyDown={handleEvent(onKeyDown, day, modifiers)}
        onMouseEnter={handleEvent(onMouseEnter, day, modifiers)}
        onMouseLeave={handleEvent(onMouseLeave, day, modifiers)}
        onMouseUp={handleEvent(onMouseUp, day, modifiers)}
        onMouseDown={handleEvent(onMouseDown, day, modifiers)}
        onTouchEnd={handleEvent(onTouchEnd, day, modifiers)}
        onTouchStart={handleEvent(onTouchStart, day, modifiers)}
        onFocus={handleEvent(onFocus, day, modifiers)}
      >
        {children}
      </div>
    );
  }
}
