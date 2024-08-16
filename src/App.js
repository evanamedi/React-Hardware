import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "../src/components/pages/Home";
import Components from "./components/pages/Components";

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<NavMenu />
				</header>
				<div className="bodyDiv">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/components" element={<Components />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
