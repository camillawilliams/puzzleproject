import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);
	const { loggedIn } = store.user;

	return (
		<div className="mynavbar mx-5" dispay="flex">
			<Navbar bg="light" expand="lg">
				<i className="fas fa-puzzle-piece" />
				&nbsp;
				<Navbar.Brand href="#home" className="font-weight-bold text-success">
					<Link to="/">PUZZLE SWAP</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto" />
					{loggedIn ? (
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>
					) : null}
					{/* above will only be for signed in people, now contained in mynavbar_signin.js */}
					<NavDropdown title="Menu" id="basic-nav-dropdown">
						{store.user.token != null ? (
							<NavDropdown.Item onClick={() => actions.logout()}>
								<Link to="/signin">Logout </Link>
							</NavDropdown.Item>
						) : (
							<NavDropdown.Item>
								<Link to="/signin">Sign In </Link>
							</NavDropdown.Item>
						)}
						{loggedIn ? null : (
							<NavDropdown.Item>
								<Link to="/registerpage">Register</Link>
							</NavDropdown.Item>
						)}
						{/* {loggedIn ? <NavDropdown.Item href="/upload">Upload View</NavDropdown.Item> : null} */}
						{loggedIn ? (
							<NavDropdown.Item>
								<Link to="/swap">Upload Your Puzzle</Link>
							</NavDropdown.Item>
						) : null}

						{loggedIn ? (
							<NavDropdown.Item>
								<Link to="/puzzles">Browse Puzzles</Link>
							</NavDropdown.Item>
						) : null}

						{loggedIn ? (
							<NavDropdown.Item>
								<Link to="/shipping/">Shipping</Link>
							</NavDropdown.Item>
						) : null}

						{loggedIn ? (
							<NavDropdown.Item>
								<Link to="/track">Track Your Order</Link>
							</NavDropdown.Item>
						) : null}

						{loggedIn ? (
							<NavDropdown.Item>
								<Link to="/report">Contact Us</Link>
							</NavDropdown.Item>
						) : null}
					</NavDropdown>
				</Navbar.Collapse>
				{loggedIn ? (
					<Nav.Link link="#link">
						<i className="fas fa-shopping-cart" />
					</Nav.Link>
				) : null}
			</Navbar>
		</div>
	);
};
