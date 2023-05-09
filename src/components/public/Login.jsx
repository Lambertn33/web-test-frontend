import React, { useState, useEffect } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";

import authServices from "../../services/auth.services";

import "../../App.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const authenticatedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (authenticatedUser) {
      window.location.href="/protected";
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setHasError(true);
      setErrorMessage("please fill all fields");
    } else {
      try {
        setIsLoading(true);
        await authServices.login(username, password);
        //use full refresh to toggle user in local storage
        window.location.href = "/protected";
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
        setErrorMessage(error.response.data.message);
      }
    }
  };

  function hideError() {
    setHasError(false);
    setErrorMessage("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 login">
          <h5>Welcome.. Please input your credentials</h5>
          <form className="login-form" onSubmit={handleSubmit}>
            {hasError ? (
              <div className="error-message">
                <span className="text-danger">{errorMessage}</span>
                <MDBIcon icon="trash" fas onClick={hideError} />
              </div>
            ) : null}
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

            <MDBBtn
              type="submit"
              block
              color={loading ? "secondary" : "primary"}
            >
              {loading ? "Please wait..." : "Submit"}
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
