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
            </div>
        )
    }
}
export default Home
