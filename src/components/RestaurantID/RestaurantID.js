import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import './RestaurantID.css';

const RestaurantID = ({ match }) => {
	let history = useHistory();
	const [restaurant, setRestaurant] = useState('');

	useEffect(() => {
		const id = match.params.id;
		axios(`${APIurl}/${id}`)
			.then((res) => setRestaurant(res.data))
			.catch(console.error);
	}, [match.params.id]);

	if (!restaurant) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>{restaurant.name}</h1>
			<div>
				{restaurant.starNumber === 3 && (
					<div>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
							alt='stars'
							width='3%'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
							alt='stars'
							width='3%'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
							alt='stars'
							width='3%'
						/>
					</div>
				)}

				{restaurant.starNumber === 2 && (
					<div>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
							alt='stars'
							width='3%'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
							alt='stars'
							width='3%'
						/>
					</div>
				)}

				{restaurant.starNumber === 1 && (
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MichelinStar.svg/1200px-MichelinStar.svg.png'
						alt='stars'
						width='3%'
					/>
				)}
			</div>
			{/* <p>Start(s) Number: {restaurant.starNumber}</p> */}
			<p>Introcution (from Michelin Guide)</p>
			<p>{restaurant.introduction}</p>
			<a href={restaurant.website}>{restaurant.website}</a>
			<p>Opening Hours: {restaurant.openingHours}</p>
			<p>
				<a href={restaurant.menue}>Menue</a>
			</p>
			<p>Phone: {restaurant.Phone}</p>
			<p>Address: {restaurant.address}</p>
			<div className='restPics'>
				<img src={restaurant.restaurantImg} alt='restaurant picture' />
				<img src={restaurant.dishImgOne} alt='dish picture one' />
				<img src={restaurant.dishImgOne} alt='dish picture two' />
			</div>
		</div>
	);
};

export default RestaurantID;
