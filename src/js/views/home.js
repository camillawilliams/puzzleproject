import React from "react";
import "../../styles/home.scss";
import CardDeck from "react-bootstrap/CardDeck";
//import { CardDeck } from "./cardDeck";

export const Home = () => (
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
);

// const card = [
// 	{
// 		image: "https://via.placeholder.com/300",
// 		title: "My card",
// 		body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 		buttonText: "View",
// 		url: "Find out More!"
// 	},
// 	{
// 		image: "https://via.placeholder.com/300",
// 		title: "My card",
// 		body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 		buttonText: "View",
// 		url: "Find out More!"
// 	},
// 	{
// 		image: "https://via.placeholder.com/300",
// 		title: "My card",
// 		body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 		buttonText: "View",
// 		url: "Find out More!"
// 	},
// 	{
// 		image: "https://via.placeholder.com/300",
// 		title: "My card",
// 		body: "Lorem ipsum dolor sit amet, consectrtur adipicing elit. Nulla rutrum in metus quis pellentesque.",
// 		buttonText: "View",
// 		url: "Find out More!"
// 	}
// ];

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
