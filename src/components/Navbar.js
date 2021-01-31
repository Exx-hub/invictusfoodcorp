import React, { useState } from "react";
import "../styles/Navbar.css";

import final from "../images/final.png";
import { useHistory } from "react-router-dom";
import SidebarSlide from "./SidebarSlide";

function Navbar() {
	const [show, setShow] = useState(false);
	const history = useHistory();

	const goToHome = () => {
		history.push("/");
	};

	const toggle = () => {
		setShow(!show);
	};

	const goToProducts = () => {
		history.push("/products");
		setShow(false);
	};
	const goToCareers = () => {
		history.push("/careers");
		setShow(false);
	};

	return (
		<div className="navbar">
			<nav>
				<div className="navbar__left" onClick={goToHome}>
					<img src={final} alt="company logo" />
				</div>

				<div className="navbar__right" onClick={toggle}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
				<ul className="navbar__links">
					<li onClick={goToHome}>HOME</li>
					<li onClick={goToProducts}>PRODUCTS</li>
					<li onClick={goToCareers}>CAREERS</li>
					<li>
						<a
							href=" https://www.facebook.com/invictusfoodproducts/"
							target="_blank"
							rel="noreferrer"
						>
							SOCIAL MEDIA
						</a>
					</li>
					<li style={{ textDecoration: "underline" }}>
						<a href="/#contact">CONTACT US</a>
					</li>
				</ul>
			</nav>
			<SidebarSlide show={show} setShow={setShow} toggle={toggle} />
		</div>
	);
}

export default Navbar;
