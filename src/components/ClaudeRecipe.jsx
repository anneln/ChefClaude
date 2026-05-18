import React from "react";
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section className="recipe-section" aria-live="polite">
      <h2>Chef AI recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
