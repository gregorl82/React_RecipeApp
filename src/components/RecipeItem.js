import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RecipeItem = () => {
    
    return (
        <Card style={{ margin: "1rem", height: "auto"}}>
            <Card.Body>
                <Card.Title>Recipe</Card.Title>
                <Card.Text>
                    This is an example of the RecipeItem component
                </Card.Text>
                <Button>See More</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeItem;