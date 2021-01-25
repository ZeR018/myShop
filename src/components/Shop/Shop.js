import styles from './Shop.module.css';

const Shop = (props) => {
	const { products } = props;
	return (
		<div className={styles.Shop}>
			Shop
			<div className={styles.content}>
				{products.map((item) => (
					<div className={styles.products}>
						<img src={item.photo} />
						<p>{item.name}</p>
						{item.cost}
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
