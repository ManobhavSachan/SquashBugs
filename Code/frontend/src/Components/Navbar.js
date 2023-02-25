import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/RaiseBugs">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ResolveBugs">
                  ResolveBugs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/RaiseBugs">
                  RaiseBugs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/RemoveBugs">
                  RemoveBugs
                </Link>
              </li>
            </ul>
              <button className="btn btn-light mx-2" type="submit">
              {/* <Link to="/SignUp"> */}
                  Sign Up
              {/* </Link> */}
                
              </button>
              <button className="btn btn-light mx-2" type="submit">
                Log In
              </button>

          </div>
        </div>
      </nav>
    </div>
  );
}
