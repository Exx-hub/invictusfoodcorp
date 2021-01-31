import React from "react";
import "../styles/Careers.css";

function Careers() {
	return (
		<div className="careers">
			<div className="careers__list">
				<h2>CAREER OPPORTUNITIES</h2>
				<ul>
					<li>Quality Assurace Supervisor</li>
					<li>Quality Assurace Analyts</li>
					<li>HR Staff</li>
					<li>Maintenance Staff</li>
					<li>Production Line Staff</li>
				</ul>
			</div>

			<div className="careers__form">
				<h2>JOIN OUR TEAM</h2>
				<div className="careers__form--container">
					<form>
						<input
							type="text"
							name="name"
							// value={name}
							// onChange={(e) => setName(e.target.value)}
							placeholder="Name:"
						/>

						<input
							type="email"
							name="email"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
							placeholder="Email:"
						/>

						<input
							type="number"
							name="contact_number"
							// value={number}
							// onChange={(e) => setNumber(e.target.value)}
							placeholder="Contact:"
							className="contactForm__number"
						/>

						<input
							type="number"
							name="contact_number"
							// value={number}
							// onChange={(e) => setNumber(e.target.value)}
							placeholder="Applying for:"
							className="contactForm__number"
						/>
						<button
							type="submit"
							// disabled={!name || !email || !number || !message}
						>
							Submit
						</button>
					</form>

					<p className="link">
						For interested applicants you can contact us here or you may visit
						and message us on Facebook using this{" "}
						<a
							href="https://www.facebook.com/jam.castro.54966"
							target="_blank"
							rel="noreferrer"
						>
							link
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Careers;
