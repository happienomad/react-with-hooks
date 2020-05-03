import { createSelector } from 'reselect';
import { MEALS_STATE_SLICE } from '../reducers/meals.reducer';
import { MealsState, MealDescription } from '../../models/meal.model';

const MealsStateSliceSelector = (state: any) => state[MEALS_STATE_SLICE];

export const MealsListByCuisineSelector = (cuisine: string) => createSelector(
    MealsStateSliceSelector,
    (mealsState: MealsState) => mealsState[cuisine] ? mealsState[cuisine].meals : []
);

export const MealDescriptionByIdSelector = (cuisine: string, id: string) => createSelector(
    MealsStateSliceSelector,
    (mealsState: MealsState) => {
        return mealsState[cuisine] ? mealsState[cuisine].descriptions[id] : {} as MealDescription
    }
);