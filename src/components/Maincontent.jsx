import React from "react";
import IngredientsList from "./IngredientsList";
import { getRecipeFromOpenAi } from "./ai";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Maincontent() {
  const [ingredients, setIngredients] = React.useState([]);
  const sectionRef = React.useRef(null);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function getRecipe() {
    setIsLoading(true);
    setRecipe(await getRecipeFromOpenAi(ingredients));
    setIsLoading(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
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
      {(recipe || isLoading) && (
        <ClaudeRecipe
          recipe={recipe}
          isLoading={isLoading}
          sectionRef={sectionRef}
        />
      )}
    </main>
  );
}
