import styles from './Category.module.css';
import Product from '../Product/Product';

const Category = ({ name, products }) => {
	return (
		<div className={styles.Category}>
			<h1>{name}</h1>
			<div className={styles.content}>
				{products.map((item) => (
					<div key={item.id}>
						<Product {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
