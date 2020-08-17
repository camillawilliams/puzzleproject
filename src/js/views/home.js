import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import React, { useContext } from "react";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { HomeJumbo } from "../component/homejumbo";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<HomeJumbo />
			</div>
			<div className="container">
				<CardRow cardData={store.puzzles} />
			</div>
		</div>
	);
};
// 	return (
// 		<div className="card">
// 			{card.map((card, index) => {
// 				return (
// 					<Card
// 						key={index}
// 						image={card.image}
// 						title={card.title}
// 						body={card.body}
// 						buttonText={card.buttonText}
// 						url={card.url}
// 					/>
// 				);
// 			})}
// 		</div>
// 	);
