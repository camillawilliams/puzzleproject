import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const MyNavbar = () => (
	<div className="container">
		<Navbar bg="light" expand="lg">
			<i className="fas fa-puzzle-piece" />
			&nbsp;
			<Navbar.Brand href="#home" className="font-weight-bold">
				PUZZLE SWAP
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>

				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Go to Cart</NavDropdown.Item>
				</NavDropdown>
			</Navbar.Collapse>
			<Nav.Link href="#link">
				<i className="fas fa-shopping-cart" />
			</Nav.Link>
		</Navbar>
	</div>
);
