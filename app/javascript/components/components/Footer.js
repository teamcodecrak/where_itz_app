import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <footer>
                    <div className="foot-bar">
                    <NavLink to="/">&copy; 2021 Team CodeCrak</NavLink>
                    <NavLink to="/aboutus">About Us</NavLink>
                    <NavLink to="/acknowledgment">Acknowledgment</NavLink>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer