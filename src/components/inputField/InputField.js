import React, { useState } from "react";

const ControlledInputField = ({
	type = "text",
	placeholder = "Enter value",
	label,
}) => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	const validate = (value) => {
		switch (type) {
			case "text":
				if (value.trim() === "") {
					return "This field is required";
				}
				return "";
			case "email":
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) {
					return "Enter a valid email address";
				}
				return "";
			case "password":
				if (value.length < 6) {
					return "Password must be at least 6 characters";
				}
				return "";
			default:
				return "";
		}
	};

	const handleChange = (event) => {
		const newValue = event.target.value;
		setValue(newValue);
		setError(validate(newValue));
	};

	return (
		<div>
			{label && <label>{label}</label>}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<p>Current Value: {value}</p>
		</div>
	);
};

export default ControlledInputField;
