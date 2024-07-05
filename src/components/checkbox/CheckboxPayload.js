import React from "react";
import Checkbox from "./Checkbox";

export default function CheckboxPayload() {
	const handleCheckboxChange = (newCheckedState) => {
		console.log("Checkbox is now: ", newCheckedState);
	};

	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Checkbox</p>
			<Checkbox
				label="Accept Terms and Conditions"
				onChange={handleCheckboxChange}
			/>
		</div>
	);
}
