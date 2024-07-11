import React from "react";
import LiveEditorComponent from "./LiveEditorComponent";

export default function LiveEditorComponentPayload() {
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

	const initialCSS = `
.hello-world {
    font-size: 20px;
    color: white;
}`;
	return (
		<div className="width">
			<p className="SectionTitle">Content Render</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
}
