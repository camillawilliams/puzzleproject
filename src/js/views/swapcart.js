import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";

export const Swapcart = props => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState([]);
	const [puzzles, setPuzzles] = useState({});
	const { id } = useParams();

	// const addToCart = () => puzzle => {
	// 	setCart([...cart, puzzle]);
	// };

	return (
		<div className="App">
			<h1>Swap Cart</h1>
		</div>
	);
};
