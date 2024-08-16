import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
	return (
		<div className="titleDiv">
			<div>
				<p className="title">HL</p>
				<p className="titleDescription">
					Free | Lightweight | Customizable | Reusable
				</p>
				<div className="titleParaDiv">
					<p className="titlePara">
						HL is a React component library made for web
						development. Each component provides the necessary code
						to render, and its accompanying CSS.
					</p>
					<p className="titlePara">
						On the{" "}
						<Link to="/hardware" className="componentLink">
							hardware
						</Link>{" "}
						page, you will find a full list of currently available
						options. There you can experiment and live test each
						component- including its code and css. Once you're
						satisfied with its result, simple copy the code and
						place it in your project.
					</p>
					<p className="titlePara">
						Refer to the{" "}
						<Link to="/documentation" className="componentLink">
							documentation
						</Link>{" "}
						page for detailed information on how to use or modify
						components.
					</p>
				</div>
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
