import React, { useEffect } from "react";
import { connect } from "react-redux";
import authActions from "../redux/actions/authAction";


const LogOut = (props) => {
  console.log(props);

  useEffect(() => {
    props.logOut();
    props.navigation.navigate("Home");
  }, []);

  return null;
};

const mapDispatchToProps = {
  logOut: authActions.logout,
};

export default connect(null, mapDispatchToProps)(LogOut);
