import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListItems from './ListItems'

Enzyme.configure({ adapter: new Adapter() })

describe('When ListItems renders...',() => {
    it("See text on the ListItems page", () => {
    const items = shallow(<ListItems />)
    expect(items.find('h1').text()).toEqual('LIST ITEMS!!!')
    })
})