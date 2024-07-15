import "./App.css";
import Title from "./components/title/Title";
import SlidingMenu from "./components/slidingMenu/SlidingMenu";

function App() {
	return (
		<div className="App">
			<div className="bodyDiv">
				<Title />
				<div className="mainBody">
					<SlidingMenu />
				</div>
			</div>
		</div>
	);
}

export default App;
