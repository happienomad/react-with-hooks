import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMealItemsByCuisine, saveSelectedCuisine } from '../store/actions';
import { MealsListByCuisineSelector } from '../store/selectors/meals.selector';
import { ActiveCuisineSelector } from '../store/selectors/app.selector';
import { MealItem, MealsListProps } from '../models/meal.model';

import MealListItem from './MealListItem';

const MealsList: React.FC<MealsListProps> = (props: MealsListProps) => {

    const dispatch = useDispatch();

    const updateCuisine = (evt: FormEvent<HTMLSelectElement>) => {
        const cuisine = evt.currentTarget.value
        dispatch(saveSelectedCuisine(cuisine));
        dispatch(fetchMealItemsByCuisine(cuisine));
    }

    let selectedCuisine: string = useSelector(ActiveCuisineSelector);
    let mealsList: MealItem[] = useSelector(MealsListByCuisineSelector(selectedCuisine));
    const cuisines: string[] = ['Canadian', 'Indian', 'Italian', 'French'];
    const isSelected = (cuisine: string): boolean => selectedCuisine === cuisine;

    return (
        <>
            <div>
                <label htmlFor="business">Select Cuisine:
                <select className="form-control" id="business" name="business" onChange={updateCuisine}>
                        <option value="">Select</option>
                        {cuisines.map(cuisine => <option selected={isSelected(cuisine)} value={cuisine}>{cuisine}</option>)}
                    </select>
                </label>
            </div>
            <div className="meal-list flex row">
                {mealsList.map((meal: MealItem) => <MealListItem key={meal.idMeal} cuisine={selectedCuisine} mealItem={meal} />)}
            </div>
        </>
    )
}

export default MealsList;