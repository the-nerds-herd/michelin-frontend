// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantID from './components/RestaurantID/RestaurantID';
import ReviewForm from './components/ReviewForm/ReviewForm';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>
					<img
						src='https://www.nicepng.com/png/full/81-812831_michelin-star-jpg.png'
						alt='stars'
						width='7%'
					/>
					Michelin Starts Finder
				</h1>
				<Nav />
			</header>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/restaurants' exact component={Restaurants} />
				<Route path='/restaurants/:id' exact component={RestaurantID} />
				<Route
					path='/restaurants/:id/:name/add-review'
					component={ReviewForm}
				/>
			</main>
			<footer></footer>

		</div>
	);
}

export default App;
