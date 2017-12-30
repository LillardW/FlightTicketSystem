import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

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
					<LinkContainer to="/">
						<NavItem>index</NavItem>
					</LinkContainer>
					<LinkContainer to="/login">
						<NavItem>ticket</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}

export default BasicFrame;