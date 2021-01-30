import styles from './Category.module.css';
import Product from '../Product/Product';
import { useState } from 'react';
import SortPopup from '../SortPopup';

const Category = ({ name, products }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const [value, setValue] = useState('Популярности');

	const changeVisible = () => setVisiblePopup(!visiblePopup);
	return (
		<div className={styles.Category}>
			<div className={styles.category_header}>
				<h1>{name}</h1>
				<div className={styles.sortBy} onClick={changeVisible}>
					<b className={styles.b}>Сортировать по: </b>
					<b className={styles.b2}>{value}</b>
					{visiblePopup && <SortPopup setVisiblePopup={setVisiblePopup} setValue={setValue} />}
				</div>
			</div>
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
