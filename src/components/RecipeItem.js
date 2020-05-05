import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RecipeItem = ({recipe}) => {
    
    return (
        <Card style={{ width: "20rem", margin: "2rem"}}>
            <Card.Body>
                <Card.Img variant="top" src={recipe.strMealThumb} />
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Card.Subtitle>{recipe.strCategory}</Card.Subtitle>
                <Card.Text>
                    This is an example of the RecipeItem component
                </Card.Text>
                <Button>See More</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeItem;