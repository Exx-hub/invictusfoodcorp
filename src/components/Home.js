import React from "react";
import "../styles/Home.css";
import bright from "../images/brightBanner.jpg";

function Home() {
	return (
		<div className="home">
			<img src={bright} alt="" />
			<div className="home__text">
				<h1>Welcome to Invictus</h1>
				<h2>Top Quality Food Supplier Since 2004.</h2>
				<button>CONTACT NOW</button>
			</div>
		</div>
	);
}

export default Home;
