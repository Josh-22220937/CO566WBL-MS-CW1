// Import React library, react-router-dom Link, necessary component and styles
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeTable from '../components/RecipeTable';
import '../styles/Home.css'

// Define the Home screen
const Home = ({ recipes, ingredients, removeRecipe }) => {
  return (
    
    <div className="screen">
      <h1>NutriChef</h1>
      <h2>3 Most recent Recipes</h2>
      // Making use of the recipetable component 
      <RecipeTable recipes={recipes} ingredients={ingredients} removeRecipe={removeRecipe} numberOfRecipes={3}/>
      
      <div className="navigation-buttons">
        <Link to="/create-recipe">
          <button>Create Recipe</button>
        </Link>

        <Link to="/create-shopping-list">
          <button>Create Shopping List</button>
        </Link>

        <Link to="/view-all">
          <button>View All Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
