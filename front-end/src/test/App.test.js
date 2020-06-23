import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAsapter from 'enzyme-adapter-react-16'
import App from '../App'

Enzyme.configure({ adapter: new EnzymeAsapter });

describe("App component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  test('renders learn react link', () => {
    const component = wrapper.find(`[data-test="main-component"]`)
    expect(component.length).toBe(1)
  })

  test('renders learn react link', () => {
    const component = wrapper.find(`[data-test="main-component-header"]`)
    expect(component.length).toBe(1)
    expect(component.text()).toBe("Full stack project")
  })

})