import { Action } from '../../models/shared.model';
import { MealsState, Cuisine } from '../../models/meal.model';
import * as CONSTANTS from '../../constants';


const mealsInitialState: MealsState = {} as MealsState;
const emptyCuisineSlice: Cuisine = { meals: [], descriptions: {} }

export const MEALS_STATE_SLICE = 'MEALS_STATE_SLICE';
export const MealsReducer = (state: MealsState = mealsInitialState, action: Action) => {
    let cuisine;
    switch (action.type) {
        case CONSTANTS.INIT_EMPTY_CUISINE_STATE:
            return Object.assign({}, { ...state }, { [action.payload]: { meals: [], descriptions: {} } });
        case CONSTANTS.SAVE_MEALS_BY_CUISINE:
            cuisine = action.payload.cuisine;
            const cuisineState = Object.assign(emptyCuisineSlice, { ...state[cuisine] }, { meals: action.payload.mealItems })
            return Object.assign({}, { ...state }, { [cuisine]: cuisineState });
        case CONSTANTS.SAVE_MEAL_DESCRIPTION_BY_CUISINE:
            cuisine = action.payload.cuisine;
            const mealId = action.payload.description.idMeal;
            const selectedCuisineSlice = Object.assign(emptyCuisineSlice, { ...state[cuisine] });
            selectedCuisineSlice.descriptions[mealId] = action.payload.description;
            return Object.assign({}, { ...state }, { [cuisine]: selectedCuisineSlice });
        default:
            return state;
    }
}