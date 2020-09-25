import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		if (username !== "" && password !== "") {
			let resp = await actions.signin(username, password);
			console.log(resp);
			if (resp) {
				history.push("/puzzles");
			} else {
				console.error("failed to sign in");
			}
		}
	}

	return (
		<Form className="login-form" onSubmit={handleSubmit}>
			<h4>Sign in to your account</h4>
			<Form.Group controlId="formBasicUsername">
				<Form.Label>username</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</Form.Group>
			<Button variant="success" type="submit">
				Sign In
			</Button>
			&nbsp; &nbsp; or &nbsp;
			<Link to="/registerpage"> Register </Link>
		</Form>
	);
};
