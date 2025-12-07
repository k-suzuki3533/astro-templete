// eslint.config.mjs
import js from '@eslint/js'
import globals from 'globals'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // 共通のグローバル設定
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // JS 推奨
  js.configs.recommended,

  // TypeScript 推奨
  ...tseslint.configs.recommended,

  // Astro 推奨 (Flat Config 用)
  ...astroPlugin.configs['flat/recommended'], // :contentReference[oaicite:3]{index=3}

  // Astro ファイル設定
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // Prettier と競合するルール無効化
  eslintConfigPrettier,

  // 任意の追加ルール
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 無視パス
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]
