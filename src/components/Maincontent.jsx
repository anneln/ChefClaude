import React from "react";
export default function Maincontent() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          defaultValue="e.g Tomato"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>
      {ingredients.length ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list">{ingredientsListItems}</ul>
          {ingredients.length > 3 && (
            <div className="ask-recipe">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button className="get-recipe-btn">Get a recipe</button>
            </div>
          )}
        </section>
      ) : null}
    </main>
  );
}
