import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white header">
            
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                display: "flex"
              }}
              className="center"
            >
              <img src="assets/images/logo.png" />
            </Link>
            <div>
              <Link
                  to="/register"
                  style={{
                    width: "100px",
                    borderRadius: "5vw",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  style={{
                    width: "100px",
                    borderRadius: "5vw",
                    letterSpacing: "1.5px",
                    marginLeft: "10px",
                  }}
                  className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                >
                  Log in
                </Link>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
