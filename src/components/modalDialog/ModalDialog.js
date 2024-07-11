import React from "react";
import ReactDom from "react-dom";

const ModalDialog = ({ isOpen, onClose, title }) => {
	if (!isOpen) {
		return null;
	}

	return ReactDom.createPortal(
		<div className="modal-overlay">
			<div className="modal">
				<div className="modal-header">
					<h2>{title}</h2>
					<button className="close-button" onClick={onClose}>
						x
					</button>
				</div>
				<div className="modal-footer">
					<button className="modal-button" onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default ModalDialog;
