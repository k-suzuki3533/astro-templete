// stylelint.config.mjs

/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-standard',
    // Tailwind の @tailwind, @apply, @theme などを理解させる
    'stylelint-config-tailwindcss',
  ],
  rules: {
    // 必要に応じて追記
    // 例: "color-named": "never"
  },
  ignoreFiles: ['**/dist/**', '**/node_modules/**'],
}

export default config
