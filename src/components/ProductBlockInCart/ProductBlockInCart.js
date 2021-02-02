import React from 'react';
import styles from './ProductBlockInCart.module.css';
import PropTypes from 'prop-types';

const ProductBlockInCart = ({ photo, cost, name, selectedSize, number, deleteItem }) => {
	return (
		<div className={styles.cartItem_container}>
			<div className={styles.part1}>
				<div className={styles.img}>
					<img src={photo} alt={name} />
				</div>
				<div className={styles.info}>
					<h2>{name}</h2>
					<h3>Размер {selectedSize}</h3>
				</div>
			</div>
			<div className={styles.part2}>
				<div className={styles.price}>
					<span>{cost} ₽</span>
				</div>
				<div className={styles.cl_btn} onClick={() => deleteItem(number)}></div>
			</div>
		</div>
	);
};

ProductBlockInCart.propTypes = {
	name: PropTypes.string.isRequired,
	cost: PropTypes.number.isRequired,
	photo: PropTypes.string.isRequired,
	size: PropTypes.array,
};

export default ProductBlockInCart;
