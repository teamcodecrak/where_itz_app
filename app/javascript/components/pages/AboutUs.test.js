import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'

Enzyme.configure({ adapter: new Adapter() })

describe('When AboutUs renders',() => {
    it("displays images", () => {
      const about = shallow(<AboutUs />)
      const aboutImg = about.find("img")
      expect(aboutImg.length).toEqual(5)
    })
})
