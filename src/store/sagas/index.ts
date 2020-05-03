import { all } from 'redux-saga/effects';
import { fetchMealActionsWatcher } from './fetchMeals.sagas';

export default function* rootSaga() {
    yield all([
        fetchMealActionsWatcher()
    ]);
}