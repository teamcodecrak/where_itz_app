import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("See text on the home page", () => {
    const home = shallow(<Home />)
    expect(home.find('h1').text()).toEqual('This is the Home')
    })
})