import React from 'react';
import { Link } from 'react-router-dom';
import { MealItemProps } from '../models/meal.model';

const MealListItem: React.FC<MealItemProps> = (props: MealItemProps) => {
    return (
        <div className="meal-item">
            <Link to={`/description/${props.cuisine}/${props.mealItem.idMeal}`}>
                <img src={props.mealItem.strMealThumb} />
                <p className="title">{props.mealItem.strMeal}</p>
            </Link>
        </div>
    )
}

export default MealListItem