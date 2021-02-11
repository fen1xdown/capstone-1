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
					{props.searchBoo1 === true
						? searchArray.map((cur, index) => (
							<itemGrid
								cur={cur}
								handleOnClick={props.handleOnClick}
								handleSelectOnChange={props.handleSelectOnChange}
								key={index} />
						))
						: Products.map((cur, index) => (
							<ItemGrid
								cur={cur}
								handleOnClick={props.handleOnClick}
								handleSelectOnChange={props.handleSelectOnChange}
								key={index} />
						))
					}					
				</Grid>

			</Container>
		</>

	);
};
export default Home;