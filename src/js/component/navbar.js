import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


export const Navbar = () => {
	return (
        <React.Fragment>
		<nav className="navbar navbar-light bg-light mb-3">
              <a class="navbar-brand" href="#">
    <i class="fas fa-puzzle-piece fa-2x"></i>
  </a>

			<div className="ml-auto">
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                </li>
				 <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <li class="nav-item">
                     <i class="fas fa-shopping-bag fa-2x"></i>
                </li>
			</div>
		</nav>
        </React.Fragment>
	);
};
