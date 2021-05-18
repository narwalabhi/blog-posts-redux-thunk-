import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const UserHeader = (props) => {
  useEffect(() => {
    props.fetchUsers(props.userId)
    console.log(props.userId);
  }, []);

  

  // const user = props.users.find(user => user.id === props.userId);

  return <div className="header">
    {props.user && props.user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUsers })(UserHeader);
