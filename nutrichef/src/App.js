import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import CreateRecipe from './screens/CreateRecipe';
import CreateShoppingList from './screens/CreateShoppingList';
import ViewAll from './screens/ViewAll';
import Ingredients from './data/Ingredients';
import { getStoredRecipes, addRecipe, removeRecipe } from './data/Recipes';
import './styles/App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = getStoredRecipes();
    setRecipes(storedRecipes);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const removeRecipeFromList = (recipeName) => {
    removeRecipe(recipeName); // this will remove the recipe from localStorage
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.name !== recipeName)); // this will remove the recipe from state
  };

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <button className="menu-button" onClick={toggleSidebar}>
          &#9776;
        </button>
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<Home ingredients={Ingredients} recipes={recipes} addRecipe={addRecipe} removeRecipe={removeRecipeFromList}/>}
            />
            <Route
              path="/create-recipe"
              element={<CreateRecipe ingredients={Ingredients} addRecipe={addRecipe} />}
            />
            <Route path="/create-shopping-list" element={<CreateShoppingList />} />
            <Route path="/view-all" element={<ViewAll recipes={recipes} ingredients={Ingredients} removeRecipe={removeRecipeFromList}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App