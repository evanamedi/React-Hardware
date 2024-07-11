import React from "react";
import logo from "../../logo.svg";

export default function Title() {
	return (
		<div className="titleDiv">
			<p className="listTitle">List of components in this library</p>
			<div>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		</div>
	);
}
