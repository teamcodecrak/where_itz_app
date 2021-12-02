import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CardImg, Card, Button, CardTitle, Row, Col } from 'reactstrap'

class MyList extends Component {
  render() {
    const { lists, movies, movieList } = this.props;
    return (
      <div className="page-center">
        <h1>My Lists</h1>
        <br />
        <NavLink to={"/newList"}>
          <Button>Create a List</Button>
        </NavLink>
          <br/>

          {lists.length > 0 &&
            lists.map((list) => {
              return (
                <Card>
                <section key={list.id}>
                  <h3>{list.list_name}</h3>
                  <NavLink to={`/listItems/${list.id}`}>
                    <Button>View Shows</Button>
                  </NavLink>
                  <NavLink to={`/editlist/${list.id}`}>
                    <Button>Edit List Name</Button>
                  </NavLink>
                  <Button onClick={() => this.props.deleteList(list.id)}>
                    Delete List
                  </Button>
                </section>
                </Card>
              );
            })}
 
      </div>
    );
  }
}

export default MyList;
