import styles from './SortPopup.module.css';
import { useEffect, useRef, useState } from 'react';
import { setSortBy } from '../../store/actions/filters';
import { useDispatch, useSelector } from 'react-redux';

const SortPopup = ({ items }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const changeVisible = () => setVisiblePopup(!visiblePopup);

	const dispatch = useDispatch();
	const selectedSort = useSelector(({ filters }) => filters.selectedSort);
	const click = (item) => {
		dispatch(setSortBy(item));
	};
	const sortRef = useRef();
	const handleOutsideClick = (e) => {
		if (!e.path.includes(sortRef.current)) {
			setVisiblePopup(false);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);
	return (
		<div ref={sortRef} className={styles.sortBy} onClick={changeVisible}>
			<b className={styles.b}>Сортировать по: </b>
			<b className={styles.b2}>{selectedSort.name}</b>
			{visiblePopup && (
				<div className={styles.SortPopup}>
					{items.map((item) => (
						<div key={item.name} className={styles.by} onClick={() => click(item)}>
							{item.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SortPopup;
