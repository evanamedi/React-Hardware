import React, { useState, useRef, useEffect } from "react";
import logo from "../static/images/icons/build.png";
import { Link } from "react-router-dom";
import closeIcon from "../static/images/icons/closeMenu.png";
import menuIcon from "../static/images/icons/menu.png";

export default function NavMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleClickOutside = (event) => {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setIsMenuOpen(false);
		}
	};

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="mainNavDiv" ref={navRef}>
			<div>
				<Link to="/">
					<img src={logo} className="App-logo" alt="logo" />
				</Link>
			</div>
			<div className="navParaDiv">
				<p className="navPara">This site is still under development.</p>
			</div>
			<div
				className={`navButtonDiv ${
					isMenuOpen ? "noBorder" : "border"
				}`}>
				<button onClick={toggleMenu} className="menuButton">
					<img
						id="menuOpen"
						src={isMenuOpen ? closeIcon : menuIcon}
						alt="menu"
						className="menuIcon"
					/>
				</button>
			</div>
			<div className={`Nav ${isMenuOpen ? "open" : ""}`}>
				<Link to="/" className="navLink" onClick={handleLinkClick}>
					Home
				</Link>
				<Link
					to="/hardware"
					className="navLink"
					onClick={handleLinkClick}>
					Hardware
				</Link>
				<Link
					to="/documentation"
					className="navLink"
					onClick={handleLinkClick}>
					Documentation
				</Link>
			</div>
		</div>
	);
}
