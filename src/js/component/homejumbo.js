import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";

export const HomeJumbo = () => (
	<Jumbotron className="jumbo-container">
		<h1 className="display-2 text-light text-center font-weight-bold">WELCOME TO PUZZLE SWAP!</h1>
		<p className="display-5 text-light font-weight-bold">
			<i className="fas fa-puzzle-piece" />A fun and affordable way to swap (exhange) puzzles and have a social
			connection with people that share your same interest. Register for more details (shipment of one puzzle
			required).&nbsp;
			<i className="fas fa-puzzle-piece" />
		</p>
		<p className="lead" />
	</Jumbotron>
);
