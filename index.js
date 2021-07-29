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

app.get("/login", (req, res, next) =>
  res.render("login", { title: "Login Page", msg: req.query.msg })
);

app.listen(port, () => {
    console.log(`running in ${port}`)
})