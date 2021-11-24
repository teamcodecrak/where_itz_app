import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

 class MyList extends Component {
    render() {
        const { list, movies, movieList } = this.props
        
        return (
            <div>
                <h1>My Lists</h1>
                <br />
                <br />
                <article className="cards">
                    {list && list.map(list => {
                        return (
                            <section className="card" key={list.id}>
                                <h3>{list.title}</h3>
                            </section>
                        )
                    })}
                </article>
            </div>
        )
    }
}
 
export default MyList