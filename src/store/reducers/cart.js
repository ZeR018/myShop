//Переделать запись items
// Массив, в котором только id и размерб после чего генерировать объекты в Cart

const initialState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT_CART':
			return {
				...state,
				items: [...state.items].concat(action.payload),
				totalCount: state.totalCount + 1,
				totalPrice: state.totalPrice + action.payload.cost,
			};
		case 'CLEAR_CART':
			return {
				items: [],
				totalPrice: 0,
				totalCount: 0,
			};
		default:
			return state;
	}
};

export default cart;

// v1
// const initialState = {
// 	items: {},
// 	totalPrice: 0,
// 	totalCount: 0,
// };

// const cart = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'ADD_PRODUCT_CART':
// 			const newItems = {
// 				...state.items,
// 				[action.payload.id]: !state.items[action.payload.id]
// 					? [action.payload]
// 					: [...state.items[action.payload.id], action.payload],
// 			};
// 			const allProducts = [].concat.apply([], Object.values(newItems));
// 			return {
// 				...state,
// 				items: newItems,
// 				totalCount: allProducts.length,
// 				totalPrice: allProducts.reduce((sum, obj) => obj.cost + sum, 0),
// 			};
// 		case 'CLEAR_CART':
// 			return {
// 				items: {},
// 				totalPrice: 0,
// 				totalCount: 0,
// 			};
// 		default:
// 			return state;
// 	}
// };
