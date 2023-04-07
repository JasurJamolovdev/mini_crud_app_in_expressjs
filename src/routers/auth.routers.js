const express = require("express");
const router = express.Router();
const {register, login, getLogin, getRegister} = require("../controllers/auth.controller");

router.route("/register")
        .get(getRegister)
        .post(register);

router.route("/login")
        .get(getLogin)
        .post(login)




module.exports = router;