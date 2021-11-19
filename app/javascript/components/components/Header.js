import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo  from '../assets/logo.png'

 class Header extends Component {
    render() {
        const {
            loggedIn,
            currentUser,
            newUserRoute,
            signInRoute,
            signOutRoute
          } = this.props
          
        return (
            <header>
                <NavLink to="/">
                    <img src={logo} alt="where itz app logo" className="logo" width="100px" height="100px"/>
                </NavLink>
                <div className="nav-bar">
                    <ul>
                        {!loggedIn &&
                        <>
                            <a href={signInRoute} className="nav-link">Sign In</a>
                            <a href={newUserRoute} className="nav-link">Sign Up</a>
                            <NavLink to="/" className="nav-link">Search</NavLink>
                        </>
                        }
                        {loggedIn &&
                        <>
                            <a href={signOutRoute} className="nav-link">Sign Out</a>
                            <NavLink to="/mylists" className="nav-link">My Lists</NavLink>
                            <NavLink to="/" className="nav-link">Search</NavLink>
                        </>
                        }
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header