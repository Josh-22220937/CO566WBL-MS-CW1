import React from 'react';

const CreateShoppingList = () => {
  const handleScreenClick = () => {
    alert('This feature is not implemented at the moment.');
  };

  return (
    <div className="screen" onClick={handleScreenClick}>
    <h1>NutriChef</h1>
      Create Shopping List Screen
    </div>
  );
};

export default CreateShoppingList;