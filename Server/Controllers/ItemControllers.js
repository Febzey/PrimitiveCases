const path = require('path');
const database = require('../Database/createpool.js');

exports.getItems = (request, reply) => {
    database.query('SELECT * FROM Cases', (err, res) => {
        let itemsArray = [];
        if (err) return console.error(err);
        res.map(items => itemsArray.push(items));
        reply.code(200).header('Content-Type', 'application/json').send(itemsArray)
   })
};