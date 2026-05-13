import React from "react";
import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section>
      <h2>Chef Mistral recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
