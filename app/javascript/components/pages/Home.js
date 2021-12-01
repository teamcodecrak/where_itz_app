import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Movie from '../components/Movie'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userQuery: "",
      // movieApi: this.props.movieApi,
      submitted: false,
        dropdownOpen: false,
      };
    }

    toggle = (e) => {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ userQuery: e.target.value });
    //    User inputs a title and the handleChange triggers the change in state to update the userQuery
  };

  handleSubmit = () => {
    this.props.searchApi(this.state.userQuery);
    this.setState({ submitted: true });
    // After the user clicks submit the handleSubmit toggles state from submited to true
  };
  

  render() {
    // const { userQuery } = this.props
    const { movieApi, lists, movieList } = this.props;
    return (
      <div>
        <input
          type="text"
          id="search"
          value={this.state.userQuery}
          onChange={this.handleChange}
          placeholder="Search for a Movie or TV Series..."
        />

        <button id="search_btn" onClick={this.handleSubmit} name="submit">
          Search
        </button>
        <br />
        <br />
        <div className="page-body">
          <h3>Search Results</h3>
          <div className="cards">
            {movieApi.length > 0 &&
              movieApi.map((movie) => {
                return (
                  < Movie lists={lists} movie={movie} addToList={this.props.addToList} movieList={movieList} />
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
