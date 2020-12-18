import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Plan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
