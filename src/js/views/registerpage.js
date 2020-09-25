import React, { useState, useContext, useFormFields } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const RegisterPage = () => (
	// {
	// const history = useHistory();
	// const [newUser, setNewUser] = useState(null);

	// async function handleSubmit(e) {
	// 	e.preventDefault();
	// 	if (full_name !== "" && email !== "" && username !== "" && password !== "") {
	// 		let resp = await actions.RegisterPage();
	// 		console.log(resp);
	// 		if (resp) {
	// 			history.push("/puzzles");
	// 		} else {
	// 			console.error("failed to sign in");
	// 		}
	// 	}
	// }

	//

	<Form className="login-form">
		<h4>Register</h4>
		<Form.Group controlId="fullName">
			<Form.Label>Full Name</Form.Label>
			<Form.Control type="full-name" placeholder="Full Name" />
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
