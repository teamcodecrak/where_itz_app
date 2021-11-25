import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo  from '../assets/logo2.png'

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
                        <img src={logo} alt="where itz app logo" className="logo" width="100px" height="50px"/>
                    </NavLink>
                    {!loggedIn &&
                    <>
                        <a href={signInRoute} className="nav-link">Sign In</a>
                        <a href={newUserRoute} className="nav-link">Sign Up</a>
                        <NavLink to="/" className="nav-link">Search</NavLink>
                    </>
                    }
                    {loggedIn &&
                    <>
                        <h1 style={{backgroundColor:"#540000", fontSize:"20px", padding:"16px"}}>Hello, {currentUser.username}</h1>
                        <a href={signOutRoute} className="nav-link">Sign Out</a>
                        <NavLink to="/mylists" className="nav-link">My Lists</NavLink>
                        <NavLink to="/" className="nav-link">Search</NavLink>
                    </>
                    } 
                </div>
            </header>
        )
    }
}
export default Header