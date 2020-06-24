import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAsapter from 'enzyme-adapter-react-16'
import Time from '../components/TimeComponent'

Enzyme.configure({ adapter: new EnzymeAsapter });

describe("Time component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Time />)
  })
  test('renders main div element ', () => {
    const component = wrapper.find(`[data-test="time-component"]`)
    expect(component.length).toBe(1)
  })

})