import styles from './App.module.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const dbLink = 'http://localhost:3000/db.json';

const App = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		axios.get(dbLink).then(({ data }) => setProduct(data.products));
	}, []);
	return (
		<div className={styles.App}>
			<Header />

			<div>
				<Route path='/home' render={() => <Home products={products} />} />
				<Route path='/cart' render={() => <Cart />} />
				<Redirect from='/' to='/home/all' />
			</div>

			<Footer />
		</div>
	);
};

export default App;
