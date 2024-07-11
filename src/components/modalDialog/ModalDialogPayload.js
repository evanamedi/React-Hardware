import React, { useState } from "react";
import ModalDialog from "./ModalDialog";

export default function ModalDialogPayload() {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Modal Menu</p>
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
		</div>
	);
}
