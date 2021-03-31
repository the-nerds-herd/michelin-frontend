// import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home'
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantID from './components/RestaurantID/RestaurantID';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Home />

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
				<Route path='/restaurants' exact component={Restaurants} />
				<Route path='/restaurants/:id' component={RestaurantID} />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
