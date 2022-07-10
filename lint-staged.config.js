module.exports = {
  "*.{js,jsx,tsx,ts,less,md,json}": ["prettier --write"],
  "src/**/*.less": ["stylelint --fix"],
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --ext"],
};
