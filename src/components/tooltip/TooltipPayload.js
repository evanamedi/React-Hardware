import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

const TooltipPayload = () => {
	const initialCode = `const Tooltip = ({ children, text }) => {
	return (
		<div className="tooltip">
			{children}
			<div className="tooltiptext">{text}</div>
		</div>
	);
};

const TooltipDeploy = () => {
    return (
        <div style={{ padding: '50px' }}>
            <Tooltip text="This is the tooltip text">
                <button className="tooltipButton">Hover over me</button>
            </Tooltip>
        </div>
    )
} 

render(<TooltipDeploy />);
`;

	const initialCSS = `.tooltip {
	position: relative;
	display: inline-block;
	cursor: pointer;
}

.tooltip .tooltiptext {
	visibility: hidden;
	width: 200px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 5px;
	padding: 5px 0;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	opacity: 0;
	transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
	visibility: visible;
	opacity: 1;
}

.tooltipButton {
	width: 200px;
	font-size: 15px;
	padding: 2px;
	border-radius: 10px;
}`;

	return (
		<div className="width">
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
};

export default TooltipPayload;
