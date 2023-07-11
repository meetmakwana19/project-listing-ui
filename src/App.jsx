import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import CompanyListings from './modules/CompanyListings';
import DevelopersListing from './modules/DevelopersListing';
import ProjectListings from './modules/ProjectListings';
import Footer from './components/Footer';
import CompanyMain from './modules/CompanyMain';
import ProjectMain from './modules/ProjectMain';
import DeveloperMain from './modules/DeveloperMain';
import Login from './modules/Login';
import Register from './modules/Register';

function App() {
	return (
		<>
			<Header />
			<div className='pt-20'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/projects'
						element={<ProjectListings />}
					/>
					<Route
						path='/projects/:id'
						element={<ProjectMain />}
					/>
					<Route
						path='/companies'
						element={<CompanyListings />}
					/>
					<Route
						path='/companies/:name'
						element={<CompanyMain />}
					/>
					<Route
						path='/developers'
						element={<DevelopersListing />}
					/>
					<Route
						path='/developers/:name'
						element={<DeveloperMain />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
