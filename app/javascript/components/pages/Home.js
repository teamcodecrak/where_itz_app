import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userQuery: "",
      // movieApi: this.props.movieApi,
      submitted: false,
        form: {
          name: "",
          show_type: "",
          genres: [],
          officialSite: "",
          network: [],
          image: [],
          summary: "",
        },
        dropdownOpen: false,
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
    const { movieApi, list } = this.props;
    console.log("Home.js movieApi props", movieApi);
    const { name, show_type, genres, officialSite, network, image, summary } =
      this.state.form;
    console.log("Name", movieApi.name);
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
              movieApi.map((movieApi) => {
                return (
                  <Form key={movieApi.id}>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <br />
                      <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange2}
                        value={movieApi.name || ""}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="show_type">Show Type</Label>
                      <br />
                      <Input
                        type="text"
                        name="show_type"
                        onChange={this.handleChange2}
                        value={movieApi.show_type || ""}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="genres">Genres</Label>
                      <br />
                      <Input
                        type="text"
                        name="genres"
                        onChange={this.handleChange2}
                        value={movieApi.genres || ""}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="officialSite">Official Site</Label>
                      <br />
                      <Input
                        type="text"
                        name="officialSite"
                        onChange={this.handleChange2}
                        value={movieApi.officialSite || ""}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="network">Network</Label>
                      <br />
                      <Input
                        type="text"
                        name="network"
                        onChange={this.handleChange2}
                        value={movieApi.network || ""}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="image">Image</Label>
                      <br />
                      <Input
                        type="file"
                        name="image"
                        onChange={this.handleChange2}
                        value={movieApi.image || ""}
                        readOnly
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="summary">Summary</Label>
                      <br />
                      <Input
                        type="text"
                        name="summary"
                        onChange={this.handleChange2}
                        value={movieApi.summary || ""}
                        readOnly
                      />
                    </FormGroup>
                    {list.length > 0 &&
                      list.map((list) => {
                        return (
                          <Dropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggle}
                            key={list.id}
                          >
                            <DropdownToggle caret>
                              Add to My Lists
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>
                                <div onClick={this.handleSubmit2}>
                                  {list.list_name}
                                </div>
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        );
                      })}
                  </Form>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
