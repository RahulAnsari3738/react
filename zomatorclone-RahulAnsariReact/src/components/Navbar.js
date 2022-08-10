import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
// import BootStrap from "bootstrap/dist/css/bootstrap.css"
function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.Title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurant">
                  Restaurant
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/update"
                >
                  update
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Default switch checkbox input
                </label>
              </div>

              <label
                className="form-check-label mx-1 b-2"
                htmlFor="flexSwitchCheckDefault"
              >
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </label>
              <label
                className="form-check-label mx-1 "
                htmlFor="flexSwitchCheckDefault"
              >
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
  Title: PropType.string,
};
Navbar.defaultProps = {
  Title: "FoodApp",
};

export default Navbar;
