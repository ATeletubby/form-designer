module.exports = {
  "*.{vue,ts,tsx,js}": ["eslint --cache --fix"],
  "*.json": ["prettier --parser=json --write"],
  "*.{css,scss}": ["prettier --parser=css --write"],
};
