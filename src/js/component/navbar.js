import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-light bg-light mb-3">
				<a className="navbar-brand" href="#">
					<i className="fas fa-puzzle-piece fa-2x" />
				</a>

				<div className="ml-auto">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<li className="nav-item">
						<i className="fas fa-shopping-bag fa-2x" />
					</li>
				</div>
			</nav>
		</React.Fragment>
	);
};
