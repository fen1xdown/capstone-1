import React from 'react';

import { Container, Typography, Grid } from "@material-ui/core";

import Products from "../Assets/Products";

import ItemGrid from "./ItemGrid";

const Home = (props) => {
	const searchArray = props.searchArray;

	return (
		<>
			<Container>
				<Typography variant="h3">
					Home
				</Typography>
				<Grid>
					{props.setUserInput === true
						? searchArray.map((cur, index) => (
							<itemGrid
								cur={cur}
								btnOnClick={props.btnOnClick}
								selectOnChange={props.selectOnChange}
								key={index} />
						))
						: Products.map((cur, index) => (
							<ItemGrid
								cur={cur}
								btnOnClick={props.btnOnClick}
								selectOnChange={props.selectOnChange}
								key={index} />
						))
					}					
				</Grid>

			</Container>
		</>

	);
};
export default Home;