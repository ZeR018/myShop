import { createStore } from 'redux';
import filters from './reducers/filters';

const store = createStore(filters);

export default store;
