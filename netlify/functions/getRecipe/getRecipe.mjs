export default async (request) => {
  try {
    const { ingredientsString } = await request.json();
    console.log("ingredientsString reçu:", ingredientsString);

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b:free",
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

    console.log("Status OpenRouter:", response.status);
    const data = await response.json();
    console.log("Réponse OpenRouter:", JSON.stringify(data));

    return new Response(
      JSON.stringify({ recipe: data.choices[0].message.content }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Erreur:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
