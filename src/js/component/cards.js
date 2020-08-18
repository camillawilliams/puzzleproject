import React from "react";
// //import React, { useState, useEffect, useContext } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
// //import { Context } from "../store/appContext";

export const CardRow = props => {
	const { cardData, category } = props;
	return (
		<div>
			<h2 style={{ textAlign: "left" }}>{category}</h2>
			<CardDeck style={{ height: "300px" }}>
				{cardData.map((item, index) => {
					return (
						<Card key={index}>
							<Card.Img variant="top" src={item.img} />
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Card.Text>{item.text}</Card.Text>
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
	category: PropTypes.string.isRequired
};

export default CardRow;
