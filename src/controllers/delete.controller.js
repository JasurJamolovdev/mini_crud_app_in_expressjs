const {read_file, write_file} = require("../utils/fs_api");
const users = read_file("users");

const deleteUser = (req, res) => {
    const {id} = req.body;
        const deleteProductIndex = users.findIndex(u => u.id === id);
        console.log(deleteProductIndex);
        users.splice(deleteProductIndex,1);
        write_file("users", users);
        res.redirect("/admin"); 
    };


module.exports = {
    deleteUser
}
