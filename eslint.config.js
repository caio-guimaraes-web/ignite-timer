import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsparser from "@typescript-eslint/parser"
import rocketseatConfig from "@rocketseat/eslint-config/react.js" // Corrigido o caminho
import prettier from "eslint-plugin-prettier" // Adicionando o plugin do Prettier
import prettierConfig from "eslint-config-prettier" // Importando a configuração do Prettier
import jsxA11y from "eslint-plugin-jsx-a11y" // Adicionando o plugin de acessibilidade

export default [
  {
    files: ["src/**/*.{ts,tsx}"], // Define os arquivos TS/TSX explicitamente
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react: reactHooks,
      refresh: reactRefresh,
      "@typescript-eslint": tseslint,
      prettier, // Adicionando o Prettier aos plugins
      "jsx-a11y": jsxA11y, // Adicionando o plugin JSX A11y
    },
    rules: {
      ...rocketseatConfig.rules,
      "prettier/prettier": "error", // Usando as regras do Prettier
      "jsx-a11y/alt-text": "warn", // Exemplo de regra de acessibilidade
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["node_modules"], // Ignora a pasta node_modules
  },
  prettierConfig, // Adiciona a configuração do Prettier para evitar conflitos com ESLint
]
