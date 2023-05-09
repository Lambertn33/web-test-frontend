import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const authenticatedUser = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.reload();
  }
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Test Application</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <Link to="/" className="link"> Home </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
          {!authenticatedUser ? (
            <Link to="/login" className="link">Login</Link>
          ) : (
            <Link to="#" onClick={logout}>
              {" "}
              Logout{" "}
            </Link>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
