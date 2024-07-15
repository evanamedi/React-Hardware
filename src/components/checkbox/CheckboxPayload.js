import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function CheckboxPayload() {
	const initialCode = `
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
				className={\`checkbox \${checked ? "checked" : ""}\`}></span>
			{label}
		</label>
	);
};

render(<Checkbox  label="Accept terms and conditions" />);
    `;

	const initialCSS = `.checkboxLabel {
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 16px;
}

.hidden-checkbox {
	display: none;
}

.checkbox {
	width: 20px;
	height: 20px;
	background-color: white;
	border: 2px solid #007bff;
	border-radius: 4px;
	margin-right: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s;
}

.checkbox.checked {
	background-color: #007bff;
}

.checkbox::after {
	content: "";
	width: 10px;
	height: 10px;
	display: none;
}

.checkbox.checked::after {
	display: block;
	background-color: white;
	border-radius: 2px;
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
