import React, { useState } from "react";

const AddRecipeForm = () => {
  
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!recipeTitle || !ingredients || !steps) {
      alert("All fields must be filled!");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      alert("Please include at least two ingredients!");
      return;
    }

    const formData = { recipeTitle, ingredients, steps };
    console.log("Submitted Data:", formData);

    // Reset fields after successful submission
    setRecipeTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto p-4 md:p-6 bg-gray-100 rounded shadow"
    >
      <div>
        <label htmlFor="recipeTitle" className="block text-lg font-medium text-gray-700">
          Recipe Title:
        </label>
        <input
          type="text"
          id="recipeTitle"
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
          className="border rounded w-full p-2 md:text-base text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">
          Ingredients (comma separated):
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border rounded w-full p-2 md:text-base text-sm"
          rows="4"
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="steps" className="block text-lg font-medium text-gray-700">
          Preparation Steps:
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border rounded w-full p-2 md:text-base text-sm"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition md:w-auto w-full"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

