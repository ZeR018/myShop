import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {
	const { data } = props;
	return (
		<div className={styles.Product}>
			<div className={styles.photo}>
				<img className={styles.photo_img} src={data.photo} alt='photo' />
			</div>
			<div className={styles.info}>
				<div className={styles.cost}>
					<h1 className={styles.h1}>{data.cost} ₽</h1>
				</div>

				<div className={styles.name}>
					<h2 className={styles.h2}>{data.name}</h2>
				</div>
				<div>
					<button className={styles.button}>В корзину</button>
				</div>
				<div className={styles.sizes}>
					<h2 className={styles.h2}>Размеры в наличии:</h2>
					{data.availableSizes.map((size, index) => (
						<b key={`${index}_b`}>{size} </b>
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
