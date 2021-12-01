import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Acknowledgment from './Acknowledgment'

Enzyme.configure({ adapter: new Adapter() })

describe('When Acknowledgment renders...',() => {
    it("displays typography", () => {
      const acknowledge = shallow(<Acknowledgment />);
      const acknowledgeDt = acknowledge.find("dt");
      expect(acknowledgeDt.length).toEqual(2);
    });
})