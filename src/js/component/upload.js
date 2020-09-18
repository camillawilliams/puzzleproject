import React from "react";
import { useState, useEffect, useContext } from "react";
// //import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";

export const Upload = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Form>
				<Form.Group>
					<Form.File id="exampleFormControlFile1" label="Example file input" />
				</Form.Group>
			</Form>
		</div>
	);
};
