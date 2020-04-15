const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy({ target: "https://infinite-island-44222.herokuapp.com" })
  );
};