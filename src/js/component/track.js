import React from "react";
import { useState, useEffect, useContext } from "react";
// //import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";
import XMLViewer from "react-xml-viewer";
import beautify from "xml-beautifier";
import XMLParser from "react-xml-parser";

export const Track = props => {
	const { store, actions } = useContext(Context);
	const [status, setStatus] = useState(null);

	let trackingID = "9405509206094187580404";

	async function getTracking() {
		let tracking = await actions.track(trackingID);
		console.log(tracking);
		if (typeof tracking !== "null" && typeof tracking !== "undefined") {
			var xml = new XMLParser().parseFromString(tracking);
			setStatus(xml);
		}
	}

	const getXML = () => {
		if (status !== null) {
			var i;
			var x = status.length;
			for (i = 0; i < x; i++) {
				console.log(status.children[0].children[i].value);
            }
            //this should be a map :( )
			return (
				<div>
					<h2>{status.name}</h2>
					{/* <p>{status.children[0].children[0].children[1].value}</p> */}
					<p>{status.children[0].children[0].value}</p>
					<p>{status.children[0].children[1].value}</p>
					<p>{status.children[0].children[2].value}</p>
					<p>{status.children[0].children[3].value}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="container">
			<h3>Where&apos;s My Order?</h3>

			<p>
				<Link onClick={getTracking}>Click here to track your most recent order.</Link>
			</p>
			{getXML()}
		</div>
	);
};

// example from class
//
