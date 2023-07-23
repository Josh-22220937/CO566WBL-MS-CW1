import React from 'react';
const RecipeTable = ({ recipes, ingredients, removeRecipe, numberOfRecipes }) => {

    const findIngredientByName = (name) => {
      return ingredients.find((ingredient) => ingredient.name === name);
    };
  
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