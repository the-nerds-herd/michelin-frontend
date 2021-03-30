import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Restaurants from './components/Restaurants/Restaurants';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Michelin Starts Finder</h1>
				<Nav />
			</header>
			<main>
				<Route path='/' component={Restaurants} />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
