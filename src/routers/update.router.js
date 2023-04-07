const express = require("express");
const router = express.Router();
const {getUpdate, updateUser} = require("../controllers/update.controller");

router.route("/update")
    .get(getUpdate)
    .post(updateUser);


    module.exports = router;