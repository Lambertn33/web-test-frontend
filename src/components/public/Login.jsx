import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

import './styles/login.css';

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <h5>Welcome.. Please input your credentials</h5>
          <form className="login-form">
            <MDBInput className="mb-4" type="email" label="Email address" />
            <MDBInput className="mb-4" type="password" label="Password" />

            <MDBBtn type="submit" block>
              Submit
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
