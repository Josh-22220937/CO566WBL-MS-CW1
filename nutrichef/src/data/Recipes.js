// Define the key used to store the recipes in localStorage
const STORAGE_KEY = 'nutrichef_recipes';

// Function to retrieve recipes from localStorage
const getStoredRecipes = () => {
  const storedRecipes = localStorage.getItem(STORAGE_KEY);
  // Return parsed recipes if they exist; otherwise, return an empty array
  return storedRecipes ? JSON.parse(storedRecipes) : [];
};

// Function to add a new recipe to localStorage
const addRecipe = (newRecipe) => {
  const storedRecipes = getStoredRecipes();
  // append new recipe
  const updatedRecipes = [...storedRecipes, newRecipe];
  // save back to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
};

// Function to remove a recipe from localStorage by its name
const removeRecipe = (recipeName) => {
    const storedRecipes = getStoredRecipes();
    // filter out the recipe to be removed
    const updatedRecipes = storedRecipes.filter(recipe => recipe.name !== recipeName);
    // save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
  };
  
  export { getStoredRecipes, addRecipe, removeRecipe };
