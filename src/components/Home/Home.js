import React from 'react';
import styles from './Home.module.css';
import Shop from '../Shop';

const Home = (props) => {
	const { products } = props;
	return (
		<div className={styles.Home}>
			<Shop products={products} />
		</div>
	);
};

export default Home;
