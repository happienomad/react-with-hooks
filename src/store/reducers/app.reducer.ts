import { AppState, Action } from '../../models/shared.model';
import { SAVE_SELECTED_CUISINE } from '../../constants';
export const APP_STATE_SLICE = 'APP_STATE_SLICE';
export const AppInitialState: AppState = { cuisine: '' };

export const AppReducer = (state: AppState = AppInitialState, action: Action) => {
    switch (action.type) {
        case SAVE_SELECTED_CUISINE:
            return Object.assign({}, { ...state }, { cuisine: action.payload });
        default:
            return state;
    }
}