import * as CONSTANTS from '../../constants';
import { Action } from '../../models/shared.model';
import { MealItem, MealDescription } from '../../models/meal.model';

type MealItemsPayload = {
    cuisine: string;
    mealItems: MealItem[];
}

type SaveMealDescriptionPayload = {
    cuisine: string;
    description: MealDescription
}

type FetchMealDescriptionPayload = {
    cuisine: string;
    id: string;
}

export const saveSelectedCuisine = (payload: string): Action => ({
    type: CONSTANTS.SAVE_SELECTED_CUISINE,
    payload
});

export const initEmptyCuisineState = (payload: string): Action => ({
    type: CONSTANTS.INIT_EMPTY_CUISINE_STATE,
    payload
});

export const fetchMealItemsByCuisine = (payload: string): Action => ({
    type: CONSTANTS.FETCH_MEAL_ITEMS_BY_CUISINE,
    payload
});

export const fetchMealItemsFailure = (): Action => ({
    type: CONSTANTS.FETCH_MEAL_ITEMS_FAILED
});

export const fetchMealDescriptionById = (payload: FetchMealDescriptionPayload): Action => ({
    type: CONSTANTS.FETCH_MEAL_DESCRIPTION_BY_ID,
    payload
});

export const saveMealItemsByCuisine = (payload: MealItemsPayload): Action => ({
    type: CONSTANTS.SAVE_MEALS_BY_CUISINE,
    payload
});

export const saveMealDescriptionByCuisine = (payload: SaveMealDescriptionPayload): Action => ({
    type: CONSTANTS.SAVE_MEAL_DESCRIPTION_BY_CUISINE,
    payload
});

export const fetchMealDescriptionFailure = (): Action => ({
    type: CONSTANTS.FETCH_MEAL_DESCRIPTION_FAILED
})