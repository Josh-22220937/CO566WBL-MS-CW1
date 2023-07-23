import React, { useState } from 'react';

const CreateRecipe = ({ ingredients, recipes, addRecipe }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientQuantities, setIngredientQuantities] = useState({});
  const [recipeName, setRecipeName] = useState('');

  const handleIngredientChange = (event) => {
    const { name, value } = event.target;
    setIngredientQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: value,
    }));
  };

  const handleIngredientSelect = (event) => {
    const { name, checked } = event.target;
    setSelectedIngredients((prevIngredients) =>
      checked ? [...prevIngredients, name] : prevIngredients.filter((ingredient) => ingredient !== name)
    );
  };

  const handleRecipeCreate = (event) => {
    event.preventDefault();

    if (recipeName.trim() === '') {
      alert('Please enter a recipe name.');
      return;
    }

    if (selectedIngredients.length === 0) {
      alert('Please select at least one ingredient for the recipe.');
      return;
    }

    // Create the recipe object with the selected ingredients and their quantities
    const newRecipe = {
      name: recipeName,
      ingredients: selectedIngredients.map((ingredient) => ({
        name: ingredient,
        quantity: ingredientQuantities[ingredient] || '',
      })),
    };

    // Save the new recipe to the recipes list using the addRecipe function
    addRecipe(newRecipe);

    // Clear the form fields after creating the recipe
    setRecipeName('');
    setSelectedIngredients([]);
    setIngredientQuantities({});
  };

  return (
    <div className="screen">
    <h1>NutriChef</h1>
      <h2>Create Recipe</h2>
      <form onSubmit={handleRecipeCreate}>
        <label>
          Recipe Name:
          <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
        </label>
        <label>
          Ingredients:
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                <label>
                  <input
                    type="checkbox"
                    name={ingredient.name}
                    checked={selectedIngredients.includes(ingredient.name)}
                    onChange={handleIngredientSelect}
                  />
                  {ingredient.name}
                </label>
                {selectedIngredients.includes(ingredient.name) && (
                  <input
                    type="text"
                    name={ingredient.name}
                    value={ingredientQuantities[ingredient.name] || ''}
                    onChange={handleIngredientChange}
                    placeholder="Quantity (grams)"
                  />
                )}
              </li>
            ))}
          </ul>
        </label>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;