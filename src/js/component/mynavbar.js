import React, { useContext, useState, useRef, useEffect } from "react";
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
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState("");

	//useEffect(() => {
	//const categories = [];
	//const promises = new Array(20).fill().map((v, i) => fetch());
	//});

	return (
		<div className="mynavbar" dispay="flex">
			<Navbar bg="light" expand="lg" className="px-2">
				<i className="fas fa-puzzle-piece" />
				&nbsp;
				<Navbar.Brand href="#home" className="font-weight-bold text-success">
					<Link to="/">PUZZLE SWAP</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-6 ml-auto" />

					{/* search bar removed since search does not function yet */}

					<NavDropdown alignRight title="Menu" id="basic-nav-dropdown">
						{store.user.token != null && loggedIn ? (
							<NavDropdown.Item>
								<Link to="/profile">Profile</Link>
							</NavDropdown.Item>
						) : null}

						{store.user.token != null && loggedIn ? (
							<NavDropdown.Item>
								<Link to="/puzzles">Browse Puzzles</Link>
							</NavDropdown.Item>
						) : null}

						{/* {loggedIn ? (
							<NavDropdown.Item>
								<Link to="/shipping/">Shipping</Link>
							</NavDropdown.Item>
						) : null} */}

						{store.user.token != null && loggedIn ? (
							<NavDropdown.Item>
								<Link to="/track">Track Your Order</Link>
							</NavDropdown.Item>
						) : null}

						{store.user.token != null && loggedIn ? (
							<NavDropdown.Item>
								<Link to="/swap">Upload Your Puzzle</Link>
							</NavDropdown.Item>
						) : null}

						{store.user.token != null && loggedIn ? (
							<NavDropdown.Item>
								<Link to="/subscribe">Subscribe</Link>
							</NavDropdown.Item>
						) : null}

						{store.user.token != null && loggedIn ? (
							<NavDropdown.Item>
								<Link to="/report">Contact Us</Link>
							</NavDropdown.Item>
						) : null}

						{store.user.token != null ? (
							<NavDropdown.Item onClick={() => actions.logout()}>
								<Link to="/signin">Logout </Link>
							</NavDropdown.Item>
						) : (
							<NavDropdown.Item>
								<Link to="/signin">Sign In </Link>
							</NavDropdown.Item>
						)}
						{store.user.token != null && loggedIn ? null : (
							<NavDropdown.Item>
								<Link to="/registerpage">Register</Link>
							</NavDropdown.Item>
						)}
					</NavDropdown>
				</Navbar.Collapse>
				{store.user.token != null && loggedIn ? (
					// <span>{cart.length}</span>
					<Link to="/swapcart">
						<i className="fas fa-shopping-cart" />
					</Link>
				) : null}
			</Navbar>
		</div>
	);
};

//{store.user.token != null && loggedIn ? (
//<Form inline>
//<FormControl type="text" placeholder="Search" className="mr-sm-2" />
//<Button variant="outline-success">Search</Button>
//</Form>
//) : null}
