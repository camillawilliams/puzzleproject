import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Puzzles = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container d-flex justify-content-center">
				<CardRow data={store.puzzleFetch} category="Category" />
			</div>

			{/* <div className="cool2-container d-flex justify-content-center"> */}
			{/* <CardRow cardData={store.puzzles} category="Category" /> */}
			{/* </div> */}
		</div>
	);
};
