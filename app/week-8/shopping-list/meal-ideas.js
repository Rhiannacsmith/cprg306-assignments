"use client"

import { useEffect, useState } from "react"

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient);
    const data = await response.json();
    return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeal] = useState([])

    const loadMealIdeas = async() => {
        const response = await fetchMealIdeas(ingredient)
        setMeal(response);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    
    return (
        <div>
            <ul>
                {meals.map((meal) => (                
                    <li key={meal.idMeal}>
                        <div className="m-4 p-3 bg-blue-500 rounded max-w-sm" >
                            <h2 className="font-bold text-blue-200 text-l">{meal.strMeal}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};