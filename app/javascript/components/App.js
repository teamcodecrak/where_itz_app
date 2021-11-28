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
      list: [],
      movieList: [],
      movies: [],
    }
  }

  componentDidMount(){
    this.readList()
    this.readMovieList()
    this.readMovies()
  }

  readList = () => {
    fetch("/lists")
    .then(response =>  response.json())
    .then(payload => this.setState({list: payload}))
    .catch(errors => console.log("index errors:", errors))
  }
  readMovieList = () => {
    fetch("/movie_lists")
    .then(response =>  response.json())
    .then(payload => this.setState({movieList: payload}))
    .catch(errors => console.log("index errors:", errors))
  }
  readMovies = () => {
    fetch("/movies")
    .then(response =>  response.json())
    .then(payload => this.setState({movies: payload}))
    .catch(errors => console.log("index errors:", errors))
  }

  createList = (newList) => {
    fetch("/lists", {
      body: JSON.stringify(newList),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.readList())
    .catch(errors => console.log("create errors:", errors))
  }
  createMovieList = (newMovieList) => {
    fetch("/movie_lists", {
      body: JSON.stringify(movieList),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("There is something wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.readMovieList())
    .catch(errors => console.log("create errors:", errors))
  }
  updateList = (editedList, id) => {
    fetch(`http://localhost:3000/lists/${id}`,{
      body: JSON.stringify(editedList),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readList())
    .catch(errors => (console.log(errors)))
  }


  deleteList = (id) => {
    fetch(`lists/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something went wrong with your delete action.")
      }
      return response.json()
    })
    .then(() => this.readList())
    .catch(errors => console.log("delete errors:", errors))
  }
  deleteMovieList = (id) => {
    fetch(`movie_lists/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something went wrong with your delete action.")
      }
      return response.json()
    })
    .then(() => this.readMovieList())
    .catch(errors => console.log("delete errors:", errors))
  }
  deleteMovie = (id) => {
    fetch(`movies/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something went wrong with your delete action.")
      }
      return response.json()
    })
    .then(() => this.readMovie())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    
    const {
      loggedIn,
      currentUser,
      newUserRoute,
      signInRoute,
      signOutRoute
    } = this.props
    const { list, movieList, movies } = this.state
    return (
      <div>
        
        <Router>
          <Header {...this.props} /> 
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/aboutus" component={ AboutUs } />
            <Route path="/mylists" render={(props) => <MyList list={list} movies={movies} movieList={movieList}/>} />
            <Route path="/searchapi" component={ SearchApi } />
            <Route path="/titleapi" component={ TitleApi } />
            <Route path="/acknowledgment" component={ Acknowledgment } />
            <Route path="/signup" component={ SignUp } />
            
            
            <Route path="/newlist"
            render={(props) => {
            return <NewList list={list} createList={this.createList} currentUser={currentUser} />
           }} />
           <Route
              path="//lists/:id/edit"
              render={(props) => {
                let id = props.match.params.id
                let list = this.state.list.find(c => c.id === +id)
                return <ListEdit list={list} updateList={this.updateList } id={id} />
              }}
            />
            <Route path="/listitems" component={ ListItems } />
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}
export default App

// {this.props.logged_in && 
//   <Route path="/mylists" render={(props) => {
//     let list = this.state.list.filter(a => a.user_id === this.props.current_user.id)
//     return <MyList list={list} movies={movies} movieList={movieList}/>
//     }} />
//   }