import React from "react"
import { Link } from "react-router-dom"
import Logo from "../img/Logo.png"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavBar() {
  
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <img src={Logo} width={210} height={210} alt="Cocktail-Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home"> Home </Link>
              <Link className="nav-link" to="/cocktailOfTheDay"> Cocktail of the day </Link>
              <NavDropdown title="Cocktails" id="basic-nav-dropdown">
                <NavDropdown.Item><Link className="nav-link" to="/alcoholic"> Alcoholic </Link></NavDropdown.Item>
                <NavDropdown.Item><Link className="nav-link" to="/non-alcoholic"> Non-Alcoholic </Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}