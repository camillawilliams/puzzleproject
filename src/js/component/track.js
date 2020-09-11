import React from "react";
import { useState, useEffect, useContext } from "react";
// //import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";

export const Track = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h3>Where&apos;s My Order?</h3>

			<p>Placeholder for order #, order status and import of expected arrival date</p>
		</div>
	);
};
