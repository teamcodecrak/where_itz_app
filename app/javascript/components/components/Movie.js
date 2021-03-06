import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
          };
        }
    toggle = (e) => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

      addToList = (list_id, movie_id) => {
        fetch(`/show_movies_on_list/list_id=${list_id}&movie_id=${movie_id}`, {
          body: JSON.stringify(movieList),
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
          .then(() => this.readMovieList())
          .catch((errors) => console.log("create errors:", errors));
      };

    render() {
        const  { lists, movie, movieList } = this.props
        return (
            <section className="card" key={movie.id}>
                    <h4>Name: {movie.name}</h4>
                    {lists.length > 0 &&
                                  lists.map((list) => {
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
                                            <div onClick={()=>{this.addToList(movie.id, list.id)}}>
                                              {list.list_name}
                                            </div>
                                          </DropdownItem>
                                        </DropdownMenu>
                                      </Dropdown>
                                  )})}
                </section>
        );
    }
}

export default Movie;