import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import authServices from "../../services/auth.services";

import "./styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await authServices.login(username, password);
      navigate("/protected");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h5>Welcome.. Please input your credentials</h5>
          <form className="login-form" onSubmit={handleSubmit}>
            <MDBInput
              className="mb-4"
              type="email"
              label="Email address"
              onChange={(event) => setUsername(event.target.value)}
            />
            <MDBInput
              className="mb-4"
              type="password"
              label="Password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <MDBBtn type="submit" block>
              Submit
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
