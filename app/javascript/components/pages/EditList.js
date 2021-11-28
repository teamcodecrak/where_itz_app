import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class EditList extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                list_name: "",
                // user_id: this.props.current_user.id
            },
            submitted: false
        }
      }
    
      handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
      }
    
      handleSubmit = () => {
        this.props.createList(this.state.form)
        this.setState({submitted: true})
      }

    render() {
        const { list_name } = this.state.form
        return (
            <div className="page-body">
        <h3>Change the title of your list</h3>
        <div className="cards">
            <Form>
              <FormGroup>
                <Label for="list_name">
                  list Name
                </Label>
                <Input
                  name="list_name"
                  type="text"
                  onChange={this.handleChange}
                  value={list_name}
                />
              </FormGroup>
              <br />
              <Button onClick={this.handleSubmit}>
                Confirm Changes
              </Button>
            </Form>
            { this.state.submitted && <Redirect to="/mylists" /> }

        </div>
      </div>
    )
  }
}
export default EditList