import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

export const Swapcart = props => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState([]);
	const [puzzles, setPuzzles] = useState({});
	const { id } = useParams();

	const addToCart = () => puzzle => {
		setCart([...cart, puzzle]);
	};

	return (
		<div className="cart">
			<h3>Swap Cart</h3>
			<Container>
				<Card>
					<Card.Body>
						{/* <Card.Title>Name</Card.Title>
						<Card.Title>{store.puzzles[id].title}</Card.Title> */}
						<Row className="d-flex justify-content-center">
							<Card.Title>
								<h2>{store.puzzles[id].title}</h2>
							</Card.Title>
						</Row>
						{/* why does the above not work? */}
						<Row>
							<Col className="text-center">
								<Row>
									<Card.Img src="https://via.placeholder.com/400x250.png" />
								</Row>
							</Col>
							{/* why do these columns not work. I want image on left side  */}
							<Col>
								<Card.Text>{store.puzzles[id].text}</Card.Text>

								<Card.Text className="text-center">
									<strong>Description:</strong> <p>{store.puzzles[id].text}</p>
									<br />
									<strong>Ages:</strong> <p>{store.puzzles[id].ages}</p>
									<br />
									<strong>No. pieces:</strong> <p>{store.puzzles[id].pieces}</p>
									<br />
									<strong>Theme:</strong> <p>{store.puzzles[id].theme}</p>
								</Card.Text>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
			<br />
			<p>Please subscribe in order to start SWAPING puzzles.</p>

			<Button onClick={() => actions.createSubscription} variant="success" className="text-center">
				Subscribe
			</Button>
		</div>
	);
};
