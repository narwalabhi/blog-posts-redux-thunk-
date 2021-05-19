import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {

  // const user = props.users.find(user => user.id === props.userId);

  return <div className="header">
    {props.user && props.user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user : state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
