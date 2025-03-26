import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-unused-expressions": "error",
      "no-console": "warn",
      "no-undef":"error"
    },
  },
  {
    ignores: [".node_modules/*", "dist"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended",'eslint-plugin-prettier/recommended'],
  },
  tseslint.configs.recommended,
]);
