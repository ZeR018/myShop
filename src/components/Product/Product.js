import React from 'react';
import styles from './Product.module.css';
import PropTypes from 'prop-types';

const Product = ({ photo, cost, name, availableSizes }) => {
	return (
		<div className={styles.Product}>
			<div className={styles.photo}>
				<img className={styles.photo_img} src={photo} alt='photo' />
			</div>
			<div className={styles.info}>
				<div className={styles.cost}>
					<h1 className={styles.h1}>{cost} ₽</h1>
				</div>

				<div className={styles.name}>
					<h2 className={styles.h2}>{name}</h2>
				</div>
				<div>
					<button className={styles.button}>В корзину</button>
				</div>
				<div className={styles.sizes}>
					<h2 className={styles.h2}>Размеры в наличии:</h2>
					{availableSizes.map((size, index) => (
						<b key={`${index}_b`}> {size} </b>
					))}
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	name: PropTypes.string.isRequired,
	cost: PropTypes.number.isRequired,
	photo: PropTypes.string.isRequired,
	availableSizes: PropTypes.array,
};

export default Product;
