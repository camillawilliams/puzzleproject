import React from "react";
import { useState, useEffect, useContext } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const CardRow = props => {
	const { cardData, category, title, data } = props;
	const { store, actions } = useContext(Context);
	return (
		<div>
			{/* <h2 style={{ textAlign: "left" }}>{category}</h2> */}
			<CardDeck style={{ height: "300px" }}>
				{data.map((item, index) => {
					return (
						<Card key={index}>
							<Card.Img variant="top" src={item.picture_of_puzzle} />
							<Card.Body>
								<Card.Title>{item.name_of_puzzle}</Card.Title>
								<Card.Text>
									{/* Description: {item.text} */}
									<br />
									No. Pieces: {item.number_of_pieces}
									<br />
									Ages: {item.age_range}
								</Card.Text>
								<Button variant="success">
									<Link to={`/singlepuzzle/${index}`}>See More</Link>
								</Button>
							</Card.Body>
						</Card>
					);
				})}
			</CardDeck>
		</div>
	);
};
CardRow.propTypes = {
	cardData: PropTypes.array.isRequired,
	category: PropTypes.string.isRequired,
	title: PropTypes.string,
	data: PropTypes.string,
	pieces: PropTypes.number,
	ages: PropTypes.string,
	data: PropTypes.string
};

export default CardRow;
