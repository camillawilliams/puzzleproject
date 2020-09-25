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
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Form>
		</div>
	);
};
