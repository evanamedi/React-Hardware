import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import Tabs from "../tabs/Tabs";

const scope = { React, useState, useEffect, useRef, PropTypes, ReactDom };

const LiveEditorComponent = ({ initialCode, initialCSS }) => {
	const [code, setCode] = useState(initialCode);
	const [cssCode, setCssCode] = useState(initialCSS);

	useEffect(() => {
		const styleElement = document.createElement("style");
		styleElement.id = "dynamic-styles";
		document.head.appendChild(styleElement);
		styleElement.textContent = cssCode;

		return () => {
			document.head.removeChild(styleElement);
		};
	}, [cssCode]);

	useEffect(() => {
		setCssCode(initialCSS);
	}, [initialCSS]);

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
						theme={themes.okaidia}
					/>
				</div>
			),
		},
		{
			label: "CSS",
			content: (
				<textarea
					className="css-text-area"
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
				<div className="live-error-div"></div>
				<div className="livePreview">
					<LivePreview />
					<LiveError className="live-error" />
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
