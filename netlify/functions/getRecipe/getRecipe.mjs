const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Always respond in the same language that the user uses to write their ingredients.
`;

export default async (request) => {
  try {
    const { ingredientsString } = await request.json();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        signal: controller.signal,
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://chefannelnai.netlify.app",
          "X-Title": "ChefClaude",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b:free",
          stream: false,
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

    clearTimeout(timeoutId);
    const text = await response.text();
    console.log("Réponse brute OpenRouter:", text);
    const data = JSON.parse(text);

    if (data.error) {
      console.error("Erreur OpenRouter:", data.error.message);
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ recipe: data.choices[0].message.content }),
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Erreur:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
