import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="shadow-sm mb-5 bg-body rounded">
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address*
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password*
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-text mb-3">
            *Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <span className="form-text mx-4">
            Already have account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
