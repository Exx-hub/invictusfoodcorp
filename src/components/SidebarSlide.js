import React from "react";
import "../styles/SidebarSlide.css";
import final from "../images/final.png";
import { useHistory } from "react-router";

function SidebarSlide({ show, toggle, setShow }) {
	const history = useHistory();

	const goToHome = () => {
		history.push("/");
		setShow(false);
	};
	const goToProducts = () => {
		history.push("/products");
		setShow(false);
	};
	const goToCareers = () => {
		history.push("/careers");
		setShow(false);
	};
	const goToContacts = () => {
		setShow(false);
	};
	return (
		<div className={show ? "sidebarSlide active" : "sidebarSlide"}>
			<div className="sidebarSlide__left">
				<ul>
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
					<li onClick={goToContacts}>
						<a href="/#contact">CONTACT US</a>
					</li>
				</ul>

				<div className="sidebarSlide__bottom">
					<div className="sidebarSlide__bottom--logo">
						<img src={final} alt="logo" />
						{/* <p>FB</p> */}
					</div>
					<p> © 2021 Invictus Food Products Corp.</p>
					<p> All rights reserved.</p>
				</div>
			</div>

			<div className="sidebarSlide__right">
				<h3 onClick={toggle}>X</h3>
			</div>
		</div>
	);
}

export default SidebarSlide;
