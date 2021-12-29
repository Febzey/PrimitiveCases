const routeController = require('../Controllers/AuthController.js');
const itemController = require('../Controllers/ItemControllers.js');

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authorizeAccessToken = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.VITE_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: "https://quickstarts/api",
    issuer: `https://${process.env.VITE_APP_AUTH0_DOMAIN}/`,
    algorithms: ["RS256"]
});

const routes = [
    {
        method: 'GET',
        url: '/api/items',
        json: true,
        handler: itemController.getItems
    },
    {
        method: 'GET',
        url: '/api/public',
        json: true,
        handler: routeController.getPublicRoute
    },
    {
        method: 'GET',
        url: '/api/protected',
        json: true,
        auth: authorizeAccessToken,
        handler: routeController.getProtectedRoute
    }
]
module.exports = routes;