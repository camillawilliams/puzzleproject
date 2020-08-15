import React from "react";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
//import { CardDeck } from "./cardDeck";

export const Home = () => (
	<div>
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-2">PUZZLED?</h1>
				<h2 className="display-4">
					SIGN IN FOR THE FUN TO BEGIN! &nbsp;
					<i className="fas fa-puzzle-piece" />
				</h2>
				<p className="lead" />
			</div>
		</div>
		return (
		<div className="container">
			<CardRow cardData={store.puzzles} category="Nature" />
		</div>
		)
	</div>
);

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
