const express = require("express");
const router = express.Router();
const {getAdmin} = require("../controllers/admin.controller")

router.get("/admin", getAdmin);




module.exports = router;