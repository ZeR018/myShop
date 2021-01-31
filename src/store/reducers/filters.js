const initialState = {
	selectedCategory: 'ALL',
	selectedSort: { name: 'Названию', type: 0 },
	selectedSize: undefined,
	categories: [
		{ name: 'Все', type: 'ALL' },
		{ name: 'Куртки', type: 'JACKET' },
		{ name: 'Шапки', type: 'HAT' },
		{ name: 'Шарфы', type: 'SCARF' },
		{ name: 'Свитеры', type: 'SWEATER' },
	],
	sortBy: [
		{ name: 'Названию', type: 0 },
		{ name: 'Цене', type: 1 },
		{ name: 'Популярности', type: 2 },
	],
};
// sortBy: alphabet, popular, price

const filters = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				selectedSort: action.payload,
			};

		case 'SET_CATEGORY':
			return {
				...state,
				selectedCategory: action.payload,
			};
		default:
			return state;
	}
};

export default filters;
