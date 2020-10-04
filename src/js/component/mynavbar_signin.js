import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const MyNavbarSignIn = () => {
    const {store, actions} = userContext(Context);
    const {loggedIn} = store.user;

    return (
	<div className="mynavbar mx-">
		<Navbar bg="light" expand="lg">
			<i className="fas fa-puzzle-piece" />
			&nbsp;
			<Navbar.Brand href="#home" className="font-weight-bold text-success">
				<Link to="/">PUZZLE SWAP</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>
				<NavDropdown title="Menu" id="basic-nav-dropdown">
					<NavDropdown.Item>
						<Link to="/signin">Sign In </Link>
					</NavDropdown.Item>

					<NavDropdown.Item href="/track">Track Your Order</NavDropdown.Item>
					<NavDropdown.Item href="/puzzles">Browse Puzzles</NavDropdown.Item>
					<NavDropdown.Item href="/upload">Upload View</NavDropdown.Item>
					<NavDropdown.Item href="/report">Contact Us</NavDropdown.Item>
                    <NavDropdown.Item href="/swap/">Swap Puzzles</NavDropdown.Item>
					<NavDropdown.Item href="/shipping/">Shipping</NavDropdown.Item>
				</NavDropdown>
			</Navbar.Collapse>

            {store.user.info != null
            &&
            store.user.info.puzzles_owned.length > 0
            ? (
            <Nav.Link href="#link">
				<i className="fas fa-shopping-cart" />
			</Nav.Link>
            ) : null}
            
		   </Navbar>
       </div>
    
   );
}