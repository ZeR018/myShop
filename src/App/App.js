import styles from './App.module.css';
import Header from '../components/Header';
import Shop from '../pages/Shop';
import { connect } from 'react-redux';
import Cart from '../pages/Cart';
import Footer from '../components/Footer';
//import axios from 'axios';
import setProducts from '../store/actions/products';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// http://localhost:3000/db.json
//const dbLink = 'http://localhost:3000/db.json';

class App extends React.Component {
	// componentDidMount() {
	// 	axios.get('http://localhost:3000/db.json').then(({ data }) => {
	// 		console.log(data);
	// 	});
	// }

	render() {
		return (
			<div className={styles.App}>
				<Header />

				<div>
					<Switch>
						<Route path='/shop' component={Shop} />
						<Route path='/cart' component={Cart} />
						<Redirect from='/' to='/shop/all' />
					</Switch>
				</div>

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products.items,
	};
};

const mapDispatchToProps = {
	setProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
