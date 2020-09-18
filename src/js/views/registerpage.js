import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const RegisterPage = () => (
	<Form className="login-form">
		<h4>Register</h4>
		<Form.Group controlId="fullName">
			<Form.Label>Full Name</Form.Label>
			<Form.Control type="full-name" placeholder="Full Name" />
		</Form.Group>
		<Form.Group controlId="address">
			<Form.Label>Address</Form.Label>
			<Form.Control type="address" placeholder="Address" />
		</Form.Group>
		<Form.Group controlId="city">
			<Form.Label>City</Form.Label>
			<Form.Control type="city" placeholder="City" />
		</Form.Group>
		<Form.Group controlId="state">
			<Form.Label>State</Form.Label>
			<Form.Control type="state" placeholder="State" />
		</Form.Group>
		<Form.Group controlId="zip">
			<Form.Label>Zip</Form.Label>
			<Form.Control type="zip" placeholder="Zip" />
		</Form.Group>
		<Form.Group controlId="email">
			<Form.Label>Email</Form.Label>
			<Form.Control type="email" placeholder="Email" />
		</Form.Group>
		<Form.Group controlId="userName">
			<Form.Label>Username</Form.Label>
			<Form.Control type="username" placeholder="Username" />
		</Form.Group>
		<Form.Group controlId="password">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="password" />
		</Form.Group>
		<Button variant="success" type="submit">
			Register
		</Button>
		&nbsp; &nbsp; or &nbsp;
		<Link to="/signin"> Cancel </Link>
	</Form>
);
