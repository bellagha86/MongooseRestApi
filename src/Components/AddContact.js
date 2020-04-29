import React, { Component } from "react";
import { connect } from "react-redux";
import { addcontact,editcontact} from "../action/action";
import { Modal, Button } from "antd";
import "./AddContact.css";
import "antd/dist/antd.css";

export class AddContact extends Component {
  state = {
    visible: false,
    name: this.props.contacts ? this.props.contacts.name : "",
    email: this.props.contacts ? this.props.contacts.email : "",
    tel: this.props.contacts ? this.props.contacts.tel : "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  initState = () => {
    this.setState({
      name: "",
      email: "",
      tel: "",
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  addEditContact=()=>{
    this.props.contacts?
    this.props.editcontact(this.props.contacts._id,{
        name:this.state.name,
        email:this.state.email,
        tel:this.state.tel
    }):
    this.props.addcontact(this.state);
    this.verifyChamps()
}

  verifyChamps = () => {
    this.state.name.length === 0 && alert("name is empty");
  };
  render() { console.log(this.props)
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.contacts ? "Edit" : "Add New Contact"}
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={()=>{this.props.editcontact(this.props.contacts._id,this.state)}}
          onCancel={this.handleCancel}
        >
          <div classname="container-input">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Please Enter a name...."
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              className="input"
              type="text"
              name="email"
              placeholder="Please Enter a mail...."
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              className="input"
              name="tel"
              placeholder="Please Enter a phone number...."
              value={this.state.tel}
              onChange={this.handleChange}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addcontact, editcontact })(AddContact);
