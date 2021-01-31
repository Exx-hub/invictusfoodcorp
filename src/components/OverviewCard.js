import React from "react";
import { useHistory } from "react-router";
import "../styles/OverviewCard.css";

function OverviewCard({ title, img }) {
	const history = useHistory();
	return (
		<div className="overviewCard">
			<img src={img} alt="product" />

			<div className="overviewCard__bottom">
				<h2>{title}</h2>
				<p onClick={() => history.push("/products")}>view products</p>
			</div>
		</div>
	);
}

export default OverviewCard;
