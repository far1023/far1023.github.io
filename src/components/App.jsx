import React from 'react';
import '../assets/style.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';


import About from "./About";
import Tech from "./Tech";

const RouteContainer = posed.div({
	enter: { opacity: 1, delay: 300, beforeChildren: false },
	exit: { opacity: 0 }
});

function App() {
	return (
		<Router>
			<div>
				<Route render={({ location }) => (
					<PoseGroup>
						<RouteContainer key={location.pathname}>	
							<Switch>
								<Route exact path="/" component={About} key="" />
								<Route path="/about" component={About} key="about" />
								<Route path="/tech" component={Tech} key="tech" />
							</Switch>
						</RouteContainer>
					</PoseGroup>
				)}/>
				<div className="link" id="route">
					<Link to="/about" className="route">About</Link> • <Link to="/tech" className="route">Tech</Link>
				</div>
			</div>
		</Router>
	);
}

export default App;
