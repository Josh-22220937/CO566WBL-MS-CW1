// Import React library
import React from 'react';

// handle the fact that no functionality is on this scren
const CreateShoppingList = () => {
  const handleScreenClick = () => {
    alert('This feature is not implemented at the moment.');
  };

  // Main return, defines structure of screen
  return (
    <div className="screen" onClick={handleScreenClick}>
    <h1>NutriChef</h1>
      Create Shopping List Screen
    </div>
  );
};

export default CreateShoppingList;
