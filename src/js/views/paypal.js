import React, { useState, useEffect, useContext, useRef } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Col, Row, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { PaypalButton } from "../component/paypalbutton";

// export const Paypal = props => {
// 	const { store, actions } = useContext(Context);
// 	const [, setPuzzleName] = useState("");
// 	// const paypal = useRef();

// 	useEffect(() => {
// 		window.paypal
// 			.Buttons({
// 				createSubcription: (data, actions, err) => {
// 					return actions.subscription.create({
// 						intent: "CAPTURE",
// 						purchase_units: [
// 							{
// 								description: "Puzzle",
// 								amount: {
// 									currency_code: "USD",
// 									value: 650.0
// 								}
// 							}
// 						]
// 					});
// 				},
// 				onApprove: async (data, actions) => {
// 					const order = await actions.order.capture();
// 					console.log(order);
// 				},
// 				onError: err => {
// 					console.log(err);
// 				}
// 			})
// 			.render(paypal.current);
// 	}, []);

// 	return (
// 		<div>
// 			<div ref={paypal} />
// 		</div>
// 	);
// };
// paypal.Buttons({

//   createSubscription: function(data, actions) {

//     return actions.subscription.create({

//       'plan_id': 'P-2UF78835G6983425GLSM44MA'

//     });

//   },

//   onApprove: function(data, actions) {

//     alert('You have successfully created subscription ' + data.subscriptionID);

//   }

// }).render('#paypal-button-container');
// // export default class MyApp extends React.Component {
// // 	render() {
// // 		const onSuccess = payment => {
// // 			console.log("Your payment was succeeded!", payment);
// // 		};
// // 		const onCancel = data => {
// // 			// User pressed "cancel" or close Paypal's popup!
// // 			console.log("You have cancelled the payment!", data);
// // 		};
// // 		const onError = err => {
// // 			// The main Paypal's script cannot be loaded or somethings block the loading of that script!
// // 			console.log("Error!", err);
// // 			// Since the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
// // 			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
// // 		};
// // 		let currency = "USD"; // or you can set this value from your props or state
// // 		let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
// // 		return (
// // 			<PaypalExpressBtn
// // 				currency={currency}
// // 				total={total}
// // 				onError={onError}
// // 				onSuccess={onSuccess}
// // 				onCancel={onCancel}
// // 			/>
// // 		);
// // 	}
// // }
