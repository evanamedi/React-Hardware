import React, { useState, useRef, useEffect } from "react";
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
					to="/components"
					className="navLink"
					onClick={handleLinkClick}>
					Components
				</Link>
			</div>
		</div>
	);
}
