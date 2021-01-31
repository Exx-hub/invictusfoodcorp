import React from "react";
import { useHistory } from "react-router";
import "../styles/Home.css";

function Home() {
	const history = useHistory();

	return (
		<div className="home">
			<div className="home__text">
				<h2>Top Quality Food Supplier Since 2004.</h2>
				<button>
					<a href="#contact">CONTACT US</a>
				</button>
				<button
					className="productsButton"
					onClick={() => history.push("/products")}
				>
					PRODUCTS
				</button>
			</div>
		</div>
	);
}

export default Home;
