import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        list_name: this.props.list ? this.props.list.list_name : "",
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
    this.props.updateList( this.state.form, this.props.id );
    this.setState({ submitted: true });
  };

  render() {
    const { list_name } = this.state.form;
    return (
      <div className="page-body">
        <h3>Change List Title</h3>
        <div className="cards">
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
            <Button onClick={this.handleSubmit}>Confirm Changes</Button>
          </Form>
          {this.state.submitted && <Redirect to="/mylists" />}
        </div>
      </div>
    );
  }
}
export default EditList;
