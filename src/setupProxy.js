const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const PORT = process.env.BACKEND_PORT || 3000;
const HOST = 'http://localhost'

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${HOST}:${PORT}`,
      changeOrigin: true,
    })
  );
};