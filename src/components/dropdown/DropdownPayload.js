import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function DropdownPayload() {
	const initialCode = `
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

const DropDownDeploy = () => {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
	];

	const handleDropdownChange = (selectedValue) => {
		console.log("Selected value: ", selectedValue);
	};

	return (
	<div>
		<SelectDropdown
				options={options}
				defaultOption="option1"
				onChange={handleDropdownChange}
		/>
	</div>
	)
	}

render(<DropDownDeploy />);
	`;

	const initialCSS = `
.select-dropdown {
	width: 150px;
	margin: 10px 0;
}

.select-dropdown select {
	width: 100%;
	padding: 10px;
	border: 2px solid #ccc;
	border-radius: 10px;
	background-color: #fff;
	font-size: 16px;
}

.select-dropdown select:focus {
	border-color: #00bbff;
	outline: none;
}

.select-dropdown select option {
	padding: 10px;
}
	`;

	return (
		<div className="width">
			<p className="SectionTitle">Dropdown Selection</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
}
