module.exports = {
  "!**/public/**": "",
  "*.{vue,ts,tsx}": ["eslint --cache --fix"],
  "*.json": ["prettier --parser=json --write"],
  "*.{css,scss}": ["prettier --parser=css --write"],
};
