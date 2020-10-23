import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Jumbotron";

export const HomeJumbo = () => (
	<Jumbotron className="jumbo-container">
		<h1 className="display-2 text-center" style={{ color: "white" }}>
			{" "}
			PUZZLE SWAP
		</h1>
		<p className="display-5 text-light font-weight-bold text-center">
			<i className="fas fa-puzzle-piece" />A fun and affordable way to exchange puzzles and connect with other
			puzzlers-- locally and nationally!
			<p>
				Register for more details (shipment of one puzzle required).
				<i className="fas fa-puzzle-piece" />
			</p>
		</p>
		<p className="lead" />
	</Jumbotron>
);
