import React, { useState, useContext, useFormFields } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const RegisterPage = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [full_name, setFull_name] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (full_name !== "" && email !== "" && username !== "" && password !== "") {
			let resp = await actions.registerPage(full_name, email, username, password);
			console.log(resp);
			if (resp) {
				history.push("/puzzles");
			} else {
				console.error("failed to register");
			}
		}
	}

	return (
		<Form className="login-form">
			<h4>Register</h4>
			<Form.Group controlId="fullName">
				<Form.Label>Full Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Full Name"
					value={full_name}
					onChange={e => setFull_name(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId="email">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
			</Form.Group>
			<Form.Group controlId="userName">
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="username"
					placeholder="Username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</Form.Group>
			<Button variant="success" type="submit">
				Register
			</Button>
			&nbsp; &nbsp; or &nbsp;
			<Link to="/signin"> Cancel </Link>
		</Form>
	);
};
