import React from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import APIurl from '../config';
import Form from 'react-bootstrap/Form';

const reviewForm = () => {
	// const initialState = {
	// 	title: '',
	// 	body: '',
	// 	reviewer: '',
	// };
	// const history = useHistory();
	// const [review, setReview] = useState({
	// 	title: '',
	// 	body: '',
	// 	reviewer: '',
	// });

	return (
		<div>
			<Form>
				<Form.Group controlId='username'>
					<Form.Label>reviewer</Form.Label>
					<Form.Control type='text' placeholder='your name' />
				</Form.Group>
				<Form.Group controlId='review scores'>
					<Form.Label>Scores</Form.Label>
					<Form.Control as='select'>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='review message'>
					<Form.Label>Review Content</Form.Label>
					<Form.Control as='textarea' rows={3} />
				</Form.Group>
			</Form>
		</div>
	);
};

export default reviewForm;
