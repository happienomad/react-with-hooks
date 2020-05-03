import { takeEvery, call, put } from 'redux-saga/effects';
import * as CONSTANTS from '../../constants';
import { Action } from '../../models/shared.model';
import { getApiData } from '../../services/api.service';
import { saveMealItemsByCuisine, fetchMealItemsFailure, saveMealDescriptionByCuisine, fetchMealDescriptionFailure } from '../actions';

function* fetchMealsList(action: Action) {
    try {
        const cuisine = action.payload
        const response = yield call(getApiData, `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`);
        const mealItems = response.meals;
        yield put(saveMealItemsByCuisine({ cuisine, mealItems }))
    } catch (e) {
        yield put(fetchMealItemsFailure());
    }

}

function* fetchMealDescription(action: Action) {
    try {
        const { cuisine, id } = action.payload;
        const response = yield call(getApiData, `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const description = response['meals'][0];
        yield put(saveMealDescriptionByCuisine({ cuisine, description }));
    } catch (e) {
        console.log('error:::', e);
        yield put(fetchMealDescriptionFailure());
    }
}

export function* fetchMealActionsWatcher() {
    yield takeEvery(CONSTANTS.FETCH_MEAL_ITEMS_BY_CUISINE, fetchMealsList);
    yield takeEvery(CONSTANTS.FETCH_MEAL_DESCRIPTION_BY_ID, fetchMealDescription);
}