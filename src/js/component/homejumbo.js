import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";

export const HomeJumbo = () => (
	<Jumbotron className="jumbo-container">
		<h1 className="display-2">PUZZLED?</h1>
		<h2 className="display-4">
			Sign in for the fun to begin! &nbsp;
			<i className="fas fa-puzzle-piece" />
		</h2>
		<p className="lead" />
	</Jumbotron>
);
