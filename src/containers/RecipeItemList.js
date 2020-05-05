import React from 'react';
import RecipeItem from '../components/RecipeItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeItemList = () => {
    return (
        <Container fluid>
            <h1>This is the RecipeItemList component</h1>
            <Row>
                <Col><RecipeItem /></Col>
                <Col><RecipeItem /></Col>
                <Col><RecipeItem /></Col>
            </Row>
        </Container>
    )
}

export default RecipeItemList;