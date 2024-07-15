import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function ButtonPayload() {
	const initialCode = `
const Button = ({ styleType, size, onClick, children }) => {
	const getStyleClass = () => {
		switch (styleType) {
			case "primary":
				return "btn-primary";
			case "secondary":
				return "btn-secondary";
			case "danger":
				return "btn-danger";
			default:
				return "btn-default";
		}
	};


	const getSizeClass = () => {
		switch (size) {
			case "small":
				return "btn-small";
			case "large":
				return "btn-large";
			default:
				return "btn-medium";
		}
	};

	
	return (
		<button
			className={\`btn \${getStyleClass()} \${getSizeClass()}\`}
			onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	styleType: PropTypes.oneOf([
		"primary",
		"secondary",
		"danger",
		"default",
	]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	styleType: "default",
	size: "medium",
	onClick: () => {},
};

const ButtonDeploy = () => {
	return (
<div className="buttonLayout">
				<div className="buttonSelf">
					<Button
						styleType="primary"
						size="large"
						onClick={() => alert("Primary Clicked!")}>
						Primary Button
					</Button>
				</div>
				<div className="buttonSelf">
					<Button
						styleType="secondary"
						size="medium"
						onClick={() => alert("Secondary Clicked!")}>
						Secondary Button
					</Button>
				</div>
				<div className="buttonSelf">
					<Button
						styleType="danger"
						size="small"
						onClick={() => alert("Danger Clicked")}>
						Danger Button
					</Button>
				</div>
			</div>
);
}

render(<ButtonDeploy />);
	`;

	const initialCSS = `.buttonLayout {
	display: flex;
	flex-wrap: wrap;
}

.buttonSelf {
	margin: auto;
}

.btn {
	border: none;
	border-radius: 10px;
	padding: 0.5 1em;
	cursor: pointer;
	transition: background-color 0.3s;
}

.btn-default {
	background-color: #e0e0e0;
	color: #000;
}

.btn-primary {
	background-color: #1e970039;
	border: 1px solid #1e9700;
	color: #fff;
}

.btn-secondary {
	background-color: #0162b63f;
	border: 1px solid #0161b6;
	color: #fff;
}

.btn-danger {
	background-color: #dc35463d;
	border: 1px solid #dc3545;
	color: #fff;
}

.btn-small {
	padding: 0.2em 0.5em;
}

.btn-medium {
	padding: 0.5em 1em;
}

.btn-large {
	padding: 0.75em 1.5em;
}

.btn:hover {
	opacity: 0.8;
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
