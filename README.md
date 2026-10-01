# Chef Claude project

It’s a solo project inspired by a Scrimba course.
The app collects ingredients from the user through a form, then sends them to an AI with a prompt asking for a recipe using those ingredients.
Try [ChefanneLnAI](https://chefannelnai.netlify.app/) 👨‍🍳

## Extra Features

1. Each ingredient must be unique in a recipe.
2. Ingredient comparison is case-insensitive.
3. The AI must detect the ingredients'language and generate the recipe in the same language.
4. Show user that response can be long

## Security - API Key Protection

The OpenRouter API key is secured using a Netlify function.
The key is stored server-side and never exposed to the frontend.

**Files:**

- `netlify/functions/get-recipe.js` - Secure proxy
- `netlify.toml` - Netlify configuration

## Technical Requirements

- [x] Event Listeners
- [x] State
- [x] Forms in react
- [x] State management strategies
- [x] Use React-MarkDown to get Html
- [x] Added an animation before the recipe is displayed to keep users waiting.
- [x] use vite.js
- [x] Secure API key management using **Netlify Functions Proxy**
