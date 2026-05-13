import React from "react";
export default function IngredientsList(props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">{props.ingredientsListItems}</ul>
      {props.ingredients.length > 3 && (
        <div className="ask-recipe">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="get-recipe-btn" onClick={props.getRecipe}>
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
