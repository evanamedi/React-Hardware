import "./App.css";
import Title from "./components/title/Title";
import ButtonPayload from "./components/buttons/ButtonPayload";
import InputFieldPayload from "./components/inputField/InputFieldPayload";
import CheckboxPayload from "./components/checkbox/CheckboxPayload";
import RadioButtonsPayload from "./components/radioButtons/RadioButtonsPayload";
import TypingEffectPayload from "./components/displayText/TypingEffectPayload";
import ScatterTextPayload from "./components/displayText/ScatterTextPayload";
import DropdownPayload from "./components/dropdown/DropdownPayload";
import ModalDialogPayload from "./components/modalDialog/ModalDialogPayload";
import TabsPayload from "./components/tabs/TabsPayload";
import AccordionPayload from "./components/accordion/AccordionPayload";
import SpinnerPayload from "./components/spinner/SpinnerPayload";
import TooltipPayload from "./components/tooltip/TooltipPayload";
import DataTablePayload from "./components/dataTable/DataTablePayload";
import FormPayload from "./components/form/FormPayload";

function App() {
	return (
		<div className="App">
			<div className="bodyDiv">
				<Title />
				<div className="mainBody">
					<ButtonPayload />
					<InputFieldPayload />
					<CheckboxPayload />
					<RadioButtonsPayload />
					<DropdownPayload />
					<ModalDialogPayload />
					<TabsPayload />
					<AccordionPayload />
					<SpinnerPayload />
					<TooltipPayload />
					<DataTablePayload />
					<FormPayload />
					<TypingEffectPayload />
					<ScatterTextPayload />
				</div>
			</div>
		</div>
	);
}

export default App;
