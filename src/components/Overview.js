import React from "react";
import "../styles/Overview.css";
import OverviewCard from "./OverviewCard";

import mayo from "../images/mayo.jpg";
import sauces from "../images/sauces.jpg";
import other from "../images/otherproducts.jpg";

function Overview() {
	return (
		<div className="overview">
			<h2>PRODUCTS</h2>

			<div className="overview__cards">
				<OverviewCard title="MAYONNAISE" img={mayo} />
				<OverviewCard title="CATSUP / SAUCES" img={sauces} />
				<OverviewCard title="CONDIMENTS" img={other} />
			</div>
		</div>
	);
}

export default Overview;
