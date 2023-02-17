const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/incidents/", {
      target: "https://demo.flexmms.com/v3/api",
      changeOrigin: true,
    })
  );
};