import React, { Component } from 'react'
import { Nav, NavItem } from "reactstrap"
import AboutUs from "./pages/AboutUs"
import Acknowledgment from "./pages/Acknowledgment"
import EditList from "./pages/EditList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import ListItems from "./pages/ListItems"
import MyList from "./pages/MyList"
import NewList from "./pages/NewList"
import SearchApi from "./pages/SearchApi"
import SignUp from "./pages/SignUp"
import TitleApi from "./pages/TitleApi"


import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
  } from "react-router-dom"
  

 class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchApi: {}
    }
  }



  render() {
    
    const {
      loggedIn,
      currentUser,
      newUserRoute,
      signInRoute,
      signOutRoute
    } = this.props
    const { userQuery } = this.state
    
    return (
      <div>
        
        <Router>
          <Header {...this.props} /> 
          <Switch>
            <Route exact path="/" render={(props) => <Home userQuery={this.state.userQuery} />}
            />
            <Route path="/aboutus" component={ AboutUs } />
            <Route path="/mylist" component={ MyList } />
            <Route path="/searchapi" component={ SearchApi } />
            <Route path="/titleapi" component={ TitleApi } />
            <Route path="/acknowledgment" component={ Acknowledgment } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/newlist" component={ NewList } />
            <Route path="/editlist" component={ EditList } />
            <Route path="/listitems" component={ ListItems } />
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}
export default App