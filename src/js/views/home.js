import React from "react";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { HomeJumbo } from "../component/homejumbo";

export const Home = () => (
	<div>
		<div>
			<HomeJumbo />
		</div>

		<div>
			<CardRow />
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
