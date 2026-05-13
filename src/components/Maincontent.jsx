import React from "react";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Maincontent() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    setRecipe(await getRecipeFromMistral(ingredients));
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").toLowerCase();
    const alreadyExistIngredient = ingredients.includes(newIngredient);
    alreadyExistIngredient
      ? alert("You already add this ingredient !")
      : setIngredients((prevIngredients) => [
          ...prevIngredients,
          newIngredient,
        ]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g Tomato"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>+ Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          ingredientsListItems={ingredientsListItems}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
