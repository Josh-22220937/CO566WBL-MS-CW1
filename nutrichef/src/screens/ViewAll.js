import React from 'react';
import RecipeTable from '../components/RecipeTable';

const ViewAll = ({ recipes, ingredients, removeRecipe }) => {
    return (
      <div className="screen">
        <h1>NutriChef</h1>
        <h2>View All Recipes</h2>
        <RecipeTable recipes={recipes} ingredients={ingredients} removeRecipe={removeRecipe}/>
      </div>
    );
  };
  
  export default ViewAll;