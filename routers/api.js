const router = require("express").Router();
const register = require("../controllers/registerController");

//CRUD - ENDPOINT - METHOD HTTP REQUEST
router.post("/register", register.saveUserData);
router.post("/api/v1/register", register.saveUserData);

module.exports = router;