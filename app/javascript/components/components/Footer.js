import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <p>&copy; 2021 Team CodeCrak</p>
                </ul>
                <ul>
                    <NavLink to="/aboutus">About Us</NavLink>
                </ul>
                <ul>
                    <NavLink to="/acknowledgment">Acknowledgment</NavLink>
                </ul>
            </footer>
        )
    }
}
export default Footer