import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("displays a Footer", () => {
    const foot = shallow(<Footer />)
    expect(foot.find('h1').text()).toEqual('Footer')
    })
})