import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";

class BasicFrame extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Ticket</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem><Link to="/">index</Link></NavItem>
                    <NavItem><Link to="/login">ticket</Link></NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default BasicFrame;