import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.jpg";

function Navbar() {
	return (
		<nav>
			<div className="navbar__left">
				<img src={logo} alt="company logo" />
			</div>
			<div className="navbar__right">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	);
}

export default Navbar;
