import logo from "./logo.svg";
import "./App.css";
import Title from "./components/title/Title";
import ButtonPayload from "./components/buttons/ButtonPayload";
import InputFieldPayload from "./components/inputField/InputFieldPayload";
import CheckboxPayload from "./components/checkbox/CheckboxPayload";
import RadioButtonsPayload from "./components/radioButtons/RadioButtonsPayload";
import TypingEffectPayload from "./components/displayText/TypingEffectPayload";
import ScatterTextPayload from "./components/displayText/ScatterTextPayload";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<div className="bodyDiv">
				<Title />
				<ButtonPayload />
				<InputFieldPayload />
				<CheckboxPayload />
				<RadioButtonsPayload />
				<TypingEffectPayload />
				<ScatterTextPayload />
			</div>
		</div>
	);
}

export default App;
