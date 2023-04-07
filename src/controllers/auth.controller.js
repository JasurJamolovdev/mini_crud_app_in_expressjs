const { read_file, write_file } = require("../utils/fs_api");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const users = read_file("users");

// REGISTER
const getRegister = (_, res) => {
    res.render("register.ejs", {title: "Register"});
}
const register = async (req, res) => {
    const { firstname, username, email, password, role } = req.body;
    const hashpsw = await bcrypt.hash(password, 12);

    const foundUser = users.find(u => u.username === username || u.email === email);
    if (!foundUser) {
        const newUser = {
            id: uuid.v4(),
            firstname: firstname,
            username: username,
            email: email,
            password: hashpsw,
            role
        }
        users.push(newUser);
        write_file("users", users);
        res.status(200).redirect("/login");
    } else {
        console.log("This user already exists");
        res.send("this username already exists")
    }
}

// LOGIN 
const getLogin = (_, res) => {
    res.render("login.ejs", {title: "Login"});
}
const login = (req, res) => {
    const { username, password } = req.body;
    const userFound = users.find(u => u.username === username || u.email === username);
    if (!userFound) {
        console.log("username incorrect!");
        res.send("username incorrect");
    };
    const isTruePsw = bcrypt.compare(password, userFound.password);
    if (!isTruePsw)  {
        console.log("password incorrect!")
        res.send("password Incorrect")
    };
    const token = jwt.sign({ id: userFound.id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    console.log(token);
    if (userFound.role === "admin") {
        res.cookie("token", token, { maxAge: 900000, httpOnly: true });
        res.status(200).redirect("/admin");
    } else if (userFound.role === "user") {
        res.cookie("token", token, { maxAge: 900000, httpOnly: true });
        res.status(200).redirect("/user");
    }
}

module.exports = {
    register,
    login,
    getLogin,
    getRegister
}