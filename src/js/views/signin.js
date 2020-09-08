import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const SignIn = () => (
	<Form className="login-form">
		<h4>Sign in to your account</h4>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
		</Form.Group>
		<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" />
		</Form.Group>
		<Button variant="success" type="submit">
			Sign In
		</Button>
		&nbsp; &nbsp; or &nbsp;
		<Link to="/registerpage"> Register </Link>
	</Form>
);
