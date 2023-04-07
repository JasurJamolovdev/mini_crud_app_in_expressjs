const { read_file, write_file } = require("../utils/fs_api")

const users = read_file("users");

const getAdmin = (_, res) => {
    res.render("admin.ejs", {title: "Admin", users})
}


module.exports = {
    getAdmin
}