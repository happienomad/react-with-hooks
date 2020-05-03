import { combineReducers } from 'redux';
import { MealsReducer } from './meals.reducer';
import { MEALS_STATE_SLICE } from '../reducers/meals.reducer';
import { APP_STATE_SLICE, AppReducer } from './app.reducer';

export default combineReducers({
    [APP_STATE_SLICE]: AppReducer,
    [MEALS_STATE_SLICE]: MealsReducer
});