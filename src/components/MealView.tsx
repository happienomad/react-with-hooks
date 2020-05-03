import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealDescriptionById } from '../store/actions';
import { MealDescription as MealDescriptionType } from '../models/meal.model';
import { MealDescriptionByIdSelector } from '../store/selectors/meals.selector';

const MealView: React.FC = (props: any) => {

    const dispatch = useDispatch();
    const { cuisine, id } = props.match.params;
    let MealDescription: MealDescriptionType = useSelector(MealDescriptionByIdSelector(cuisine, id))

    useEffect(() => {
        dispatch(fetchMealDescriptionById({ cuisine, id }));
    }, []);

    return (
        <div className="meal-desc">
            <h1>{MealDescription?.strMeal}</h1>
            <div className="flex row">
                <div>
                    <img src={MealDescription?.strMealThumb} />
                </div>
                <div className="desc">
                    <p>{MealDescription?.strInstructions}</p>
                    <div>
                        <h4>Tags:</h4>
                        <p>{MealDescription?.strTags}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealView;