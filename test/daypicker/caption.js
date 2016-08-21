import React from 'react';

import { mount } from 'enzyme';
import Caption from '../../src/Caption';

import { ENTER, SPACE } from '../../src/keys';
import createStylingFromTheme from '../../src/createStylingFromTheme';

const defaultStyling = createStylingFromTheme(undefined);

describe('DayPicker’s Caption', () => {
  it('should call the `onClick` event handler', () => {
    const handleCaptionClick = jest.fn();
    const wrapper = mount(
      <Caption
        date={new Date()}
        onClick={handleCaptionClick}
        styling={defaultStyling}
      />
    );
    wrapper
      .find('div')
      .at(1)
      .simulate('click');

    expect(handleCaptionClick).toHaveBeenCalled();
  });
  it('should call the `onClick` event handler when pressing the ENTER key', () => {
    const handleCaptionClick = jest.fn();
    const wrapper = mount(
      <Caption
        date={new Date()}
        onClick={handleCaptionClick}
        styling={defaultStyling}
      />
    );
    wrapper
      .find('div')
      .at(1)
      .simulate('keyUp', { keyCode: ENTER });

    expect(handleCaptionClick).toHaveBeenCalled();
  });
  it('should not call the `onClick` event handler when pressing a key other than ENTER', () => {
    const handleCaptionClick = jest.fn();
    const wrapper = mount(
      <Caption
        date={new Date()}
        onClick={handleCaptionClick}
        styling={defaultStyling}
      />
    );
    wrapper
      .find('div')
      .at(1)
      .simulate('keyUp', { keyCode: SPACE });

    expect(handleCaptionClick).toHaveBeenCalledTimes(0);
  });
});
