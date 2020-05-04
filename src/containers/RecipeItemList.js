import React from 'react';
import RecipeItem from '../components/RecipeItem';

const RecipeItemList = () => {
    return (
        <div>
            <h1>This is the RecipeItemList component</h1>
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
        </div>
    )
}

export default RecipeItemList;