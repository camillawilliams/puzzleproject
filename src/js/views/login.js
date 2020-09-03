import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => (
	<Form className="login-form">
		<h4>Sign in to your account</h4>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
			<Form.Text className="text-muted">We will never share your email with anyone else</Form.Text>
		</Form.Group>

		<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" />
		</Form.Group>
		<Form.Group controlId="formBasicCheckbox">
			<Form.Check type="checkbox" label="Remember me" />
		</Form.Group>
		<Button variant="success" type="submit">
			Sign in
		</Button>
	</Form>
);
