import styles from './Shop.module.css';
import Product from '../Product/Product';

const Shop = (props) => {
	const { products } = props;
	return (
		<div className={styles.Shop}>
			Shop
			<div className={styles.content}>
				{products.map((item) => (
					<div key={item.id}>
						<Product data={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
