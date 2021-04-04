import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIurl from '../../config';
import axios from 'axios';
import Grid from '../Container/Grid';
import Card from '../Container/Card';

const TwoStars = () => {
	const [twoStars, setTwoStars] = useState([]);

	useEffect(() => {
		axios(`${APIurl}`)
			.then((res) => setTwoStars(res.data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<div className='stars'>
				<Link to='/restaurants' className='starslink'>
					<h3>All Restaurants</h3>
				</Link>
				<Link to='/onestar' className='starslink'>
					<h3>One Star</h3>
				</Link>
				<Link to='/twostars' className='starslink'>
					<h3>Two Stars</h3>
				</Link>
				<Link to='/threestars' className='starslink'>
					<h3>Three Stars</h3>
				</Link>
			</div>
			<Grid>
				{twoStars.map((restaurant) =>
					restaurant.starNumber === 2 ? (
						<div className='restLinks'>
							<Card>
								<Link
									to={`/restaurants/${restaurant._id}`}
									className='restlinktext'>
									<img
										src={restaurant.restaurantImg}
										alt='Two Stars Michelin Restaurant'
										className='restImg'
									/>
									<p>{restaurant.name}</p>
								</Link>
							</Card>
						</div>
					) : (
						''
					)
				)}
			</Grid>
		</div>
	);
};

export default TwoStars;
