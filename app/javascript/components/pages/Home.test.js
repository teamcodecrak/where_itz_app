import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When Home renders',() => {
    it("displays a search button", () => {
      const home = shallow(<Home />);
      const homeBut = home.find("button");
      expect(homeBut.length).toEqual(1);
    });
})