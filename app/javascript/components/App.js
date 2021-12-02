import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import AboutUs from "./pages/AboutUs";
import Acknowledgment from "./pages/Acknowledgment";
import EditList from "./pages/EditList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import UnprotectedHome from "./pages/UnprotectedHome";
import ListItems from "./pages/ListItems";
import MyList from "./pages/MyList";
import NewList from "./pages/NewList";
import SearchApi from "./pages/SearchApi";
import SignUp from "./pages/SignUp";
import TitleApi from "./pages/TitleApi";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      movieList: [],
      movies: [],
      movieApi: [],
    }
  }
  searchApi = (userQuery) => {
    fetch(`/get_movies?user_query=${userQuery}`)
      .then((response) => response.json())
      .then((payload) => this.setState({ movieApi: payload }))
      .catch((errors) => console.log(errors));
  };
  componentDidMount() {
    this.readList();
    this.readMovieList();
    this.readMovies();
  }
//Only returning lists I as a user made "userID"
  readList = () => {
    fetch("/lists")
      .then((response) => response.json())
      .then((payload) => this.setState({ lists: payload }))
      .catch((errors) => console.log("index errors:", errors));
  };
  //Pass list ID to find all instances of the list-movie join table
  readMovieList = () => {
    fetch("/movie_lists")
      .then((response) => response.json())
      .then((payload) => this.setState({ movieList: payload }))
      .catch((errors) => console.log("index errors:", errors));
  };
  //Pass movie ID to find individual instances of movies
  //ReFactor readMovieList and readMovie onto readMovieOnList
  readMovies = () => {
    fetch("/movies")
      .then((response) => response.json())
      .then((payload) => this.setState({ movies: payload }))
      .catch((errors) => console.log("index errors:", errors));
  };

  createList = (newList) => {
    fetch("/lists", {
      body: JSON.stringify(newList),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.");
        }
        return response.json();
      })
      .then(() => this.readList())
      .catch((errors) => console.log("create errors:", errors));
  };
  
  updateList = (editedList, id) => {
    fetch(`http://localhost:3000/lists/${id}`, {
      body: JSON.stringify(editedList),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readList())
      .catch((errors) => console.log(errors));
  };

  deleteList = (id) => {
    fetch(`lists/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong with your delete action.");
        }
        return response.json();
      })
      .then(() => this.readList())
      .catch((errors) => console.log("delete errors:", errors));
  };
  deleteMovieList = (id) => {
    fetch(`movie_lists/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong with your delete action.");
        }
        return response.json();
      })
      .then(() => this.readMovieList())
      .catch((errors) => console.log("delete errors:", errors));
  };
  deleteMovie = (id) => {
    fetch(`movies/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong with your delete action.");
        }
        return response.json();
      })
      .then(() => this.readMovie())
      .catch((errors) => console.log("delete errors:", errors));
  };

  render() {
    const { loggedIn, currentUser, newUserRoute, signInRoute, signOutRoute } =
      this.props;
    const { lists, movieList, movies, movieApi } = this.state;
    console.log("MovieApi", movieApi);
    return (
      <div>
        <Router>
          <Header {...this.props} />
          <Switch>
            {loggedIn && 
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home
                    searchApi={this.searchApi}
                    movieApi={movieApi}
                    lists={lists}
                    addToList={this.addToList}
                    movieList={movieList}
                  />
                )}
              />
            }
            {!loggedIn && 
              <Route
                exact
                path="/"
                render={(props) => (
                  <UnprotectedHome
                    searchApi={this.searchApi}
                    movieApi={movieApi}
                  />
                )}
              />
            }
            <Route path="/aboutus" component={AboutUs} />
            <Route
              path="/mylists"
              render={(props) => (
                <MyList
                  lists={lists}
                  movies={movies}
                  movieList={movieList}
                  deleteList={this.deleteList}
                />
              )}
            />
            <Route path="/searchapi" component={SearchApi} />
            <Route path="/titleapi" component={TitleApi} />
            <Route path="/acknowledgment" component={Acknowledgment} />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/newlist"
              render={(props) => {
                return (
                  <NewList
                    lists={lists}
                    createList={this.createList}
                    currentUser={currentUser}
                  />
                );
              }}
            />
            <Route
              path="/editlist/:id"
              render={(props) => {
                let id = props.match.params.id;
                let list = this.state.lists.find((l) => l.id === +id);
                return (
                  <EditList list={list} updateList={this.updateList} id={id} />
                );
              }}
            />
            <Route
              path="/listitems"
              render={(props) => {
                return (
                  <ListItems
                    lists={lists}
                    movies={movies}
                    currentUser={currentUser}
                  />
                );
              }}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
