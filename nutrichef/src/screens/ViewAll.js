// Import React library and necessary component
import React from 'react';
import RecipeTable from '../components/RecipeTable';

// Define the ViewAll screen
const ViewAll = ({ recipes, ingredients, removeRecipe }) => {
    // Main return, which defines the structure of the app
    return (
      <div className="screen">
        <h1>NutriChef</h1>
        <h2>View All Recipes</h2>
         // Making use of the recipetable component
        <RecipeTable recipes={recipes} ingredients={ingredients} removeRecipe={removeRecipe}/>
      </div>
    );
  };
  
  export default ViewAll;
