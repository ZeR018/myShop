import styles from './SortPopup.module.css';
import { useEffect, useRef } from 'react';

const SortPopup = (props) => {
	const sortRef = useRef();

	const handleOutsideClick = (e) => {
		if (!e.path.includes(sortRef.current)) {
			props.setVisiblePopup(false);
		}
		//else никогда не будет, потому что если нажимать не на SortPopup,sortRef===null

		// Неправильный вариант
		// if (sortRef.current !== null) {
		// 	props.setVisiblePopup(false);
		// 	console.log('if');
		// 	console.log(sortRef.current);
		// }
	};

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const click = (e) => {
		console.log(e.target.innerText);
		props.setValue(e.target.innerText);
	};

	return (
		<div className={styles.SortPopup} ref={sortRef}>
			<div className={styles.by} onClick={click}>
				Алфавиту
			</div>
			<div className={styles.by} onClick={click}>
				Цене
			</div>
			<div className={styles.by} onClick={click}>
				Популярности
			</div>
		</div>
	);
};

export default SortPopup;
