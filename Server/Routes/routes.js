const routeController = require('../Controllers/AuthController.js');
const itemController = require('../Controllers/ItemControllers.js');
const auth = require('../middleware/auth0.js');

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
        auth: [auth.authorizeAccessToken],
        handler: routeController.getProtectedRoute
    },
    {
        method: 'GET',
        url: '/api/admin',
        json: true,
        auth: [auth.authorizeAccessToken, auth.checkAdminRole],
        handler: routeController.getAdminRoute
    },
    {
        method: 'POST',
        url: '/api/upload',
        json: true,
        handler: itemController.getUploadItem
    },
    {
        method: 'POST',
        url: '/api/delete',
        json: true,
        handler: itemController.getDeleteItem
    },
    {
        method: 'POST',
        url: '/api/createCategory',
        json: true,
        handler: itemController.getCreateCategory
    }
]
module.exports = routes;