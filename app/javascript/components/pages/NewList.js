import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        list_name: "",
        user_id: this.props.currentUser.id,
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({form: form });
  };
  handleSubmit = () => {
    this.props.createList(this.state.form);
    this.setState({ submitted: true });
  };
  render() {
    const { list_name } = this.state.form;
    return (
      <div>
        <h1>Create A New List</h1>
        <Form>
          <FormGroup>
            <Label for="list_name">List Name</Label>
            <Input
              type="text"
              name="list_name"
              onChange={this.handleChange}
              value={list_name}
            />
          </FormGroup>
          <br />
          <Button onClick={this.handleSubmit} >
            Add A New List
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/mylists" />}
      </div>
    );
  }
}
export default NewList;
