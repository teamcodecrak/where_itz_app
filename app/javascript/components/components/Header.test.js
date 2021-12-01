import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("the header has a logo", () => {
      const header = shallow(<Header />);
      const headerImg = header.find("img");
      expect(headerImg.length).toEqual(1);
    });
})

