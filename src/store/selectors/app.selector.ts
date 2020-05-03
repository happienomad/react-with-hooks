import { APP_STATE_SLICE } from '../reducers/app.reducer';
import { createSelector } from 'reselect';
import { AppState } from '../../models/shared.model';

const AppStateSliceSelector = (state: any) => state[APP_STATE_SLICE];

export const ActiveCuisineSelector = createSelector(
    AppStateSliceSelector,
    (state: AppState) => state ? state.cuisine : ''
);