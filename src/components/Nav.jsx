import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import useForceUpdate from "use-force-update";
import { Drawer, List, ListItem, ListItemText, InputBase, makeStyles } from "@material-ui/core";


const Nav = () => {

	const useStyles = makeStyles((theme) => ({
		drawerPaper: { width: "inherit"}
	}))

	const forceUpdate = useForceUpdate();

	const update = () => {
		forceUpdate();
	};

	const classes = useStyles();

	return (
		<Router>
			<div>
				<Drawer classes={{ paper: classes.drawerPaper }}>
					<Link to="/" className={classes.link}>
						<ListItem button>
							<ListItemText primary={"Home"} />
						</ListItem>
					</Link>
				</Drawer>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
		</div>
		</Router>
	);
};

export default Nav;