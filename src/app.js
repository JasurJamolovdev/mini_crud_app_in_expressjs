const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const authRouter = require("./routers/auth.routers");
const adminRouter = require("./routers/admin.router");
const updateUserRouter = require("./routers/update.router") 
const deleteRouter = require("./routers/delete.router");

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


app.use(authRouter);
app.use(adminRouter);
app.use(updateUserRouter);
app.use(deleteRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});