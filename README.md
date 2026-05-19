# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Chef Claude project

It’s a solo project inspired by a Scrimba course.
The app collects ingredients from the user through a form, then sends them to an AI with a prompt asking for a recipe using those ingredients.

## Extra Features

1. Each ingredient must be unique in a recipe.
2. Ingredient comparison is case-insensitive.
3. The AI must detect the ingredients'language and generate the recipe in the same language.
4. Show user that response can be long

## Technical Requirements

- [x] Event Listeners
- [x] State
- [x] Forms in react
- [x] State management strategies
- [x] Use React-MarkDown to get Html
- [x] Added an animation before the recipe is displayed to keep users waiting.
- [x] use vite.js
