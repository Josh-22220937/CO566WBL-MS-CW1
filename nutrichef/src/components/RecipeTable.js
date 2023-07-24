// Import react library 
import React from 'react';

// RecipeTable component that displays a table of recipes
const RecipeTable = ({ recipes, ingredients, removeRecipe, numberOfRecipes }) => {

    // Function to find an ingredient object in the list
    const findIngredientByName = (name) => {
      return ingredients.find((ingredient) => ingredient.name === name);
    };
    // Function to calculate total nutrition value of a recipe for a specific nutrition type 
    const calculateTotalNutritionValue = (recipeIngredients, nutritionType) => {
      let totalNutritionValue = 0;
  
      for (let ingredient of recipeIngredients) {
        const selectedIngredient = findIngredientByName(ingredient.name);
        const quantityInGrams = parseFloat(ingredient.quantity);
        const nutritionValuePerGram = selectedIngredient[nutritionType] / 100;
        const totalNutritionForThisIngredient = nutritionValuePerGram * quantityInGrams;
        totalNutritionValue += totalNutritionForThisIngredient;
      }
  
      return totalNutritionValue.toFixed(2); // Round to 2 decimal places
    };
  
    // If numberOfRecipes is provided, show only that many of the most recent recipes. Otherwise, show all recipes.
    const recipesToDisplay = numberOfRecipes 
      ? recipes.slice(Math.max(0, recipes.length - numberOfRecipes)) 
      : recipes;

    // main return of the component, defining structure of the component 
    return (
      <table>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Total Calories</th>
            <th>Total Fat</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipesToDisplay.map((recipe) => (
            <tr key={recipe.name}>
              <td>{recipe.name}</td>
              <td>{calculateTotalNutritionValue(recipe.ingredients, 'calories')}</td>
              <td>{calculateTotalNutritionValue(recipe.ingredients, 'fat')}</td>
              <td>
                <button onClick={() => removeRecipe(recipe.name)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default RecipeTable;
