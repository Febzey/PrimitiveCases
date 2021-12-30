const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const jwtAuthz = require('express-jwt-authz');

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


const checkAdminRole = jwtAuthz(["read:messages"], {
    customScopeKey: "permissions",
    checkallScope: true,
});


module.exports = {
    authorizeAccessToken,
    checkAdminRole
};