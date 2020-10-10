import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
//import React, { useContext } from "react";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { SignIn } from "./signin";
import { HomeJumbo } from "../component/homejumbo";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	return (
		<div>
			<div>
				<HomeJumbo />
			</div>
			<div className="container">
				<CardRow data={store.puzzleFetch} style={{ height: "200px" }} />
			</div>
		</div>
	);
};
