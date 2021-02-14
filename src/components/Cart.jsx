import React from "react";

import { Container, Typography, Card, Grid, makeStyles, CardActions, Button } from "@material-ui/core";

import useForceUpdate from "use-force-update";

const useStyles = makeStyles((theme) => ({
	card: { width: 150 },
	itemText: { width: 600 },


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

	const singleDelete = (index) => {
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
									<Typography>
										{cur.name}
									</Typography>
									<Typography>
										{cur.price}
									</Typography>
								</Card>
							</Grid>
						))
					)}
			</Card>
		</Container>
	);
};

export default Cart;