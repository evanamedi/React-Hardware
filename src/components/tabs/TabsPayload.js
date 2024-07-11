import React from "react";
import Tabs from "./Tabs";

export default function TabsPayload() {
	const tabs = [
		{ label: "Tab 1", content: <div>Content of Tab 1</div> },
		{ label: "Tab 2", content: <div>Content of Tab 2</div> },
		{ label: "Tab 3", content: <div>Content of Tab 3</div> },
	];

	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Tabs</p>
			<Tabs tabs={tabs} />
		</div>
	);
}
