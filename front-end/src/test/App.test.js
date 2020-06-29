/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAsapter from 'enzyme-adapter-react-16';
import App from '../App';


jest.mock('../fetchData');

Enzyme.configure({ adapter: new EnzymeAsapter });
describe("App component testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });
  afterEach(() => {
    wrapper.unmount();
 });
  test('renders main-component dev', () => {
    const component = wrapper.find(`[data-test="main-component"]`)
    expect(component.length).toBe(1)
  });

  test('renders h1 element', () => {
    const component = wrapper.find(`[data-test="main-component-header"]`)
    expect(component.length).toBe(1)
    expect(component.text()).toBe("Full stack project")
  });

  describe.only('should call fetchData in componentDidMount', () => {

    // it('should fetch serverTime', async () => {

    //   const state = {
    //     serverTime: 555,
    //     diffTime: null,
    //     time: null,
    //     fetchTimer: 30,
    //     metricsData: null
    //   }
    //   wrapper.setState(state);
    //   await wrapper.instance().componentDidMount();

    //   console.log(wrapper.state('serverTime'), "2222222222")
    //   expect(wrapper.state('serverTime')).toEqual(555555555555);

    // });
  });
});