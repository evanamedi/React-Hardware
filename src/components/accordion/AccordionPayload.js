import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function AccordionPayload() {
	const initialCode = `
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


const items = [
    {
        title: "Section 1",
        content: <div>Content for section 1</div>,
    },
    {
        title: "Section 2",
        content: <div>Content for section 2</div>,
    },
    {
        title: "Section 3",
        content: <div>Content for section 3</div>,
    },
]

render(<Accordion items={items} />)
    
    `;

	const initialCSS = `.accordion {
	width: 300px;
	border-radius: 10px;
}

.accordion-item {
	border-bottom: 1px solid #ddd;
	border-radius: 10px;
}

.accordion-item:last-child {
	border-bottom: none;
}

.accordion-header {
	padding: 1em;
	cursor: pointer;
	background-color: #f7f7f7;
	border-radius: 10px;
}

.accordion-content {
	padding: 1em;
	border-top: 1px solid #ddd;
	background-color: #cccccc;
	border-radius: 10px;
	height: 100px;
}
    
    `;
	return (
		<div className="width">
			<p className="SectionTitle">Accordion</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
}
