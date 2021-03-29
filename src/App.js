import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Michelin Starts Finder</h1>
				<Nav />
			</header>
		</div>
	);
}

export default App;
