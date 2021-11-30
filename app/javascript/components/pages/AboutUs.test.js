import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'
import mockPic from '../mockFile.js'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("See text on the AboutUs page", () => {
    const about = shallow(<AboutUs />)
    expect(about.find('h1').text()).toEqual('About Us')
    })
})