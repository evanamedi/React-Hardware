import React, { useState } from "react";

const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(tabs[0].label);

	const handleTabClick = (label) => {
		setActiveTab(label);
	};

	return (
		<div className="tabs-container">
			<div className="tabs">
				{tabs.map((tab) => (
					<button
						key={tab.label}
						className={`tab-button ${
							activeTab === tab.label ? "active" : ""
						}`}
						onClick={() => handleTabClick(tab.label)}>
						{tab.label}
					</button>
				))}
			</div>
			<div className="tab-content">
				{tabs.map((tab) =>
					activeTab === tab.label ? (
						<div key={tab.label} className="tab-panel">
							{tab.content}
						</div>
					) : null
				)}
			</div>
		</div>
	);
};

export default Tabs;
