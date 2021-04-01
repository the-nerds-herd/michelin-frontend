import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Update = ({ match }) => {
	console.log(match);
	const history = useHistory();
	const [review, setReview] = useState({
		title: '',
		body: '',
		reviewer: '',
		rating: '',
		restaurantId: `${match.params.id}`,
	});

	const handleUpdate = (event) => {
		event.preventDefault();
		console.log(match.params);
		// const id = 0;
		// axios
		// 	.put(`${APIurl}/reviews/${id}`, review)
		// 	.then(() => {
		// 		history.push('/restaurants/');
		// 	})
		// 	.catch(console.error);
	};
	const handleChange = (event) => {
		setReview({ ...review, [event.target.id]: event.target.value });
	};

	return (
		<div>
			<div>
				<h4>
					Update Review{' '}
					<span style={{ fontStyle: 'italic', color: 'brown' }}>
						{match.params.name}
					</span>
				</h4>
				<Form onSubmit={handleUpdate}>
					<Form.Group controlId='reviewer'>
						<Form.Label>Reviewer</Form.Label>
						<Form.Control
							type='text'
							placeholder='your name'
							onChange={handleChange}
							value={review.reviewer}
						/>
					</Form.Group>
					<Form.Group controlId='title'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type='text'
							placeholder='title of your review'
							onChange={handleChange}
							value={review.title}
						/>
					</Form.Group>
					<Form.Group controlId='rating'>
						<Form.Label>
							Select your rating (bigger number better rating).
						</Form.Label>
						<Form.Control
							as='select'
							onChange={handleChange}
							value={review.rating}>
							<option></option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='body'>
						<Form.Label>Review Content</Form.Label>
						<Form.Control
							as='textarea'
							rows={8}
							placeholder="What's your comment?"
							onChange={handleChange}
							value={review.body}
						/>
					</Form.Group>
					<Button variant='outline-primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Update;
