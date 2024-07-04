import React from "react";
import PropTypes from "prop-types";

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
			className={`btn ${getStyleClass()} ${getSizeClass()}`}
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

export default Button;
