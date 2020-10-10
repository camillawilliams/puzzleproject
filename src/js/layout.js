import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Puzzles } from "./views/puzzles";
import { Singlepuzzle } from "./views/singlepuzzle";
import injectContext, { Context } from "./store/appContext";
import Alert from "react-bootstrap/Alert";
import { MyNavbar } from "./component/mynavbar";
import { SignIn } from "./views/signin";
import { RegisterPage } from "./views/registerpage";
import { Footer } from "./component/footer";
import { Upload } from "./component/upload";
import { Track } from "./component/track";
import { Subscribe } from "./component/subscribe";
import { Swap } from "./views/swap";
import { ModalBox } from "./component/modalbox";
import { Report } from "./views/report";
import { Swapcart } from "./views/swapcart";
import { Profile } from "./views/profile";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			{store.alert.visible && (
				<Alert className="text-center" variant={store.alert.type} onClose={actions.hideAlert} dismissible>
					{store.alert.message}
				</Alert>
			)}
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNavbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/puzzles">
							<Puzzles />
						</Route>
						<Route exact path="/singlepuzzle/:id">
							<Singlepuzzle />
						</Route>

						<Route exact path="/upload">
							<Upload />
						</Route>

						<Route exact path="/signin">
							<SignIn />
						</Route>
						<Route exact path="/registerpage">
							<RegisterPage />
						</Route>

						<Route exact path="/report">
							<Report />
						</Route>
						<Route exact path="/track">
							<Track />
						</Route>
						<Route exact path="/swap">
							<Swap />
						</Route>
						<Route exact path="/subscribe">
							<Subscribe />
						</Route>
						<Route exact path="/swapcart">
							<Swapcart />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
