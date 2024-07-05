import React, { useState } from "react";

const Checkbox = ({ label, onChange }) => {
	const [checked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked(!checked);
		if (onChange) {
			onChange(!checked);
		}
	};

	return (
		<label className="checkboxLabel">
			<input
				type="checkbox"
				checked={checked}
				onChange={handleCheckboxChange}
				className="hidden-checkbox"
			/>
			<span
				className={`checkbox ${checked ? "checked" : ""}`}></span>
			{label}
		</label>
	);
};

export default Checkbox;
