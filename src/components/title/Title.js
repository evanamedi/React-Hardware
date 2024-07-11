import React from "react";
import logo from "../../logo.svg";

export default function Title() {
	const itemList = [
		"Buttons",
		"Input Field",
		"Check Box",
		"Radio Buttons",
		"Dropdown Selection",
		"Modal Dialog",
		"Tabception",
		"Accordion",
		"Spinner",
		"ToolTip",
		"Data Table",
		"Typing Effect",
		"Text Scatter Effect",
	];

	return (
		<div className="titleDiv">
			<div>
				<div className="reactLogo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
				<p className="title">React Hardware Library</p>
			</div>
			<div className="list">
				<p className="githubrepo">GitHub Repo</p>
				<ul>
					{itemList.map((item, index) => (
						<li key={index} className="listItem">
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
