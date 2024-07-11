import React, { useState } from "react";

const SelectDropdown = ({ options, defaultOption, onChange }) => {
	const [selectedOption, setSelectedOption] = useState(defaultOption);

	const handleSelectChange = (event) => {
		const value = event.target.value;

		setSelectedOption(value);
		if (onChange) {
			onChange(value);
		}
	};

	return (
		<div className="select-dropdown">
			<select value={selectedOption} onChange={handleSelectChange}>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectDropdown;
