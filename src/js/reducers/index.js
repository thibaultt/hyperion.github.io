import {combineReducers} from 'redux';
import TableReducer from './reducer-table';

const allReducers = combineReducers({
    table : TableReducer,
  // can add more reducers ex : reducer-movie (donc nouvelle import )
});

export default allReducers;
