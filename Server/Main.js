const express = require('express')
const router = express.Router()
const path = require('path');
const cors = require('cors')
const app = express();
const routes = require('./Routes/routes.js');

app.use(cors())

app.use('/', express.static(path.join(__dirname, '../dist')))
app.use(router);

routes.forEach(({method, url, handler, auth}) => {
    if(auth) app.get(url, auth, handler) 
    switch(method) {
        case "GET":
            app.get(url, handler)
            break;
    }
})
 
const start = async () => {
    try {
        app.listen(3000, () => console.log("Listening on http://localhost:3000"))
    } catch (err) {
        process.exit(1)
    }
}
start()