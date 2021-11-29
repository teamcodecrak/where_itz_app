import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CardImg, Card, Button, CardTitle, Row, Col } from 'reactstrap'

class MyList extends Component {
  render() {
    const { list, movies, movieList } = this.props;
    return (
      <div>
        <h1>My Lists</h1>
        <br />
        <br />
        <NavLink to={"/newList"}>
          <button>Create a List</button>
        </NavLink>
        <article className="cards">
          {list.length > 0 &&
            list.map((list) => {
              return (
                <section className="card" key={list.id}>
                  <h3>{list.list_name}</h3>
                  <NavLink to={`/listItems/${list.id}`}>
                    <Button>View Movies</Button>
                  </NavLink>
                  <br/>
                  <NavLink to={`/editlist/${list.id}`}>
                    <Button>
                      Edit List Name
                    </Button>
                  </NavLink>  
                  <Button onClick={() => this.props.deleteList(list.id)}>
                    Delete List
                  </Button>
                </section>
              );
            })}
        </article>
      </div>
    );
  }
}

export default MyList;
