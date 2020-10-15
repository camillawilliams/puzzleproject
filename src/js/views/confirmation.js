import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Confirmation = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h3> Success! </h3>
			<p>
				{" "}
				Your order of <b>{store.swapCart[0].name_of_puzzle}</b> has been submitted. Our team will be in touch
				soon with a tracking number and estimated arrival date.{" "}
			</p>
		</div>
	);
};
