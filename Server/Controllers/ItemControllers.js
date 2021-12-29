const path = require('path');
const database = require('../Database/createpool.js');

exports.getItems = (request, response) => {
    database.query('SELECT * FROM Cases', (err, res) => {
        let itemsArray = [];
        if (err) return console.error(err);
        res.map(items => itemsArray.push(items));
        response.send(itemsArray)
   })
};