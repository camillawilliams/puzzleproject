import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Col, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CardRow } from "../component/cards";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Swap = props => {
	let history = useHistory();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Enter Your Puzzle Info For Swap</h1>
			<h4>Upload Puzzle</h4>
			<Form>
				<Form>
					<Form.Group controlId="formGroupEmail">
						<Form.Label>Name of Puzzle</Form.Label>
						<Form.Control type="Name Of Puzzle" placeholder="Name Of Puzzle" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Picture of Puzzle</Form.Label>
						<Form.Control type="Picture of Puzzle" placeholder="Picture of Puzzle" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Picture of Box</Form.Label>
						<Form.Control type="Picture of Box" placeholder="Picture of Box" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Number of Pieces</Form.Label>
						<Form.Control type="Number of Pieces" placeholder="Number of Pieces" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Age Range</Form.Label>
						<Form.Control type="Age Range" placeholder="Age Range" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Category</Form.Label>
						<Form.Control type="Category" placeholder="Category" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>Is Available</Form.Label>
						<Form.Control type="Is Available" placeholder="Is Available" />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">
						<Form.Label>User</Form.Label>
						<Form.Control type="User" placeholder="User" />
					</Form.Group>
				</Form>
				{/* <Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="Name Of Puzzle" placeholder="Enter Name Of Puzzle" />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="email" placeholder="Enter First Name" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="password" placeholder="Enter Last Name" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Group controlId="formGridAddress2">
					<Form.Label>Address 2</Form.Label>
					<Form.Control placeholder="Apartment, studio, or floor" />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>State</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>Choose...</option>
							<option>Alabama</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control />
					</Form.Group>
				</Form.Row>

				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Return to cart" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Continue to shipping method
				</Button> */}
			</Form>
		</div>
	);
};
