/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAsapter from 'enzyme-adapter-react-16';
import Time, { msToTime } from '../components/TimeComponent';

Enzyme.configure({ adapter: new EnzymeAsapter });

describe("Time component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Time serverTime={12345} diffTime={25}/>)
  });
  test('renders title', () => {
    const element = wrapper.find(`[data-test="time-component-title"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('TIME COMPONENT')
  });
  test ('renders  server-time', () => {
    const element = wrapper.find(`[data-test="time-component-server-time"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('Server time in seconds: 12345')
  });

  test('renders difference-time ', () => {
    const element = wrapper.find(`[data-test="time-component-difference-time"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('The difference between machine and server times:')
  });

  it('msToTime should return formated time as string`', () => {
    const formatedTime = msToTime(1593083676725);
    expect(formatedTime).toBe('11:14:36.7');
  });

});