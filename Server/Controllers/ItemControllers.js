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

exports.getUploadItem = (req, res) => {
    try {
        const description = req.body[0].description
        const phoneType = req.body[0].type
        const phoneColor = req.body[0].color
        const quantity = req.body[0].quantity
        const price = req.body[0].price
        const base64ImageString = req.body[1]
        database.query('INSERT INTO Cases (description, imgUrl, price, color, quantity, type) VALUES (?,?,?,?,?,?)',
            [description, base64ImageString, price, phoneColor, quantity, phoneType],
            (err, response) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false
                    })
                }
                console.log("Item has been uploaded successfully. ID: " + response.insertId)
                return res.send({
                    success: true,
                    product_id: response.insertId
                })
            }
        )
    }
    catch (err) {
        return res.send({
            success: false
        })
    }
}

exports.getDeleteItem = (req, res) => {

    try {

        database.query('DELETE FROM Cases WHERE product_id = ?',
            [req.body[0]],
            (err, response) => {
                if (err || response.affectedRows === 0) {
                    return res.send({ success: false });
                }


                console.log(response);
                return res.send({ success: true, product_id: req.body[0] });

            });

    }

    catch {
        return res.send({ success: false });
    }
};