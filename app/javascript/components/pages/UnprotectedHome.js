import React, { Component } from "react";

import UnprotectedMovie from "../components/UnprotectedMovie";

class UnprotectedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuery: "",
      // movieApi: this.props.movieApi,
      submitted: false,
    };
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
    const { movieApi } = this.props;
    return (
      <div className="page-center">
        <h1>
          Keep hearing about new tv shows, but aren't sure where to find them?
          With WhereItzApp, you can find where your favorite shows are streaming
          in one central location. Create customized tv lists and never wonder
          where to find that must see show again.
        </h1>
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
                return <UnprotectedMovie movie={movie} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default UnprotectedHome;
