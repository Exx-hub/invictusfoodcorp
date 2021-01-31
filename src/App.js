import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Overview from "./components/Overview";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Careers from "./components/Careers";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div className="app">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
						<About />
						<Overview />
						<ContactForm />
					</Route>

					<Route path="/products" component={Products} />
					<Route path="/careers" component={Careers} />
				</Switch>
			</Router>

			<Footer />
		</div>
	);
}

export default App;
