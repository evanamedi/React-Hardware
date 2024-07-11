import React from "react";

const Tooltip = ({ children, text }) => {
	return (
		<div classname="tooltip">
			{children}
			<div className="tooltiptext">{text}</div>
		</div>
	);
};

export default Tooltip;
