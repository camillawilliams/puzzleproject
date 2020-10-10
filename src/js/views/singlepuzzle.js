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
	for (let number = 1; number <= 2; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		);
	}
	// console.log("the id: ", id, store.puzzleFetch);
	console.log("the id: ", store.puzzleFetch[id]);

	const paginationBasic = (
		<div>
			<Pagination size="lg">{items}</Pagination>
		</div>
	);
	//how to render the above inside of return

	return (
		<Container>
			{store.puzzleFetch.length > 0 ? (
				typeof store.puzzleFetch[id] !== "undefined" ? (
					<Card>
						<Card.Body>
							{/* all of these need to check PuzzleFetch now */}
							<Row className="d-flex justify-content-center">
								<Card.Title>
									<h2>{store.puzzleFetch[id].name_of_puzzle}</h2>
								</Card.Title>
							</Row>
							<Row>
								<Col className="text-center">
									<Row>
										<Card.Img src={store.puzzleFetch[id].picture_of_box} />
									</Row>
									<Row>{paginationBasic}</Row>
								</Col>
								{/* why do these columns not work. I want image on left side  */}
								<Col>
									<Card.Text className="text-center">
										<strong>Description:</strong>{" "}
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
										<br />
										<strong>Ages:</strong> <p>{store.puzzleFetch[id].age_range}</p>
										<br />
										<strong>No. pieces:</strong> <p>{store.puzzleFetch[id].number_of_pieces}</p>
										<br />
										<strong>Theme:</strong> <p>{store.puzzleFetch[id].category}</p>
										{store.user.info != null && store.user.info.puzzles_owned.length > 0 ? (
											<React.Fragment>
												<Button
													variant="success"
													onClick={() => actions.addtoCart(store.puzzleFetch[id])}
													className="text-center">
													<Link to="/swapcart">Add to Cart</Link>
												</Button>
											</React.Fragment>
										) : (
											<Button variant="success">
												<Link to="/swap">Please upload your Puzzle to start SWAPING</Link>
											</Button>
										)}
									</Card.Text>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				) : (
					<h3>Puzzle Not Found</h3>
				)
			) : (
				<h3>Loading...</h3>
			)}
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
