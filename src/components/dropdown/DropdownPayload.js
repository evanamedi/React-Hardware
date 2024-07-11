import React from "react";
import Dropdown from "./Dropdown";

export default function DropdownPayload() {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
	];

	const handleDropdownChange = (selectedValue) => {
		console.log("Selected value: ", selectedValue);
	};

	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Dropdown Selection</p>
			<Dropdown
				options={options}
				defaultOption="option1"
				onChange={handleDropdownChange}
			/>
		</div>
	);
}
