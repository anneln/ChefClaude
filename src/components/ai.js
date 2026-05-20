export async function getRecipeFromOpenAi(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await fetch("/.netlify/functions/getRecipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredientsString }),
    });
    const data = await response.json();
    return data.recipe;
  } catch (err) {
    console.error(err.message);
  }
}
