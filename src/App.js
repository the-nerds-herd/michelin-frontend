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
			<header className='App-header'></header>
			<Container fluid>
				<Router>
					<Switch>
						<main>
							<Route path='/' exact component={Home} />
							<Route path='/restaurants' exact component={Restaurants} />
							<Route path='/restaurants/:id' component={RestaurantID} />
							<Route path='/restaurants/add-review' component={ReviewForm} />
						</main>
						<footer></footer>
					</Switch>
				</Router>
			</Container>
		</div>
	);
}

export default App;
