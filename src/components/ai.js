const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Always respond in the same language that the user uses to write their ingredients.
`;

export async function getRecipeFromOpenAi(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
          ],
        }),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      console.error("API error:", data);
      return "Sorry, The chef is having a siesta. Please come back later.";
    }
    return data.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
    return "The chef is having a siesta. Please come back later.";
  }
}
