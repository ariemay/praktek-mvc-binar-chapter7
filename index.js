const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const router = require("./routers/routes");
app.use(router);

const api = require("./routers/api");
app.use(api);

app.listen(port, () => {
    console.log(`running in ${port}`)
})