import React from "react";
import logo from "../../logo.svg";

export default function Title() {
	return (
		<div className="titleDiv">
			<div>
				<div className="reactLogo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
				<p className="title">React Hardware Library</p>
				<p className="titleDescription">
					Free | Lightweight | Customizable | Reusable
				</p>
			</div>
		</div>
	);
}

/*
const itemList = [
		"Buttons",
		"Input Field",
		"Check Box",
		"Radio Buttons",
		"Dropdown Selection",
		"Modal Dialog",
		"Tabs",
		"Accordion",
		"Spinner",
		"Tool Tip",
		"Data Table",
		"Form",
		"Toast",
		"Typing Effect",
		"Text Scatter Effect",
	];


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
*/
