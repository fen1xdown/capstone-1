import React from "react";

import { Typography, Grid, makeStyles, Card, CardContent, CardActions, Button, NativeSelect} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
	card: { marginBottom: 20, flexDirection: "row", backgroundColor: "#6b6b6b"},
	img: { width: 300, height: 450, float: "left", padding: 20 },
	item_text: { marginLeft: 310, width: 800 },
}));



const ItemGrid = (props) => { 
	const classes = useStyles();

	let itemQuantity = 1;

	const selectOnChange = (selectQuantity) => {
		itemQuantity = selectQuantity;
	};

	let optionArray = [];
	for (let i = 0; i <= props.cur.quantity; i++) {
		optionArray.push(i);
	}

	const currentItem = props.cur;

	return (
		<>
			<Grid item md >
				<Card className={classes.card}>
					<img src={props.cur.img} alt="N/A" className={classes.img} />
					<CardContent>						
						<Typography variant="h3" className={classes.item}>
							{props.cur.name}
						</Typography>
						<Typography variant="h4">
							Price: ${props.cur.price}
						</Typography>
						<CardActions>
							<NativeSelect defaultValue="1"
								onChange={(e) => selectOnChange(e.target.value)}>
								{optionArray.map((cur) => (
									<option key={cur} value={cur}>
										{cur}
									</option>
								))}
							</NativeSelect>
							<Button onClick={() => props.btnOnClick(currentItem, itemQuantity)}>
								<AddShoppingCartIcon />

							</Button>
						</CardActions>
						<Typography>
							Developer: {props.cur.developer}
						</Typography>
						<Typography>
							Avalible for: {props.cur.system}
						</Typography>
						<Typography>
							Items in stock: {props.cur.quantity}
						</Typography>

					</CardContent>
				</Card>
			</Grid>
		</>
	)
}

export default ItemGrid;