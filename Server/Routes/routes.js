const itemController = require("../Controllers/ItemControllers.js");
const routes = [
    {
        method: 'GET',
        url: '/api/items',
        json: true,
        handler: itemController.getItems
    }
]
module.exports = routes;