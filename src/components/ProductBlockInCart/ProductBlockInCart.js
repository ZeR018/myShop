import React from 'react';
import styles from './ProductBlockInCart.module.css';
import PropTypes from 'prop-types';

const ProductBlockInCart = ({ id, photo, cost, name, size }) => {
	return (
		<div className={styles.cartItem_container}>
			<div className={styles.part1}>
				<div className={styles.img}>
					<img src='https://images.wbstatic.net/c252x336/new/15200000/15203053-1.jpg' />
				</div>
				<div className={styles.info}>
					<h2>Name</h2>
					<h3>size</h3>
				</div>
			</div>
			<div className={styles.part2}>
				<div className={styles.quantity_inner}>
					<button className={styles.bt_minus}>
						<svg viewBox='0 0 24 24'>
							<line x1='5' y1='12' x2='19' y2='12'></line>
						</svg>
					</button>
					<input type='text' value='1' size='2' className={styles.quantity} data-max-count='20' />
					<button className={styles.bt_plus}>
						<svg viewBox='0 0 24 24'>
							<line x1='12' y1='5' x2='12' y2='19'></line>
							<line x1='5' y1='12' x2='19' y2='12'></line>
						</svg>
					</button>
				</div>
				<div className={styles.price}>
					<span>770 ₽</span>
				</div>
				<div className={styles.cl_btn}></div>
			</div>
		</div>
	);
};

// ProductBlockInCart.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	cost: PropTypes.number.isRequired,
// 	photo: PropTypes.string.isRequired,
// 	availableSizes: PropTypes.array,
// 	onClickAddProduct: PropTypes.func,
// };

export default ProductBlockInCart;