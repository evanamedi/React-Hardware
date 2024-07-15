import React, { useState } from "react";
import ToastPayload from "../toast/ToastPayload";
import ButtonPayload from "../buttons/ButtonPayload";
import InputFieldPayload from "../inputField/InputFieldPayload";
import CheckboxPayload from "../checkbox/CheckboxPayload";
import RadioButtonsPayload from "../radioButtons/RadioButtonsPayload";
import DropdownPayload from "../dropdown/DropdownPayload";
import ModalDialogPayload from "../modalDialog/ModalDialogPayload";
import TabsPayload from "../tabs/TabsPayload";
import AccordionPayload from "../accordion/AccordionPayload";
import SpinnerPayload from "../spinner/SpinnerPayload";
import TooltipPayload from "../tooltip/TooltipPayload";
import DataTablePayload from "../dataTable/DataTablePayload";
import FormPayload from "../form/FormPayload";
import ScatterTextPayload from "../displayText/ScatterTextPayload";
import TypingEffectPayload from "../displayText/TypingEffectPayload";

const ContentToggle = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<div className="content-toggle-container">
			<div className="buttons-container">
				{items.map((item, index) => (
					<button
						key={index}
						className={`toggle-button ${
							activeIndex === index ? "active" : ""
						}`}
						onClick={() => setActiveIndex(index)}>
						{item.title}
					</button>
				))}
			</div>
			<div className="content-container">
				{activeIndex !== null && (
					<div>{items[activeIndex].content}</div>
				)}
			</div>
		</div>
	);
};

const SlidingMenu = () => {
	const items = [
		{ title: "Toast", content: <ToastPayload /> },
		{ title: "Button", content: <ButtonPayload /> },
		{ title: "Input Field", content: <InputFieldPayload /> },
		{ title: "Check Box", content: <CheckboxPayload /> },
		{ title: "Radio Button", content: <RadioButtonsPayload /> },
		{ title: "Drop Down", content: <DropdownPayload /> },
		{ title: "Modal Dialog", content: <ModalDialogPayload /> },
		{ title: "Tabs", content: <TabsPayload /> },
		{ title: "Accordion", content: <AccordionPayload /> },
		{ title: "Spinner", content: <SpinnerPayload /> },
		{ title: "Tool Tip", content: <TooltipPayload /> },
		{ title: "Data Table", content: <DataTablePayload /> },
		{ title: "Form", content: <FormPayload /> },
		{ title: "Scatter Text", content: <ScatterTextPayload /> },
		{ title: "Typing Effect", content: <TypingEffectPayload /> },
	];

	return (
		<div className="slidingMenu">
			<ContentToggle items={items} />
		</div>
	);
};

export default SlidingMenu;
