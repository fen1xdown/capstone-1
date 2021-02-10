import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import useForceUpdate from "use-force-update";

const Nav = () => {
	const forceUpdate = useForceUpdate();

	const update = () => {
		forceUpdate();
	};

	return (
		<Router>
			<div>
				this is only a test
		</div>
		</Router>
	);
};

export default Nav;