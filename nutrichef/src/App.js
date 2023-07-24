// Import necessary modules from React and react-router-dom
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the components and screens
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import CreateRecipe from './screens/CreateRecipe';
import CreateShoppingList from './screens/CreateShoppingList';
import ViewAll from './screens/ViewAll';

// Import data
import Ingredients from './data/Ingredients';
import { getStoredRecipes, addRecipe, removeRecipe } from './data/Recipes';

// Importing styles
import './styles/App.css';

function App() {
  // State hooks for managing sidebar visibility and recipes list
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);

  // Load stored recipes on component mount using useEffect
  useEffect(() => {
    const storedRecipes = getStoredRecipes();
    setRecipes(storedRecipes);
  }, []);

  // Handlers for opening and closing the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Handler for removing a recipe from the list
  const removeRecipeFromList = (recipeName) => {
    removeRecipe(recipeName); 
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.name !== recipeName));
  };

  // Main return, which defines the structure of the app and routing
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
