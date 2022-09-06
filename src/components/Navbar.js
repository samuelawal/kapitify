import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import React from 'react'
import burger from "../assets/img/burger.svg"
import logo from "../assets/img/kapitify-logo.svg"
import SearchIcon from "../assets/img/search-icon.svg"
import user from "../assets/img/user-icon.svg"
import love from "../assets/img/love-icon.svg"
import chat from "../assets/img/chat-icon.svg"
const NavHeader = () => {
  return (
   <Navbar bg="light">
    <Container>
        <Navbar.Brand href="/">
        <img src={burger} alt="Mobile bar"/>
        <img src={logo} alt="kapitify logo" className="ms-4"/>
        </Navbar.Brand>
        <Form className="d-flex">
        <Button className="mybtn p-2"><img src={SearchIcon} alt="Search for an Item"/></Button>
            <Form.Control
              type="search"
              placeholder="Find Item"
              aria-label="Search"
            />
          </Form>
        <Nav className="nav-link p-2">
        <Nav.Link href="#home" className="me-3">
            <img src={user} alt="user icon" className="me-2"></img>
            Accounts</Nav.Link>
        <Nav.Link href="#features" className="me-3">
        <img src={chat} alt="user icon" className="me-2"></img>
           Chat</Nav.Link>
        <Nav.Link href="#pricing">
        <img src={love} alt="user icon" className="me-2"></img>
            My Interest</Nav.Link>
        </Nav>
      
    </Container>
   </Navbar>
  )
}

export default NavHeader
