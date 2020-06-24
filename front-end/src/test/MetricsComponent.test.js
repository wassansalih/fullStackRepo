import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAsapter from 'enzyme-adapter-react-16'
import Metrics from '../components/MetricsComponent'

Enzyme.configure({ adapter: new EnzymeAsapter });

describe("Metrics component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Metrics />)
  })
  test('renders main div element ', () => {
    const component = wrapper.find(`[data-test="metrics-component"]`)
    expect(component.length).toBe(1)
  })

})