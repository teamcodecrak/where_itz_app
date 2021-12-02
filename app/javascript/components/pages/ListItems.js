import React, { Component } from 'react'
import { Button, Card, CardImg, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ListItems extends Component {
  render() {
    const { movies } = this.props
    return(
        <div className="page-center">
            <h3>Get your snacks ready!</h3>
            <br />
            <Col sm="8" >
                {movies.map(movie => {
                    return (
                      <Card body key={movie.id}>
                        <CardTitle>
                          <h4>Name: {movie.name}</h4>
                          <h4>Show Type: {movie.show_type}</h4>
                          <h4>
                            <a href={movie.officialSite} target="_blank">
                              Visit the official site.
                            </a>
                          </h4>
                          <h4>Network: {movie.network}</h4>
                          <img
                            src={movie.image}
                            alt="tv show poster"
                            width="200px"
                          />
                          <h4>Summary: {movie.summary}</h4>
                        </CardTitle>
                      </Card>
                    );
                })}
            </Col>
        </div>
    )
  }
}

export default ListItems