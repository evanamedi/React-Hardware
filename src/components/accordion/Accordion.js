import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
	return (
		<div className="accordion-item">
			<div className="accordion-header" onClick={onClick}>
				{title}
			</div>
			{isOpen && <div className="accordion-content">{content}</div>}
		</div>
	);
};

AccordionItem.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.node.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
};

const Accordion = ({ items }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					content={item.content}
					isOpen={openIndex === index}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

Accordion.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
		})
	).isRequired,
};

export default Accordion;
