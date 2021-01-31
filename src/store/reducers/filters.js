const initialState = {
	category: 'ALL',
	sortBy: { name: 'Названию', type: 0 },
	size: 40,
};
// sortBy: alphabet, popular, price

const filters = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload,
			};

		case 'SET_CATEGORY':
			return {
				...state,
				category: action.payload,
			};
		default:
			return state;
	}
};

export default filters;