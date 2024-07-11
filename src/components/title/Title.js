import React from "react";
import logo from "../../logo.svg";

export default function Title() {
	return (
		<div className="titleDiv">
			<div className="reactLogo">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<p className="title">React Hardware Library</p>
		</div>
	);
}
