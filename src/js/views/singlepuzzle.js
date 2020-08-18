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
			<Pagination size="sm">{items}</Pagination>
		</div>
	);
	//how to render the above inside of return

	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>{store.puzzles[id].title}</Card.Title>
					{/* why does the above not work? */}
					<Row>
						<Col>
							<Card.Img src="https://via.placeholder.com/400x250.png" />
							{paginationBasic}
						</Col>
						{/* why do these columns not work. I want image on left side  */}
						<Col>
							<Card.Text>
								Description: {store.puzzles[id].text}
								<br />
								Ages: {store.puzzles[id].ages}
								<br />
								No. pieces: {store.puzzles[id].pieces}
								<br />
								Theme: {store.puzzles[id].theme}{" "}
							</Card.Text>
							<Button variant="primary">Swap It!</Button>
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
	ages: PropTypes.string,
	theme: PropTypes.string
};
