const { users } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    show: (req, res) => {
        res.render("register", { title: "Register Page", userExist: req.query.msg })
    },
    saveUserData: async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userData = {
            username: req.body.username,
            password: hashedPassword,
            name: req.body.name
        };

        users.findOne({
            where: {
            username: req.body.username,
            },
        })
            .then((user) =>
            !user
                ? users.create(userData)
                    .then((user_game) => {
                    res.status(201).redirect("/?user=" + user_game.username);
                    })
                    .catch((err) => res.status(422).send("Cannot create users:", err))
                : res.redirect("/register?msg=userexist")
            )
            .catch((err) => res.send("ERROR: " + err));
    }
}