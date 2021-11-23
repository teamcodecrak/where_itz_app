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
          console.log(currentUser)
        return (
            <header>
                <div className="nav-bar">
                <NavLink to="/">
                    <img src={logo} alt="where itz app logo" className="logo" width="100px" height="100px"/>
                </NavLink>
        
                        {!loggedIn &&
                        <>
                            <ul>
                                <a href={signInRoute} className="nav-link">Sign In</a>
                                </ul>
                                <ul>
                            <a href={newUserRoute} className="nav-link">Sign Up</a>
                            </ul>
                            <ul>
                            <NavLink to="/" className="nav-link">Search</NavLink>
                            </ul>
                        </>

                        }
                        {loggedIn &&
                        <>
                        <ul>
                            <h1>Hello, {currentUser.username}</h1>
                            {/* </ul>
                            <ul> */}
                            <a href={signOutRoute} className="nav-link">Sign Out</a>
                            {/* </ul>
                            <ul> */}
                            <NavLink to="/mylists" className="nav-link">My Lists</NavLink>
                            {/* </ul>
                            <ul> */}
                            <NavLink to="/" className="nav-link">Search</NavLink>
                            </ul>
                        </>
                        }
                   
                </div>
            </header>
        )
    }
}
export default Header