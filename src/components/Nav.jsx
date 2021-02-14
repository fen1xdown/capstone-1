import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import useForceUpdate from "use-force-update";
import { Drawer, List, ListItem, ListItemText, InputBase, makeStyles, IconButton, ListItemIcon, withStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import Cart from "./Cart";
import ItemGrid from "./ItemGrid"


const Nav = () => {

	const [cartQuantity, setCartQuantity] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	const StyledBadge = withStyles((theme) => ({
		badge: {
			border: `5px solid ${theme.palette.background.paper}`,
		},
	}))(Badge);

	const useStyles = makeStyles((theme) => ({
		drawerPaper: { width: "inherit"}
	}))

	const btnOnClick = (data, quantity) => {
		let itemsArray = [];

		let nextArray = [];
		cartItems.forEach((product) => {
			nextArray.push(product.id);
			console.log(product.name);
		});

		setCartQuantity(cartQuantity + parseInt(quantity));
		for (let i = 0; i < parseInt(quantity); i++) {
			itemsArray.push(data);
		}
		setCartItems(cartItems.concat(itemsArray));
	}

	const forceUpdate = useForceUpdate();

	const SelectOnChange = (data) => {
		console.log(data);
	};

	const clearCartbtnOnClick = () => {
		setCartItems([]);
	};

	const checkout = () => {
		clearCartbtnOnClick();
	};

	const update = () => {
		forceUpdate();
	};

	const classes = useStyles();

	return (
		<Router>
			<div style={{display: "flex"}}>
				<Drawer style={{ width: "150px" }} anchor="left" open={true} variant="persistent" classes={{ paper: classes.drawerPaper }}>
					<List>
						<Link to="/" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
							</ListItem>
						</Link>
						<Link to="/cart" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<StyledBadge badgeContent={classes.link}>
										<ShoppingCartIcon />
									</StyledBadge>
								</ListItemIcon>
							</ListItem>
						</Link>
					</List>
				</Drawer>
				<Switch>
					<Route exact path="/">
						<Home
							btnOnClick={btnOnClick}
							SelectOnChange={SelectOnChange} />
					</Route>
					<Route exact path="/cart">
						<Cart update={update}
							cartItems={cartItems}
							setCartItems={setCartItems} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Nav;