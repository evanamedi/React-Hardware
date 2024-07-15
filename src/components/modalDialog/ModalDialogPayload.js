import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function ModalDialogPayload() {
	const initialCode = `
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

const ModalDeploy = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
				<div className="App">
				<button className="open-modal-button" onClick={openModal}>
					Open Modal
				</button>
				<ModalDialog
					isOpen={isModalOpen}
					onClose={closeModal}
					title="Modal Title"
				/>
				<p>This is example content</p>
			</div>
			)
	}

	render(<ModalDeploy />);
	`;

	const initialCSS = `.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal {
	background: white;
	border-radius: 5px;
	width: 500px;
	max-width: 80%;
	padding: 0 20px 20px 20px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 10px;
	margin-bottom: 20px;
}

.close-button {
	background: transparent;
	border: none;
	font-size: 20px;
	cursor: pointer;
}

.modal-content {
	margin-bottom: 20px;
}

.modal-footer {
	display: flex;
	justify-content: flex-end;
}

.modal-button {
	background: #007bff;
	color: white;
	border: none;
	padding: 10px 6px;
	border-radius: 5px;
	cursor: pointer;
}

.modal-button:hover {
	background: #0056b3;
}

.open-modal-button {
	background: #007bff;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
}

.open-modal-button:hover {
	background: #0056b3;
}

`;

	return (
		<div className="width">
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
}
