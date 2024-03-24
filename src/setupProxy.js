// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function (app) {
//     app.use(
//         '/KhachHang/get-all-khach-hang', // This is the API prefix that the proxy will look for to forward requests
//         createProxyMiddleware({
//             target: 'http://localhost:5192', // The backend server you're making requests to
//             changeOrigin: true,
//         })
//     );
// };

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         // 'get-all-khach-hang', // API prefix
//         '/movies.json', // API prefix
//         createProxyMiddleware({
//             // target: 'http://localhost:5192/', // Backend server
//             target: 'https://reactnative.dev', // Backend server
//             changeOrigin: true,
//             onProxyRes: function (proxyRes, req, res) {
//                 proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//             },
//             onError: function (err, req, res) {
//                 res.writeHead(500, {
//                     'Content-Type': 'text/plain',
//                 });
//                 res.end('Something went wrong. Please try again.');
//             },
//         })
//     );
// };