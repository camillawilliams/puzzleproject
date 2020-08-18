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
					<Card.Title>Name</Card.Title>
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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at
								tellus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Adipiscing
								commodo elit at imperdiet dui accumsan sit amet. Lectus mauris ultrices eros in cursus
								turpis. Pulvinar sapien et ligula ullamcorper malesuada. Enim ut tellus elementum
								sagittis vitae et. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque
								elit. Ipsum suspendisse ultrices gravida dictum. Euismod in pellentesque massa placerat
								duis ultricies. Scelerisque purus semper eget duis. Porta nibh venenatis cras sed.
								Tristique nulla aliquet enim tortor at auctor urna nunc id. Dignissim enim sit amet
								venenatis urna cursus eget nunc scelerisque. Morbi enim nunc faucibus a pellentesque sit
								amet porttitor eget.
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
	ages: PropTypes.string
};
