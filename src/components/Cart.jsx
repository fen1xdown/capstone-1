import React from "react";

import { Container, Typography, Card, Grid, makeStyles, CardActions, Button } from "@material-ui/core";

import useForceUpdate from "use-force-update";

const useStyles = makeStyles((theme) => ({
	img: { width: 100, float: "left" },
	card: { width: 750 },
	itemText: { width: 600 },
	costText: { textAlign: "right" },
	checkoutButton: { float: "right" },
	totalDiv: { float: "right", textAlign: "right" },
	cardContainer: {padding: 25},
}))

const Cart = (props) => {
	const classes = useStyles();
	const forceUpdate = useForceUpdate();

	const items = props.cartItems;
	let total = 0;
	let itemPrices = [];

	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	if (items.length !== 0) {
		items.forEach((item) => {
			itemPrices.push(item.price);
		});
		total = itemPrices.reduce(reducer);
	}

	const thisDelete = (index) => {
		items.splice(index, 1);
		props.setCartItems(items);
		forceUpdate();
		props.update();
	};

	return (
		<Container className={classes.container}>
			<Typography>
				My Cart
			</Typography>
			<Card className={classes.cardContainer}>
				{items.length === 0 ? (
					<Typography>
						Your cart seems empty, lets change that!
					</Typography>
				) : (
						items.map((cur, num) => (
							<Grid key={num} item md>
								<Card className={classes.card}>
									<img scr={cur.img} alt="N/A" className={classes.img} />
									<Typography variant="h3" className={classes.itemText}>
										{cur.name}
									</Typography>
									<Typography variant="h5" textAlign="right">
										{cur.price}
									</Typography>
									<CardActions>
										<Button className={classes.deleteButton} onClick={() => thisDelete (num)}>
											Delete Item
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))
					)}
				{items.length === 0 ? (
					<></>
				) : (
						<div className={classes.totalDiv}>

						</div>
						)}
			</Card>
		</Container>
	);
};

export default Cart;