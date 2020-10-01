import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

export const Singlepuzzle = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		);
	}

	const paginationBasic = (
		<div>
			<Pagination size="lg">{items}</Pagination>
		</div>
	);
	//how to render the above inside of return

	return (
		<Container>
			<Card>
				<Card.Body>
					{/* <Card.Title>Name</Card.Title> */}
					<Card.Title>{store.puzzles[id].title}</Card.Title>
					<Row className="d-flex justify-content-center">
						<Card.Title>
							<h2>{store.puzzles[id].title}</h2>
						</Card.Title>
					</Row>
					{/* why does the above not work? */}
					<Row>
						<Col className="text-center">
							<Row>
								<Card.Img src="https://via.placeholder.com/400x250.png" />
							</Row>
							<Row>{paginationBasic}</Row>
						</Col>
						{/* why do these columns not work. I want image on left side  */}
						<Col>
							<Card.Text>{store.puzzles[id].text}</Card.Text>

							<Card.Text className="text-center">
								<strong>Description:</strong> <p>{store.puzzles[id].text}</p>
								<br />
								<strong>Ages:</strong> <p>{store.puzzles[id].ages}</p>
								<br />
								<strong>No. pieces:</strong> <p>{store.puzzles[id].pieces}</p>
								<br />
								<strong>Theme:</strong> <p>{store.puzzles[id].theme}</p>
								{store.user.info != null && store.user.info.puzzles_owned.length > 0 ? (
									<Button
										onClick={() => actions.createSubscription}
										variant="success"
										className="text-center">
										Swap It!
									</Button>
								) : (
									"You need to add your puzzle"
								)}
							</Card.Text>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
};
// 	useEffect(() => {
// 		window.paypal
// 			.Buttons({
// 				createSubscription: (data, actions, err) => {
// 					return actions.order.create({
// 						intent: "CAPTURE",
// 						purchase_units: [
// 							{
// 								description: "Cool looking table",
// 								amount: {
// 									currency_code: "USD",
// 									value: "300.00"
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
// }

Singlepuzzle.propTypes = {
	match: PropTypes.object,
	title: PropTypes.string,
	data: PropTypes.string,
	pieces: PropTypes.number,
	ages: PropTypes.string
};

// paypal
// 	.Buttons({
// 		createSubscription: function(data, actions) {
// 			return actions.subscription.create({
// 				plan_id: "P-2UF78835G6983425GLSM44MA"
// 			});
// 		},

// 		onApprove: function(data, actions) {
// 			alert("You have successfully created subscription " + data.subscriptionID);
// 		}
// 	})
// 	.render("#paypal-button-container");

{
	/* <div id="paypal-button-container"></div>
<script src="https://www.paypal.com/sdk/js?client-id=AXfdzI0qyg6V-54ii6S1YaKqtRCN_Ln_eKVPLDgdYbqRKqUNrraADyQZyP-nG1qaI97OJ0PWr3rTmmxH&vault=true" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          'plan_id': 'P-4LS14343BM5103733L5ZZD6I'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID);
      }
  }).render('#paypal-button-container');
</script> */
}
