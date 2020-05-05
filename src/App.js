import React from 'react';
import './App.css';
import RecipeItemList from './containers/RecipeItemList';

import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>This is the App component</h1>
      </Jumbotron>
      <RecipeItemList />
    </div>
  );
}

export default App;
