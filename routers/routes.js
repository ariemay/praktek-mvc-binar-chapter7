const router = require("express").Router();
const register = require("../controllers/registerController");

// KHUSUS UNTUK NAVIGASI - RENDER VIEW
router.get("/register", register.show);

module.exports = router;