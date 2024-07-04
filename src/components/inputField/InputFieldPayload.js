import React from "react";
import ControlledInputField from "./InputField";

export default function InputFieldPayload() {
	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Input Field Options</p>
			<ControlledInputField
				type="text"
				placeholder="Enter your name"
				label="Name: "
			/>
			<ControlledInputField
				type="password"
				placeholder="Enter your password"
				label="Password: "
			/>
			<ControlledInputField
				type="email"
				placeholder="Enter your email"
				label="Email: "
			/>
		</div>
	);
}
