import React, { useState } from "react";

const RadioButtons = () => {
	const [selectedValue, setSelectedValue] = useState("");

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div>
			<p>Select an option: </p>
			<label>
				<input
					type="radio"
					value="Option 1"
					checked={selectedValue === "Option 1"}
					onChange={handleChange}
				/>
				Option 1
			</label>
			<br />
			<label>
				<input
					type="radio"
					value="Option 2"
					checked={selectedValue === "Option 2"}
					onChange={handleChange}
				/>
				Option 2
			</label>
			<br />
			<label>
				<input
					type="radio"
					value="Option 3"
					checked={selectedValue === "Option 3"}
					onChange={handleChange}
				/>
				Option 3
			</label>
			<br />
			<label>
				<input
					type="radio"
					value="Option 4"
					checked={selectedValue === "Option 4"}
					onChange={handleChange}
				/>
				Option 4
			</label>
			<br />
			<p>Selected value: {selectedValue}</p>
		</div>
	);
};

export default RadioButtons;
