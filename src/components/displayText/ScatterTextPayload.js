import React from "react";
import ScatterText from "./ScatterText";

export default function ScatterTextPayload() {
	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Scatter Text</p>
			<ScatterText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
		</div>
	);
}
