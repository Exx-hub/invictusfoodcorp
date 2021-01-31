import React from "react";
import { useHistory } from "react-router";
import "../styles/About.css";

function About() {
	const history = useHistory();
	return (
		<div className="about">
			<h2>ABOUT US</h2>
			<p>
				Invictus Food Products Corp.(IFPC) is a Filipino-owned manufacturing
				company capable of producing various types of good quality food
				products. The manufacturing complex operates on a 1.6 hectares land area
				in Brgy.Del Rosario, San Fernando City, Pampanga.{" "}
			</p>

			<button onClick={() => history.push("/careers")}>CAREERS</button>

			<a
				className="about__link"
				href="https://www.facebook.com/jam.castro.54966"
				target="_blank"
				rel="noreferrer"
			>
				Learn more..
			</a>
		</div>
	);
}

export default About;
