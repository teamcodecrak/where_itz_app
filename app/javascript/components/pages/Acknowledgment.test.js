import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Acknowledgment from './Acknowledgment'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("See text on the Acknowledgment page", () => {
    const acknowledgment = shallow(<Acknowledgment />)
    expect(acknowledgment.find('h1').text()).toEqual('This is Acknowledgment')
    })
})