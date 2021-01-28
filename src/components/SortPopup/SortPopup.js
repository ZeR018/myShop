import styles from './SortPopup.module.css';
import { useEffect, useRef } from 'react';

const SortPopup = (props) => {
	const sortRef = useRef();

	const handleOutsideClick = (e) => {
		if (!e.path.includes(sortRef.current)) {
			props.setVisiblePopup(false);
		}
	};

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<div ref={sortRef} className={styles.SortPopup}>
			{console.log(sortRef.current)}
			<div className={styles.by}>Алфавиту</div>
			<div className={styles.by}>Цене</div>
			<div className={styles.by}>Популярности</div>
		</div>
	);
};

export default SortPopup;
