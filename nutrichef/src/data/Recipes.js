const STORAGE_KEY = 'nutrichef_recipes';

const getStoredRecipes = () => {
  const storedRecipes = localStorage.getItem(STORAGE_KEY);
  return storedRecipes ? JSON.parse(storedRecipes) : [];
};

const addRecipe = (newRecipe) => {
  const storedRecipes = getStoredRecipes();
  const updatedRecipes = [...storedRecipes, newRecipe];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
};

const removeRecipe = (recipeName) => {
    const storedRecipes = getStoredRecipes();
    const updatedRecipes = storedRecipes.filter(recipe => recipe.name !== recipeName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
  };
  
  export { getStoredRecipes, addRecipe, removeRecipe };