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
        <img src={Logo} width={230} height={230} alt="Coctail-Logo" />
        <Navbar.Brand><Link className="nav-link" to="/home"> Home </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/coctailOfTheDay"> Coctail of the day </Link>
            <NavDropdown title="Coctails" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alcoholic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Non-Alcoholic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
