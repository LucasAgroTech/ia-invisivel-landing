import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import qwik from "eslint-plugin-qwik";

export default [
  js.configs.recommended,
  {
    ignores: [
      "**/dist/**",
      "**/build/**", 
      "**/node_modules/**",
      "**/.cache/**",
      "**/target/**",
      "**/output/**",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "eslint.config.mjs",
      "vite.config.ts",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
        tsconfigRootDir: ".",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      qwik: qwik,
    },
    rules: {
      ...typescript.configs["recommended"].rules,
      ...qwik.configs.recommended.rules,
      "no-undef": "off", // TypeScript handles this
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-spread": "off",
      "no-case-declarations": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
];
