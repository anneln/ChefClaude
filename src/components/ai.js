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
    if (data.error) {
      return "The service is temporarily overloaded, please try again in a few minutes 🙏";
    }
    return data.recipe;
  } catch (err) {
    console.error(err.message);
  }
}
