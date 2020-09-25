import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class MenuBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#home">CREATE</Nav.Link>
                    <Nav.Link href="#features">ARTIST</Nav.Link>
                    <Nav.Link href="#pricing">ALL PRODUCTS</Nav.Link>
                    <Nav.Link href="#pricing">SHOP</Nav.Link>
                    <Nav.Link href="#pricing">LOG IN</Nav.Link>
                    <Nav.Link href="#pricing">CART</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MenuBar