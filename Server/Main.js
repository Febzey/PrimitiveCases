const express = require('express')
const router = express.Router()
const path = require('path');
const cors = require('cors')
const app = express();
const routes = require('./Routes/routes.js');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const urlEncodedParser = bodyParser.urlencoded({extended: true});

//app.use(cors())
app.use(bodyParser.json({limit: '20mb'}));
app.use('/',express.static(path.join(__dirname, '../dist')))
app.use(router);

routes.forEach(({method, url, handler, auth}) => {
    if(auth) app.get(url, auth, handler)     
    switch(method) {
        case "GET":
            app.get(url, handler)
            break;
        case "POST":
            app.post(url,jsonParser, handler)
            break;
    }
})
 
const start = async () => {
    try {
        app.listen(3005, () => console.log("Listening on http://localhost:3005"))
    } catch (err) {
        process.exit(1)
    }
}
start()