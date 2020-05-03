export type MealItem = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export type MealDescription = {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
}

export type Cuisine = {
    meals: MealItem[];
    descriptions: {
        [mealId: string]: MealDescription
    }
}

export type MealsState = {
    [id: string]: Cuisine
}

export type MealsListProps = {
    cuisine: string;
}

export type MealItemProps = {
    cuisine: string;
    mealItem: MealItem
}