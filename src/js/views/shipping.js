import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Col, Row, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const Shipping = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Puzzle Swap</h1>
			<h6>cart</h6>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="email" placeholder="Enter First Name" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridLastName">
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
				</Button>
			</Form>
		</div>
	);
};

Shipping.propTypes = {
	text: PropTypes.array.isRequired
};

export default Shipping;
