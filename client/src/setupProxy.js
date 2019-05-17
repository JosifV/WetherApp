const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/forecast/", { target: "http://localhost:4500" }));
};
