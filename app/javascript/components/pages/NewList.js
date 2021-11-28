import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        listName: "",
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = () => {
    this.props.createList(this.state.form);
    this.setState({ submitted: true });
  };
  render() {
    const { listName } = this.state.form;
    return (
      <div>
        <h1>Create A New List</h1>
        <Form>
          <FormGroup>
            <Label for="listName">List Name</Label>
            <Input
              name="listName"
              type="text"
              onChange={this.handleChange}
              value={listName}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} name="submit">
            Add A New List
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/mylists" />}
      </div>
    );
  }
}
export default NewList;
