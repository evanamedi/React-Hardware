import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function TabsPayload() {
	const initialCode = `
	const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(tabs[0].label);

	const handleTabClick = (label) => {
		setActiveTab(label);
	};

	return (
		<div className="tabs-containerDEV">
			<div className="tabsDEV">
				{tabs.map((tab) => (
					<button
						key={tab.label}
						className={\`tab-buttonDEV \${
							activeTab === tab.label ? "active" : ""
						}\`}
						onClick={() => handleTabClick(tab.label)}>
						{tab.label}
					</button>
				))}
			</div>
			<div className="tab-contentDEV">
				{tabs.map((tab) =>
					activeTab === tab.label ? (
						<div key={tab.label} className="tab-panelDEV">
							{tab.content}
						</div>
					) : null
				)}
			</div>
		</div>
	);
};

const TabsDeploy = () => {
	const tabs = [
		{ label: "Tab 1", content: <div>Content of Tab 1</div> },
		{ label: "Tab 2", content: <div>Content of Tab 2</div> },
		{ label: "Tab 3", content: <div>Content of Tab 3</div> },
	];

	return (
	<div>
		<Tabs tabs={tabs} />
	</div>
	)
	}

	render(<TabsDeploy />)
	`;

	const initialCSS = `.tabs-containerDEV {
	width: 100%;
}

.tabsDEV {
	display: flex;
	background: linear-gradient(180deg, #747474, #444444);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}

.tab-buttonDEV {
	color: white;
	padding: 10px 20px;
	cursor: pointer;
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: 16px;
	margin-bottom: 2px;
}

.tab-buttonDEV:hover {
	font-weight: bold;
}

.tab-buttonDEV.active {
	border-bottom: 2px solid #ffffff;
	font-weight: bold;
}

.tab-contentDEV {
	color: white;
	border-radius: 5px;
	border: none;
	max-width: 100%;
	height: 300px;
	min-height: 300px;
	overflow: scroll;
	overscroll-behavior-y: auto;
	-ms-overflow-style: none;
	scrollbar-width: 10px;
}

.tab-contentDEV::-webkit-scrollbar {
	display: none;
}

.tab-panelDEV {
	height: 100%;
	min-height: 300px;
	background: #061626;
}
`;

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
}
