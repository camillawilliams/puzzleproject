import React from "react";
// //import React, { useState, useEffect, useContext } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
// //import { Context } from "../store/appContext";

<<<<<<< HEAD
export const CardRow = () => (
	<CardDeck className="CardDeck-flex">
		<Card>
			<Card.Img variant="top" src="holder.js/100px160" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
=======
export const CardRow = props => {
	const { cardData, category } = props;
	return (
		<div>
			<h2 style={{ textAlign: "left" }}>{category}</h2>
			<CardDeck style={{ height: "330px" }}>
				{cardData.map((item, index) => {
					return (
						<Card key={index}>
							<Card.Img variant="top" src={item.img} />
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Card.Text>{item.text}</Card.Text>
							</Card.Body>
							{/* <Card.Footer>
>>>>>>> fa0c990771f299b0235b26b97444e7e658a2b19a
				<small className="text-muted">Last updated 3 mins ago</small>
			</Card.Footer> */}
						</Card>
					);
				})}
			</CardDeck>
		</div>
	);
};

CardRow.propTypes = {
	cardData: PropTypes.array.isRequired,
	category: PropTypes.string.isRequired
};

export default CardRow;
