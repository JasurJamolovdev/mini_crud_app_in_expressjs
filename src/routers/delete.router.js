const express = require("express");
const { deleteUser } = require("../controllers/delete.controller");
const router = express.Router();


router.post("/delete", deleteUser);


module.exports = router;