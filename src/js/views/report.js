import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Report = () => (
	<Form className="login-form">
		<h4>Report an Issue</h4>
		<Form.Group controlId="formBasicIngo">
			<Form.Label>Name</Form.Label>
			<Form.Control type="text" placeholder="Your Name" />
		</Form.Group>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
		</Form.Group>

		<Form.Group controlId="formPuzzleInfo">
			<Form.Label>Order ID</Form.Label>
			<Form.Control type="number" placeholder="ID Number" />
		</Form.Group>
		<Form.Group controlId="issue">
			<Form.Label>What&lsquo;s the Issue?</Form.Label>
			<Form.Control as="textarea" rows="3">
				Describe the issue
			</Form.Control>
		</Form.Group>
		<Button variant="primary" type="submit">
			Report
		</Button>
	</Form>
);
