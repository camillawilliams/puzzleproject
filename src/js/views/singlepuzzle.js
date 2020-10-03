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

export const Singlepuzzle = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		);
	}

	const paginationBasic = (
		<div>
			<Pagination size="lg">{items}</Pagination>
		</div>
	);
	//how to render the above inside of return

	return (
		<Container>
			<Card>
				<Card.Body>
					{/* <Card.Title>Name</Card.Title> */}
					<Card.Title>{store.puzzles[id].title}</Card.Title>
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
							<Row>{paginationBasic}</Row>
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
								{store.user.info != null && store.user.info.puzzles_owned.length > 0 ? (
									<React.Fragment>
										<Button variant="success" className="text-center">
											<Link to={`/swapcart/${id}`}>Add to Cart</Link>
										</Button>
									</React.Fragment>
								) : (
									<Button variant="success">
										<Link to="/swap">Please Upload Your Puzzle to start SWAPING</Link>
									</Button>
								)}
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};

Singlepuzzle.propTypes = {
	match: PropTypes.object,
	title: PropTypes.string,
	data: PropTypes.string,
	pieces: PropTypes.number,
	ages: PropTypes.string
};
