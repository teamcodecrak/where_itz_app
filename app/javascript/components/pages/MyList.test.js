import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyList from './MyList'

Enzyme.configure({ adapter: new Adapter() })

describe('When MyList renders',() => {
    it("displays a header", () => {
      const mylist = shallow(<MyList />);
      expect(mylist.find("h1").text()).toEqual("My Lists");
    });
})
