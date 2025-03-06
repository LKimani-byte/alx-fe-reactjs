import { create } from "zustand";
const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [], // Added recommendations array
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      ),
    })),
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
      // Optionally regenerate recommendations when favorites change
      recommendations: state.recipes
        .filter((r) => !state.favorites.includes(r.id) && r.id !== recipeId)
        .slice(0, 3),
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
      // Optionally regenerate recommendations when favorites change
      recommendations: state.recipes
        .filter((r) => !state.favorites.includes(r.id))
        .slice(0, 3),
    })),
  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes
        .filter((recipe) => !state.favorites.includes(recipe.id)) // Exclude favorites
        .sort(() => Math.random() - 0.5) // Shuffle for randomness
        .slice(0, 3), // Take top 3
    })),
}));

export default useRecipeStore;