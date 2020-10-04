// import React, { useState } from "react";
// //import "./App.css";
// import PayPal from "../views/paypal.js";
// import { Col, Row, Form } from "react-bootstrap";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
// import Button from "react-bootstrap/Button";

// <div id="paypal-button-container" />;
// paypal
// 	.Buttons({
// 		style: {
// 			shape: "rect",
// 			color: "gold",
// 			layout: "vertical",
// 			label: "subscribe"
// 		},
// 		createSubscription: function(data, actions) {
// 			return actions.subscription.create({
// 				plan_id: "P-3K04700213089884AL54KALI"
// 			});
// 		},
// 		onApprove: function(data, actions) {
// 			alert(data.subscriptionID);
// 		}
// 	})
// 	.render("#paypal-button-container");

// // export const PayPalButton = props => {
// // 	const { store, actions } = useContext(Context);
// // 	const [subscription, Subscription] = useState(false);

// // 	return (
// // 		<div className="">
// // 			{/* {checkout ? (
// // 				<PayPal />
// // 			) : ( */}
// // 			<Button onClick={() => actions.createSubscription} variant="success" className="text-center">
// // 				{/* setCheckOut(true); Checkout/> */}
// // 			</Button>
// // 			)}
// // 		</div>
// // 	);
// // };
// // export default PayPalButton;
