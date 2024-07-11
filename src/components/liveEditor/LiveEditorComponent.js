import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	LiveProvider,
	LiveEditor,
	LiveError,
	LivePreview,
} from "react-live";
import Tabs from "../tabs/Tabs";

const scope = { React, useState, useEffect, PropTypes };

const LiveEditorComponent = ({ initialCode, initialCSS }) => {
	const [code, setCode] = useState(initialCode);
	const [cssCode, setCssCode] = useState(initialCSS);

	useEffect(() => {
		let styleElement = document.getElementById("dynamic-styles");
		if (!styleElement) {
			styleElement = document.createElement("style");
			styleElement.id = "dynamic-styles";
			document.head.appendChild(styleElement);
		}
		styleElement.textContent = cssCode;
	}, [cssCode]);

	const handleKeyDown = (e) => {
		if (e.key === "Tab") {
			e.preventDefault();
			const { selectionStart, selectionEnd } = e.target;
			const spaces = "    ";
			setCssCode(
				cssCode.substring(0, selectionStart) +
					spaces +
					cssCode.substring(selectionEnd)
			);
			setTimeout(() => {
				e.target.selectionStart = e.target.selectionEnd =
					selectionStart + spaces.length;
			}, 0);
		}
	};

	const tabs = [
		{
			label: "Code",
			content: (
				<div style={{ position: "relative" }}>
					<LiveEditor
						value={code}
						onChange={(newCode) => setCode(newCode)}
						className="prism-tomorrow line-numbers"
					/>
				</div>
			),
		},
		{
			label: "CSS",
			content: (
				<textarea
					className="prism-tomorrow"
					style={{
						width: "100%",
						height: "100%",
						minHeight: "250px",
						fontFamily: "monospace",
						resize: "none",
						border: "none",
						background: "#061626",
						color: "white",
						padding: "10px",
						boxSizing: "border-box",
						outline: "none",
					}}
					value={cssCode}
					onChange={(e) => setCssCode(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
			),
		},
	];

	return (
		<div>
			<LiveProvider code={code} scope={scope} noInline={true}>
				<Tabs tabs={tabs} />
				<LiveError />
				<div className="livePreview">
					<LivePreview />
				</div>
			</LiveProvider>
		</div>
	);
};

LiveEditorComponent.propTypes = {
	initialCode: PropTypes.string.isRequired,
	initialCSS: PropTypes.string.isRequired,
};

export default LiveEditorComponent;
