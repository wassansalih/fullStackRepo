import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAsapter from 'enzyme-adapter-react-16'
import Time from '../components/TimeComponent'

Enzyme.configure({ adapter: new EnzymeAsapter });

describe("Time component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Time />)
  });
  test('renders main div element ', () => {
    const element = wrapper.find(`[data-test="time-component-title"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('TIME COMPONENT')
  });
  test ('renders main div element ', () => {
    const element = wrapper.find(`[data-test="time-component-server-time"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('Server time')
  });
  test('renders main div element ', () => {
    const element = wrapper.find(`[data-test="time-component-machine-time"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('Machine time')
  });

  test('renders main div element ', () => {
    const element = wrapper.find(`[data-test="time-component-difference-time"]`)
    expect(element.length).toBe(1)
    expect(element.text()).toContain('The difference between machine and server times:')
  });

})