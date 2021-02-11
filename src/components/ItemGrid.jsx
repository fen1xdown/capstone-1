import React from "react";

import {
	Typography,
	Grid,
	makeStyles,
	Card,
	CardContent,
	CardActions,
	Button,
	NativeSelect
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {

});

const ItemGrid = (props) => { 
	const classes = useStyles();

	let itemQuantity = 1;

	const handleSelectOnChange = (selectQuantity) => {
		itemQuantity = selectQuantity;
	};

	let optionArray = [];
	for (let i = 0; i <= props.cur.quantity; i++) {
		optionArray.push(i);
	}

	return (
		<>
			<Grid item md>
				<Card className={classes.card}>
					<img />
					<CardContent>
						<Typography variant="body1" className={classes.item}>
							{props.cur.name}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</>
	)
}

export default ItemGrid;