export const addProductToCart = (productObj) => ({
	type: 'ADD_PRODUCT_CART',
	payload: productObj,
});

export const clearCart = () => ({
	type: 'CLEAR_CART',
});

export const deleteItemFromCart = (number) => ({
	type: 'DELETE_ITEM_FROM_CART',
	payload: number,
});
