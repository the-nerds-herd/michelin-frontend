import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import Update from './Update';
import './RestaurantID.css';

const RestaurantID = ({ match }) => {
	const [restaurant, setRestaurant] = useState({});
	const [update, setUpdate] = useState(false);

	const id = match.params.id;
	const getData = () => {
		axios(`${APIurl}/${id}`)
			.then((res) => {
				setRestaurant(res.data);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getData();
	}, [match.params.id]);

	const handleDelete = (event) => {
		event.preventDefault();
		const id = event.target.attributes.class.nodeValue;
		axios
			.delete(`${APIurl}/reviews/${id}`)
			.then(() => {
				getData();
			})
			.catch(console.error);
	};

	const updating = () => {
		!update ? setUpdate(true) : setUpdate(false);
		console.log(update);
	};

	if (!restaurant) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='restContainer'>
			<div className='restInform'>
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
				<div className='restText'>
					{/* <p>Start(s) Number: {restaurant.starNumber}</p> */}
					<p>Intrducution (from Michelin Guide)</p>
					<p>{restaurant.introduction}</p>
					<a href={restaurant.website}>{restaurant.website}</a>
					<p>Opening Hours: {restaurant.openingHours}</p>
					<p>
						<a href={restaurant.menue}>Menu</a>
					</p>
					<p>Phone: {restaurant.Phone}</p>
					<p>Address: {restaurant.address}</p>
					<div className='restPics'>
						<img src={restaurant.restaurantImg} alt='restaurant' />
						<img src={restaurant.dishImgOne} alt='dish two' />
					</div>
				</div>
			</div>
			<div className='reviews'>
				<div className='reviewsImg'>
					<img src={restaurant.dishImgTwo} alt='dish one' />
				</div>
				<div className='reviewsContainer'>
					<div className='reviewForm'>
						<h3>Reviews</h3>
						<Link
							to={`/restaurants/${restaurant._id}/${restaurant.name}/add-review`}
							className='reviewlink'>
							<p>Write A Review</p>
						</Link>
					</div>
					<div className='reviewsMessages'>
						{restaurant.reviews && restaurant.reviews.length ? (
							restaurant.reviews.map((review) => (
								<div className='reviewInformation'>
									<p>Review ID:{review._id}</p>
									<p>Reviewer: {review.reviewer}</p>
									<p>Rating: {review.rating}</p>
									<p>Review Title: {review.title}</p>
									<p>Review Content: {review.body}</p>
									<p>Review Updated at: {review.updatedAt.slice(0, 10)}</p>
									<button onClick={handleDelete} className={review._id}>
										Delete
									</button>
									<button onClick={updating} className={review._id}>
										Update
									</button>
								</div>
							))
						) : (
							<div style={{ marginLeft: '1rem' }}>No Review yet.</div>
						)}
						{update ? <Update match={match} /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantID;
