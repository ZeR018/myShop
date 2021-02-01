import React from 'react';
import styles from './ProductBlock.module.css';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '400px',
		height: '250px',
	},
};

const ProductBlock = ({ id, photo, cost, name, availableSizes, onClickAddProduct }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	let selectedSize = undefined;

	function closeModal() {
		setIsOpen(false);
	}

	const closeModalWithSelectedSize = (e) => {
		onClickAddProduct({ selectedSize: e.target.innerText, id, photo, cost, name });
		setIsOpen(false);
	};
	return (
		<div className={styles.Product}>
			<div className={styles.photo}>
				<img className={styles.photo_img} src={photo} alt='' />
			</div>
			<div className={styles.info}>
				<div className={styles.cost}>
					<h1 className={styles.h1}>{cost} ₽</h1>
				</div>

				<div className={styles.name}>
					<h2 className={styles.h2}>{name}</h2>
				</div>
				<div>
					<button
						onClick={() => {
							if (!selectedSize) {
								setIsOpen(true);
							} else {
								onClickAddProduct({ selectedSize, id, photo, cost, name });
								selectedSize = undefined;
							}
						}}
						className={styles.button}
					>
						В корзину
					</button>
					<Modal
						ariaHideApp={false}
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel='Example Modal'
					>
						<div className={styles.cl_btn_wrapper}>
							<div onClick={closeModal} className={styles.cl_btn}></div>
						</div>
						<h2>Выберите размер</h2>
						<div className={styles.modal}>
							{availableSizes.map((item) => (
								<b
									onClick={closeModalWithSelectedSize}
									key={`modal_size_${item}`}
									className={styles.modal_size}
								>
									{item}
								</b>
							))}
						</div>
					</Modal>
				</div>
				<div className={styles.sizes}>
					<h2 className={styles.h2}>Размеры в наличии:</h2>
					{availableSizes.map((size, index) => (
						<b
							onClick={(e) => (selectedSize = e.target.outerText)}
							key={`${index}_b`}
							className={styles.sizesSelected}
						>
							{size}
						</b>
					))}
				</div>
			</div>
		</div>
	);
};

ProductBlock.propTypes = {
	name: PropTypes.string.isRequired,
	cost: PropTypes.number.isRequired,
	photo: PropTypes.string.isRequired,
	availableSizes: PropTypes.array,
	onClickAddProduct: PropTypes.func,
};

export default ProductBlock;
