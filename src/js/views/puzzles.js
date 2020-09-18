import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Puzzles = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);

<<<<<<< HEAD
	const getRows = () => {
		return (
			<React.Fragment>
				<div className="container">
					<CardRow cardData={store.puzzles} category="Category" />
				</div>
				<div className="container">
					<CardRow cardData={store.puzzles} category="Category" />
				</div>
			</React.Fragment>
		);
	};
	return <div>{store.user.loggedIn ? getRows() : history.push("/signin")}</div>;
=======
	return (
		<div>
			<div className="container d-flex justify-content-center">
				<CardRow cardData={store.puzzles} category="Category" />
			</div>

			<div className="cool2-container d-flex justify-content-center">
				<CardRow cardData={store.puzzles} category="Category" />
			</div>
		</div>
	);
>>>>>>> c8d6e30cea774e9c03efd1224637ec320bac2c20
};
