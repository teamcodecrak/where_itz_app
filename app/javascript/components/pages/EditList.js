import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        listName: "",
        // user_id: this.props.current_user.id
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
    this.props.updateList(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    const { listName } = this.state.form;
    return (
      <div className="page-body">
        <h3>Change the title of your list</h3>
        <div className="cards">
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
