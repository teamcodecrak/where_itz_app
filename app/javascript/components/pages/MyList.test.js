import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyList from './MyList'

Enzyme.configure({ adapter: new Adapter() })

describe('When app renders...',() => {
    it("See text on the MyList page", () => {
    const list = shallow(<MyList />)
    expect(list.find('h1').text()).toEqual('This is the MyList')
    })
})