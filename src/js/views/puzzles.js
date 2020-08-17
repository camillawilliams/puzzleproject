import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";

export const Puzzles = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<CardRow cardData={store.puzzles} category="Category" />
		</div>
	);
};
