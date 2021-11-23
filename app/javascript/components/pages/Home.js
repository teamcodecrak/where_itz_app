import React, { Component } from 'react'

 class Home extends Component {
     constructor(props){
         super(props)
         this.state = {
             userQuery: "",
             submitted: false
         }
     }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({userQuery: e.target.value})
      }

      handleSubmit = () => {
        this.props.searchApi (this.state.userQuery)
        this.setState({submitted: true})
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
            </div>
        )
    }
}
export default Home
