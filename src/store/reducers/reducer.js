const ACTION_1 = 'ACTION_1';
const ACTION_2 = 'ACTION_2';

function reducer(state, action) {
	switch (action.type) {
		case ACTION_1:
			return { value: action.value_1 };
		case ACTION_2:
			return { value: action.value_2 };

		default:
			return state;
	}
}

export default reducer;
