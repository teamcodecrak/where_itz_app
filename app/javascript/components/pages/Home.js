import React, { Component } from 'react'

 class Home extends Component {
     constructor(props){
         super(props)
         this.state = {
             userQuery: "",
             searchApi: {},
             submitted: false
         }
     }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({userQuery: e.target.value})
    //    User inputs a title and the handleChange triggers the change in state to update the userQuery 
      }

      handleSubmit = () => {
        this.props.searchApi(this.state.userQuery)
        this.setState({submitted: true})
        // After the user clicks submit the handleSubmit toggles state from submited to true
      }
      

    render() {
        // const { userQuery } = this.props
        return (
            <div>
                 <input type="text" id="search" value={this.state.userQuery} 
                 onChange={this.handleChange} 
                 placeholder="Search for a Movie or TV Series..."/>
                
                <button id="search_btn" onClick={this.handleSubmit} name="submit">
                    Search
                </button>
                <article className="cards">
                {searchApi.length > 0 &&
                    searchApi.map((searchApi) => {
                    return (
                        <section className="card" key={searchApi.id}>
                        <h3>{searchApi.searchApi}</h3>
                        <NavLink to={`/searchApiItems/${searchApi.id}`}>
                            <Button>View Movies</Button>
                        </NavLink>
                        <br/>
                        <NavLink to={`/editsearchApi/${searchApi.id}`}>
                            <Button>
                            Add
                            </Button>
                        </NavLink>  
                        <Button onClick={() => this.props.deletesearchApi(searchApi.id)}>
                            Delete searchApi
                        </Button>
                        </section>
                    );
                    })}
                    </article>
            </div>
        )
    }
}
export default Home
