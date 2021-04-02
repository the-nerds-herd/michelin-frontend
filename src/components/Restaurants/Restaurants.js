import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import Grid from '../Container/Grid';
import Card from '../Container/Card';

const Restaurants = () => {
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
						<Card>
							<Link to={`/restaurants/${rest._id}`} className='restlinktext'>
								<img
									src={rest.restaurantImg}
									alt='restaurant'
									width='100%'
									className='restImg'
									/>
									<p>{rest.name}</p>
							</Link>
						</Card>
					</div>
				))}
			</Grid>
		</div>
	);
};

export default Restaurants;
