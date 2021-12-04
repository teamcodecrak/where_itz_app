import React, { Component } from "react";
import { Button, Card, CardImg, CardTitle, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

class UnprotectedMovie extends Component {

  render() {
    const { movie, signInRoute } = this.props;
    return (
      <>
        <Card body key={movie.id}>
          <CardTitle>
            <h4>Name: {movie.name}</h4>
            <h4>Image: </h4>{" "}
            <img src={movie.image} alt="tv show poster" width="200px" />
            <NavLink to="/users/sign_in">
                Sign In For More Info
            </NavLink>
          </CardTitle>
        </Card>
      </>
    );
  }
}

export default UnprotectedMovie;
