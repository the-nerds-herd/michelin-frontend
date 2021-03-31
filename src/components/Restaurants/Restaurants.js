import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import Grid from '../Grid';
import './Restaurants.css';

const Shows = () => {
	const [restaurants, setRestaurants] = useState();

	useEffect(() => {
		axios(`${APIurl}`)
			.then((res) => setRestaurants(res.data))
			.catch(console.error);
	}, []);

	if (!restaurants) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<Grid gap='1rem'>
				{restaurants.map((rest) => (
					<div className='restLinks'>
						<Link to={`/restaurants/${rest._id}`} className='restlinktext'>
							<p>{rest.name}</p>
							<img
								src={rest.restaurantImg}
								alt='restaurant picture'
								width='100%'
								className='restImg'
							/>
						</Link>
					</div>
				))}
			</Grid>
		</div>
	);
};

export default Shows;
