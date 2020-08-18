import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";

export const Puzzles = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="container">
				<CardRow cardData={store.puzzles} category="Category" />
			</div>
			<div className="container">
				<CardRow cardData={store.puzzles} category="Category" />
			</div>
		</div>
	);
};
