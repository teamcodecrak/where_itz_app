import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("displays a header", () => {
    const head = shallow(<Header />)
    expect(head.find('h1').text()).toEqual('Header')
    })
})

