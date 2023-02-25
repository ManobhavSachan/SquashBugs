import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import diffPage from "./Components/DiffPage";
import Navbar from "./Components/Navbar";
// import Home from "./components/Home";
import RaiseBugs from "./Components/RaiseBugs";
import ResolveBugs from "./Components/ResolveBugs";
import RemoveBugs from "./Components/RemoveBugs";
// import SignUp from "./components/SignUp";

import About from "./Components/About";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/diffpage" element={<diffPage />} />
					{/* <Route exact path="/Home" element={<Home />} /> */}
					<Route exact path="/raisebugs" element={<RaiseBugs />} />
					<Route exact path="/resolvebugs" element={<ResolveBugs />} />
					<Route exact path="/RemoveBugs" element={<RemoveBugs />} />
					<Route exact path="/About" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
