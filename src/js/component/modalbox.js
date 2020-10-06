import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";

export const ModalBox = props => {
	const { title, text } = props;

	function Example() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return (
			<div>
				<>
					<Button variant="primary" onClick={handleShow}>
						Launch demo modal
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{title}</Modal.Title>
						</Modal.Header>
						<Modal.Body>{text}</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			</div>
		);
	}

	render(<Example />);
	ModalBox.propTypes = {
		title: PropTypes.string,
		text: PropTypes.string
	};
};
export default ModalBox;
