import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function InputFieldPayload() {
	const initialCode = `
	const InputField = ({
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
				const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
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

const InputFieldDeploy = () => {
return (
		<div>
			<InputField
				type="text"
				placeholder="Enter your name"
				label="Name: "
			/>
			<InputField
				type="password"
				placeholder="Enter your password"
				label="Password: "
			/>
			<InputField
				type="email"
				placeholder="Enter your email"
				label="Email: "
			/>
		</div>
	);
}

render(<InputFieldDeploy />);
	`;

	const initialCSS = `
	`;

	return (
		<div className="width">
			<p className="SectionTitle">Input Field</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
}
