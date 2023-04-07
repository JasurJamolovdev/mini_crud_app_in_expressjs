const { read_file, write_file } = require("../utils/fs_api");
const bcrypt = require("bcryptjs");

const users = read_file("users");

const getUpdate = (req, res) => {
    console.log(567);

    res.render("update.ejs", { title: "Update" });
}

const updateUser = async (req, res) => {
    const { username, password, firstname, email } = req.body;
    const foundUser = users.find(u => u.firstname === firstname);
    if (foundUser) {
        const hashPsw = await bcrypt.hash(password, 12);
        foundUser.username = username ? username : foundUser.username
        foundUser.email = email ? email : foundUser.email;
        foundUser.password = password ? hashPsw : foundUser.password;
    }
    console.log(users);
    write_file("users", users);
    res.status(200).redirect("/admin");

    write_file("users", users);
    res.status(200);

}

module.exports = {
    getUpdate,
    updateUser
}