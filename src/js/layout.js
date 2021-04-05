import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

import { StarWarsBar } from "./component/StarWarsBar";
import { Character } from "./component/cardCharacters";
import { Planets } from "./component/cardPlanets";
import { StartHome } from "./component/StarHome";
import { StarShips } from "./component/cardStarShips";
import { NotFound } from "./component/NotFound";
import { CharacterView } from "./views/CharacterView";
import { PlanetsView } from "./views/PlanetsView";
import { StarShipView } from "./views/StarShipView";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<StarWarsBar />
					<Switch>
						<Route exact path="/" component={StartHome} />
						<Route exact path="/people" component={Character} />
						<Route exact path="/people/:id" component={CharacterView} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/planets/:id" component={PlanetsView} />
						<Route exact path="/starships" component={StarShips} />
						<Route exact path="/starships/:id" component={StarShipView} />
						<Route exact path="/single/:theid" component={Single} />
						<Route exact path="*" component={NotFound} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
