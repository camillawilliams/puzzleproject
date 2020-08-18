import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";

export const HomeJumbo = () => (
	<Jumbotron>
		<Container className="h-100">
			<h1 className="display-2">PUZZLED?</h1>
			<h2 className="display-4">
				SIGN IN FOR THE FUN TO BEGIN! &nbsp;
				<i className="fas fa-puzzle-piece" />
			</h2>
			<p className="lead" />
		</Container>
	</Jumbotron>
);
