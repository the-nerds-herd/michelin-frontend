import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../../config';

function LoginPage() {
	const initialState = { name: '', password: '' };
	const [formState, setFormState] = useState(initialState);
	const [user, setUser] = useState('');
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/users/signin`, formState)
			.then(({ data }) => {
				localStorage.setItem('token', data.token);
				localStorage.setItem('expiration', Date.now() + 3600);
			})
			.then(() => {
				setUser(formState.name);
				localStorage.setItem('username', formState.name);
				setFormState(initialState);
			})
			.catch(() => setError(true));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Username:</label>
				<input
					id='name'
					type='text'
					onChange={handleChange}
					value={formState.name}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					id='password'
					type='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<button type='submit'>Login</button>
			</form>
			{user ? (
				<p>Welcome back {user}</p>
			) : (
				<Link to={'/user/signup'}>
					<h6>Haven't have an account yet? Sign up today.</h6>
				</Link>
			)}
			{error ? <p>The provided username or password is incorrect</p> : ''}
		</div>
	);
}
export default LoginPage;
