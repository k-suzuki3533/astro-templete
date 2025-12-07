// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
