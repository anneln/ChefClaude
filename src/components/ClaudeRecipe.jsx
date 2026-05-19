import React from "react";
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return props.isLoading ? (
    <section className="recipe-section" aria-live="polite">
      <div className="typing-dots">
        <p>Please wait a few moments </p>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  ) : (
    <section className="recipe-section" aria-live="polite">
      <h2>Chef AI recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
