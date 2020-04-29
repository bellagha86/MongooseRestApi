import React, { Component } from "react";
import { connect } from "react-redux";
import "./ContactList.css";
import { getcontacts, deletecontact } from "../action/action";
import { Card, Button } from "antd";
import { AddContact } from "./AddContact";
const { Meta } = Card;

class ContactList extends Component {
  componentDidMount() {
    this.props.getcontacts();
  }
  render() {
    return (
      <div>
        {this.props.contactList.map((el, i) => (
          <Card
            key={i}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
              />
            }
          >
            <Meta title={el.name} description={el.email} />
            <Meta description={el.tel} />
            <AddContact contacts={el} />
            <Button
              onClick={() => this.props.deletecontact(el._id)}
              type="primary"
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactList: state.contact,
  };
};
export default connect(mapStateToProps, { getcontacts, deletecontact })(
  ContactList
);
