import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useForceUpdate from "use-force-update";
import { Drawer, List, ListItem, ListItemText, InputBase, makeStyles, IconButton, ListItemIcon, withStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import Home from "./Home";
import Cart from "./Cart";
import Products from "../Assets/Products";
import GS from "../Assets/img/GS.png";


const Nav = () => {

	const [cartQuantity, setCartQuantity] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [userSearch, setUserSearch] = useState("");
	const [searchArray, setSearchArray] = useState([]);
	const [userInput, setUserInput] = useState(false);
 
	const StyledBadge = withStyles((theme) => ({
		badge: {
			border: `5px solid ${theme.palette.background.default}`,
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
	const searchSubmit = () => {
		let userArray = [];
		const lowerCaseInput = userSearch.toLowerCase();

		setSearchArray(userArray);
		setUserInput(true);
		Products.forEach((product) => {
			const name = product.name.toLowerCase();
			const id = product.id;
			const dev = product.developer.toLowerCase();

			if (name.search(lowerCaseInput) !== -1) {
				userArray.push(product);
				setSearchArray(userArray);
			} else if (id.toString().search(lowerCaseInput) !== -1) {
				userArray.push(product);
				setSearchArray(userArray);
			} else if (dev.search(lowerCaseInput) !== -1) {
				userArray.push(product);
				setSearchArray(userArray);
			} else console.log("nothing here >.>");
		});
	};

	const forceUpdate = useForceUpdate();

	const SelectOnChange = (data) => {
		console.log(data);
	};

	const submitOnChange = (str) => {
		setUserSearch(str);
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
			<div style={{ display: "flex", backgroundColor: "#b4b4b4" }}>
				<Drawer style={{ width: "200px" }} anchor="left" open={true} variant="persistent" classes={{ paper: classes.drawerPaper }}>
					<List>
						<img style={{width: "200px"}} src={GS} className={classes.img} alt="GameStonks" />
							<Link to="/" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
									Home
								</ListItemIcon>
							</ListItem>
						</Link>
						<Link to="/cart" className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<StyledBadge badgeContent={classes.link}>
										<ShoppingCartIcon />
										Cart
									</StyledBadge>
								</ListItemIcon>
							</ListItem>
						</Link>
						<hr/>
						<InputBase value={userSearch} placeholder="Search" onChange={(e) => submitOnChange(e.target.value)} />
						<ListItem>
							<ListItemIcon>
								<IconButton type="submit" onClick={() => searchSubmit()}>
									<SearchIcon />
								</IconButton>
							</ListItemIcon>
						</ListItem>

					</List>
				</Drawer>
				<Switch>
					<Route exact path="/">
						<Home
							userInput={userInput}
							searchArray={searchArray}
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