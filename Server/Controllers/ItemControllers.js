const { readFile, writeFile } = require('fs/promises');

exports.getItems = async (request, response) => {
    const prevPhoneTypes = await readFile('phoneTypes.json');
    let phoneTypes = JSON.parse(prevPhoneTypes);

    const itemsJson = await readFile("mainItems.json");
    const items = JSON.parse(itemsJson);

    let itemsArray = items['items'];

    response.send({
        items: itemsArray,
        phoneTypes: phoneTypes['phoneTypes']
    })
};





exports.getUploadItem = async (req, res) => {

    try {

        const description = req.body[0].description
        const phoneType = req.body[0].type
        const phoneColor = req.body[0].color
        const quantity = req.body[0].quantity
        const price = req.body[0].price
        const base64ImageString = JSON.stringify(req.body[1]);

        const filteredBase64String = base64ImageString.replace(/"/g, "");
        const getItems = await readFile('mainItems.json');
        const Items = JSON.parse(getItems);

        const ItemsArray = Items['items'];

        const lastProductIdNumber = ItemsArray[ItemsArray.length - 1].product_id;

        Items['items'].push({
            description: description,
            imgUrl: filteredBase64String,
            price: parseInt(price),
            color: phoneColor,
            quantity: parseInt(quantity),
            type: parseInt(phoneType),
            product_id: lastProductIdNumber + 1
        })

        writeFile('mainItems.json', JSON.stringify(Items));

        console.log(lastProductIdNumber);

        return res.send({
            success: true,
            product_id: lastProductIdNumber + 1
        })

    }
    catch (err) {
        console.log(err);

        return res.send({
            success: false
        })
    }
}





exports.getDeleteItem = async (req, res) => {

    try {

        const idToDelete = req.body[0];

        const itemsJson = await readFile('mainItems.json');

        const items = JSON.parse(itemsJson);

        items['items'] = items['items'].filter(item => item.product_id !== parseInt(idToDelete))

        writeFile('mainItems.json', JSON.stringify(items));

        return res.send({
            success: true,
            product_id: idToDelete
        })

    }

    catch (err) {
        console.log(err);
        return res.send({ success: false });
    }
};


exports.getCreateCategory = async (req, res) => {

    try {

        const cId = req.body[0];
        const cName = req.body[1];

        const prevPhoneTypes = await readFile('phoneTypes.json');

        let prevPhoneTypesObject = JSON.parse(prevPhoneTypes);

        prevPhoneTypesObject['phoneTypes'].push({ type: parseInt(cId), name: cName });

        writeFile('phoneTypes.json', JSON.stringify(prevPhoneTypesObject))

        return res.send({ success: true });
    }

    catch (err) {

        console.log(err);

        return res.send({ success: false });

    }
}

// {
//     "items": [
//         {
//             "description": "IPhone 12 Pro Black Case - CASEKOO",
//             "imgUrl": "https://cdn.discordapp.com/attachments/854926757843959831/921937911224619058/unknown.png",
//             "price": 9.99,
//             "color": "Black",
//             "quantity": "1",
//             "type": 2,
//             "product_id": 2
//         },
//         {
//             "description": "iPhone XS Max blue silicone case",
//             "imgUrl": "https://cdn.discordapp.com/attachments/923337255882481735/923458176718872586/ad_1640226517474.jpg",
//             "price": 9.99,
//             "color": "Blue",
//             "quantity": 1,
//             "type": 1,
//             "product_id": 11
//         },
//         {
//             "description": "Iphone XS Max - fuck what they think case",
//             "imgUrl": "https://cdn.discordapp.com/attachments/923337255882481735/923461477027938334/blackcase.png",
//             "price": 7.99,
//             "color": "Black",
//             "quantity": 3,
//             "type": 1,
//             "product_id": 12
//         },
//         {
//             "description": "Teal Samsung galaxy s20 case",
//             "imgUrl": "https://cdn.discordapp.com/attachments/923405388529930300/923649059309367377/ad_1640285229220.jpg",
//             "price": 10.99,
//             "color": "Teal",
//             "quantity": 1,
//             "type": 7,
//             "product_id": 13
//         },
//         {
//             "description": "Zanderlyn case",
//             "imgUrl": "https://cdn.discordapp.com/attachments/923701762748203099/923704174527533066/Zanderlyn.jpeg",
//             "price": 10,
//             "color": "grey",
//             "quantity": 1,
//             "type": 11,
//             "product_id": 16
//         }
//     ]
// }